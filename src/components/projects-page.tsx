import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  CircleDollarSign,
  Database,
  Leaf,
  MapPin,
  Network,
  Repeat2,
  Sprout,
  X,
} from "lucide-react";
import ethiopiaCattle from "@/assets/projects/ethiopia-cattle.webp";
import eastAfricaHarvest from "@/assets/projects/east-africa-harvest.webp";
import soilCrops from "@/assets/projects/soil-crops.webp";
import { media, mediaAlt } from "@/lib/media";

type ProjectFilter =
  "All" | "Energy" | "Agriculture" | "Circular Economy" | "Digital MRV" | "Carbon";
type ProjectTheme = {
  id: string;
  title: string;
  categories: Exclude<ProjectFilter, "All">[];
  description: string;
  visual: "farm" | "data" | "livestock" | "carbon";
  imageAlt?: string;
  challenge: string;
  approach: string;
  system: string[];
  potentialValue: string;
  href: "/featured-project" | "/digital-mrv" | "/climate-business-models" | "/carbon-markets";
};

const filters: ProjectFilter[] = [
  "All",
  "Energy",
  "Agriculture",
  "Circular Economy",
  "Digital MRV",
  "Carbon",
];

const projectThemes: ProjectTheme[] = [
  {
    id: "biogas",
    title: "Agricultural Biogas Systems",
    categories: ["Energy", "Agriculture", "Circular Economy"],
    description:
      "Support the design and implementation of systems that convert livestock manure and agricultural waste into useful energy and fertilizer.",
    visual: "farm",
    imageAlt: mediaAlt.farm,
    challenge:
      "Livestock manure and agricultural waste require thoughtful management and can also be productive resources.",
    approach:
      "Explore biogas system design, technology selection, implementation, and the use of resulting energy and digestate.",
    system: ["Livestock manure", "Biodigester", "Biogas", "Energy", "Digestate"],
    potentialValue:
      "Renewable energy, improved manure management, nutrient recycling, and organic fertilizer.",
    href: "/featured-project",
  },
  {
    id: "digital-mrv",
    title: "Digital MRV for Climate Projects",
    categories: ["Digital MRV"],
    description:
      "Connect field data, greenhouse gas calculations, technology monitoring, and evidence prepared for reporting and verification.",
    visual: "data",
    imageAlt: mediaAlt.data,
    challenge:
      "Climate projects need reliable information to monitor activities, understand emissions, and prepare reporting evidence.",
    approach:
      "Develop digital approaches for field data collection, emissions calculations, technology monitoring, and verification-ready reporting.",
    system: ["Field data", "Digital collection", "GHG calculations", "Monitoring", "Reporting"],
    potentialValue: "Stronger climate data, improved monitoring, and more informed decisions.",
    href: "/digital-mrv",
  },
  {
    id: "livestock",
    title: "Climate-Smart Livestock",
    categories: ["Agriculture", "Circular Economy"],
    description:
      "Connect feeding, manure management, renewable energy, forage production, greenhouse gas accounting, and climate finance.",
    visual: "livestock",
    imageAlt: "African woman holding harvested rice grains in Mbeya, Tanzania",
    challenge:
      "Livestock, feeding, manure, energy, and forage are interconnected parts of productive agricultural systems.",
    approach:
      "Consider climate-smart livestock systems through practical links between manure management, energy, forage, emissions data, and finance.",
    system: ["Livestock", "Feeding", "Manure", "Energy", "Forage"],
    potentialValue:
      "Resource efficiency, productive agriculture, improved manure management, and climate resilience.",
    href: "/climate-business-models",
  },
  {
    id: "carbon",
    title: "Carbon Project Development",
    categories: ["Carbon"],
    description:
      "Assess project screening, greenhouse gas baselines, monitoring design, financial modelling, and climate-finance readiness.",
    visual: "carbon",
    imageAlt: mediaAlt.solar,
    challenge:
      "Climate finance decisions need clear project assumptions, credible greenhouse gas accounting, and monitoring design.",
    approach:
      "Support project screening, baseline development, emissions calculations, carbon project documentation, and finance preparation.",
    system: [
      "Project screening",
      "GHG baseline",
      "Calculations",
      "Monitoring",
      "Finance readiness",
    ],
    potentialValue:
      "Carbon revenue may be one part of a stronger business model; it is not assured for every project.",
    href: "/carbon-markets",
  },
];

