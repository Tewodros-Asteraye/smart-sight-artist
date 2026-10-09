import { useState, type CSSProperties } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronRight,
  CircleCheck,
  ClipboardCheck,
  Database,
  FileCheck2,
  Fingerprint,
  Gauge,
  Leaf,
  MapPin,
  Network,
  Radio,
  ScanLine,
  ShieldCheck,
  Sprout,
  Tablet,
  Workflow,
  Zap,
} from "lucide-react";
import { media, mediaAlt } from "@/lib/media";

const ecosystemNodes = [
  {
    name: "Field data",
    note: "Information collected from project activities and field operations.",
    icon: ScanLine,
  },
  {
    name: "Sensors",
    note: "Digital measurement technologies can provide structured data for relevant monitoring parameters.",
    icon: Radio,
  },
  {
    name: "Activity data",
    note: "Operational information used in calculations and monitoring.",
    icon: ClipboardCheck,
  },
  {
    name: "Technology performance",
    note: "Monitoring can organize information about relevant technology operation and performance.",
    icon: Gauge,
  },
  {
    name: "GHG calculations",
    note: "Activity and emissions data can be processed to support greenhouse-gas accounting.",
    icon: BarChart3,
  },
  {
    name: "Baseline",
    note: "Comparison against an appropriate baseline can support emissions estimation.",
    icon: Network,
  },
  {
    name: "Emissions estimation",
    note: "Appropriate methods can use activity data and parameters to estimate emissions.",
    icon: Workflow,
  },
  {
    name: "Carbon monitoring",
    note: "Organized monitoring data can support carbon-project reporting workflows.",
    icon: Leaf,
  },
  {
    name: "NDC indicators",
    note: "Relevant project information can be organized alongside climate indicators.",
    icon: ScanLine,
  },
  {
    name: "Data quality",
    note: "Checks can help identify incomplete or inconsistent information for review.",
    icon: ShieldCheck,
  },
  {
    name: "Analytics",
    note: "Data can be transformed into indicators and insights for decision making.",
    icon: BarChart3,
  },
  {
    name: "Reporting",
    note: "Structured outputs can support climate reporting and verification-ready documentation.",
    icon: FileCheck2,
  },
];

const pipeline = [
  ["Field", "Climate and project activities happen in the real world."],
  ["Collect", "Relevant field, activity, technology, and sensor data can be collected digitally."],
  [
    "Validate",
    "Data checks and quality-control processes help identify incomplete or inconsistent information.",
  ],
  ["Calculate", "Data can feed greenhouse-gas calculations using appropriate methodologies."],
  [
    "Analyze",
    "Analytics can help identify trends, anomalies, performance, and project indicators.",
  ],
  ["Report", "Structured information can support climate reporting and project documentation."],
  [
    "Review / verify",
    "Organized monitoring information can support review and independent verification processes.",
  ],
] as const;

const dataDomains = [
  "Agriculture",
  "Energy",
  "Livestock",
  "Waste",
  "Renewable energy",
  "Carbon projects",
  "Climate programs",
];
const sectorExamples: Record<string, string[]> = {
  Agriculture: [
    "Activity data",
    "Production information",
    "Resource use",
    "Emissions-related parameters",
  ],
  Energy: [
    "Energy generation",
    "Energy consumption",
    "Technology performance",
    "Relevant activity data",
  ],
  Livestock: [
    "Livestock activity",
    "Manure management",
    "Biogas systems",
    "Relevant emissions parameters",
  ],
  Waste: [
    "Waste quantities",
    "Treatment systems",
    "Energy recovery",
    "Emissions-related activity data",
  ],
  "Renewable energy": [
    "System activity",
    "Energy use",
    "Technology operation",
    "Performance monitoring",
  ],
  "Carbon projects": [
    "Monitoring parameters",
    "Baseline information",
    "Project activity data",
    "GHG calculations and reporting",
  ],
  "Climate programs": [
    "Field activity",
    "Climate indicators",
    "Data quality",
    "Structured reporting",
  ],
};

const furiStages = [
  "Livestock",
  "Manure",
  "Biodigester",
  "Biogas",
  "Energy",
  "Digestate",
  "Organic fertilizer",
  "Forage & feed",
  "Back to livestock",
];
const qualitySteps = ["Collect", "Check", "Validate", "Flag", "Correct", "Approve", "Archive"];
const trustStack = ["Method", "Data", "Quality", "Calculation", "Documentation", "Review"];

const architectureLayers = [
  ["01", "Field", "Project activities · field teams · devices · sensors"],
  ["02", "Data collection", "Mobile forms · digital collection · remote inputs"],
  ["03", "Data management", "Database · validation · quality control · storage"],
  ["04", "Analytics", "GHG calculations · baseline analysis · indicators"],
  ["05", "Reporting", "Dashboards · reports · NDC indicators · review-ready records"],
];

const demoSteps = [
  "Project activity",
  "Field data",
  "Data check",
  "GHG calculation",
  "Analytics",
  "Reporting",
  "Climate decision",
];

