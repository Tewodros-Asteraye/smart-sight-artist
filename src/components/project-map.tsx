import * as React from 'react';
import { Link } from '@tanstack/react-router';
import { Compass, ExternalLink, Info, MapPin, Maximize2, RotateCcw } from 'lucide-react';
import type { ActiveProject } from '@/lib/projects-content';
import { Button } from '@/components/ui/button';

export interface ProjectMapProps {
  projects: ActiveProject[];
  selectedSlug?: string;
  onSelectProject?: (slug: string) => void;
  singleProjectMode?: boolean;
  className?: string;
  height?: string | number;
}

export function ProjectMap({
  projects,
  selectedSlug,
  onSelectProject,
  singleProjectMode = false,
  className = '',
  height = 520,
}: ProjectMapProps) {
  const mapContainerRef = React.useRef<HTMLDivElement>(null);
  const mapInstanceRef = React.useRef<any>(null);
  const markersRef = React.useRef<Record<string, any>>({});
  const [isClient, setIsClient] = React.useState(false);
  const [mapReady, setMapReady] = React.useState(false);
  const [activeSlug, setActiveSlug] = React.useState<string | undefined>(
    selectedSlug || (singleProjectMode && projects[0] ? projects[0].slug : undefined),
  );

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  React.useEffect(() => {
    if (selectedSlug && selectedSlug !== activeSlug) {
      setActiveSlug(selectedSlug);
    }
  }, [selectedSlug]);

  // Initialize Leaflet client-side only
  React.useEffect(() => {
    if (!isClient || !mapContainerRef.current) return;

    let isMounted = true;

    async function initLeaflet() {
      try {
        // Dynamically import Leaflet and its CSS to guarantee zero SSR issues
        const L = (await import('leaflet')).default;
        await import('leaflet/dist/leaflet.css');

        if (!isMounted || !mapContainerRef.current) return;

        // If map was already initialized on this node, remove it
        if (mapInstanceRef.current) {
          mapInstanceRef.current.remove();
          mapInstanceRef.current = null;
        }

        // Center on Ethiopia: ~8.5° N, 39.0° E
        const defaultCenter: [number, number] = singleProjectMode && projects[0]
          ? [projects[0].coordinates.lat, projects[0].coordinates.lng]
          : [8.5, 38.8];
        const defaultZoom = singleProjectMode ? 8 : 6.2;

        const map = L.map(mapContainerRef.current, {
          center: defaultCenter,
          zoom: defaultZoom,
          minZoom: 5,
          maxZoom: 16,
          scrollWheelZoom: false,
          zoomControl: true,
        });

        // Free OpenStreetMap standard tile layer
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 18,
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors',
        }).addTo(map);

        const markersMap: Record<string, any> = {};

        // Custom HTML DivIcon for brand consistency
        projects.forEach((project) => {
          const isSelected = project.slug === activeSlug;
          const markerHtml = `
            <div class="custom-marker-wrapper ${isSelected ? 'is-selected' : ''}" data-slug="${project.slug}">
              <div class="marker-pulse"></div>
              <div class="marker-pin">
                <span class="marker-index">${project.index}</span>
              </div>
              <div class="marker-tooltip">${project.title}</div>
            </div>
          `;

          const customIcon = L.divIcon({
            className: 'custom-leaflet-marker',
            html: markerHtml,
            iconSize: [42, 42],
            iconAnchor: [21, 38],
            popupAnchor: [0, -38],
          });

          const marker = L.marker([project.coordinates.lat, project.coordinates.lng], {
            icon: customIcon,
            title: project.title,
          }).addTo(map);

          // Rich popup content with brand styling and verified precision label
          const popupContent = `
            <div class="map-popup-card">
              <div class="map-popup-eyebrow">Project ${project.index} · ${project.status}</div>
              <h4 class="map-popup-title">${project.title}</h4>
              <div class="map-popup-location">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>${project.location}</span>
              </div>
              <div class="map-popup-precision">
                <span class="precision-badge">📍 ${project.coordinates.precision}</span>
              </div>
              <p class="map-popup-desc">${project.summary}</p>
              <div class="map-popup-actions">
                <a href="/projects/${project.slug}" class="map-popup-btn">
                  View Project Details <span>&rarr;</span>
                </a>
              </div>
            </div>
          `;

          marker.bindPopup(popupContent, {
            maxWidth: 320,
            className: 'custom-leaflet-popup',
          });

          marker.on('click', () => {
            setActiveSlug(project.slug);
            onSelectProject?.(project.slug);
          });

          markersMap[project.slug] = marker;
        });

        markersRef.current = markersMap;
        mapInstanceRef.current = map;
        setMapReady(true);

        // If an initial project is active, open its popup
        if (activeSlug && markersMap[activeSlug]) {
          setTimeout(() => {
            if (isMounted && mapInstanceRef.current) {
              const target = projects.find((p) => p.slug === activeSlug);
              if (target) {
                map.panTo([target.coordinates.lat, target.coordinates.lng]);
                markersMap[activeSlug].openPopup();
              }
            }
          }, 400);
        }
      } catch (err) {
        console.error('Error initializing map:', err);
      }
    }

    initLeaflet();

    return () => {
      isMounted = false;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [isClient, projects, singleProjectMode]);

  // Handle activeSlug changes programmatically (e.g. when card is clicked)
  React.useEffect(() => {
    if (!mapReady || !mapInstanceRef.current || !activeSlug) return;
    const marker = markersRef.current[activeSlug];
    const project = projects.find((p) => p.slug === activeSlug);
    if (marker && project) {
      mapInstanceRef.current.flyTo(
        [project.coordinates.lat, project.coordinates.lng],
        singleProjectMode ? 9 : 8.5,
        { duration: 1.2 },
      );
      marker.openPopup();
    }
  }, [activeSlug, mapReady, projects, singleProjectMode]);

  const handleResetView = () => {
    if (!mapInstanceRef.current) return;
    if (singleProjectMode && projects[0]) {
      mapInstanceRef.current.flyTo(
        [projects[0].coordinates.lat, projects[0].coordinates.lng],
        8,
        { duration: 1 },
      );
    } else {
      mapInstanceRef.current.flyTo([8.5, 38.8], 6.2, { duration: 1 });
    }
  };

  const handleFlyToProject = (slug: string) => {
    setActiveSlug(slug);
    onSelectProject?.(slug);
  };

  return (
    <div className={`project-map-wrapper ${className}`}>
      {/* Top map controls & quick selectors */}
      <div className="project-map-header">
        <div className="project-map-title">
          <Compass className="w-4 h-4 text-primary" />
          <span>
            {singleProjectMode
              ? 'Project Geographic Location'
              : 'Interactive Project Portfolio Map — Ethiopia'}
          </span>
        </div>
        <div className="project-map-actions">
          <button
            type="button"
            onClick={handleResetView}
            className="project-map-btn"
            title="Reset to Ethiopia overview"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset View</span>
          </button>
        </div>
      </div>

      {/* Multi-project selector tabs (only in portfolio overview mode) */}
      {!singleProjectMode && projects.length > 1 && (
        <div className="project-map-tabs" role="tablist" aria-label="Select a project on the map">
          <button
            type="button"
            className={`project-map-tab ${!activeSlug ? 'is-active' : ''}`}
            onClick={() => {
              setActiveSlug(undefined);
              handleResetView();
            }}
          >
            All Ethiopia ({projects.length})
          </button>
          {projects.map((p) => (
            <button
              key={p.slug}
              type="button"
              className={`project-map-tab ${activeSlug === p.slug ? 'is-active' : ''}`}
              onClick={() => handleFlyToProject(p.slug)}
            >
              <span className="tab-index">{p.index}</span>
              <span className="tab-title">{p.title.split(',')[0]}</span>
            </button>
          ))}
        </div>
      )}

      {/* The Map Container */}
      <div
        ref={mapContainerRef}
        className="project-map-canvas"
        style={{ height: typeof height === 'number' ? `${height}px` : height }}
      >
        {!isClient && (
          <div className="project-map-fallback">
            <div className="fallback-inner">
              <MapPin className="w-8 h-8 text-primary animate-bounce" />
              <p>Loading interactive project map...</p>
            </div>
          </div>
        )}
      </div>

      {/* Geographic precision disclosure bar */}
      <div className="project-map-footer">
        <div className="precision-info">
          <Info className="w-3.5 h-3.5 text-primary flex-shrink-0" />
          <span>
            <strong>Location Note:</strong> Markers indicate verified district, municipal, or regional landscape centers.
            Where site-level coordinates are in active development or confidential, approximate regional markers are displayed.
          </span>
        </div>
      </div>
    </div>
  );
}

