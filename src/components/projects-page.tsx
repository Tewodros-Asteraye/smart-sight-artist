import * as React from 'react';
import { Link } from '@tanstack/react-router';
import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Compass,
  Layers,
  MapPin,
  Phone,
  Sparkles,
} from 'lucide-react';
import { activeProjects, type ActiveProject } from '@/lib/projects-content';
import { Button } from '@/components/ui/button';
import { ProjectMap } from '@/components/project-map';

export function ProjectsPage() {
  const [selectedSlug, setSelectedSlug] = React.useState<string | undefined>(undefined);
  const mapSectionRef = React.useRef<HTMLElement>(null);

  const handleLocateOnMap = (slug: string) => {
    setSelectedSlug(slug);
    if (mapSectionRef.current) {
      mapSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main className="projects-page-root">
      {/* Page Banner */}
      <section className="page-banner projects-banner">
        <div className="shell">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight />
            <span>Projects</span>
          </div>
          <div className="eyebrow">Active Project Portfolio</div>
          <h1>What Africa Climate Actions PLC is working on now.</h1>
          <p>
            Five active projects across Ethiopia connecting household and urban bioenergy,
            regenerative agroforestry, climate-smart dairy finance, and high-integrity digital MRV.
            Each initiative is engineered for measurable greenhouse gas mitigation, local economic
            vitality, and climate resilience.
          </p>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="section project-map-section" ref={mapSectionRef}>
        <div className="shell">
          <div className="section-intro">
            <div>
              <div className="eyebrow">Geographic Footprint</div>
              <h2>Active project locations across Ethiopia.</h2>
            </div>
            <p className="section-description">
              Explore where our circular bioeconomy, nature-based carbon, and climate data initiatives
              are deployed or under active pilot development.
            </p>
          </div>

          <ProjectMap
            projects={activeProjects}
            selectedSlug={selectedSlug}
            onSelectProject={(slug) => setSelectedSlug(slug)}
            height={520}
          />
        </div>
      </section>

      {/* Portfolio Pillars Summary Bar */}
      <section className="portfolio-summary-bar">
        <div className="shell">
          <div className="portfolio-stats-grid">
            <div className="portfolio-stat-item">
              <span className="stat-number">05</span>
              <span className="stat-label">Active Initiatives</span>
              <p>Covering rural districts, urban bioeconomies, and national programs.</p>
            </div>
            <div className="portfolio-stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Circular & Integrated</span>
              <p>Linking waste, clean energy, soil fertility, and food security.</p>
            </div>
            <div className="portfolio-stat-item">
              <span className="stat-number">AI + MRV</span>
              <span className="stat-label">High-Integrity Verification</span>
              <p>Empirical field records, remote sensing, and auditable GHG accounting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Cards Section */}
      <section className="section projects-list-section" id="active-projects-grid">
        <div className="shell">
          <div className="section-intro">
            <div>
              <div className="eyebrow">Project Portfolio</div>
              <h2>Explore our active initiatives.</h2>
            </div>
            <p className="section-description">
              Select any project to inspect technical specifications, system workflow diagrams,
              verified benefits, and regional photo galleries.
            </p>
          </div>

          <div className="active-projects">
            {activeProjects.map((project) => (
              <article className="active-project-card" key={project.slug} id={`card-${project.slug}`}>
                <Link
                  to="/projects/$slug"
                  params={{ slug: project.slug }}
                  className="active-project-media"
                  aria-label={`View details for ${project.title}`}
                >
                  <img
                    src={project.heroImage.src}
                    alt={project.heroImage.alt}
                    loading="lazy"
                    width={640}
                    height={420}
                  />
                  <span className="active-project-status">{project.status}</span>
                </Link>

                <div className="active-project-body">
                  <div className="active-project-top">
                    <span className="active-project-num">{project.index}</span>
                    <button
                      type="button"
                      onClick={() => handleLocateOnMap(project.slug)}
                      className="locate-marker-btn"
                      title="Show location on map"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Locate on Map</span>
                    </button>
                  </div>

                  <h2>
                    <Link to="/projects/$slug" params={{ slug: project.slug }}>
                      {project.title}
                    </Link>
                  </h2>

                  <div className="active-project-location">
                    <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{project.location}</span>
                  </div>

                  <p>{project.summary}</p>

                  <div className="active-project-tags">
                    {project.focusAreas.map((area) => (
                      <span key={area} className="active-project-tag">
                        {area}
                      </span>
                    ))}
                  </div>

                  <div className="active-project-footer">
                    <Button asChild variant="brand" size="sm">
                      <Link to="/projects/$slug" params={{ slug: project.slug }}>
                        Explore Project <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                    <Link
                      to="/projects/$slug"
                      params={{ slug: project.slug }}
                      className="text-link active-project-details-link"
                    >
                      View Full Specifications <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Band */}
      <section className="about-cta projects-cta">
        <div className="shell about-cta-inner">
          <div className="eyebrow">Work With Us</div>
          <h2>Interested in partnering on one of these projects? Let's talk.</h2>
          <p className="cta-subtext">
            Whether you are an institutional development partner, regional government agency, clean energy
            investor, or community cooperative, we invite open collaboration.
          </p>
          <div className="hero-actions">
            <Button asChild variant="brand" size="lg">
              <Link to="/contact">
                Partner With Us <ArrowUpRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="lg">
              <a href="tel:+251923275050">
                <Phone className="w-4 h-4 mr-2" /> Call Our Team
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
