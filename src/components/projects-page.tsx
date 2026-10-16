import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, ChevronRight, MapPin, Phone } from "lucide-react";
import { activeProjects, type ActiveProject } from "@/lib/projects-content";
import { media, mediaAlt } from "@/lib/media";
import { Button } from "@/components/ui/button";
import eastAfricaHarvest from "@/assets/projects/east-africa-harvest.webp";
import soilCrops from "@/assets/projects/soil-crops.webp";
import ethiopiaCattle from "@/assets/projects/ethiopia-cattle.webp";

export const projectImages: Record<ActiveProject["image"], { src: string; alt: string }> = {
  farm: { src: media.farm, alt: mediaAlt.farm },
  solar: { src: media.solar, alt: mediaAlt.solar },
  data: { src: media.data, alt: mediaAlt.data },
  landscape: { src: media.landscape, alt: mediaAlt.landscape },
  harvest: { src: eastAfricaHarvest, alt: "Harvested crops in East Africa" },
  soil: { src: soilCrops, alt: "Soil and crop production" },
  cattle: { src: ethiopiaCattle, alt: "Cattle in Ethiopia" },
};

export function ProjectsPage() {
  return (
    <main>
      <section className="page-banner">
        <div className="shell">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight />
            <span>Projects</span>
          </div>
          <div className="eyebrow">Active projects</div>
          <h1>What we are working on now.</h1>
          <p>
            Five active projects connecting clean energy, circular agriculture, carbon markets,
            climate finance, and digital MRV — each designed for measurable climate, economic, and
            social value.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="active-projects">
            {activeProjects.map((project) => {
              const image = projectImages[project.image];
              return (
                <article className="active-project-card" key={project.slug}>
                  <Link
                    to="/projects/$slug"
                    params={{ slug: project.slug }}
                    className="active-project-media"
                    aria-label={`View ${project.title}`}
                  >
                    <img src={image.src} alt={image.alt} loading="lazy" />
                    <span className="active-project-status">{project.status}</span>
                  </Link>
                  <div className="active-project-body">
                    <span className="active-project-num">{project.index}</span>
                    <h2>{project.title}</h2>
                    <div className="active-project-location">
                      <MapPin /> {project.location}
                    </div>
                    <p>{project.summary}</p>
                    <div className="active-project-tags">
                      {project.focusAreas.map((area) => (
                        <span key={area} className="active-project-tag">
                          {area}
                        </span>
                      ))}
                    </div>
                    <Link
                      to="/projects/$slug"
                      params={{ slug: project.slug }}
                      className="text-link"
                    >
                      View project details <ArrowRight />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="shell about-cta-inner">
          <div className="eyebrow">Work with us</div>
          <h2>Interested in one of these projects? Let's talk.</h2>
          <div className="hero-actions">
            <Button asChild variant="brand" size="lg">
              <Link to="/contact">
                Partner With Us <ArrowUpRight />
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="lg">
              <a href="tel:+251923275050">
                <Phone /> Call Our Team
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
