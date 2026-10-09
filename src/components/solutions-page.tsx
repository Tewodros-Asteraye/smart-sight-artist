import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CircleDollarSign,
  Database,
  Leaf,
  MapPin,
  Microscope,
  Network,
  Repeat2,
  Sprout,
  Workflow,
  Zap,
} from 'lucide-react';
import { media, mediaAlt } from '@/lib/media';

const solutions = [
  {
    id: 'advisory',
    title: 'Climate advisory & project development',
    short: 'Move a climate idea toward a practical, investment-ready project.',
    heading: 'From climate ideas to investment-ready projects',
    body: 'We support organizations from the first project idea through feasibility, design, investment planning, finance preparation, and implementation planning.',
    capabilities: ['Climate strategy', 'Feasibility assessment', 'Technical studies', 'Project design', 'Emissions assessment', 'Business modelling', 'Investment planning', 'Climate finance preparation'],
    flow: ['Idea', 'Feasibility', 'Project design', 'Investment planning', 'Finance preparation', 'Implementation'],
    icon: Microscope,
  },
  {
    id: 'energy',
    title: 'Renewable energy & biogas',
    short: 'Connect agricultural resources with renewable energy systems.',
    heading: 'Turning resources into clean energy',
    body: 'Biogas systems can convert livestock manure and other organic waste into renewable energy while producing nutrient-rich digestate. Our work spans assessment, design, technology selection, implementation, and operations planning.',
    capabilities: ['Site assessment', 'System design', 'Technology selection', 'Procurement support', 'Installation & commissioning', 'Operations planning', 'Performance monitoring', 'Technical capacity building'],
    flow: ['Agricultural waste', 'Biodigester', 'Biogas', 'Energy', 'Digestate', 'Agricultural production'],
    icon: Zap,
  },
  {
    id: 'circular',
    title: 'Circular agriculture & resource recovery',
    short: 'Design productive loops for agricultural resources and by-products.',
    heading: 'Waste is not the end of the system. It can be the beginning.',
    body: 'We connect livestock, manure management, renewable energy, fertilizer, forage, crop production, and waste recovery into circular production systems.',
    capabilities: ['Resource recovery', 'Energy generation', 'Nutrient recycling', 'Organic fertilizer', 'Forage production', 'Waste recovery'],
    flow: ['Livestock', 'Manure', 'Biogas', 'Energy', 'Digestate', 'Fertilizer', 'Forage', 'Agriculture'],
    icon: Workflow,
  },
  {
    id: 'agriculture',
    title: 'Climate-smart agriculture',
    short: 'Bring resilience, resource efficiency, and production into view together.',
    heading: 'Productivity and resilience can grow together',
    body: 'Climate-resilient agriculture connects practical production choices with better use of soil, water, nutrients, energy, and organic resources.',
    capabilities: ['Manure management', 'Nutrient recycling', 'Forage production', 'Soil management', 'Water efficiency', 'Low-emission livestock'],
    flow: ['Climate risk', 'Better practices', 'Resource efficiency', 'Productivity', 'Resilience', 'Economic value'],
    icon: Sprout,
  },
  {
    id: 'finance',
    title: 'Carbon markets & climate finance',
    short: 'Build credible evidence and assess suitable finance pathways.',
    heading: 'Turning climate performance into finance',
    body: 'Our support can include project screening, greenhouse gas baselines, emissions calculations, monitoring design, carbon project documentation, financial modelling, and market readiness.',
    capabilities: ['Project screening', 'Baseline development', 'GHG calculations', 'Monitoring design', 'Carbon project documentation', 'Financial modelling', 'Investor engagement', 'Finance preparation', 'Carbon revenue assessment', 'Market readiness'],
    flow: ['Climate project', 'Baseline', 'GHG calculations', 'Monitoring', 'Finance readiness', 'Investment'],
    icon: CircleDollarSign,
  },
  {
    id: 'mrv',
    title: 'Digital MRV & climate data',
    short: 'Connect field activity with clear monitoring and reporting.',
    heading: 'Climate data you can measure, use and trust',
    body: 'Reliable climate action depends on reliable data. We develop digital approaches for field data collection, emissions calculations, monitoring, NDC tracking, reporting, and verification-ready evidence.',
    capabilities: ['Field data collection', 'Data quality checks', 'Emissions calculations', 'Technology monitoring', 'Analytics', 'Verification-ready reporting'],
    flow: ['Field data', 'Validation', 'GHG calculations', 'Monitoring', 'Analytics', 'Reporting'],
    icon: Database,
  },
  {
    id: 'inventories',
    title: 'GHG inventories & NDC support',
    short: 'Connect locally relevant project data with climate planning.',
    heading: 'Connecting project data with climate planning',
    body: 'We support greenhouse gas data systems, emissions calculations, inventory improvement, climate reporting, and NDC implementation support. We emphasize country ownership, transparent calculations, locally relevant data, and practical systems institutions can maintain over time.',
    capabilities: ['GHG data systems', 'Emissions calculations', 'Inventory improvement', 'Climate reporting', 'NDC tracking', 'Institutional data systems'],
    flow: ['Field & project data', 'GHG data system', 'Inventory', 'NDC tracking', 'Climate reporting', 'Better decisions'],
    icon: Network,
  },
  {
    id: 'analytics',
    title: 'AI & climate analytics',
    short: 'Explore how data analysis can inform climate decisions.',
    heading: 'Data into better climate decisions',
    body: 'We explore artificial intelligence and climate analytics for emissions estimation, anomaly detection, technology performance monitoring, agricultural decision support, data quality assessment, and climate investment analysis.',
    capabilities: ['Emissions estimation', 'Anomaly detection', 'Performance monitoring', 'Agricultural decision support', 'Data quality assessment', 'Investment analysis'],
    flow: ['Data', 'AI & analytics', 'Insight', 'Decision', 'Climate action'],
    icon: BarChart3,
  },
];