function DashboardMockup() {
  return (
    <div className="dmrv-dashboard" aria-label="Illustrative climate data dashboard, not live data">
      <div className="dmrv-dashboard-head">
        <div>
          <span>PROJECT MONITORING WORKSPACE</span>
          <strong>Climate data overview</strong>
        </div>
        <span className="dmrv-live-label">
          <i /> Illustrative concept — not live data
        </span>
      </div>
      <div className="dmrv-dashboard-status">
        <div>
          <span>PROJECT STATUS</span>
          <strong>Concept view</strong>
        </div>
        <div>
          <span>MONITORING PERIOD</span>
          <strong>Not configured</strong>
        </div>
        <div>
          <span>DATA COMPLETENESS</span>
          <strong>Illustrative</strong>
        </div>
        <div>
          <span>LAST DATA UPDATE</span>
          <strong>No live data</strong>
        </div>
      </div>
      <div className="dmrv-dashboard-grid">
        <div className="dmrv-chart-panel">
          <div className="dmrv-panel-title">
            <span>Emissions comparison</span>
            <small>Illustrative workflow · no measured values</small>
          </div>
          <div className="dmrv-chart-legend">
            <span>
              <i /> Baseline concept
            </span>
            <span>
              <i /> Project scenario concept
            </span>
          </div>
          <svg
            viewBox="0 0 640 180"
            role="img"
            aria-label="Illustrative baseline and project scenario lines without a numeric scale"
          >
            <path className="dmrv-chart-grid" d="M0 28H640M0 72H640M0 116H640M0 160H640" />
            <path
              className="dmrv-chart-line dmrv-line-baseline"
              d="M0 40 C75 48 85 38 150 52 S240 56 300 66 S400 58 460 79 S550 76 640 92"
            />
            <path
              className="dmrv-chart-line dmrv-line-project"
              d="M0 57 C65 62 93 67 150 76 S242 84 300 100 S390 97 460 116 S560 122 640 143"
            />
          </svg>
          <div className="dmrv-chart-axis">
            <span>Activity data</span>
            <span>Monitoring sequence · illustrative</span>
          </div>
        </div>
        <div className="dmrv-activity-panel">
          <div className="dmrv-panel-title">
            <span>Activity data domains</span>
            <small>Examples only</small>
          </div>
          {["Energy", "Agriculture", "Livestock", "Waste", "Technology performance"].map(
            (item, index) => (
              <div className="dmrv-activity-row" key={item}>
                <span>{item}</span>
                <div>
                  <i style={{ "--bar-width": `${42 + index * 9}%` } as CSSProperties} />
                </div>
                <small>Concept</small>
              </div>
            ),
          )}
        </div>
      </div>
      <div className="dmrv-dashboard-foot">
        <span>
          <Database /> Field activity
        </span>
        <ArrowRight />
        <span>
          <BarChart3 /> Calculations & analytics
        </span>
        <ArrowRight />
        <span>
          <FileCheck2 /> Reporting workflow
        </span>
      </div>
    </div>
  );
}

