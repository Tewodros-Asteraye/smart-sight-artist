import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  CircleDollarSign,
  Database,
  Handshake,
  Leaf,
  MapPin,
  Network,
  Sprout,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import { submitContactInquiry } from "@/lib/contact-inquiry";
import { media, mediaAlt } from "@/lib/media";

const financeStages = [
  [
    "01",
    "Project screening",
    "Clarify the project idea, activities, context, and potential areas for assessment.",
  ],
  [
    "02",
    "Baseline assessment",
    "Consider the appropriate baseline information and project conditions.",
  ],
  [
    "03",
    "GHG calculations",
    "Organize activity data and emissions calculations using suitable methods.",
  ],
  [
    "04",
    "Methodology assessment",
    "Review relevant methodologies and whether they fit the project concept.",
  ],
  [
    "05",
    "Monitoring design",
    "Plan relevant data collection, monitoring parameters, and documentation.",
  ],
  ["06", "Project documentation", "Structure project information and supporting evidence."],
  [
    "07",
    "Financial modelling",
    "Explore costs, revenue assumptions, project viability, and financial structure.",
  ],
  [
    "08",
    "Market readiness",
    "Assess climate-finance and carbon-market readiness without guaranteeing credits or revenue.",
  ],
];

const financePath = [
  "Concept",
  "Feasibility",
  "Technical design",
  "Business model",
  "Financial assessment",
  "Finance preparation",
  "Implementation",
  "Monitoring",
];
const financeQuestions = [
  "Is the technology appropriate?",
  "Are project costs understood?",
  "Is there a credible operating model?",
  "Are emissions calculations based on a suitable methodology?",
  "Is monitoring feasible?",
  "Are risks and revenue assumptions transparent?",
  "Can the project remain viable over time?",
];
const carbonThemes = [
  "Renewable energy",
  "Biogas and organic waste",
  "Agriculture",
  "Livestock",
  "Manure management",
  "Circular resource systems",
  "Land-based projects where appropriate",
];
const businessThemes = [
  "Renewable energy",
  "Biogas",
  "Organic fertilizer",
  "Circular agriculture",
  "Climate-smart livestock",
  "Climate-smart agriculture",
  "Resource recovery",
  "Waste management",
  "Digital climate services",
  "Carbon project services",
  "GHG data systems",
  "Climate analytics",
  "Electric mobility",
  "Low-emission production",
];
const businessCanvas = [
  "Customer segments",
  "Value proposition",
  "Channels",
  "Key activities",
  "Key partners",
  "Resources",
  "Cost structure",
  "Revenue streams",
  "Climate and social value",
];

const organizations = [
  [
    "Ethiopian Ministry of Agriculture",
    "Climate-smart agriculture, livestock development, manure management, renewable energy, greenhouse gas mitigation, and agricultural transformation.",
  ],
  [
    "Ethiopian Ministry of Planning and Development",
    "Climate planning, national development priorities, greenhouse gas reporting, NDC implementation, and climate investment.",
  ],
  [
    "Wolaita Sodo University",
    "Academic and research collaboration, knowledge generation, technology evaluation, capacity development, and applied climate solutions.",
  ],
  [
    "International Livestock Research Institute (ILRI)",
    "Livestock systems, greenhouse gas measurement, manure management, biogas, agricultural research, emissions data, and climate solutions for livestock production.",
  ],
  [
    "World Bank",
    "Climate-resilient development, investment, agriculture, infrastructure, climate finance, and sustainable development.",
  ],
  [
    "United Nations Development Programme (UNDP)",
    "Climate action, development, climate finance, institutional capacity, and sustainable investment.",
  ],
  [
    "United Nations Environment Programme (UNEP)",
    "Environmental sustainability, climate mitigation, resource efficiency, pollution reduction, and climate-related development.",
  ],
];

const impactAreas = [
  ["Cleaner energy", "Renewable energy and biogas pathways can support cleaner energy systems."],
  [
    "Reduced greenhouse gas emissions",
    "Project assessment can consider emissions-related opportunities and appropriate monitoring.",
  ],
  [
    "Improved agricultural productivity",
    "Climate-smart production and resource use can support productive agricultural systems.",
  ],
  [
    "Better manure and waste management",
    "Circular approaches can turn organic waste into a resource for energy and agriculture.",
  ],
  [
    "Stronger climate data",
    "Digital MRV can organize field information, calculations, monitoring, and reporting.",
  ],
  [
    "Improved climate investment decisions",
    "Structured evidence can support project and investment assessment.",
  ],
  [
    "Circular use of agricultural resources",
    "Energy, nutrients, forage, and production can be considered as connected flows.",
  ],
  [
    "New green businesses",
    "Climate technologies can be explored through practical business models.",
  ],
  [
    "Climate finance mobilization",
    "Finance readiness can be assessed alongside project fundamentals.",
  ],
  [
    "Stronger institutional capacity",
    "Data systems and collaboration can support institutional knowledge and practice.",
  ],
  [
    "Resilient communities",
    "Climate solutions can be designed around local priorities and development contexts.",
  ],
];

const whyCapabilities = [
  "Climate advisory",
  "Renewable energy",
  "Biogas",
  "Climate-smart agriculture",
  "Circular agriculture",
  "Carbon finance",
  "Digital MRV",
  "GHG inventories",
  "AI & climate analytics",
  "Climate business models",
];
const audiences = [
  "Businesses",
  "Public institutions",
  "Agricultural organizations",
  "Research institutions",
  "Technology providers",
  "Investors and financiers",
  "Development organizations",
  "Project developers",
];

function EditorialHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  primary = "Explore the page",
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: keyof typeof media;
  imageAlt: string;
  primary?: string;
}) {
  return (
    <section className="engagement-hero">
      <img src={media[image]} alt={imageAlt} fetchPriority="high" />
      <div className="engagement-hero-shade" />
      <div className="shell engagement-hero-content">
        <div className="engagement-eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <div className="engagement-hero-actions">
          <a className="engagement-button engagement-button-light" href="#page-content">
            {primary} <ArrowDown />
          </a>
          <Link className="engagement-button engagement-button-outline" to="/contact">
            Let’s talk <ArrowUpRight />
          </Link>
        </div>
        <small>Illustrative stock photography · </small>
      </div>
    </section>
  );
}

function PageSectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="engagement-section-heading">
      <div>
        <div className="engagement-eyebrow engagement-eyebrow-green">{eyebrow}</div>
        <h2>{title}</h2>
      </div>
      {body && <p>{body}</p>}
    </div>
  );
}

function BottomCta({
  title,
  body,
  primary = "Discuss your project",
}: {
  title: string;
  body: string;
  primary?: string;
}) {
  return (
    <section className="engagement-bottom-cta">
      <div className="shell">
        <div className="engagement-eyebrow">Africa Climate Actions PLC</div>
        <h2>{title}</h2>
        <p>{body}</p>
        <div>
          <Link className="engagement-button engagement-button-light" to="/contact">
            {primary} <ArrowUpRight />
          </Link>
          <Link className="engagement-button engagement-button-outline" to="/contact">
            Contact our team <ArrowUpRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function CarbonMarketsPage() {
  const [activeStage, setActiveStage] = useState(0);
  const [activeFinance, setActiveFinance] = useState(0);
  const [selectedTheme, setSelectedTheme] = useState(0);

  return (
    <main className="engagement-page carbon-page">
      <EditorialHero
        eyebrow="Carbon markets & climate finance"
        title="Turning Climate Performance into Finance"
        subtitle="From climate project concepts to measurable, finance-ready opportunities."
        image="solar"
        imageAlt={mediaAlt.solar}
        primary="Assess a climate project"
      />
      <section className="section engagement-intro" id="page-content">
        <div className="shell engagement-intro-grid">
          <span className="engagement-index">01 / Finance readiness</span>
          <div>
            <h2>Climate Projects Need More Than Good Intentions</h2>
            <p>
              Climate finance can help support projects that reduce or remove greenhouse gas
              emissions, improve resource efficiency, strengthen resilience, and create economic
              value. Each opportunity depends on its own technical, financial, and operating
              context.
            </p>
          </div>
        </div>
        <div className="shell finance-journey">
          {[
            "Climate challenge",
            "Project design",
            "Technical feasibility",
            "Finance",
            "Implementation",
            "Monitoring",
            "Long-term value",
          ].map((item, index) => (
            <div key={item}>
              <span>0{index + 1}</span>
              <strong>{item}</strong>
              {index < 6 && <ArrowRight />}
            </div>
          ))}
        </div>
      </section>
      <section className="section engagement-soft">
        <div className="shell">
          <PageSectionHeading
            eyebrow="Carbon project development"
            title="A considered path from concept to readiness"
            body="Project development steps are connected. Select a stage to see what it may involve; specific requirements depend on the project and applicable standards."
          />
          <div className="finance-stage-layout">
            <div className="finance-stage-list">
              {financeStages.map(([number, title], index) => (
                <button
                  key={number}
                  type="button"
                  className={activeStage === index ? "is-active" : ""}
                  onClick={() => setActiveStage(index)}
                  aria-pressed={activeStage === index}
                >
                  <span>{number}</span>
                  <strong>{title}</strong>
                  <ArrowRight />
                </button>
              ))}
            </div>
            <div className="finance-stage-detail" aria-live="polite">
              <span>ASSESSMENT STAGE / {financeStages[activeStage][0]}</span>
              <h3>{financeStages[activeStage][1]}</h3>
              <p>{financeStages[activeStage][2]}</p>
              <div>
                <CircleDollarSign />
                <span>
                  Project screening · baselines · GHG calculations · monitoring · finance
                  preparation
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <PageSectionHeading
            eyebrow="Potential areas for assessment"
            title="Carbon opportunities depend on project context."
            body="These are potential project areas for assessment, not guaranteed carbon-credit opportunities."
          />
          <div className="carbon-theme-layout">
            <div className="carbon-theme-photo">
              <img src={media.farm} alt={mediaAlt.farm} loading="lazy" />
              <span>Representative agriculture context · illustrative stock photography</span>
            </div>
            <div className="carbon-theme-list">
              {carbonThemes.map((item, index) => (
                <button
                  key={item}
                  type="button"
                  className={selectedTheme === index ? "is-active" : ""}
                  onClick={() => setSelectedTheme(index)}
                  aria-pressed={selectedTheme === index}
                >
                  <span>0{index + 1}</span>
                  <strong>{item}</strong>
                  <ArrowUpRight />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section engagement-dark">
        <div className="shell">
          <PageSectionHeading
            eyebrow="Finance readiness journey"
            title="Build strong projects. Not just carbon revenue."
            body="Climate finance should support technologies and business models that can continue delivering benefits over time."
          />
          <div className="finance-readiness">
            {financePath.map((item, index) => (
              <button
                key={item}
                type="button"
                className={activeFinance === index ? "is-active" : ""}
                onClick={() => setActiveFinance(index)}
                aria-pressed={activeFinance === index}
              >
                <span>0{index + 1}</span>
                <strong>{item}</strong>
                {index < financePath.length - 1 && <ArrowRight />}
              </button>
            ))}
          </div>
          <div className="finance-questions">
            <h3>Questions worth working through</h3>
            <div>
              {financeQuestions.map((item) => (
                <p key={item}>
                  <Check />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell climate-business-value">
          <div>
            <div className="engagement-eyebrow engagement-eyebrow-green">Beyond carbon credits</div>
            <h2>Build strong projects. Not just carbon revenue.</h2>
            <p>
              Projects can be assessed through technical performance, revenue potential, operating
              costs, climate benefits, social value, and opportunities for scaling.
            </p>
            <blockquote>
              Carbon revenue should be one component of a stronger overall business model, not the
              sole justification for a project.
            </blockquote>
            <Link className="engagement-text-link" to="/climate-business-models">
              Explore climate business models <ArrowRight />
            </Link>
          </div>
          <div className="finance-stack">
            {[
              "Core business model",
              "Technical performance",
              "Climate benefits",
              "Financial structure",
              "Potential carbon revenue",
            ].map((item, index) => (
              <div key={item}>
                <span>0{index + 1}</span>
                <strong>{item}</strong>
                {index === 4 && <small>Potential · project dependent</small>}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section engagement-sage">
        <div className="shell digital-connect">
          <div>
            <div className="engagement-eyebrow engagement-eyebrow-green">
              Evidence and monitoring
            </div>
            <h2>Digital MRV can connect field data with project reporting.</h2>
            <p>
              Digital monitoring can support field data collection, baseline comparison, emissions
              estimation, monitoring, documentation, and verification-ready records.
            </p>
            <Link className="engagement-button engagement-button-green" to="/digital-mrv">
              Explore Digital MRV <ArrowUpRight />
            </Link>
          </div>
          <div className="digital-connect-flow">
            {["Field data", "Baseline", "GHG calculations", "Monitoring", "Reporting"].map(
              (item, index) => (
                <div key={item}>
                  <span>0{index + 1}</span>
                  <strong>{item}</strong>
                  {index < 4 && <ArrowRight />}
                </div>
              ),
            )}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <PageSectionHeading
            eyebrow="Climate finance pathways"
            title="A clear preparation path, not a promise of funding."
            body="Financing structures depend on the project, investor requirements, financial viability, and available programs."
          />
          <div className="finance-process">
            {[
              "Project idea",
              "Technical assessment",
              "Business case",
              "Financial preparation",
              "Potential financing discussions",
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
      <BottomCta
        title="Have a Climate Project Worth Developing?"
        body="Let’s explore the technical, financial, and climate dimensions of your project."
        primary="Assess a climate project"
      />
    </main>
  );
}

export function ClimateBusinessModelsPage() {
  const [activeOpportunity, setActiveOpportunity] = useState(0);
  const [activeCanvas, setActiveCanvas] = useState(0);
  const [activeFuri, setActiveFuri] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [selectedValue, setSelectedValue] = useState("Customer value");
  const opportunityCopy = [
    "Energy pathways depend on the technology, customer needs, operating model, and local context.",
    "Biogas connects organic resources with energy and digestate management.",
    "Organic fertilizer may form one part of a nutrient-recovery business model.",
    "Circular agriculture connects resource recovery, production, and markets.",
    "Livestock systems can connect feeding, manure, energy, and climate data.",
    "Agricultural approaches need to reflect production, soil, water, and resource contexts.",
    "Resource recovery considers how by-products can become productive inputs.",
    "Waste management can connect collection, treatment, and resource-use opportunities.",
    "Digital services can organize climate and operational data for users.",
    "Carbon project services can support assessment and project documentation.",
    "GHG data systems can support inventory and reporting workflows.",
    "Climate analytics can help examine data and support decisions.",
    "Electric mobility can be explored within appropriate climate business contexts.",
    "Low-emission production systems connect technology with practical operations.",
  ];
  const developmentSteps = [
    "Identify a need",
    "Understand the market",
    "Select the technology",
    "Assess feasibility",
    "Design the business model",
    "Assess financing",
    "Plan implementation",
    "Monitor performance",
    "Explore scaling",
  ];

  return (
    <main className="engagement-page business-page">
      <EditorialHero
        eyebrow="Climate business models"
        title="Building Businesses Around Climate Solutions"
        subtitle="We help connect climate technologies with commercial opportunities, practical implementation, and long-term value."
        image="farm"
        imageAlt={mediaAlt.farm}
        primary="Develop a climate business"
      />
      <section className="section engagement-intro" id="page-content">
        <div className="shell engagement-intro-grid">
          <span className="engagement-index">01 / Opportunity</span>
          <div>
            <h2>Climate solutions can create value when the system works.</h2>
            <p>
              The right business model depends on the market, customer, technology, operating costs,
              local context, and financial assumptions. Explore how those elements can connect.
            </p>
          </div>
        </div>
        <div className="shell business-opportunity-flow">
          {[
            "Climate challenge",
            "Technology",
            "Customer needs",
            "Business model",
            "Financing",
            "Implementation",
            "Value creation",
          ].map((item, index) => (
            <div key={item}>
              <span>0{index + 1}</span>
              <strong>{item}</strong>
              {index < 6 && <ArrowRight />}
            </div>
          ))}
        </div>
      </section>
      <section className="section engagement-soft">
        <div className="shell">
          <PageSectionHeading
            eyebrow="Opportunity explorer"
            title="Explore climate business areas"
            body="Select an area to see a concise, conceptual overview. Commercial fit and revenue mechanisms depend on market and project evidence."
          />
          <div className="opportunity-explorer">
            <div className="opportunity-list">
              {businessThemes.map((item, index) => (
                <button
                  key={item}
                  type="button"
                  className={activeOpportunity === index ? "is-active" : ""}
                  onClick={() => setActiveOpportunity(index)}
                  aria-pressed={activeOpportunity === index}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item}</strong>
                  <ArrowRight />
                </button>
              ))}
            </div>
            <div className="opportunity-detail" aria-live="polite">
              <span>BUSINESS AREA / {String(activeOpportunity + 1).padStart(2, "0")}</span>
              <h3>{businessThemes[activeOpportunity]}</h3>
              <p>{opportunityCopy[activeOpportunity]}</p>
              <div>
                <b>Consider alongside</b>
                <span>Customers · Operations · Costs · Climate value</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section engagement-dark">
        <div className="shell">
          <PageSectionHeading
            eyebrow="Circular economy concept"
            title="One resource loop. Connected value opportunities."
            body="The Furi concept illustrates how agriculture, energy, nutrient recycling, and feed systems can connect. It is not a report of measured commercial outcomes."
          />
          <div className="business-furi-layout">
            <div className="business-furi-loop">
              {[
                "Livestock",
                "Manure",
                "Biodigester",
                "Biogas",
                "Energy",
                "Digestate",
                "Organic fertilizer",
                "Forage & feed",
              ].map((stage, index) => (
                <button
                  key={stage}
                  type="button"
                  className={activeFuri === index ? "is-active" : ""}
                  onClick={() => setActiveFuri(index)}
                  aria-pressed={activeFuri === index}
                >
                  <span>0{index + 1}</span>
                  <strong>{stage}</strong>
                  {index < 7 && <ArrowRight />}
                </button>
              ))}
            </div>
            <div className="business-furi-center">
              <Sprout />
              <span>FURI · SHEGER CITY, ETHIOPIA</span>
              <strong>
                Circular agriculture
                <br />
                project concept
              </strong>
              <small>Potential resource flows · </small>
            </div>
          </div>
          <div className="business-furi-note" aria-live="polite">
            Selected system component:{" "}
            <strong>
              {
                [
                  "Livestock",
                  "Manure",
                  "Biodigester",
                  "Biogas",
                  "Energy",
                  "Digestate",
                  "Organic fertilizer",
                  "Forage & feed",
                ][activeFuri]
              }
            </strong>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <PageSectionHeading
            eyebrow="Business development"
            title="From an identified need to a considered model"
            body="A business concept is strengthened by understanding its customer, technology, operating requirements, financial assumptions, and monitoring approach."
          />
          <div className="business-development-list">
            {developmentSteps.map((step, index) => (
              <button
                key={step}
                type="button"
                className={activeStep === index ? "is-active" : ""}
                onClick={() => setActiveStep(index)}
                aria-pressed={activeStep === index}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
                {index < developmentSteps.length - 1 && <ArrowRight />}
              </button>
            ))}
          </div>
          <div className="business-active-step" aria-live="polite">
            <span>DEVELOPMENT STEP / {String(activeStep + 1).padStart(2, "0")}</span>
            <strong>{developmentSteps[activeStep]}</strong>
            <p>
              Consider this step in relation to the market, operations, technology, and local
              context.
            </p>
          </div>
        </div>
      </section>
      <section className="section engagement-sage">
        <div className="shell">
          <PageSectionHeading
            eyebrow="Illustrative planning tool"
            title="Explore a business model canvas"
            body="A conceptual planning framework, not a completed assessment of a specific business."
          />
          <div className="business-canvas">
            <div className="business-canvas-grid">
              {businessCanvas.map((item, index) => (
                <button
                  key={item}
                  type="button"
                  className={activeCanvas === index ? "is-active" : ""}
                  onClick={() => setActiveCanvas(index)}
                  aria-pressed={activeCanvas === index}
                >
                  <span>0{index + 1}</span>
                  <strong>{item}</strong>
                </button>
              ))}
            </div>
            <div className="business-canvas-detail" aria-live="polite">
              <Workflow />
              <span>CANVAS ELEMENT / 0{activeCanvas + 1}</span>
              <h3>{businessCanvas[activeCanvas]}</h3>
              <p>
                Use this element to examine the assumptions, evidence, and decisions relevant to a
                prospective climate business.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell business-value-layout">
          <div>
            <div className="engagement-eyebrow engagement-eyebrow-green">Connected dimensions</div>
            <h2>Business fundamentals and climate value belong in the same conversation.</h2>
            <p>
              Business models can be explored through customer value, technical feasibility,
              operating costs, financial sustainability, climate benefits, social value, and
              potential scalability.
            </p>
            <Link className="engagement-text-link" to="/carbon-markets">
              Explore carbon markets & climate finance <ArrowRight />
            </Link>
            <Link className="engagement-text-link engagement-secondary-link" to="/projects">
              Explore project themes <ArrowRight />
            </Link>
          </div>
          <div className="business-value-selector">
            {[
              "Customer value",
              "Technical feasibility",
              "Operating costs",
              "Financial sustainability",
              "Climate benefits",
              "Social value",
              "Scalability",
            ].map((item, index) => (
              <button
                key={item}
                type="button"
                className={selectedValue === item ? "is-active" : ""}
                onClick={() => setSelectedValue(item)}
                aria-pressed={selectedValue === item}
              >
                <span>0{index + 1}</span>
                {item}
                <Check />
              </button>
            ))}
          </div>
        </div>
      </section>
      <BottomCta
        title="Have an Idea for a Climate Business?"
        body="Let’s explore how technology, market needs, climate benefits, and business fundamentals can come together."
        primary="Develop a climate business"
      />
    </main>
  );
}

export function PartnersEngagementPage() {
  const [activeOrganization, setActiveOrganization] = useState(0);
  const [activeEcosystem, setActiveEcosystem] = useState(0);
  const ecosystem = [
    [
      "Government",
      "Public institutions can engage around climate planning, agriculture, and development priorities.",
    ],
    [
      "Research",
      "Research collaboration can support knowledge generation and technology evaluation.",
    ],
    [
      "Finance",
      "Finance stakeholders can explore climate investment and appropriate project pathways.",
    ],
    [
      "Technology",
      "Technology expertise can support system design, data, energy, and implementation.",
    ],
    [
      "Development",
      "Development organizations can engage on climate action, capacity, and sustainable investment.",
    ],
    [
      "Private sector",
      "Businesses can develop commercial models and practical climate technologies.",
    ],
    [
      "Implementation",
      "Local expertise and partners help projects respond to operational contexts.",
    ],
  ];
  const collaborationSteps = [
    "Identify shared priorities",
    "Define the opportunity",
    "Develop the concept",
    "Assess feasibility",
    "Mobilize expertise",
    "Support implementation",
    "Monitor and learn",
    "Explore scaling",
  ];

  return (
    <main className="engagement-page partners-page">
      <EditorialHero
        eyebrow="Partners & engagement"
        title="Partnerships That Turn Climate Ambition into Action"
        subtitle="Connecting expertise, institutions, technology, finance, and local knowledge to advance practical climate solutions."
        image="landscape"
        imageAlt={mediaAlt.landscape}
        primary="Explore collaboration"
      />
      <section className="section engagement-intro" id="page-content">
        <div className="shell engagement-intro-grid">
          <span className="engagement-index">01 / Collaboration</span>
          <div>
            <h2>Climate action depends on connected expertise.</h2>
            <p>
              Public institutions, research organizations, development partners, businesses,
              financiers, and communities can bring complementary knowledge to climate solutions.
            </p>
          </div>
        </div>
        <div className="shell partners-ecosystem">
          <div className="partners-ecosystem-network">
            {ecosystem.map(([name], index) => (
              <button
                key={name}
                type="button"
                className={activeEcosystem === index ? "is-active" : ""}
                onClick={() => setActiveEcosystem(index)}
                aria-pressed={activeEcosystem === index}
              >
                <span>0{index + 1}</span>
                {name}
              </button>
            ))}
          </div>
          <div className="partners-ecosystem-center">
            <Handshake />
            <strong>
              Practical climate
              <br />
              solutions
            </strong>
            <p>{ecosystem[activeEcosystem][1]}</p>
          </div>
        </div>
      </section>
      <section className="section engagement-soft">
        <div className="shell">
          <PageSectionHeading
            eyebrow="Organizations and partnership ecosystem"
            title="Shared priorities. Complementary expertise."
            body="The organizations below are named in company content with relevant engagement or collaboration areas. Inclusion here is not a claim of formal partnership, endorsement, funding, or client status."
          />
          <div className="organization-layout">
            <div className="organization-list">
              {organizations.map(([name], index) => (
                <button
                  type="button"
                  key={name}
                  className={activeOrganization === index ? "is-active" : ""}
                  onClick={() => setActiveOrganization(index)}
                  aria-pressed={activeOrganization === index}
                >
                  <span>0{index + 1}</span>
                  <strong>{name}</strong>
                  <ArrowRight />
                </button>
              ))}
            </div>
            <article className="organization-detail" aria-live="polite">
              <span>ENGAGEMENT FOCUS / 0{activeOrganization + 1}</span>
              <h3>{organizations[activeOrganization][0]}</h3>
              <p>{organizations[activeOrganization][1]}</p>
              <small>
                Collaboration focus described in official company content; relationship status is
                not implied.
              </small>
            </article>
          </div>
        </div>
      </section>
      <section className="section engagement-dark">
        <div className="shell">
          <PageSectionHeading
            eyebrow="A considered approach"
            title="How we collaborate"
            body="The engagement journey depends on the opportunity, partner roles, project scope, and local context."
          />
          <div className="partners-journey">
            {collaborationSteps.map((step, index) => (
              <div key={step}>
                <span>0{index + 1}</span>
                <strong>{step}</strong>
                {index < collaborationSteps.length - 1 && <ArrowRight />}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <PageSectionHeading
            eyebrow="Areas for collaboration"
            title="Work together across practical climate challenges."
          />
          <div className="collaboration-areas">
            {[
              "Climate project development",
              "Applied research",
              "Renewable energy & biogas",
              "Circular agriculture",
              "Digital MRV & climate data",
              "GHG inventories",
              "Climate finance",
              "Capacity development",
              "Climate business models",
            ].map((item, index) => (
              <Link
                to={
                  index === 4
                    ? "/digital-mrv"
                    : index === 8
                      ? "/climate-business-models"
                      : index === 6
                        ? "/carbon-markets"
                        : "/contact"
                }
                key={item}
              >
                <span>0{index + 1}</span>
                <strong>{item}</strong>
                <ArrowUpRight />
              </Link>
            ))}
          </div>
          <div className="partners-impact-link">
            <span>Partnerships can connect expertise with intended outcomes.</span>
            <Link className="engagement-text-link" to="/impact">
              Explore impact priorities <ArrowRight />
            </Link>
          </div>
        </div>
      </section>
      <section className="section engagement-sage">
        <div className="shell partners-audience">
          <div>
            <div className="engagement-eyebrow engagement-eyebrow-green">Open engagement</div>
            <h2>Bring expertise, questions, and shared priorities.</h2>
            <p>
              Potential collaborators include research organizations, public institutions, investors
              and financiers, technology providers, businesses, development organizations, and
              project developers.
            </p>
            <Link className="engagement-button engagement-button-green" to="/contact">
              Explore a partnership <ArrowUpRight />
            </Link>
          </div>
          <div className="audience-tags">
            {audiences.map((item) => (
              <span key={item}>
                <Users />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
      <BottomCta
        title="Let's Explore a Partnership"
        body="Good climate solutions grow from clear priorities, relevant expertise, and practical collaboration."
        primary="Explore a partnership"
      />
    </main>
  );
}

export function ImpactPrioritiesPage() {
  const [activeImpact, setActiveImpact] = useState(0);
  const [activeTransition, setActiveTransition] = useState(0);
  const transitions = [
    ["Activity", "An action or intervention within a project."],
    ["Output", "An immediate product or service resulting from activity."],
    ["Outcome", "A change that can be assessed with suitable indicators and evidence."],
    [
      "Longer-term impact",
      "A broader intended contribution over time, not assumed from activity alone.",
    ],
  ];

  return (
    <main className="engagement-page impact-page">
      <EditorialHero
        eyebrow="Impact priorities"
        title="Climate Action with Measurable Results"
        subtitle="We focus on solutions that connect emissions reduction with cleaner energy, productive agriculture, resource efficiency, stronger data, and resilient communities."
        image="landscape"
        imageAlt={mediaAlt.landscape}
        primary="Explore impact priorities"
      />
      <section className="section engagement-intro" id="page-content">
        <div className="shell engagement-intro-grid">
          <span className="engagement-index">01 / Our philosophy</span>
          <div>
            <h2>Climate solutions should create value beyond emissions reductions.</h2>
            <p>
              Potential value can extend to energy access, agricultural productivity, resource
              efficiency, employment, food systems, and local economic development. Each outcome
              depends on project design and evidence.
            </p>
          </div>
        </div>
        <div className="shell impact-dimensions">
          {[
            ["Climate value", "Emissions · resilience · resource use", Leaf],
            ["Economic value", "Enterprises · investment · productivity", CircleDollarSign],
            ["Social & development value", "Communities · institutions · livelihoods", Users],
          ].map(([title, body, Icon]) => {
            const ValueIcon = Icon as typeof Leaf;
            return (
              <article key={title as string}>
                <ValueIcon />
                <h3>{title as string}</h3>
                <p>{body as string}</p>
              </article>
            );
          })}
        </div>
      </section>
      <section className="section engagement-soft">
        <div className="shell">
          <PageSectionHeading
            eyebrow="Impact priority explorer"
            title="One climate agenda. Multiple areas of value."
            body="Select a priority to see how it relates to the company’s official climate and development focus. These are intended areas, not quantified results."
          />
          <div className="impact-explorer">
            <div className="impact-priority-list">
              {impactAreas.map(([title], index) => (
                <button
                  type="button"
                  key={title}
                  className={activeImpact === index ? "is-active" : ""}
                  onClick={() => setActiveImpact(index)}
                  aria-pressed={activeImpact === index}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{title}</strong>
                  <ArrowRight />
                </button>
              ))}
            </div>
            <div className="impact-detail" aria-live="polite">
              <span>PRIORITY / {String(activeImpact + 1).padStart(2, "0")} OF 11</span>
              <h3>{impactAreas[activeImpact][0]}</h3>
              <p>{impactAreas[activeImpact][1]}</p>
              <div className="impact-qualifier">
                <Check /> Potential contribution · project-specific · no measured outcome implied
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section engagement-dark">
        <div className="shell">
          <PageSectionHeading
            eyebrow="One intervention can connect outcomes"
            title="Consider the full system, not a single metric."
            body="The Furi biogas and circular agriculture concept illustrates how resource flows can connect potential value areas. This is not a record of measured results."
          />
          <div className="impact-chain">
            {[
              "Biogas",
              "Renewable energy",
              "Manure management",
              "Resource recovery",
              "Organic fertilizer",
              "Circular agriculture",
              "Potential climate benefits",
            ].map((item, index) => (
              <div key={item}>
                <span>0{index + 1}</span>
                <strong>{item}</strong>
                {index < 6 && <ArrowRight />}
              </div>
            ))}
          </div>
          <Link className="engagement-text-link engagement-text-link-light" to="/featured-project">
            Explore the featured project concept <ArrowUpRight />
          </Link>
        </div>
      </section>
      <section className="section">
        <div className="shell impact-measure-layout">
          <div>
            <div className="engagement-eyebrow engagement-eyebrow-green">
              Measurement and evidence
            </div>
            <h2>Impact should be measured, not just described.</h2>
            <p>
              Appropriate indicators, field data, greenhouse gas accounting, digital MRV,
              monitoring, reporting, data quality, and transparent calculations can help build a
              stronger evidence base.
            </p>
            <Link className="engagement-button engagement-button-green" to="/digital-mrv">
              Explore Digital MRV <ArrowUpRight />
            </Link>
          </div>
          <div className="impact-evidence-stack">
            {[
              "Appropriate indicators",
              "Field data",
              "GHG accounting",
              "Monitoring",
              "Data quality",
              "Transparent reporting",
            ].map((item, index) => (
              <div key={item}>
                <span>0{index + 1}</span>
                <strong>{item}</strong>
                <Check />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section engagement-sage">
        <div className="shell">
          <PageSectionHeading
            eyebrow="From work to evidence"
            title="Separate activities, outputs, outcomes, and longer-term impact."
            body="A clear results chain helps distinguish what a project does from what can be measured and what it intends to contribute over time."
          />
          <div className="impact-transition">
            {transitions.map(([title], index) => (
              <button
                type="button"
                key={title}
                className={activeTransition === index ? "is-active" : ""}
                onClick={() => setActiveTransition(index)}
                aria-pressed={activeTransition === index}
              >
                <span>0{index + 1}</span>
                <strong>{title}</strong>
                {index < 3 && <ArrowRight />}
              </button>
            ))}
          </div>
          <div className="impact-transition-detail" aria-live="polite">
            <span>RESULTS CHAIN / {String(activeTransition + 1).padStart(2, "0")}</span>
            <h3>{transitions[activeTransition][0]}</h3>
            <p>{transitions[activeTransition][1]}</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <PageSectionHeading
            eyebrow="Connected pages"
            title="Explore the systems behind impact."
          />
          <div className="impact-related">
            {[
              ["Projects", "Explore project themes and the Furi concept.", "/projects"],
              [
                "Digital MRV",
                "See how data can support measurement and reporting.",
                "/digital-mrv",
              ],
              [
                "Climate business models",
                "Connect technology, markets, and operations.",
                "/climate-business-models",
              ],
              [
                "Carbon markets & climate finance",
                "Explore assessment and finance pathways.",
                "/carbon-markets",
              ],
            ].map(([title, body, href]) => (
              <Link key={title} to={href as "/projects"}>
                <span>{title}</span>
                <p>{body}</p>
                <ArrowUpRight />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <BottomCta
        title="Let's Build Climate Solutions That Create Lasting Value."
        body="Discuss an impact-focused project grounded in evidence, practical implementation, and local priorities."
        primary="Discuss an impact-focused project"
      />
    </main>
  );
}

export function WhyAfricaPage() {
  const [activeCapability, setActiveCapability] = useState(0);
  const [activeApproach, setActiveApproach] = useState(0);
  const approach = [
    "Understand",
    "Design",
    "Assess",
    "Finance",
    "Implement",
    "Measure",
    "Report",
    "Scale",
  ];
  const approachCopy = [
    "Explore the climate and development context.",
    "Shape a practical technical approach.",
    "Consider feasibility, emissions, and economics.",
    "Prepare for appropriate finance pathways.",
    "Plan real-world delivery.",
    "Monitor relevant activity and evidence.",
    "Structure reporting and learning.",
    "Consider long-term operation and replication.",
  ];

  return (
    <main className="engagement-page why-page">
      <EditorialHero
        eyebrow="Why Africa Climate Actions"
        title="Local Understanding. Global Climate Ambition."
        subtitle="Africa needs climate solutions designed around its production systems, institutions, markets, resources, and development priorities."
        image="landscape"
        imageAlt={mediaAlt.landscape}
        primary="Explore our approach"
      />
      <section className="section engagement-intro" id="page-content">
        <div className="shell engagement-intro-grid">
          <span className="engagement-index">01 / The central idea</span>
          <div>
            <h2>Climate solutions must work in the real world.</h2>
            <p>
              Effective climate work connects science, engineering, finance, digital technologies,
              local knowledge, partnerships, implementation, and measurement.
            </p>
          </div>
        </div>
        <div className="shell why-equation">
          {[
            "Science",
            "Engineering",
            "Technology",
            "Finance",
            "Local knowledge",
            "Partnerships",
          ].map((item, index) => (
            <span key={item}>
              {item}
              {index < 5 && <b>+</b>}
            </span>
          ))}
          <strong>= Practical climate solutions</strong>
        </div>
      </section>
      <section className="section engagement-soft">
        <div className="shell why-context-layout">
          <div>
            <div className="engagement-eyebrow engagement-eyebrow-green">
              A place-specific approach
            </div>
            <h2>Design around context. Build for use.</h2>
            <p>
              Climate solutions benefit from attention to production systems, agricultural
              realities, energy requirements, available resources, institutions, market conditions,
              financing realities, and development priorities.
            </p>
            <p>
              These contexts differ across places and projects; solutions should not assume a single
              model fits everywhere.
            </p>
          </div>
          <div className="why-context-list">
            {[
              "Local production systems",
              "Agricultural realities",
              "Energy requirements",
              "Available resources",
              "Institutional contexts",
              "Market conditions",
              "Financing realities",
              "Development priorities",
            ].map((item, index) => (
              <div key={item}>
                <span>0{index + 1}</span>
                {item}
                <ArrowUpRight />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <PageSectionHeading
            eyebrow="Connected expertise"
            title="Capabilities that work across boundaries."
            body="Explore how the company’s official areas of work can connect rather than operate as isolated services."
          />
          <div className="why-capability-layout">
            <div className="why-capability-map">
              {whyCapabilities.map((item, index) => (
                <button
                  key={item}
                  type="button"
                  className={activeCapability === index ? "is-active" : ""}
                  onClick={() => setActiveCapability(index)}
                  aria-pressed={activeCapability === index}
                >
                  <span>0{index + 1}</span>
                  {item}
                </button>
              ))}
            </div>
            <div className="why-capability-detail" aria-live="polite">
              <Network />
              <span>CAPABILITY / {String(activeCapability + 1).padStart(2, "0")} OF 10</span>
              <h3>{whyCapabilities[activeCapability]}</h3>
              <p>
                Connect this capability with relevant technical, commercial, data, and
                implementation considerations for each project.
              </p>
              <div>
                Science <i /> Engineering <i /> Finance <i /> Local knowledge
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section engagement-dark">
        <div className="shell">
          <PageSectionHeading
            eyebrow="From concept to implementation"
            title="A practical project pathway."
            body="The approach can span early concepts, feasibility, project design, financing preparation, implementation, monitoring, reporting, and scaling depending on project scope."
          />
          <div className="why-approach-list">
            {approach.map((step, index) => (
              <button
                key={step}
                type="button"
                className={activeApproach === index ? "is-active" : ""}
                onClick={() => setActiveApproach(index)}
                aria-pressed={activeApproach === index}
              >
                <span>0{index + 1}</span>
                <strong>{step}</strong>
                {index < approach.length - 1 && <ArrowRight />}
              </button>
            ))}
          </div>
          <div className="why-approach-detail" aria-live="polite">
            <span>PROJECT PATHWAY / 0{activeApproach + 1}</span>
            <h3>{approach[activeApproach]}</h3>
            <p>{approachCopy[activeApproach]}</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <PageSectionHeading
            eyebrow="Principles in practice"
            title="Practicality, measurement, connection, and growth."
          />
          <div className="why-principles">
            {[
              ["Practical", "Solutions designed around implementation realities."],
              ["Measurable", "Climate action supported by data, monitoring, and evidence."],
              [
                "Connected",
                "Technology, agriculture, energy, finance, and local knowledge working together.",
              ],
              [
                "Scalable",
                "Approaches designed with long-term operation and potential replication in mind.",
              ],
            ].map(([title, body], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section engagement-sage">
        <div className="shell why-furi-layout">
          <div>
            <div className="engagement-eyebrow engagement-eyebrow-green">
              Featured project concept
            </div>
            <h2>Resource recovery, connected to production.</h2>
            <p>
              The Furi integrated biogas, forage, and dairy concept illustrates potential
              connections among agriculture, energy, and resource recovery. It is not presented here
              as a measured result.
            </p>
            <Link className="engagement-text-link" to="/featured-project">
              Explore the Furi concept <ArrowUpRight />
            </Link>
          </div>
          <div className="why-furi-flow">
            {[
              "Livestock",
              "Manure",
              "Biogas",
              "Energy",
              "Digestate",
              "Fertilizer",
              "Forage",
              "Livestock",
            ].map((item, index) => (
              <div key={`${item}-${index}`}>
                <span>0{index + 1}</span>
                <strong>{item}</strong>
                {index < 7 && <ArrowRight />}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell why-audiences">
          <div>
            <div className="engagement-eyebrow engagement-eyebrow-green">Who we work with</div>
            <h2>Different perspectives. Shared climate priorities.</h2>
            <p>
              Potential collaborators include businesses, public institutions, agricultural
              organizations, research institutions, technology providers, investors and financiers,
              development organizations, and project developers. These are audience groups, not
              claims of existing clients.
            </p>
          </div>
          <div className="audience-tags">
            {audiences.map((item) => (
              <span key={item}>
                <Users />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="section engagement-dark">
        <div className="shell why-commitment">
          <div className="engagement-eyebrow">Our commitment</div>
          <h2>Practical Solutions. Transparent Data. Meaningful Partnerships.</h2>
          <p>
            We focus on technically grounded approaches, realistic business models, credible data,
            appropriate monitoring, and collaboration shaped around project context.
          </p>
          <div>
            <Link className="engagement-button engagement-button-light" to="/services">
              Explore our solutions <ArrowUpRight />
            </Link>
            <Link className="engagement-button engagement-button-outline" to="/contact">
              Let’s talk <ArrowUpRight />
            </Link>
          </div>
        </div>
      </section>
      <BottomCta
        title="Have a Climate Challenge Worth Solving?"
        body="Let’s explore how the right combination of expertise, technology, finance, and partnerships can turn your idea into a practical pathway."
        primary="Explore our approach"
      />
    </main>
  );
}

const inquiryTopics = [
  "Climate Project Development",
  "Carbon Markets & Climate Finance",
  "Digital MRV & Climate Data",
  "Renewable Energy & Biogas",
  "Climate Business Models",
  "Partnerships & Research",
  "General Inquiry",
];
const projectStages = [
  "Early Idea",
  "Concept Development",
  "Feasibility Assessment",
  "Seeking Financing",
  "Implementation",
  "Monitoring and Reporting",
  "Partnership Discussion",
  "Other",
];

export function LetsTalkPage() {
  const [topic, setTopic] = useState("General Inquiry");
  const [submissionState, setSubmissionState] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submissionState === "sending") return;

    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const formData = new FormData(form);
    if (formData.get("consent") !== "on") return;

    const getValue = (field: string) => {
      const value = formData.get(field);
      return typeof value === "string" ? value : "";
    };

    setSubmissionState("sending");
    try {
      const result = await submitContactInquiry({
        data: {
          name: getValue("name"),
          organization: getValue("organization"),
          email: getValue("email"),
          phone: getValue("phone"),
          country: getValue("country"),
          inquiryType: getValue("inquiryType"),
          projectStage: getValue("projectStage"),
          message: getValue("message"),
          consent: true,
          website: getValue("website"),
        },
      });
      setSubmissionState(result.accepted ? "success" : "error");
    } catch {
      setSubmissionState("error");
    }
  };

  return (
    <main className="engagement-page talk-page">
      <section className="talk-hero">
        <div className="shell talk-hero-layout">
          <div className="talk-hero-copy">
            <div className="engagement-eyebrow engagement-eyebrow-green">Let’s talk</div>
            <h1>Let’s Build the Next Climate Solution Together.</h1>
            <p>
              Tell us about your climate challenge, project idea, business opportunity, research
              interest, or partnership proposal. Let’s explore the next practical step.
            </p>
            <div className="talk-contact-quick">
              <a href="mailto:africaclimate568@gmail.com">
                africaclimate568@gmail.com <ArrowUpRight />
              </a>
              <a href="tel:+251923275050">
                +251 923 275 050 <ArrowUpRight />
              </a>
            </div>
          </div>
          <div className="talk-hero-image">
            <img src={media.landscape} alt={mediaAlt.landscape} fetchPriority="high" />
            <span>
              Representative African agricultural landscape · illustrative stock photography
            </span>
          </div>
        </div>
      </section>
      <section className="section talk-form-section" id="contact-form">
        <div className="shell">
          <PageSectionHeading
            eyebrow="Start a conversation"
            title="What would you like to discuss?"
            body="Choose a topic to personalize the inquiry form, then share the details you’re comfortable providing."
          />
          <div className="talk-topic-list" role="group" aria-label="Select an inquiry topic">
            {inquiryTopics.map((item, index) => (
              <button
                key={item}
                type="button"
                className={topic === item ? "is-active" : ""}
                onClick={() => setTopic(item)}
                aria-pressed={topic === item}
              >
                <span>0{index + 1}</span>
                <strong>{item}</strong>
                <Check />
              </button>
            ))}
          </div>
          <div className="talk-form-layout">
            <form
              className="talk-form"
              onSubmit={handleSubmit}
              aria-busy={submissionState === "sending"}
            >
              <div className="talk-form-head">
                <span>INQUIRY FORM</span>
                <small>Required fields are marked *</small>
              </div>
              <div className="talk-honeypot" aria-hidden="true">
                <label htmlFor="website">Leave this field blank</label>
                <input id="website" name="website" tabIndex={-1} autoComplete="off" />
              </div>
              <div className="talk-form-grid">
                <label>
                  Full name *<input name="name" autoComplete="name" required />
                </label>
                <label>
                  Organization
                  <input name="organization" autoComplete="organization" />
                </label>
                <label>
                  Work email *<input name="email" type="email" autoComplete="email" required />
                </label>
                <label>
                  Phone number
                  <input name="phone" type="tel" autoComplete="tel" />
                </label>
                <label>
                  Country
                  <input name="country" autoComplete="country-name" />
                </label>
                <label>
                  Inquiry type *
                  <select
                    name="inquiryType"
                    value={topic}
                    onChange={(event) => setTopic(event.target.value)}
                    required
                  >
                    {inquiryTopics.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Project stage
                  <select name="projectStage" defaultValue="">
                    <option value="">Select a stage</option>
                    {projectStages.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </label>
                <label className="talk-message-label">
                  Message *
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us briefly about your project, challenge, goals, or the type of collaboration you are exploring."
                  />
                </label>
              </div>
              <label className="talk-consent">
                <input type="checkbox" name="consent" required />
                <span>
                  I agree to have the information above included in an email to Africa Climate
                  Actions. Please review the <Link to="/privacy">privacy notice</Link>.
                </span>
              </label>
              <button
                className="engagement-button engagement-button-green"
                type="submit"
                disabled={submissionState === "sending"}
              >
                {submissionState === "sending" ? "Sending inquiry…" : "Prepare email inquiry"}
                {submissionState !== "sending" && <ArrowUpRight />}
              </button>
              <p className="talk-form-disclaimer">
                Your inquiry is sent to Africa Climate Actions only after the email provider
                confirms acceptance. Submitted form content is not stored by this website.
              </p>
              <p
                className={`talk-form-status is-${submissionState}`}
                role="status"
                aria-live="polite"
              >
                {submissionState === "success" &&
                  "Thank you. Your inquiry has been sent successfully to Africa Climate Actions PLC. Our team will review it and get back to you."}
                {submissionState === "error" &&
                  "We could not send your inquiry right now. Please try again or contact us directly at africaclimate568@gmail.com."}
              </p>
            </form>
            <aside className="talk-direct-contact">
              <div className="engagement-eyebrow engagement-eyebrow-green">Direct contact</div>
              <h3>Africa Climate Actions PLC</h3>
              <address>
                Nefas Silk Lafto Sub City,
                <br />
                Woreda 01
                <br />
                Addis Ababa, Ethiopia
              </address>
              <a href="tel:+251923275050">
                +251 923 275 050 <ArrowUpRight />
              </a>
              <a href="mailto:africaclimate568@gmail.com">
                africaclimate568@gmail.com <ArrowUpRight />
              </a>
              <div className="talk-response">
                <span>WHAT HAPPENS NEXT?</span>
                <p>
                  You share your idea <ArrowRight /> We understand your need <ArrowRight /> We
                  explore a suitable pathway <ArrowRight /> We discuss potential next steps
                </p>
                <small>
                  An intended engagement approach, not a guaranteed response time or service
                  commitment.
                </small>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <section className="engagement-dark talk-invitation">
        <div className="shell">
          <div className="engagement-eyebrow">Partnership invitation</div>
          <h2>Good Climate Solutions Start With Good Conversations.</h2>
          <p>
            Businesses, researchers, institutions, project developers, investors, and technology
            partners are welcome to get in touch.
          </p>
          <a className="engagement-button engagement-button-light" href="#contact-form">
            Send an inquiry <ArrowUpRight />
          </a>
        </div>
      </section>
    </main>
  );
}