const journey = [
  ['01', 'Understand', 'Identify the climate and development challenge.'],
  ['02', 'Design', 'Develop a practical technical solution.'],
  ['03', 'Assess', 'Evaluate feasibility, emissions, and economics.'],
  ['04', 'Finance', 'Explore suitable finance and investment pathways.'],
  ['05', 'Implement', 'Move from planning toward real-world implementation.'],
  ['06', 'Measure', 'Monitor performance, emissions, and results.'],
  ['07', 'Scale', 'Develop pathways for replication and growth.'],
];

const buildOptions = [
  ['Develop a climate project', 'From concept toward implementation.'],
  ['Build a renewable energy solution', 'Renewable energy and biogas pathways.'],
  ['Develop a circular agriculture model', 'Connect agriculture, energy, and resource recovery.'],
  ['Build a digital MRV system', 'Turn climate activity into reliable data.'],
  ['Explore climate finance', 'Assess investment and carbon-market opportunities.'],
  ['Develop a climate business', 'Build technically sound and financially practical models.'],
];

const benefitAreas = [
  'Cleaner energy', 'Reduced emissions', 'Productive agriculture', 'Resource efficiency',
  'Stronger climate data', 'Better investment decisions', 'Green businesses',
  'Climate finance', 'Institutional capacity', 'Resilient communities',
];

function Flow({ items, circular = false }: { items: string[]; circular?: boolean }) {
  return (
    <ol className={`solutions-flow${circular ? ' is-circular' : ''}`}>
      {items.map((item, index) => (
        <li key={item}>
          <span>{item}</span>
          {index < items.length - 1 && <ArrowRight aria-hidden="true" />}
        </li>
      ))}
      {circular && <li className="solutions-flow-return"><Repeat2 aria-hidden="true" /><span>Back to livestock</span></li>}
    </ol>
  );
}