const circularStages = [
  [
    "Livestock",
    "Livestock production connects with manure management and forage and feed systems.",
  ],
  ["Manure", "Organic waste can become a resource for energy and nutrient recovery."],
  [
    "Biodigester",
    "Anaerobic digestion converts manure and organic waste into biogas and digestate.",
  ],
  ["Biogas", "Biogas can provide renewable energy while supporting improved manure management."],
  [
    "Energy",
    "Depending on scale and configuration, cleaned biogas can support cooking, heating, electricity, industrial energy, or transport.",
  ],
  [
    "Digestate",
    "Digestate contains plant nutrients and organic matter that can be used with appropriate treatment and management.",
  ],
  [
    "Organic fertilizer",
    "Managed digestate can support organic fertilizer use and nutrient recycling.",
  ],
  [
    "Forage & feed",
    "The concept links nutrient recycling with forage production and livestock feed systems.",
  ],
  [
    "Back to livestock",
    "The Furi concept connects resources and agricultural production in a circular system.",
  ],
] as const;

const journey = [
  ["01", "Understand", "Identify the climate and development challenge."],
  ["02", "Design", "Develop a practical technical solution."],
  ["03", "Assess", "Evaluate feasibility, emissions, and economics."],
  ["04", "Finance", "Explore appropriate finance and investment pathways."],
  ["05", "Implement", "Move from planning toward real-world implementation."],
  ["06", "Measure", "Monitor performance, emissions, and results."],
  ["07", "Scale", "Develop pathways for replication and growth."],
];

const networkNodes = [
  {
    name: "Agriculture",
    text: "Productive agriculture brings resources, emissions challenges, and opportunities for climate-smart intervention.",
  },
  {
    name: "Energy",
    text: "Renewable energy and biogas can support productive systems and reduce dependence on fossil energy.",
  },
  {
    name: "Resource recovery",
    text: "Circular approaches connect agricultural waste with energy, nutrients, and productive inputs.",
  },
  {
    name: "Data",
    text: "Digital monitoring and climate data support measurement, reporting, and better decisions.",
  },
  {
    name: "Finance",
    text: "Climate finance can be assessed alongside project fundamentals and practical business models.",
  },
  {
    name: "Carbon",
    text: "Carbon assessment can be one part of project finance planning, without guaranteeing credits or revenue.",
  },
  {
    name: "Technology",
    text: "Engineering and digital technologies help turn project ideas into practical systems.",
  },
];
const networkRelationships = [
  [2, 6],
  [2, 6],
  [0, 1],
  [4, 5],
  [3, 5],
  [4, 1],
  [0, 3],
];

const benefits = [
  "Cleaner energy",
  "Reduced greenhouse gas emissions",
  "Improved agricultural productivity",
  "Better manure and waste management",
  "Stronger climate data",
  "Better investment decisions",
  "Circular resource use",
  "New green businesses",
  "Climate finance mobilization",
  "Institutional capacity",
  "Resilient communities",
];

const principles = [
  ["Practical", "Solutions designed for real-world implementation."],
  ["Measurable", "Climate action supported by monitoring, data, and evidence."],
  ["Connected", "Energy, agriculture, finance, technology, and data working together."],
  ["Scalable", "Projects considered with long-term growth and replication in mind."],
];

function ProjectVisual({ project }: { project: ProjectTheme }) {
  if (project.visual === "farm") {
    return <img src={media.farm} alt={project.imageAlt} loading="lazy" />;
  }
  if (project.visual === "data") {
    return <img src={media.data} alt={project.imageAlt} loading="lazy" />;
  }
  if (project.visual === "livestock") {
    return (
      <div
        className="project-card-diagram livestock-visual"
        aria-label="Climate-smart livestock system illustration"
      >
        <img
          className="project-card-diagram-photo"
          src={eastAfricaHarvest}
          alt={project.imageAlt}
          loading="lazy"
          decoding="async"
        />
        <Sprout />
        <span>FEED & FORAGE</span>
        <ArrowRight />
        <span>LIVESTOCK</span>
        <ArrowRight />
        <span>MANURE</span>
        <ArrowRight />
        <span>RESOURCE RECOVERY</span>
      </div>
    );
  }
  return (
    <div
      className="project-card-diagram carbon-visual"
      aria-label="Carbon project development workflow illustration"
    >
      <img
        className="project-card-diagram-photo"
        src={media.solar}
        alt={project.imageAlt}
        loading="lazy"
        decoding="async"
      />
      <CircleDollarSign />
      <span>PROJECT</span>
      <ArrowRight />
      <span>BASELINE</span>
      <ArrowRight />
      <span>MONITORING</span>
      <ArrowRight />
      <span>FINANCE</span>
    </div>
  );
}

