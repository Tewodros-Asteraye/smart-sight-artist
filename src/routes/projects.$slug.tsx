import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Check, ChevronRight, MapPin } from "lucide-react";
import { getProject } from "@/lib/projects-content";
import { projectImages } from "@/components/projects-page";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => {
    const title = loaderData
      ? `${loaderData.title} | Africa Climate Actions PLC`
      : "Project | Africa Climate Actions PLC";
    const description = loaderData?.summary ?? "An active project by Africa Climate Actions PLC.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProjectDetailPage,
});

function ProjectDetailPage() {
  const project = Route.useLoaderData();
  const image = projectImages[project.image];

  return (
    <main>
      <section className="page-banner project-detail-banner">
        <div className="shell">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight />
            <Link to="/projects">Projects</Link>
            <ChevronRight />
            <span>{project.title}</span>
          </div>
          <div className="eyebrow">
            Project {project.index} · {project.status}
          </div>
          <h1>{project.title}</h1>
          <div className="active-project-location project-detail-location">
            <MapPin /> {project.location}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell project-detail-grid">
          <div className="project-detail-main">
            <section className="content-section">
              <h2>Project overview</h2>
              <p>{project.overview}</p>
            </section>
            <section className="content-section">
              <h2>Climate challenge</h2>
              <p>{project.challenge}</p>
            </section>
            <section className="content-section">
              <h2>Our solution</h2>
              <p>{project.solution}</p>
            </section>
            <section className="content-section">
              <h2>How the system works</h2>
              <ol className="project-system-flow">
                {project.system.map((step, i) => (
                  <li key={step}>
                    <span className="project-system-num">{String(i + 1).padStart(2, "0")}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </section>
            <section className="content-section">
              <h2>Technology</h2>
              <p>{project.technology}</p>
            </section>
            <section className="content-section">
              <h2>Climate benefits</h2>
              <ul className="project-benefits">
                {project.climateBenefits.map((b) => (
                  <li key={b}>
                    <Check /> {b}
                  </li>
                ))}
              </ul>
            </section>
            <section className="content-section">
              <h2>Economic and social benefits</h2>
              <ul className="project-benefits">
                {project.economicSocialBenefits.map((b) => (
                  <li key={b}>
                    <Check /> {b}
                  </li>
                ))}
              </ul>
            </section>
            <section className="content-section">
              <h2>Digital MRV</h2>
              <p>{project.digitalMrv}</p>
            </section>
            <section className="content-section">
              <h2>Partners</h2>
              <p>{project.partners}</p>
            </section>
          </div>

          <aside className="project-detail-side">
            <figure className="page-photo">
              <img src={image.src} alt={image.alt} loading="lazy" />
              <figcaption className="image-caption">
                Illustrative stock photography. Not a photograph of the project site.
              </figcaption>
            </figure>
            <div className="project-side-panel">
              <h3>Focus areas</h3>
              <div className="active-project-tags">
                {project.focusAreas.map((area) => (
                  <span key={area} className="active-project-tag">
                    {area}
                  </span>
                ))}
              </div>
            </div>
            <div className="project-side-panel">
              <h3>Current status</h3>
              <p>{project.status}</p>
            </div>
            <div className="project-side-panel project-side-cta">
              <h3>Contact us about this project</h3>
              <p>Discuss partnership, investment, or implementation.</p>
              <Button asChild variant="brand" size="lg">
                <Link to="/contact">
                  Get in Touch <ArrowUpRight />
                </Link>
              </Button>
            </div>
            <Link to="/projects" className="text-link">
              <ArrowLeft /> Back to all projects
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}