function StoryVisual({ id, flow }: { id: string; flow: string[] }) {
  if (id === 'energy') {
    return (
      <div className="solutions-visual energy-visual">
        <img src={media.solar} alt={mediaAlt.solar} loading="lazy" />
        <div className="visual-caption">Renewable energy systems · illustrative photography</div>
        <Flow items={flow} />
      </div>
    );
  }

  if (id === 'mrv') {
    return (
      <div className="solutions-visual mrv-visual" aria-label="Illustrative digital MRV workflow">
        <div className="mrv-window-bar"><span /><span /><span /><strong>CLIMATE DATA WORKSPACE</strong></div>
        <div className="mrv-window-title"><div><span>MONITORING OVERVIEW</span><strong>Project evidence</strong></div><span className="mrv-status">Illustrative</span></div>
        <div className="mrv-metrics">
          <div><span>FIELD DATA</span><strong><Database /></strong><small>Collection & activity records</small></div>
          <div><span>DATA QUALITY</span><strong><Network /></strong><small>Validation checks</small></div>
          <div><span>GHG ACCOUNTING</span><strong><BarChart3 /></strong><small>Calculations & monitoring</small></div>
        </div>
        <div className="mrv-chart">
          <div><span>Monitoring workflow</span><span>Illustrative concept · not live data</span></div>
          <svg viewBox="0 0 600 105" role="img" aria-label="Illustrative monitoring line, without live or quantitative data">
            <path d="M0 82 C70 74 88 44 152 56 S240 81 300 46 S404 55 455 28 S535 38 600 12" />
            <path className="chart-baseline" d="M0 98 H600" />
          </svg>
        </div>
        <div className="mrv-footer"><span><i /> Verification-ready evidence</span><span>Field data <ArrowRight /> Reporting</span></div>
      </div>
    );
  }

  if (id === 'circular') {
    return (
      <div className="solutions-visual circle-visual">
        <div className="circle-core"><Leaf /><strong>Resource<br />recovery</strong></div>
        {flow.slice(0, 6).map((step, index) => <div key={step} className={`circle-node circle-node-${index + 1}`}>{step}</div>)}
        <span className="circle-orbit" aria-hidden="true" />
      </div>
    );
  }

  if (id === 'agriculture') {
    return (
      <div className="solutions-visual agriculture-visual">
        <img src={media.farm} alt={mediaAlt.farm} loading="lazy" />
        <div className="agri-overlay"><Sprout /><span>Production systems<br /><strong>built around resilience</strong></span></div>
        <Flow items={flow} />
      </div>
    );
  }

  if (id === 'finance') {
    return (
      <div className="solutions-visual finance-visual">
        <div className="finance-label"><span>PROJECT READINESS</span><CircleDollarSign /></div>
        <Flow items={flow} />
        <p>Carbon revenue may be one component of a stronger overall business model. It is not guaranteed for every project.</p>
      </div>
    );
  }

  if (id === 'inventories' || id === 'analytics') {
    return (
      <div className="solutions-visual data-visual">
        <div className="data-visual-mark">{id === 'inventories' ? <Network /> : <BarChart3 />}</div>
        <p>{id === 'inventories' ? 'From locally relevant data to climate planning' : 'A considered path from information to action'}</p>
        <Flow items={flow} />
      </div>
    );
  }

  return (
    <div className="solutions-visual advisory-visual">
      <div className="advisory-heading"><span>PROJECT DEVELOPMENT</span><Workflow /></div>
      <Flow items={flow} />
      <div className="advisory-foot"><span>Technical studies</span><span>Business modelling</span><span>Finance preparation</span></div>
    </div>
  );
}