export function DigitalMrvPage() {
  const [activeNode, setActiveNode] = useState(0);
  const [activePipeline, setActivePipeline] = useState(0);
  const [activeSector, setActiveSector] = useState(dataDomains[0]);
  const [activeTrace, setActiveTrace] = useState(0);
  const [activeFuri, setActiveFuri] = useState(0);
  const [demoStage, setDemoStage] = useState(-1);
  const [baselineMode, setBaselineMode] = useState("Comparison");

  return (
    <main className="dmrv-page">
      <section className="dmrv-hero">
        <img
          className="dmrv-hero-photo"
          src={media.data}
          alt={mediaAlt.data}
          fetchPriority="high"
        />
        <div className="dmrv-hero-shade" />
        <div className="shell dmrv-hero-layout">
          <div className="dmrv-hero-copy">
            <div className="dmrv-eyebrow">Digital MRV & climate data</div>
            <h1>
              From Field Data
              <br />
              to <em>Climate Intelligence</em>
            </h1>
            <p>
              Digital systems that connect field activities, monitoring, GHG accounting, analytics,
              and reporting for practical climate action.
            </p>
            <div className="dmrv-hero-actions">
              <a className="dmrv-button dmrv-button-light" href="#how-it-works">
                Explore how it works <ArrowDown />
              </a>
              <Link className="dmrv-button dmrv-button-outline" to="/contact">
                Discuss a Digital MRV project <ArrowUpRight />
              </Link>
            </div>
            <div className="dmrv-hero-caption">
              Representative satellite infrastructure in agricultural fields · illustrative stock
              photography
            </div>
          </div>
          <div
            className="dmrv-hero-architecture"
            aria-label="Illustrative Digital MRV architecture"
          >
            <div className="dmrv-architecture-label">
              <span>ILLUSTRATIVE DIGITAL MRV ARCHITECTURE</span>
              <span>CONCEPT</span>
            </div>
            <div className="dmrv-hero-flow">
              <button
                type="button"
                className={activePipeline === 0 ? "is-active" : ""}
                onMouseEnter={() => setActivePipeline(0)}
                onFocus={() => setActivePipeline(0)}
                onClick={() => setActivePipeline(0)}
              >
                <ScanLine />
                <span>FIELD ACTIVITY</span>
              </button>
              <i />
              <button
                type="button"
                className={activePipeline === 1 ? "is-active" : ""}
                onMouseEnter={() => setActivePipeline(1)}
                onFocus={() => setActivePipeline(1)}
                onClick={() => setActivePipeline(1)}
              >
                <Database />
                <span>DIGITAL DATA</span>
              </button>
              <i />
              <button
                type="button"
                className={activePipeline === 3 ? "is-active" : ""}
                onMouseEnter={() => setActivePipeline(3)}
                onFocus={() => setActivePipeline(3)}
                onClick={() => setActivePipeline(3)}
              >
                <BarChart3 />
                <span>GHG ACCOUNTING</span>
              </button>
              <i />
              <button
                type="button"
                className={activePipeline === 5 ? "is-active" : ""}
                onMouseEnter={() => setActivePipeline(5)}
                onFocus={() => setActivePipeline(5)}
                onClick={() => setActivePipeline(5)}
              >
                <FileCheck2 />
                <span>CLIMATE INTELLIGENCE</span>
              </button>
            </div>
            <div className="dmrv-hero-signal">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <p aria-live="polite">{pipeline[activePipeline]?.[1]}</p>
            <div className="dmrv-illustrative-chip">
              <i /> Illustrative concept — not live data
            </div>
          </div>
        </div>
        <a className="dmrv-scroll-cue" href="#what-is-dmrv">
          Explore the system <ChevronRight />
        </a>
      </section>

      <section className="section dmrv-definition" id="what-is-dmrv">
        <div className="shell dmrv-definition-layout">
          <div className="dmrv-section-index">
            <span>01</span>
            <small>Understand the system</small>
          </div>
          <div className="dmrv-definition-copy">
            <div className="dmrv-eyebrow dmrv-eyebrow-green">Start with the fundamentals</div>
            <h2>What Is Digital MRV?</h2>
            <p>
              Digital Monitoring, Reporting and Verification uses digital tools and connected data
              processes to support the measurement, documentation, analysis, and reporting of
              climate-related activities and greenhouse gas emissions.
            </p>
            <div className="dmrv-definition-note">
              <ShieldCheck />
              <span>
                Digital MRV can support review and verification processes. It does not itself
                certify or verify carbon credits.
              </span>
            </div>
          </div>
        </div>
        <div className="shell dmrv-mrv-stages">
          {[
            ["01", "Monitor", "Collect and track relevant activity and field data."],
            [
              "02",
              "Report",
              "Transform monitored information into structured calculations, indicators, analytics, and reports.",
            ],
            [
              "03",
              "Verify",
              "Prepare organized, traceable information that can support review and verification processes.",
            ],
          ].map(([number, title, body]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{body}</p>
              <div className="dmrv-stage-rule" />
            </article>
          ))}
        </div>
      </section>

      <section className="section dmrv-why-section">
        <div className="shell">
          <div className="dmrv-section-heading">
            <div>
              <div className="dmrv-eyebrow dmrv-eyebrow-green">Why it matters</div>
              <h2>Good climate decisions need dependable information.</h2>
            </div>
            <p>
              Digital systems can support clearer data processes and more useful monitoring, while
              outcomes still depend on methods, implementation, and data quality.
            </p>
          </div>
          <div className="dmrv-why-list">
            {[
              ["01", "Better data", "More structured and connected data collection."],
              [
                "02",
                "Stronger accountability",
                "Clearer records of activities, calculations, and reporting.",
              ],
              [
                "03",
                "Better decisions",
                "Data can support climate investment and project-management decisions.",
              ],
              [
                "04",
                "Scalable monitoring",
                "Digital systems can support monitoring across larger and more complex projects.",
              ],
            ].map(([n, title, body]) => (
              <article key={n}>
                <span>{n}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
                <ArrowUpRight />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section dmrv-ecosystem-section">
        <div className="shell">
          <div className="dmrv-section-heading">
            <div>
              <div className="dmrv-eyebrow">A connected climate-data system</div>
              <h2>The Digital MRV Ecosystem</h2>
            </div>
            <p>
              Field information, accounting, analytics, and reporting are connected parts of a
              monitoring system. Select a component to explore its role.
            </p>
          </div>
          <div className="dmrv-ecosystem-layout">
            <div
              className="dmrv-ecosystem-map"
              aria-label="Interactive Digital MRV ecosystem diagram"
            >
              <svg viewBox="0 0 100 100" aria-hidden="true">
                <circle cx="50" cy="50" r="29" />
                {ecosystemNodes.map((node, index) => {
                  const angle = (index / ecosystemNodes.length) * Math.PI * 2 - Math.PI / 2;
                  const isRelated =
                    index === activeNode ||
                    (index + 1) % ecosystemNodes.length === activeNode ||
                    (index + ecosystemNodes.length - 1) % ecosystemNodes.length === activeNode;
                  return (
                    <line
                      key={node.name}
                      x1="50"
                      y1="50"
                      x2={50 + Math.cos(angle) * 45}
                      y2={50 + Math.sin(angle) * 45}
                      className={isRelated ? "is-related" : ""}
                    />
                  );
                })}
              </svg>
              <div className="dmrv-ecosystem-center">
                <Network />
                <span>CONNECTED DATA</span>
                <strong>
                  Digital
                  <br />
                  MRV
                </strong>
              </div>
              {ecosystemNodes.map(({ name, icon: Icon }, index) => {
                const angle = (index / ecosystemNodes.length) * Math.PI * 2 - Math.PI / 2;
                return (
                  <button
                    type="button"
                    key={name}
                    className={`dmrv-ecosystem-node dmrv-node-${index + 1}${activeNode === index ? " is-active" : ""}`}
                    style={{
                      left: `${50 + Math.cos(angle) * 42}%`,
                      top: `${50 + Math.sin(angle) * 42}%`,
                    }}
                    onMouseEnter={() => setActiveNode(index)}
                    onFocus={() => setActiveNode(index)}
                    onClick={() => setActiveNode(index)}
                    aria-pressed={activeNode === index}
                  >
                    <Icon />
                    <span>{name}</span>
                  </button>
                );
              })}
            </div>
            <div className="dmrv-ecosystem-detail" aria-live="polite">
              <span>COMPONENT / {String(activeNode + 1).padStart(2, "0")} OF 12</span>
              <h3>{ecosystemNodes[activeNode].name}</h3>
              <p>{ecosystemNodes[activeNode].note}</p>
              <div>
                <i /> Connected to the broader monitoring workflow
              </div>
            </div>
          </div>
          <div className="dmrv-ecosystem-mobile">
            {ecosystemNodes.map(({ name, note, icon: Icon }, index) => (
              <button
                type="button"
                key={name}
                className={activeNode === index ? "is-active" : ""}
                onClick={() => setActiveNode(index)}
              >
                <Icon />
                <span>
                  <strong>{name}</strong>
                  <small>{note}</small>
                </span>
                <ArrowRight />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section dmrv-pipeline-section" id="how-it-works">
        <div className="shell">
          <div className="dmrv-section-heading">
            <div>
              <div className="dmrv-eyebrow dmrv-eyebrow-green">How it works</div>
              <h2>A Digital MRV Pipeline</h2>
            </div>
            <p>A practical data journey from field activity to structured reporting and review.</p>
          </div>
          <div
            className="dmrv-pipeline"
            style={
              {
                "--pipeline-progress": `${(activePipeline / (pipeline.length - 1)) * 100}%`,
              } as CSSProperties
            }
          >
            <div className="dmrv-pipeline-track" />
            {pipeline.map(([title, body], index) => (
              <button
                type="button"
                key={title}
                className={
                  activePipeline === index
                    ? "is-active"
                    : activePipeline > index
                      ? "is-complete"
                      : ""
                }
                onClick={() => setActivePipeline(index)}
                onFocus={() => setActivePipeline(index)}
                aria-pressed={activePipeline === index}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{title}</strong>
                <small>{body}</small>
              </button>
            ))}
          </div>
          <div className="dmrv-pipeline-detail" aria-live="polite">
            <span>STEP {String(activePipeline + 1).padStart(2, "0")}</span>
            <strong>{pipeline[activePipeline][0]}</strong>
            <p>{pipeline[activePipeline][1]}</p>
          </div>
        </div>
      </section>

      <section className="section dmrv-dashboard-section">
        <div className="shell">
          <div className="dmrv-section-heading">
            <div>
              <div className="dmrv-eyebrow">Conceptual interface</div>
              <h2>Climate Data, Organized for Use.</h2>
            </div>
            <p>
              Monitoring, activity data, calculations, and reporting can be brought together in a
              structured workspace.
            </p>
          </div>
          <DashboardMockup />
        </div>
      </section>

      <section className="section dmrv-field-section">
        <div className="shell dmrv-field-layout">
          <figure className="dmrv-field-photo">
            <img src={media.data} alt={mediaAlt.data} loading="lazy" decoding="async" />
            <figcaption>
              Representative satellite infrastructure in agricultural fields · illustrative stock
              photography, not an ACA project.
            </figcaption>
            <span className="dmrv-image-index">FIELD CONTEXT / ILLUSTRATIVE</span>
          </figure>
          <div className="dmrv-field-copy">
            <div className="dmrv-eyebrow dmrv-eyebrow-green">Data begins in the field</div>
            <h2>Where Climate Data Begins</h2>
            <p>
              Relevant information starts with project activities and the systems being monitored.
              Depending on the project, digital collection can connect field records, activity data,
              devices, and technology performance.
            </p>
            <div className="dmrv-field-flow">
              {[
                ["01", "Field activity"],
                ["02", "Mobile / digital collection"],
                ["03", "Sensor / device data"],
                ["04", "Data validation"],
                ["05", "Central data system"],
              ].map(([number, title], index) => (
                <div key={number}>
                  <span>{number}</span>
                  <strong>{title}</strong>
                  {index < 4 && <ArrowDown />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section dmrv-technology-section">
        <div className="shell dmrv-technology-layout">
          <div>
            <div className="dmrv-eyebrow dmrv-eyebrow-green">
              Digital tools, selected for context
            </div>
            <h2>Connecting the Physical World to Climate Data</h2>
            <p>
              Depending on project requirements, Digital MRV systems can integrate appropriate
              technologies for monitoring and data collection. Not every project uses every
              technology.
            </p>
          </div>
          <div className="dmrv-technology-grid">
            {[
              ["Sensors", Radio],
              ["GPS / location", MapPin],
              ["Mobile collection", Tablet],
              ["Remote sensing", ScanLine],
              ["Satellite data", Network],
              ["Digital databases", Database],
              ["Analytics", BarChart3],
              ["AI-assisted analysis", Workflow],
            ].map(([label, Icon]) => {
              const ToolIcon = Icon as typeof Database;
              return (
                <div key={label as string}>
                  <ToolIcon />
                  <span>{label as string}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section dmrv-accounting-section">
        <div className="shell dmrv-accounting-layout">
          <div>
            <div className="dmrv-eyebrow">GHG accounting</div>
            <h2>From Activity Data to GHG Accounting</h2>
            <p>
              Digital systems can organize activity data and calculation workflows to support
              consistent greenhouse-gas accounting.
            </p>
            <div className="dmrv-calculation-label">Illustrative calculation architecture</div>
          </div>
          <div className="dmrv-calculation-flow">
            <div>
              <span>01</span>
              <strong>Activity data</strong>
            </div>
            <b>+</b>
            <div>
              <span>02</span>
              <strong>Emission factors / appropriate parameters</strong>
            </div>
            <b>+</b>
            <div>
              <span>03</span>
              <strong>Methodology</strong>
            </div>
            <ArrowDown />
            <div className="dmrv-calc-output">
              <BarChart3 />
              <strong>GHG calculation</strong>
            </div>
            <ArrowRight />
            <div className="dmrv-calc-output">
              <Gauge />
              <strong>Emissions estimation</strong>
            </div>
            <ArrowRight />
            <div className="dmrv-calc-output">
              <FileCheck2 />
              <strong>Reporting</strong>
            </div>
            <small>Conceptual workflow · no project measurements shown</small>
          </div>
        </div>
      </section>

      <section className="section dmrv-baseline-section">
        <div className="shell dmrv-baseline-layout">
          <div>
            <div className="dmrv-eyebrow dmrv-eyebrow-green">Comparison, not assumption</div>
            <h2>Understanding the Difference</h2>
            <p>
              Monitoring systems can compare relevant project conditions and activity data against
              an appropriate baseline to support emissions estimation.
            </p>
            <div className="dmrv-segmented" role="group" aria-label="Baseline visualization mode">
              {["Comparison", "Baseline", "Project scenario"].map((mode) => (
                <button
                  key={mode}
                  type="button"
                  className={baselineMode === mode ? "is-active" : ""}
                  onClick={() => setBaselineMode(mode)}
                  aria-pressed={baselineMode === mode}
                >
                  {mode}
                </button>
              ))}
            </div>
            <p className="dmrv-illustrative-caption">
              Illustrative comparison · no numeric scale or real project reductions.
            </p>
          </div>
          <div
            className={`dmrv-baseline-visual mode-${baselineMode.toLowerCase().replaceAll(" ", "-")}`}
          >
            <div className="dmrv-baseline-axis">
              <span>Conceptual emissions profile</span>
              <span>Illustrative values not shown</span>
            </div>
            <div className="dmrv-baseline-chart">
              <div className="dmrv-axis-y">
                <span>Relative activity</span>
              </div>
              <div className="dmrv-chart-lines">
                <span className="baseline-line-label">Baseline concept</span>
                <span className="scenario-line-label">Project scenario concept</span>
                <svg
                  viewBox="0 0 620 260"
                  role="img"
                  aria-label="Conceptual baseline and project scenario comparison without measured values"
                >
                  <path
                    className="baseline-path"
                    d="M0 35 C90 53 95 44 180 77 S285 70 360 104 S475 87 620 131"
                  />
                  <path
                    className="scenario-path"
                    d="M0 67 C80 78 117 88 180 116 S282 124 360 153 S482 160 620 195"
                  />
                </svg>
                <div className="dmrv-axis-x">
                  <span>Monitoring start</span>
                  <span>Monitoring sequence · illustrative</span>
                </div>
              </div>
            </div>
            <div className="dmrv-baseline-foot">
              <span>
                <i /> Appropriate methodology
              </span>
              <span>
                <i /> Project-specific assumptions
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section dmrv-quality-section">
        <div className="shell dmrv-quality-layout">
          <div className="dmrv-quality-copy">
            <div className="dmrv-eyebrow">Credibility starts with the data</div>
            <h2>Good Climate Data Starts With Good Data Quality</h2>
            <p>
              Data quality and management are essential parts of credible monitoring, reporting, and
              review processes.
            </p>
            <div className="dmrv-quality-indicators">
              {["Completeness", "Consistency", "Traceability", "Timeliness", "Documentation"].map(
                (item, index) => (
                  <div key={item}>
                    <span>0{index + 1}</span>
                    <strong>{item}</strong>
                    <Check />
                  </div>
                ),
              )}
            </div>
          </div>
          <div className="dmrv-quality-workflow">
            <div className="dmrv-panel-overline">QUALITY ASSURANCE & CONTROL WORKFLOW</div>
            {qualitySteps.map((step, index) => (
              <div key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
                {index < qualitySteps.length - 1 && <ArrowDown />}
              </div>
            ))}
            <small>Illustrative process · no certification implied</small>
          </div>
        </div>
      </section>

      <section className="section dmrv-trace-section">
        <div className="shell">
          <div className="dmrv-section-heading">
            <div>
              <div className="dmrv-eyebrow dmrv-eyebrow-green">A record with context</div>
              <h2>Follow the Data Journey</h2>
            </div>
            <p>
              Traceability connects the origin of information with checks, calculations, and
              reporting.
            </p>
          </div>
          <div className="dmrv-trace-card">
            <div className="dmrv-trace-header">
              <span>ILLUSTRATIVE RECORD · MRV-00124</span>
              <span>
                <i /> CONCEPT RECORD
              </span>
            </div>
            <div className="dmrv-trace-main">
              <div className="dmrv-trace-details">
                <div className="dmrv-trace-fields">
                  {[
                    ["Source", "Illustrative field activity"],
                    ["Timestamp", "Example record · no live timestamp"],
                    ["Parameter", "Project activity data"],
                    ["Unit", "Not specified"],
                    ["Quality status", "Example review state"],
                    ["Calculation status", "Illustrative workflow"],
                    ["Report status", "Not submitted"],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <span>{label}</span>
                      <strong>{value}</strong>
                    </div>
                  ))}
                </div>
              </div>
              <div className="dmrv-trace-timeline">
                {["Field", "Database", "Calculation", "Quality check", "Report", "Review"].map(
                  (step, index) => (
                    <button
                      type="button"
                      key={step}
                      className={activeTrace === index ? "is-active" : ""}
                      onClick={() => setActiveTrace(index)}
                      aria-pressed={activeTrace === index}
                    >
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <strong>{step}</strong>
                      {index < 5 && <ArrowRight />}
                    </button>
                  ),
                )}
              </div>
            </div>
            <div className="dmrv-trace-note" aria-live="polite">
              <Fingerprint />
              <span>
                Selected stage:{" "}
                <strong>
                  {
                    [
                      "Field source",
                      "Data storage",
                      "Calculation workflow",
                      "Quality review",
                      "Structured reporting",
                      "Independent review process",
                    ][activeTrace]
                  }
                </strong>{" "}
                · Illustrative record only
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section dmrv-carbon-section">
        <div className="shell dmrv-dual-flow">
          <article>
            <div className="dmrv-eyebrow dmrv-eyebrow-green">Carbon-project workflows</div>
            <h2>Digital MRV and Carbon Projects</h2>
            <p>
              Digital MRV can support the organization of monitoring data, GHG calculations,
              documentation, reporting, and review processes in carbon-project workflows.
            </p>
            <div className="dmrv-vertical-flow">
              {[
                "Project design",
                "Baseline",
                "Monitoring plan",
                "Data collection",
                "GHG calculation",
                "Monitoring report",
                "Review / verification",
                "Carbon-market process",
              ].map((item, index) => (
                <div key={item}>
                  <span>0{index + 1}</span>
                  <strong>{item}</strong>
                  {index < 7 && <ArrowDown />}
                </div>
              ))}
            </div>
            <small>
              Independent validation or verification may involve appropriate external bodies,
              depending on the applicable standard and project structure. No credits or revenue are
              promised.
            </small>
          </article>
          <article className="dmrv-ndc-panel">
            <div className="dmrv-eyebrow">Climate planning & reporting</div>
            <h2>From Project Data to Climate Reporting</h2>
            <p>
              Digital climate-data systems can help organize information used for greenhouse-gas
              inventories, NDC tracking, climate reporting, and decision making.
            </p>
            <div className="dmrv-ndc-flow">
              {[
                "Project data",
                "GHG information",
                "Sector indicators",
                "NDC indicators",
                "Climate reporting",
              ].map((item, index) => (
                <div key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item}</strong>
                  {index < 4 && <ArrowRight />}
                </div>
              ))}
            </div>
            <div className="dmrv-ndc-note">
              <ShieldCheck /> A potential data-support role, not a claim of operating a national
              reporting platform.
            </div>
          </article>
        </div>
      </section>

      <section className="section dmrv-sector-section">
        <div className="shell">
          <div className="dmrv-section-heading">
            <div>
              <div className="dmrv-eyebrow dmrv-eyebrow-green">
                Applications depend on project scope
              </div>
              <h2>What Could a Project Monitor?</h2>
            </div>
            <p>
              Choose a sector to see examples of relevant information that could be monitored. These
              are potential applications, not deployed project datasets.
            </p>
          </div>
          <div className="dmrv-sector-layout">
            <div
              className="dmrv-sector-tabs"
              role="group"
              aria-label="Select a potential monitoring sector"
            >
              {dataDomains.map((sector, index) => (
                <button
                  key={sector}
                  type="button"
                  className={activeSector === sector ? "is-active" : ""}
                  onClick={() => setActiveSector(sector)}
                  aria-pressed={activeSector === sector}
                >
                  <span>0{index + 1}</span>
                  {sector}
                  <ArrowRight />
                </button>
              ))}
            </div>
            <div className="dmrv-sector-detail" aria-live="polite">
              <span>ILLUSTRATIVE DATA AREAS</span>
              <h3>{activeSector}</h3>
              <div>
                {sectorExamples[activeSector].map((item) => (
                  <p key={item}>
                    <Check />
                    {item}
                  </p>
                ))}
              </div>
              <small>
                Examples vary with project design, data availability, and suitable methods.
              </small>
            </div>
          </div>
        </div>
      </section>

      <section className="section dmrv-furi-section">
        <div className="shell dmrv-furi-layout">
          <div>
            <div className="dmrv-eyebrow">
              Illustrative application · Furi, Sheger City, Ethiopia
            </div>
            <h2>Connecting Digital MRV to a Circular Agriculture Concept</h2>
            <p>
              A Digital MRV system could conceptually organize relevant monitoring information
              across a livestock, biogas, energy, digestate, and forage system.
            </p>
            <div className="dmrv-furi-disclaimer">
              <CircleCheck /> Illustrative Digital MRV application — not live project data.
            </div>
            <Link to="/featured-project" className="dmrv-text-link">
              Explore the featured project <ArrowUpRight />
            </Link>
          </div>
          <div className="dmrv-furi-visual">
            <div className="dmrv-furi-label">FURI / CONCEPTUAL DATA PATH</div>
            <div className="dmrv-furi-stages">
              {furiStages.map((stage, index) => (
                <button
                  key={stage}
                  type="button"
                  className={activeFuri === index ? "is-active" : ""}
                  onClick={() => setActiveFuri(index)}
                  onFocus={() => setActiveFuri(index)}
                  aria-pressed={activeFuri === index}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{stage}</strong>
                  {index < furiStages.length - 1 && <ArrowDown />}
                </button>
              ))}
            </div>
            <div className="dmrv-furi-monitor">
              <span>Potential monitoring areas</span>
              <strong>
                {
                  [
                    "Livestock activity",
                    "Manure management",
                    "Biodigester activity",
                    "Biogas production",
                    "Energy use",
                    "Digestate / resource recovery",
                    "Organic fertilizer",
                    "Forage & feed",
                    "Relevant GHG parameters",
                  ][activeFuri]
                }
              </strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section dmrv-architecture-section">
        <div className="shell">
          <div className="dmrv-section-heading">
            <div>
              <div className="dmrv-eyebrow dmrv-eyebrow-green">Conceptual architecture</div>
              <h2>One System. Connected Layers.</h2>
            </div>
            <p>
              A project-specific design can connect field activity, data management, analytics, and
              reporting in a structured architecture.
            </p>
          </div>
          <div className="dmrv-architecture-layers">
            {architectureLayers.map(([number, title, body], index) => (
              <article key={number}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
                <div className="dmrv-layer-tags">
                  {body.split(" · ").map((tag) => (
                    <small key={tag}>{tag}</small>
                  ))}
                </div>
                {index < architectureLayers.length - 1 && <ArrowDown />}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section dmrv-ai-section">
        <div className="shell dmrv-ai-layout">
          <div>
            <div className="dmrv-eyebrow">Analysis with appropriate oversight</div>
            <h2>Where AI Meets Climate Data</h2>
            <p>
              AI and digital tools can assist analysis and data-quality workflows. Methodologies,
              human oversight, and appropriate review remain essential; AI does not independently
              verify carbon credits.
            </p>
            <div className="dmrv-ai-tags">
              {[
                "Emissions estimation",
                "Anomaly detection",
                "Technology performance",
                "Agricultural decision support",
                "Carbon project monitoring",
                "Data quality",
                "Climate investment analysis",
              ].map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
          <div className="dmrv-ai-visual">
            <div className="dmrv-ai-orbit dmrv-orbit-one" />
            <div className="dmrv-ai-orbit dmrv-orbit-two" />
            <div className="dmrv-ai-core">
              <BarChart3 />
              <span>CLIMATE ANALYTICS</span>
            </div>
            <div className="dmrv-ai-node dmrv-ai-node-a">Data</div>
            <div className="dmrv-ai-node dmrv-ai-node-b">Patterns</div>
            <div className="dmrv-ai-node dmrv-ai-node-c">Review</div>
            <div className="dmrv-ai-node dmrv-ai-node-d">Insight</div>
            <small>Conceptual analytics flow · not a deployed product claim</small>
          </div>
        </div>
      </section>

      <section className="section dmrv-finance-section">
        <div className="shell dmrv-finance-layout">
          <div>
            <div className="dmrv-eyebrow dmrv-eyebrow-green">Data for decision support</div>
            <h2>Better Data. Better Climate Decisions.</h2>
            <p>
              Structured climate data can support project assessment, monitoring, reporting, and
              climate-finance decision making. It does not guarantee investment or funding.
            </p>
          </div>
          <div className="dmrv-finance-flow">
            {[
              "Data",
              "Evidence",
              "Project performance",
              "Risk understanding",
              "Investment decision",
            ].map((item, index) => (
              <div key={item}>
                <span>0{index + 1}</span>
                <strong>{item}</strong>
                {index < 4 && <ArrowRight />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dmrv-africa-section">
        <div className="shell dmrv-africa-layout">
          <div className="dmrv-africa-visual">
            <svg
              viewBox="0 0 260 300"
              role="img"
              aria-label="Illustrative outline of Africa without project pins or country coverage"
            >
              <path d="M82 11 111 18 128 12 146 25 169 28 182 47 205 57 215 76 234 88 226 110 239 126 222 145 217 168 199 183 194 207 177 221 167 245 155 276 140 291 127 268 122 242 106 223 100 201 83 189 73 168 57 153 46 134 31 123 39 104 28 87 45 72 46 53 62 43 67 27Z" />
              <path
                className="dmrv-africa-contour"
                d="M82 11 111 18 128 12 146 25 169 28 182 47 205 57 215 76 234 88 226 110 239 126 222 145 217 168 199 183 194 207 177 221 167 245 155 276 140 291 127 268 122 242 106 223 100 201 83 189 73 168 57 153 46 134 31 123 39 104 28 87 45 72 46 53 62 43 67 27Z"
              />
            </svg>
            <span>No project pins or coverage data shown</span>
          </div>
          <div>
            <div className="dmrv-eyebrow dmrv-eyebrow-green">Field realities first</div>
            <h2>Digital MRV Built Around African Realities</h2>
            <p>
              Climate data systems work best when they are designed around the realities of the
              places where data is generated.
            </p>
            <div className="dmrv-africa-equation">
              {[
                "Local knowledge",
                "Field implementation",
                "Digital technology",
                "Science",
                "Engineering",
                "Finance",
              ].map((item, index) => (
                <span key={item}>
                  {item}
                  {index < 5 && <b>+</b>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section dmrv-trust-section">
        <div className="shell">
          <div className="dmrv-section-heading">
            <div>
              <div className="dmrv-eyebrow dmrv-eyebrow-green">Trust & integrity</div>
              <h2>Climate Data Must Be Trusted</h2>
            </div>
            <p>
              Robust MRV depends on an appropriate method, reliable data, careful checks, traceable
              calculations, and suitable review.
            </p>
          </div>
          <div className="dmrv-trust-stack">
            {trustStack.map((item, index) => (
              <div key={item}>
                <span>0{index + 1}</span>
                <strong>{item}</strong>
                {index < trustStack.length - 1 && <ArrowDown />}
              </div>
            ))}
          </div>
          <div className="dmrv-capabilities-line">
            <span>Science</span>
            <i /> <span>Engineering</span>
            <i /> <span>Digital technology</span>
            <i /> <span>Climate finance</span>
            <i /> <span>Agriculture</span>
            <i /> <span>Local knowledge</span>
            <i /> <span>Partnerships</span>
          </div>
        </div>
      </section>

      <section className="section dmrv-demo-section">
        <div className="shell dmrv-demo-layout">
          <div>
            <div className="dmrv-eyebrow">Interactive concept demonstration</div>
            <h2>Watch a Project Record Move Through the System</h2>
            <p>
              A visual explanation of how information could flow from project activity to a climate
              decision. This demonstration is not connected to a backend or live project data.
            </p>
            <button
              type="button"
              className="dmrv-button dmrv-button-light"
              onClick={() => setDemoStage(demoStage < 0 ? 0 : (demoStage + 1) % demoSteps.length)}
            >
              {demoStage < 0 ? "Start a project" : "Advance the concept"} <ArrowRight />
            </button>
            <div className="dmrv-demo-disclaimer">
              Interactive concept demonstration · not a live system
            </div>
          </div>
          <div className="dmrv-demo-track">
            {demoSteps.map((step, index) => (
              <div key={step} className={demoStage >= index ? "is-active" : ""}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
                {index < demoSteps.length - 1 && <ArrowRight />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dmrv-contact-section">
        <div className="shell dmrv-contact-inner">
          <div className="dmrv-eyebrow">Build with a practical partner</div>
          <h2>Build a Digital MRV System for Your Climate Project</h2>
          <p>
            Let’s connect your field activities, climate data, GHG accounting, monitoring,
            analytics, and reporting into a practical digital system.
          </p>
          <div className="dmrv-contact-actions">
            <Link className="dmrv-button dmrv-button-light" to="/contact">
              Discuss your project <ArrowUpRight />
            </Link>
            <a className="dmrv-button dmrv-button-outline" href="mailto:africaclimate568@gmail.com">
              Contact Africa Climate Actions <ArrowUpRight />
            </a>
          </div>
          <a className="dmrv-email" href="mailto:africaclimate568@gmail.com">
            africaclimate568@gmail.com
          </a>
        </div>
      </section>

      <section className="dmrv-final-cta">
        <div className="shell">
          <div className="dmrv-eyebrow">Africa Climate Actions PLC</div>
          <h2>Turn Climate Data Into Climate Action.</h2>
          <p>Measure better. Understand better. Decide better.</p>
          <Link className="dmrv-button dmrv-button-light" to="/contact">
            Start a conversation <ArrowUpRight />
          </Link>
        </div>
      </section>
    </main>
  );
}
