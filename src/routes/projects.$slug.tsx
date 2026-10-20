import * as React from 'react';
import { createFileRoute, Link, notFound } from '@tanstack/react-router';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Cpu,
  Globe,
  Handshake,
  Info,
  Layers,
  MapPin,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { getProject, activeProjects, type ActiveProject } from '@/lib/projects-content';
import { Button } from '@/components/ui/button';
import { ProjectMap } from '@/components/project-map';

export const Route = createFileRoute('/projects/$slug')({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => {
    const title = loaderData
      ? `${loaderData.title} | Projects | Africa Climate Actions PLC`
      : 'Project | Africa Climate Actions PLC';
    const description =
      loaderData?.summary ??
      'An active climate-technology and sustainable development project by Africa Climate Actions PLC.';
    return {
      meta: [
        { title },
        { name: 'description', content: description },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:type', content: 'article' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
    };
  },
  component: ProjectDetailPage,
});

function ProjectDetailPage() {
  const project = Route.useLoaderData();
  const otherProjects = activeProjects.filter((p) => p.slug !== project.slug);

  return (
    <main className="project-detail-root">
      {/* Detail Header Banner */}
      <section className="page-banner project-detail-banner">
        <div className="shell">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/projects">Projects</Link>
            <ChevronRight className="w-3 h-3" />
            <span>{project.title}</span>
          </div>

          <div className="project-detail-header-meta">
            <span className="project-detail-badge">Project {project.index}</span>
            <span className="project-status-badge">{project.status}</span>
          </div>

          <h1>{project.title}</h1>

          <div className="project-detail-location-bar">
            <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
            <span className="location-text">{project.location}</span>
            <span className="precision-pill">{project.coordinates.precision}</span>
          </div>

          <p className="project-detail-summary-lead">{project.summary}</p>
        </div>
      </section>

      {/* Main Content & Sidebar Grid */}
      <section className="section project-detail-body">
        <div className="shell project-detail-grid">
          {/* Main Column */}
          <div className="project-detail-main">
            {/* 1. Project Overview */}
            <article className="content-section" id="project-overview">
              <div className="section-header-row">
                <span className="section-step-num">01</span>
                <h2>Project overview</h2>
              </div>
              <p>{project.overview}</p>
            </article>

            {/* 2. Location & Interactive Single-Project Map */}
            <article className="content-section" id="project-location">
              <div className="section-header-row">
                <span className="section-step-num">02</span>
                <h2>Location & regional setting</h2>
              </div>
              <p>
                <strong>Geographic Area:</strong> {project.location}.
              </p>
              <div className="location-coordinates-box">
                <div className="coord-item">
                  <span className="coord-label">Latitude</span>
                  <span className="coord-val">{project.coordinates.lat.toFixed(4)}° N</span>
                </div>
                <div className="coord-item">
                  <span className="coord-label">Longitude</span>
                  <span className="coord-val">{project.coordinates.lng.toFixed(4)}° E</span>
                </div>
                <div className="coord-item">
                  <span className="coord-label">Precision Context</span>
                  <span className="coord-val">{project.coordinates.precision}</span>
                </div>
              </div>

              {/* Embedded Project Map */}
              <div className="detail-map-container">
                <ProjectMap
                  projects={[project]}
                  selectedSlug={project.slug}
                  singleProjectMode={true}
                  height={380}
                />
              </div>
            </article>

            {/* 3. Climate Challenge */}
            <article className="content-section" id="climate-challenge">
              <div className="section-header-row">
                <span className="section-step-num">03</span>
                <h2>Climate challenge</h2>
              </div>
              <p>{project.challenge}</p>
            </article>

            {/* 4. Our Solution */}
            <article className="content-section" id="our-solution">
              <div className="section-header-row">
                <span className="section-step-num">04</span>
                <h2>Our solution</h2>
              </div>
              <p>{project.solution}</p>
            </article>

            {/* 5. How the System Works */}
            <article className="content-section" id="system-workflow">
              <div className="section-header-row">
                <span className="section-step-num">05</span>
                <h2>How the system works</h2>
              </div>
              <div className="system-workflow-grid">
                {project.system.map((item, index) => (
                  <div className="workflow-card" key={item.step}>
                    <div className="workflow-card-head">
                      <span className="workflow-step-num">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h4>{item.step}</h4>
                    </div>
                    <p>{item.detail}</p>
                  </div>
                ))}
              </div>
            </article>

            {/* 6. Technology */}
            <article className="content-section" id="technology">
              <div className="section-header-row">
                <span className="section-step-num">06</span>
                <h2>Technology & engineering</h2>
              </div>
              <p>{project.technology}</p>
            </article>

            {/* 7. Climate Benefits */}
            <article className="content-section" id="climate-benefits">
              <div className="section-header-row">
                <span className="section-step-num">07</span>
                <h2>Climate benefits</h2>
              </div>
              <ul className="project-benefits-list">
                {project.climateBenefits.map((benefit, i) => (
                  <li key={i}>
                    <div className="benefit-icon">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </article>

            {/* 8. Economic and Social Benefits */}
            <article className="content-section" id="economic-social-benefits">
              <div className="section-header-row">
                <span className="section-step-num">08</span>
                <h2>Economic and social benefits</h2>
              </div>
              <ul className="project-benefits-list">
                {project.economicSocialBenefits.map((benefit, i) => (
                  <li key={i}>
                    <div className="benefit-icon">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </article>

            {/* 9. Digital MRV */}
            <article className="content-section" id="digital-mrv">
              <div className="section-header-row">
                <span className="section-step-num">09</span>
                <h2>Digital MRV & verification</h2>
              </div>
              <p>{project.digitalMrv}</p>
            </article>

            {/* 10. Partners */}
            <article className="content-section" id="partners">
              <div className="section-header-row">
                <span className="section-step-num">10</span>
                <h2>Project partners & stakeholders</h2>
              </div>
              <p>{project.partners}</p>
              <div className="partners-note">
                <Info className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <span>
                  Africa Climate Actions PLC publishes partner recognitions only upon execution of formal
                  bilateral project agreements and institutional clearance.
                </span>
              </div>
            </article>

            {/* 11. Current Status */}
            <article className="content-section" id="current-status">
              <div className="section-header-row">
                <span className="section-step-num">11</span>
                <h2>Current implementation status</h2>
              </div>
              <div className="status-highlight-card">
                <div className="status-pill">{project.status}</div>
                <p>
                  This initiative is actively progressing under the designated stage outlined above. All
                  activities adhere strictly to planned milestones without unverified progress or output claims.
                </p>
              </div>
            </article>

            {/* 12. Project Photo Gallery */}
            <article className="content-section" id="photo-gallery">
              <div className="section-header-row">
                <span className="section-step-num">12</span>
                <h2>Project photo gallery</h2>
              </div>
              <p className="gallery-intro">
                Visual context highlighting technical processes, agronomic systems, and operational environments.
              </p>
              <div className="project-gallery-grid">
                {project.gallery.map((img, i) => (
                  <figure className="gallery-item" key={i}>
                    <div className="gallery-image-wrap">
                      <img src={img.src} alt={img.alt} loading="lazy" />
                    </div>
                    <figcaption className="gallery-caption">
                      <strong>{img.alt}</strong> — {img.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
              <p className="gallery-disclosure">
                <em>Notice:</em> Photographs are illustrative stock images representing technical and environmental
                contexts, downloaded under commercial license with full provenance retained.
              </p>
            </article>

            {/* 13. Functional Contact Section */}
            <article className="content-section contact-project-section" id="contact-project">
              <div className="section-header-row">
                <span className="section-step-num">13</span>
                <h2>Contact us about this project</h2>
              </div>
              <div className="project-contact-card">
                <div className="contact-card-copy">
                  <h3>Interested in {project.title}?</h3>
                  <p>
                    Discuss project collaboration, investment opportunities, technology deployment, or
                    field implementation directly with our technical leads.
                  </p>
                </div>
                <div className="contact-card-actions">
                  <Button asChild variant="brand" size="lg">
                    <Link to="/contact">
                      Contact Us About This Project <ArrowUpRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="tel:+251923275050">Call Technical Team</a>
                  </Button>
                </div>
              </div>
            </article>

            <div className="back-to-projects-bottom">
              <Button asChild variant="outline" size="default">
                <Link to="/projects">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back to All Projects
                </Link>
              </Button>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <aside className="project-detail-side">
            {/* Primary Featured Photo */}
            <figure className="page-photo project-side-photo">
              <img src={project.heroImage.src} alt={project.heroImage.alt} loading="lazy" />
              <figcaption className="image-caption">{project.heroImage.caption}</figcaption>
            </figure>

            {/* Quick Facts Panel */}
            <div className="project-side-panel">
              <h3>Key Specifications</h3>
              <dl className="project-specs-list">
                {project.quickFacts.map((fact) => (
                  <div key={fact.label} className="spec-row">
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Focus Areas Panel */}
            <div className="project-side-panel">
              <h3>Focus Areas</h3>
              <div className="active-project-tags">
                {project.focusAreas.map((area) => (
                  <span key={area} className="active-project-tag">
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Current Status Panel */}
            <div className="project-side-panel">
              <h3>Current Status</h3>
              <p className="font-semibold text-primary">{project.status}</p>
              <p className="text-xs text-muted-foreground mt-1">
                Factual status based on verified company project pipeline.
              </p>
            </div>

            {/* Direct CTA Box */}
            <div className="project-side-panel project-side-cta">
              <h3>Inquire About This Project</h3>
              <p>Discuss partnership, co-investment, or field implementation.</p>
              <Button asChild variant="brand" size="lg" className="w-full">
                <Link to="/contact">
                  Get in Touch <ArrowUpRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>

            {/* Navigation back link */}
            <Link to="/projects" className="text-link side-back-link">
              <ArrowLeft className="w-4 h-4" /> Back to all projects
            </Link>
          </aside>
        </div>
      </section>

      {/* Related Projects Section */}
      <section className="section related-projects-section">
        <div className="shell">
          <div className="section-intro">
            <div>
              <div className="eyebrow">Explore More</div>
              <h2>Other active projects in our portfolio.</h2>
            </div>
            <Button asChild variant="outline" size="sm">
              <Link to="/projects">
                View All Projects <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>

          <div className="related-projects-grid">
            {otherProjects.slice(0, 4).map((related) => (
              <div className="related-project-card" key={related.slug}>
                <Link
                  to="/projects/$slug"
                  params={{ slug: related.slug }}
                  className="related-project-media"
                >
                  <img src={related.heroImage.src} alt={related.heroImage.alt} loading="lazy" />
                  <span className="related-status">{related.status}</span>
                </Link>
                <div className="related-project-body">
                  <span className="related-num">{related.index}</span>
                  <h3>
                    <Link to="/projects/$slug" params={{ slug: related.slug }}>
                      {related.title}
                    </Link>
                  </h3>
                  <div className="related-location">
                    <MapPin className="w-3 h-3 flex-shrink-0" />
                    <span>{related.location.split(',')[0]}</span>
                  </div>
                  <Link
                    to="/projects/$slug"
                    params={{ slug: related.slug }}
                    className="text-link related-link"
                  >
                    View Project <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