export function SolutionsPage() {
  const [activeSolution, setActiveSolution] = useState(0);
  const active = solutions[activeSolution];

  return (
    <main className="solutions-page">
      <section className="solutions-hero">
        <img className="solutions-hero-image" src={media.landscape} alt={mediaAlt.landscape} fetchPriority="high" />
        <div className="solutions-hero-shade" />
        <div className="shell solutions-hero-content">
          <div className="solutions-eyebrow">Our solutions</div>
          <h1>Practical Climate Solutions.<br /><em>Built for Africa.</em></h1>
          <p>We connect technology, finance, agriculture, energy, data, and local partnerships to develop practical climate solutions that create environmental, economic, and social value.</p>
          <div className="solutions-hero-actions">
            <a className="solutions-button solutions-button-light" href="#solutions-ecosystem">Explore our solutions <ArrowDown /></a>
            <Link className="solutions-button solutions-button-outline" to="/contact">Build a project with us <ArrowUpRight /></Link>
          </div>
          <div className="solutions-hero-note"><span>TECHNOLOGY</span><i /><span>AGRICULTURE</span><i /><span>ENERGY</span><i /><span>FINANCE</span><i /><span>DATA</span></div>
        </div>
        <div className="solutions-hero-index"><span>01 / 08</span><span>One connected ecosystem</span></div>
      </section>

      <section className="section solutions-ecosystem" id="solutions-ecosystem">
        <div className="shell">
          <div className="solutions-section-head">
            <div><div className="eyebrow">One connected ecosystem</div><h2>An Ecosystem of Connected Climate Solutions</h2></div>
            <p>Climate challenges rarely exist in isolation. Our approach connects technology, agriculture, energy, finance, data, engineering, and local knowledge into practical solutions.</p>
          </div>
          <div className="ecosystem-layout">
            <div className="ecosystem-map" aria-label="Interactive map of connected climate solution areas">
              <svg className="ecosystem-lines" viewBox="0 0 100 100" aria-hidden="true">
                <circle cx="50" cy="50" r="34" />
                <path d="M50 50L16 16M50 50L50 8M50 50L84 16M50 50L92 50M50 50L84 84M50 50L50 92M50 50L16 84M50 50L8 50" />
              </svg>
              {solutions.map(({ id, title, icon: Icon }, index) => (
                <button
                  type="button"
                  key={id}
                  className={`ecosystem-node ecosystem-node-${index + 1}${activeSolution === index ? ' is-active' : ''}`}
                  onMouseEnter={() => setActiveSolution(index)}
                  onFocus={() => setActiveSolution(index)}
                  onClick={() => { setActiveSolution(index); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); }}
                  aria-pressed={activeSolution === index}
                  aria-label={`${title}. Select and open this solution`}
                >
                  <Icon aria-hidden="true" /><span>{title}</span>
                </button>
              ))}
              <div className="ecosystem-center"><span>AFRICA CLIMATE ACTIONS</span><strong>Practical climate<br />solutions</strong><i>Connected by design</i></div>
            </div>
            <div className="ecosystem-detail" aria-live="polite">
              <span className="ecosystem-detail-index">CAPABILITY {String(activeSolution + 1).padStart(2, '0')} / 08</span>
              <h3>{active.title}</h3>
              <p>{active.short}</p>
              <a href={`#${active.id}`}>Explore this capability <ArrowRight /></a>
            </div>
          </div>
          <div className="ecosystem-mobile-list" aria-label="Solution areas">
            {solutions.map(({ id, title, short, icon: Icon }, index) => (
              <button type="button" key={id} onClick={() => { setActiveSolution(index); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); }}>
                <Icon aria-hidden="true" /><span><strong>{title}</strong><small>{short}</small></span><ArrowRight aria-hidden="true" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section solutions-stories">
        <div className="shell">
          <div className="solutions-section-head stories-intro">
            <div><div className="eyebrow">Connected capabilities</div><h2>From project idea to practical climate action.</h2></div>
            <p>Each capability can stand on its own. Together, they help shape technically grounded, measurable, and finance-aware climate work.</p>
          </div>
          {solutions.map((solution, index) => (
            <article className={`solution-story${index % 2 ? ' story-reverse' : ''}`} id={solution.id} key={solution.id}>
              <div className="solution-story-visual"><StoryVisual id={solution.id} flow={solution.flow} /></div>
              <div className="solution-story-copy">
                <div className="solution-story-index">SOLUTION {String(index + 1).padStart(2, '0')} <span> / 08</span></div>
                <div className="eyebrow">{solution.title}</div>
                <h2>{solution.heading}</h2>
                <p>{solution.body}</p>
                <ul>{solution.capabilities.map(item => <li key={item}><span aria-hidden="true" />{item}</li>)}</ul>
                {solution.id === 'finance' && <p className="finance-caveat">Carbon finance opportunities depend on project conditions and assessment. Carbon revenue is not assured.</p>}
                {solution.id === 'mrv' && <div className="illustrative-note">Illustrative concept — not live data</div>}
                {solution.id === 'advisory' && <Link className="story-link" to="/contact">Discuss a project <ArrowUpRight /></Link>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section solutions-journey-section">
        <div className="shell">
          <div className="solutions-section-head">
            <div><div className="eyebrow">A practical path</div><h2>From Climate Challenge to Working Solution</h2></div>
            <p>End-to-end project thinking keeps technical design, feasibility, finance, implementation, and measurement connected.</p>
          </div>
          <ol className="solutions-journey">
            {journey.map(([number, title, description]) => <li key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></li>)}
          </ol>
        </div>
      </section>

      <section className="solutions-featured">
        <img src={media.farm} alt={mediaAlt.farm} loading="lazy" />
        <div className="featured-image-note">Illustrative stock photography · not a project photograph</div>
        <div className="featured-shade" />
        <div className="shell featured-inner">
          <div className="featured-copy">
            <div className="solutions-eyebrow">Featured solution</div>
            <h2>Integrated Biogas, Forage and Dairy Circular Economy Project</h2>
            <div className="featured-location"><MapPin /> Furi, Sheger City, Ethiopia</div>
            <p>An integrated circular agriculture concept connecting livestock production, renewable energy, organic fertilizer, forage production, and clean transport energy.</p>
            <div className="featured-benefits"><span>Potential benefit areas</span><ul>{['Reduced methane emissions', 'Renewable energy', 'Improved manure management', 'Nutrient recycling & organic fertilizer', 'Forage and feed production', 'Reduced waste and fossil energy dependence', 'Business and potential carbon finance opportunities'].map(item => <li key={item}>{item}</li>)}</ul></div>
            <Link className="solutions-button solutions-button-light" to="/featured-project">Explore the project <ArrowUpRight /></Link>
          </div>
          <div className="featured-system"><div className="featured-system-label">A connected resource cycle</div><Flow items={['Livestock', 'Manure', 'Biodigester', 'Biogas', 'Energy', 'Digestate', 'Organic fertilizer', 'Forage & feed']} circular /></div>
        </div>
      </section>

      <section className="section solutions-connected">
        <div className="shell connected-inner">
          <div><div className="eyebrow">The difference is in the connections</div><h2>Climate Solutions Work Better When They Work Together.</h2><p>Agriculture, energy, resource recovery, data, finance, carbon, and technology are linked parts of practical climate solutions, not isolated problems.</p></div>
          <div className="connected-network" aria-label="Interconnected solution areas around practical climate solutions">
            <div className="connected-center">Practical climate<br /><strong>solutions</strong></div>
            {['Agriculture', 'Energy', 'Resource recovery', 'Data', 'Finance', 'Carbon', 'Technology'].map((item, index) => <span className={`connected-item connected-item-${index + 1}`} key={item}>{item}</span>)}
            <svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="29" /><path d="M50 50L50 4M50 50L86 15M50 50L97 48M50 50L83 85M50 50L49 98M50 50L15 84M50 50L3 48" /></svg>
          </div>
        </div>
      </section>

      <section className="section solutions-africa">
        <div className="shell africa-inner">
          <div className="africa-map" aria-label="Illustrative outline map of Africa, with no project or coverage data">
            <svg viewBox="0 0 260 300" role="img" aria-label="Illustrative outline of the African continent">
              <path d="M82 11 111 18 128 12 146 25 169 28 182 47 205 57 215 76 234 88 226 110 239 126 222 145 217 168 199 183 194 207 177 221 167 245 155 276 140 291 127 268 122 242 106 223 100 201 83 189 73 168 57 153 46 134 31 123 39 104 28 87 45 72 46 53 62 43 67 27Z" />
              <path className="africa-contour" d="M82 11 111 18 128 12 146 25 169 28 182 47 205 57 215 76 234 88 226 110 239 126 222 145 217 168 199 183 194 207 177 221 167 245 155 276 140 291 127 268 122 242 106 223 100 201 83 189 73 168 57 153 46 134 31 123 39 104 28 87 45 72 46 53 62 43 67 27Z" />
            </svg>
            <span>Designed around Africa</span>
          </div>
          <div className="africa-copy"><div className="eyebrow">Local context. Practical ambition.</div><h2>Designed Around Africa</h2><p>Africa requires climate solutions designed around its own production systems, institutions, markets, resources, and development priorities.</p><p>We combine local implementation experience with international climate methods, digital technologies, engineering, science, and finance.</p><div className="africa-tags">{['People', 'Partnerships', 'Science', 'Engineering', 'Technology', 'Finance', 'Local knowledge'].map(item => <span key={item}>{item}</span>)}</div></div>
        </div>
      </section>

      <section className="section solutions-benefits">
        <div className="shell">
          <div className="solutions-section-head"><div><div className="eyebrow">A wider view of value</div><h2>One Solution. Multiple Benefits.</h2></div><p>We consider the broader environmental, economic, and social value that connected climate solutions can support, without reducing impact to a single number.</p></div>
          <div className="benefit-network">{benefitAreas.map((item, index) => <span key={item} className={`benefit-item benefit-item-${index + 1}`}>{item}</span>)}</div>
        </div>
      </section>

      <section className="section solutions-build">
        <div className="shell">
          <div className="solutions-section-head"><div><div className="eyebrow">Start with the challenge</div><h2>What Climate Solution Are You Building?</h2></div><p>Bring a project idea, a technical question, or a climate investment challenge. We can explore the right starting point together.</p></div>
          <div className="build-grid">{buildOptions.map(([title, body], index) => <Link to="/contact" key={title} className="build-option"><span>0{index + 1}</span><strong>{title}</strong><small>{body}</small><ArrowUpRight aria-hidden="true" /></Link>)}</div>
        </div>
      </section>

      <section className="solutions-cta">
        <div className="shell solutions-cta-inner"><div className="solutions-eyebrow">Africa Climate Actions PLC</div><h2>Have a Climate Challenge?</h2><p>Let’s turn it into a practical solution.</p><div className="solutions-cta-actions"><Link className="solutions-button solutions-button-light" to="/contact">Partner with us <ArrowUpRight /></Link><Link className="solutions-button solutions-button-outline" to="/contact">Develop a project <ArrowUpRight /></Link><Link className="solutions-button solutions-button-outline" to="/carbon-markets">Explore climate finance <ArrowUpRight /></Link></div></div>
      </section>
    </main>
  );
}