function ProjectDetailDialog({
  project,
  onClose,
}: {
  project: ProjectTheme | null;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (project && !dialog.open) dialog.showModal();
    if (!project && dialog.open) dialog.close();
  }, [project]);

  return (
    <dialog
      ref={dialogRef}
      className="project-dialog"
      aria-labelledby="project-dialog-title"
      onClose={onClose}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          event.preventDefault();
          onClose();
        }
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      {project && (
        <div className="project-dialog-inner">
          <button
            className="project-dialog-close"
            type="button"
            onClick={onClose}
            aria-label="Close project details"
          >
            <X />
          </button>
          <div className="project-dialog-label">
            PROJECT THEME · {project.categories.join(" / ")}
          </div>
          <h2 id="project-dialog-title">{project.title}</h2>
          {project.id === "biogas" && (
            <div className="project-dialog-location">
              <MapPin /> Featured concept: Furi, Sheger City, Ethiopia
            </div>
          )}
          <div className="project-dialog-grid">
            <section>
              <h3>Challenge</h3>
              <p>{project.challenge}</p>
            </section>
            <section>
              <h3>Approach</h3>
              <p>{project.approach}</p>
            </section>
            <section>
              <h3>System components</h3>
              <p>{project.system.join(" → ")}</p>
            </section>
            <section>
              <h3>Potential value</h3>
              <p>{project.potentialValue}</p>
            </section>
          </div>
          <Link className="project-action project-action-green" to={project.href} onClick={onClose}>
            Explore related information <ArrowUpRight />
          </Link>
        </div>
      )}
    </dialog>
  );
}

export function ProjectsPage() {
  const [filter, setFilter] = useState<ProjectFilter>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectTheme | null>(null);
  const [activeStage, setActiveStage] = useState(0);
  const [activeJourney, setActiveJourney] = useState(-1);
  const [activeNetwork, setActiveNetwork] = useState(0);
  const journeyRef = useRef<HTMLOListElement>(null);
  const heroImageRef = useRef<HTMLImageElement>(null);
  const visibleProjects = projectThemes.filter(
    (project) => filter === "All" || project.categories.includes(filter),
  );

  useEffect(() => {
    const list = journeyRef.current;
    if (!list) return;
    let frame = 0;
    const updateProgress = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const { top, height } = list.getBoundingClientRect();
        const progress = Math.max(
          0,
          Math.min(1, (window.innerHeight * 0.68 - top) / Math.max(height, 1)),
        );
        setActiveJourney(
          progress === 0 ? -1 : Math.min(journey.length - 1, Math.floor(progress * journey.length)),
        );
      });
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const image = heroImageRef.current;
    if (!image || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        image.style.transform = `translate3d(0, ${Math.min(window.scrollY * 0.1, 44)}px, 0) scale(1.06)`;
      });
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      cancelAnimationFrame(frame);
    };
  }, []);

  const journeyProgress = activeJourney < 0 ? 0 : (activeJourney / (journey.length - 1)) * 100;

  return (
    <main className="projects-page">
      <section className="projects-hero">
        <img
          ref={heroImageRef}
          className="projects-hero-image"
          src={media.landscape}
          alt={mediaAlt.landscape}
          fetchPriority="high"
        />
        <div className="projects-hero-shade" />
        <div className="shell projects-hero-content">
          <div className="projects-eyebrow">Our projects</div>
          <h1>
            From Climate Ideas
            <br />
            to <em>Working Solutions</em>
          </h1>
          <p>
            Projects that connect energy, agriculture, climate finance, engineering, and digital
            systems to create practical climate solutions across Africa.
          </p>
          <a className="projects-scroll-link" href="#project-intro">
            Explore projects <ArrowDown />
          </a>
        </div>
        <div className="projects-hero-caption">
          Illustrative stock photography · Malawi landscape · not a company project site
        </div>
        <div className="projects-hero-index">
          <span>PROJECTS / 01</span>
          <span>Concept · systems · implementation</span>
        </div>
      </section>

      <section className="projects-intro section" id="project-intro">
        <div className="shell projects-intro-layout">
          <div className="projects-intro-label">
            <span>01</span> From concept to impact
          </div>
          <div className="projects-intro-copy">
            <h2>Climate solutions become powerful when systems work together.</h2>
            <p>
              Africa Climate Actions develops and supports projects that connect practical
              technologies, implementation, and finance to create environmental, economic, and
              social value.
            </p>
          </div>
          <div className="project-disciplines" aria-label="Connected project disciplines">
            {[
              "Energy",
              "Agriculture",
              "Climate finance",
              "Engineering",
              "Digital systems",
              "Data",
              "Local partnerships",
            ].map((item, index) => (
              <span key={item} style={{ "--discipline-index": index } as React.CSSProperties}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section project-explorer" id="explore-projects">
        <div className="shell">
          <div className="projects-section-head">
            <div>
              <div className="projects-eyebrow projects-eyebrow-green">
                A portfolio of project themes
              </div>
              <h2>Explore Our Project Focus</h2>
            </div>
            <p>
              Explore the project themes where climate action, technology, agriculture, finance, and
              implementation come together.
            </p>
          </div>
          <div className="project-filters" role="group" aria-label="Filter project themes">
            {filters.map((item) => (
              <button
                type="button"
                key={item}
                className={filter === item ? "is-active" : ""}
                onClick={() => setFilter(item)}
                aria-pressed={filter === item}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="project-grid-editorial" aria-live="polite">
            {visibleProjects.map((project, index) => (
              <button
                type="button"
                className="project-theme-card"
                key={project.id}
                onClick={() => setSelectedProject(project)}
                onPointerMove={(event) => {
                  const rect = event.currentTarget.getBoundingClientRect();
                  event.currentTarget.style.setProperty(
                    "--project-pointer",
                    `${((event.clientX - rect.left) / rect.width) * 100}%`,
                  );
                }}
              >
                <div className={`project-card-visual visual-${project.visual}`}>
                  <ProjectVisual project={project} />
                  {project.imageAlt && (
                    <span className="project-photo-credit">
                      Illustrative project imagery · representative context only
                    </span>
                  )}
                  <span className="project-card-number">0{index + 1}</span>
                  <span className="project-card-arrow">
                    <ArrowUpRight />
                  </span>
                </div>
                <div className="project-card-copy">
                  <div className="project-card-category">{project.categories.join(" · ")}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <span className="project-card-link">
                    View project theme <ArrowRight />
                  </span>
                </div>
              </button>
            ))}
          </div>
          {visibleProjects.length === 0 && (
            <p className="project-empty">No project themes in this category yet.</p>
          )}
          <div className="project-count">
            <span>0{visibleProjects.length}</span> official project themes shown{" "}
            <span className="project-count-note">No additional projects implied</span>
          </div>
        </div>
      </section>

      <section className="featured-project-editorial" id="featured-project">
        <div className="shell featured-project-layout">
          <div className="featured-project-copy">
            <div className="projects-eyebrow">Featured project · circular economy concept</div>
            <h2>Integrated Biogas, Forage and Dairy Circular Economy Project</h2>
            <div className="featured-project-location">
              <MapPin /> Furi, Sheger City, Ethiopia
            </div>
            <p>
              The project connects livestock production, manure management, biogas, energy, organic
              fertilizer, forage, and feed into a circular agricultural system.
            </p>
            <div className="featured-project-note">
              A designed system visualization, not a photograph of the project site.
            </div>
            <figure className="featured-project-photo">
              <img
                src={ethiopiaCattle}
                alt="Herd of cattle walking along a road in Ethiopia"
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                Representative livestock context · Ethiopia; not a photograph of the Furi project
                site.
              </figcaption>
            </figure>
            <Link className="project-action project-action-light" to="/featured-project">
              Explore the featured project <ArrowUpRight />
            </Link>
          </div>
          <div className="furi-system-panel">
            <div className="furi-panel-header">
              <span>FURI / RESOURCE CYCLE</span>
              <span>CONCEPTUAL SYSTEM</span>
            </div>
            <div className="furi-system">
              <svg className="furi-orbit" viewBox="0 0 600 500" aria-hidden="true">
                <ellipse cx="300" cy="250" rx="224" ry="178" />
                <ellipse className="furi-orbit-inner" cx="300" cy="250" rx="177" ry="132" />
              </svg>
              <div className="furi-center">
                <Leaf />
                <span>FURI PROJECT</span>
                <strong>
                  Circular
                  <br />
                  agriculture
                </strong>
                <small>Potential system value</small>
              </div>
              {circularStages.map(([name], index) => {
                const angle = (index / circularStages.length) * Math.PI * 2 - Math.PI / 2;
                return (
                  <button
                    type="button"
                    key={`${name}-${index}`}
                    className={`furi-stage furi-stage-${index + 1}${activeStage === index ? " is-active" : ""}`}
                    style={{
                      left: `${50 + Math.cos(angle) * 38}%`,
                      top: `${50 + Math.sin(angle) * 38}%`,
                    }}
                    onMouseEnter={() => setActiveStage(index)}
                    onFocus={() => setActiveStage(index)}
                    onClick={() => setActiveStage(index)}
                    aria-pressed={activeStage === index}
                  >
                    {name}
                  </button>
                );
              })}
            </div>
            <div className="furi-stage-detail" aria-live="polite">
              <span>STAGE {String(activeStage + 1).padStart(2, "0")} / 09</span>
              <strong>{circularStages[activeStage][0]}</strong>
              <p>{circularStages[activeStage][1]}</p>
            </div>
            <div className="furi-system-foot">
              <span>
                <Repeat2 /> Circular production concept
              </span>
              <span>Potential benefits · not measured results</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section project-value">
        <div className="shell project-value-layout">
          <div>
            <div className="projects-eyebrow projects-eyebrow-green">Potential value</div>
            <h2>One Circular System. Multiple Climate and Economic Benefits.</h2>
            <p>
              Potential value areas identified for the Furi concept are system opportunities, not
              measured project results.
            </p>
            <figure className="project-value-photo">
              <img
                src={soilCrops}
                alt="Young crop seedlings emerging from dark soil"
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                Illustrative crop and soil context · not a project photograph.
              </figcaption>
            </figure>
          </div>
          <div className="potential-value-list">
            {[
              "Reduced methane emissions",
              "Renewable energy",
              "Improved manure management",
              "Organic fertilizer",
              "Nutrient recycling",
              "Forage and feed",
              "Reduced fossil energy use",
              "Reduced waste",
              "New business opportunities",
              "Potential carbon finance",
            ].map((item, index) => (
              <div key={item}>
                <span>0{index + 1}</span>
                <strong>{item}</strong>
                <Check aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section project-journey-section">
        <div className="shell">
          <div className="projects-section-head">
            <div>
              <div className="projects-eyebrow projects-eyebrow-green">Project development</div>
              <h2>From Climate Challenge to Working Solution</h2>
            </div>
            <p>
              We can work from early concept through feasibility, financing, implementation,
              monitoring, reporting, and scaling.
            </p>
          </div>
          <ol
            className="project-journey"
            ref={journeyRef}
            style={{ "--journey-progress": `${journeyProgress}%` } as React.CSSProperties}
          >
            {journey.map(([number, title, description], index) => (
              <li
                key={number}
                data-step={index}
                className={activeJourney >= index ? "is-active" : ""}
              >
                <span className="journey-number">{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ol>
          <div className="journey-context">
            Where appropriate, project pathways can connect with GHG inventories, NDCs, carbon
            markets, climate finance, and national development priorities.
          </div>
        </div>
      </section>

      <section className="section project-network-section">
        <div className="shell">
          <div className="projects-section-head">
            <div>
              <div className="projects-eyebrow">Connected systems</div>
              <h2>Climate Solutions Work Better When They Work Together</h2>
            </div>
            <p>
              Climate projects connect technical choices, productive systems, credible data, and
              appropriate finance.
            </p>
          </div>
          <div className="project-network-layout">
            <div
              className="project-network"
              aria-label="Interactive climate project systems network"
            >
              <svg viewBox="0 0 100 100" aria-hidden="true">
                <circle cx="50" cy="50" r="28" />
                {networkNodes.map((node, index) => {
                  const angle = (index / networkNodes.length) * Math.PI * 2 - Math.PI / 2;
                  const related = networkRelationships[activeNetwork].includes(index);
                  return (
                    <line
                      key={node.name}
                      x1="50"
                      y1="50"
                      x2={50 + Math.cos(angle) * 44}
                      y2={50 + Math.sin(angle) * 44}
                      className={
                        activeNetwork === index ? "is-active" : related ? "is-related" : ""
                      }
                    />
                  );
                })}
              </svg>
              <div className="project-network-center">
                Practical climate
                <br />
                <strong>solutions</strong>
              </div>
              {networkNodes.map((node, index) => {
                const angle = (index / networkNodes.length) * Math.PI * 2 - Math.PI / 2;
                const related = networkRelationships[activeNetwork].includes(index);
                return (
                  <button
                    key={node.name}
                    type="button"
                    className={`project-network-node project-network-node-${index + 1}${activeNetwork === index ? " is-active" : related ? " is-related" : ""}`}
                    style={{
                      left: `${50 + Math.cos(angle) * 37}%`,
                      top: `${50 + Math.sin(angle) * 37}%`,
                    }}
                    onMouseEnter={() => setActiveNetwork(index)}
                    onFocus={() => setActiveNetwork(index)}
                    onClick={() => setActiveNetwork(index)}
                    aria-pressed={activeNetwork === index}
                  >
                    {node.name}
                  </button>
                );
              })}
            </div>
            <div className="project-network-detail" aria-live="polite">
              <span>CONNECTED SYSTEM / 0{activeNetwork + 1}</span>
              <h3>{networkNodes[activeNetwork].name}</h3>
              <p>{networkNodes[activeNetwork].text}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section project-mrv-section">
        <div className="shell project-mrv-layout">
          <div className="project-mrv-copy">
            <div className="projects-eyebrow">Digital MRV · project preview</div>
            <h2>Field evidence, connected to climate reporting.</h2>
            <p>
              Digital monitoring can connect field activities, greenhouse gas calculations, project
              monitoring, and reporting evidence.
            </p>
            <ul>
              {[
                "Emissions estimation",
                "Carbon project monitoring",
                "NDC indicators",
                "Data quality checks",
                "Verification-ready reports",
              ].map((item) => (
                <li key={item}>
                  <Check />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div
            className="mrv-preview"
            aria-label="Illustrative digital MRV workflow, not live data"
          >
            <div className="mrv-preview-top">
              <span>PROJECT MONITORING WORKFLOW</span>
              <strong>ILLUSTRATIVE CONCEPT — NOT LIVE DATA</strong>
            </div>
            <div className="mrv-preview-flow">
              {[
                "Field data",
                "Digital collection",
                "GHG calculations",
                "Baseline comparison",
                "Monitoring",
                "Analytics",
                "Reporting",
              ].map((item, index) => (
                <div key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item}</strong>
                  {index < 6 && <ArrowRight aria-hidden="true" />}
                </div>
              ))}
            </div>
            <div className="mrv-preview-chart">
              <div>
                <span>Data flow</span>
                <span>No live measurements shown</span>
              </div>
              <svg
                viewBox="0 0 600 120"
                role="img"
                aria-label="Illustrative data flow line with no quantitative scale"
              >
                <path d="M0 93 C70 83 85 38 152 60 S230 97 300 48 S385 78 450 31 S530 53 600 13" />
                <path className="mrv-gridline" d="M0 110H600M0 70H600M0 30H600" />
              </svg>
            </div>
            <div className="mrv-preview-footer">
              <span>
                <Database /> Activity data
              </span>
              <span>
                <BarChart3 /> Calculations & reporting
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section carbon-development-section">
        <div className="shell carbon-development-layout">
          <div className="carbon-development-copy">
            <div className="projects-eyebrow projects-eyebrow-green">
              Carbon project development
            </div>
            <h2>Turning Climate Projects Into Financeable Opportunities</h2>
            <p>
              Project screening, greenhouse gas baselines, emissions calculations, monitoring
              design, documentation, and financial modelling can help assess climate-finance
              readiness.
            </p>
            <blockquote>
              Carbon revenue should be one component of a stronger project business model, not the
              only reason a project works.
            </blockquote>
            <Link className="project-action project-action-green" to="/carbon-markets">
              Explore carbon markets & climate finance <ArrowUpRight />
            </Link>
          </div>
          <div className="carbon-process" aria-label="Carbon project assessment workflow">
            {[
              "Project screening",
              "GHG baseline",
              "Emissions reduction calculations",
              "Monitoring",
              "Documentation",
              "Financial modelling",
              "Investor engagement",
              "Climate finance preparation",
            ].map((item, index) => (
              <div key={item}>
                <span>0{index + 1}</span>
                <strong>{item}</strong>
                {index < 7 && <ArrowDown aria-hidden="true" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section projects-africa-section">
        <div className="shell projects-africa-layout">
          <div className="projects-africa-map">
            <svg
              viewBox="0 0 260 300"
              role="img"
              aria-label="Illustrative outline map of Africa without project pins or coverage data"
            >
              <path d="M82 11 111 18 128 12 146 25 169 28 182 47 205 57 215 76 234 88 226 110 239 126 222 145 217 168 199 183 194 207 177 221 167 245 155 276 140 291 127 268 122 242 106 223 100 201 83 189 73 168 57 153 46 134 31 123 39 104 28 87 45 72 46 53 62 43 67 27Z" />
              <path
                className="map-contour"
                d="M82 11 111 18 128 12 146 25 169 28 182 47 205 57 215 76 234 88 226 110 239 126 222 145 217 168 199 183 194 207 177 221 167 245 155 276 140 291 127 268 122 242 106 223 100 201 83 189 73 168 57 153 46 134 31 123 39 104 28 87 45 72 46 53 62 43 67 27Z"
              />
            </svg>
            <span>No project pins or coverage data shown</span>
          </div>
          <div className="projects-africa-copy">
            <div className="projects-eyebrow projects-eyebrow-green">A place-specific approach</div>
            <h2>Built for Africa</h2>
            <p>
              Solutions are designed around African production systems, institutions, markets,
              resources, and development priorities.
            </p>
            <p>
              We combine local implementation experience with international climate methods, digital
              technologies, engineering, science, and finance.
            </p>
            <div className="africa-approach-tags">
              {[
                "People",
                "Partnerships",
                "Science",
                "Engineering",
                "Technology",
                "Finance",
                "Local knowledge",
              ].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section project-impact-section">
        <div className="shell">
          <div className="projects-section-head">
            <div>
              <div className="projects-eyebrow projects-eyebrow-green">Potential impact areas</div>
              <h2>Projects Designed for Real-World Value</h2>
            </div>
            <p>
              Project value can extend across environmental, agricultural, economic, data, and
              institutional outcomes. No numerical results are implied here.
            </p>
          </div>
          <div className="project-impact-list">
            {benefits.map((item, index) => (
              <div key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item}</strong>
                <ArrowUpRight aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section project-principles-section">
        <div className="shell project-principles-layout">
          <div>
            <div className="projects-eyebrow">How we approach projects</div>
            <h2>Project work with purpose and perspective.</h2>
          </div>
          <div className="project-principles">
            {principles.map(([title, text], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-contact-section">
        <div className="shell projects-contact-inner">
          <div className="projects-eyebrow">Start a conversation</div>
          <h2>Have a Climate Project in Mind?</h2>
          <p>
            Whether you are developing a climate project, exploring climate finance, improving
            agricultural systems, or building digital monitoring capabilities, we can help turn the
            idea into a practical pathway.
          </p>
          <div className="projects-contact-actions">
            <Link className="project-action project-action-light" to="/contact">
              Develop a project <ArrowUpRight />
            </Link>
            <Link className="project-action project-action-outline" to="/carbon-markets">
              Explore climate finance <ArrowUpRight />
            </Link>
            <Link className="project-action project-action-outline" to="/partners">
              Partner with us <ArrowUpRight />
            </Link>
            <Link className="project-action project-action-outline" to="/contact">
              Contact our team <ArrowUpRight />
            </Link>
          </div>
        </div>
      </section>

      <section className="projects-final-cta">
        <div className="shell projects-final-inner">
          <div className="projects-eyebrow">Africa Climate Actions PLC</div>
          <h2>Build the Next Climate Solution With Us</h2>
          <p>
            Let’s develop practical solutions that connect climate action with stronger businesses,
            productive agriculture, cleaner energy, resilient communities, and sustainable growth.
          </p>
          <div>
            <Link className="project-action project-action-light" to="/contact">
              Partner with us <ArrowUpRight />
            </Link>
            <Link className="project-action project-action-outline" to="/contact">
              Contact our team <ArrowUpRight />
            </Link>
          </div>
        </div>
      </section>

      <ProjectDetailDialog project={selectedProject} onClose={() => setSelectedProject(null)} />
    </main>
  );
}
