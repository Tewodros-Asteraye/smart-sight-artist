import { Link } from '@tanstack/react-router';
import { ArrowRight, ArrowUpRight, ChevronRight, FlaskConical, Cog, Landmark, Cpu, Handshake, Users, Zap, Leaf, BarChart3, Database, Compass, Recycle } from 'lucide-react';
import { useState } from 'react';
import { team } from '@/lib/site-content';
import { media, mediaAlt } from '@/lib/media';
import { Button } from '@/components/ui/button';
import partnerMoa from '@/assets/partner-moa.png.asset.json';
import partnerMopd from '@/assets/partner-mopd.png.asset.json';
import partnerWsu from '@/assets/partner-wsu.jpg.asset.json';
import partnerIlri from '@/assets/partner-ilri.png.asset.json';
import partnerWorldbank from '@/assets/partner-worldbank.png.asset.json';
import partnerUndp from '@/assets/partner-undp.png.asset.json';
import partnerUnep from '@/assets/partner-unep.jpg.asset.json';

const capabilities = [
  { name: 'Science', icon: FlaskConical, note: 'Climate science and research methods ground every project.' },
  { name: 'Engineering', icon: Cog, note: 'Technical design turns concepts into functioning systems.' },
  { name: 'Finance', icon: Landmark, note: 'Climate finance and investment planning make projects viable.' },
  { name: 'Digital technologies', icon: Cpu, note: 'Data systems and digital tools support measurement and decisions.' },
  { name: 'Local knowledge', icon: Users, note: 'Solutions are designed around local production systems and institutions.' },
  { name: 'Partnerships', icon: Handshake, note: 'Collaboration connects government, research, finance, and communities.' },
];

const journey = [
  ['01', 'Concept development'],
  ['02', 'Feasibility'],
  ['03', 'Financing'],
  ['04', 'Implementation'],
  ['05', 'Monitoring'],
  ['06', 'Reporting'],
  ['07', 'Scaling'],
];

const expertise = [
  { icon: Zap, name: 'Renewable Energy & Biogas', body: 'Site assessment, system design, technology selection, installation, commissioning, and performance monitoring for biogas and renewable energy systems.' },
  { icon: Leaf, name: 'Climate-Smart Agriculture', body: 'Improved manure management, nutrient recycling, forage production, soil management, and climate-resilient agricultural technologies.' },
  { icon: BarChart3, name: 'Carbon Markets & Climate Finance', body: 'Project screening, greenhouse gas baselines, emissions calculations, monitoring design, financial modelling, and climate finance preparation.' },
  { icon: Database, name: 'Digital MRV & Climate Data', body: 'Digital solutions for greenhouse gas inventories, NDC tracking, field data collection, emissions calculations, and verification-ready reporting.' },
  { icon: Compass, name: 'Climate Advisory & Business Models', body: 'Climate strategy, feasibility assessment, project design, investment planning, and business modelling around climate technologies.' },
  { icon: Recycle, name: 'Circular Bioeconomy & Resource Recovery', body: 'Converting agricultural waste into energy, fertilizer, feed-related resources, and other productive inputs.' },
];

const ideaFlow = ['Idea', 'Science', 'Engineering', 'Finance', 'Implementation', 'Measurement', 'Scale'];

const ecosystem = ['Government', 'Research', 'Finance', 'Technology', 'Development', 'Private sector', 'Communities'];

const partnerLogos = [
  { src: partnerMoa.url, name: 'Ethiopian Ministry of Agriculture' },
  { src: partnerMopd.url, name: 'Ethiopian Ministry of Planning and Development' },
  { src: partnerWsu.url, name: 'Wolaita Sodo University' },
  { src: partnerIlri.url, name: 'International Livestock Research Institute (ILRI)' },
  { src: partnerWorldbank.url, name: 'World Bank' },
  { src: partnerUndp.url, name: 'United Nations Development Programme (UNDP)' },
  { src: partnerUnep.url, name: 'United Nations Environment Programme (UNEP)' },
];

const principles = [
  ['Practical', 'Turn climate ideas into practical projects.'],
  ['Measurable', 'Design projects around measurable results.'],
  ['Connected', 'Connect climate action with technology, finance, agriculture, energy, data and partnerships.'],
  ['Scalable', 'Develop solutions that can move from concept toward implementation and scaling.'],
];

function CapabilityNetwork() {
  const [active, setActive] = useState(0);
  const Active = capabilities[active] ?? capabilities[0]!;
  return (
    <div className="capnet">
      <div className="capnet-center" aria-live="polite">
        <span className="capnet-step">{String(active + 1).padStart(2, '0')} / 06</span>
        <strong>{Active.name}</strong>
        <p>{Active.note}</p>
        <em>Practical Climate Solutions</em>
      </div>
      <div className="capnet-nodes" role="tablist" aria-label="Our capabilities">
        {capabilities.map((cap, i) => {
          const Icon = cap.icon;
          return (
            <button
              key={cap.name}
              role="tab"
              aria-selected={i === active}
              className={`capnet-node ${i === active ? 'is-active' : ''}`}
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
            >
              <span className="capnet-dot"><Icon /></span>
              <span className="capnet-name">{cap.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function AboutPage() {
  return (
    <main>
      {/* 1. Hero */}
      <section className="hero about-hero">
        <img className="hero-media" src={media.landscape.url} alt={mediaAlt.landscape} fetchPriority="high" />
        <div className="shell hero-inner">
          <div className="breadcrumb hero-breadcrumb"><Link to="/">Home</Link><ChevronRight /><span>About</span></div>
          <div className="eyebrow">About Africa Climate Actions</div>
          <h1>Turning Climate Challenges into Practical Solutions</h1>
          <p className="hero-description">Africa Climate Actions PLC is an African climate solutions company working at the intersection of technology, agriculture, energy, climate finance, and digital innovation.</p>
          <div className="hero-actions">
            <Button asChild variant="brand" size="lg"><Link to="/services">Explore Our Solutions <ArrowRight /></Link></Button>
            <Button asChild variant="heroOutline" size="lg"><Link to="/contact">Partner With Us <ArrowUpRight /></Link></Button>
          </div>
        </div>
      </section>

      {/* 2. Who we are */}
      <section className="section">
        <div className="shell about-split">
          <figure className="about-split-media">
            <img src={media.farm.url} alt={mediaAlt.farm} loading="lazy" />
            <figcaption className="image-caption">Illustrative stock photography · Unsplash. Not a photograph of a company project.</figcaption>
          </figure>
          <div className="about-split-copy">
            <div className="eyebrow">Who we are</div>
            <h2>An African climate solutions company.</h2>
            <p>Africa Climate Actions PLC is an African climate solutions company working at the intersection of technology, agriculture, energy, climate finance, and digital innovation.</p>
            <p>We support governments, businesses, development organizations, research institutions, investors, and communities to design and implement climate solutions that deliver environmental, economic, and social benefits.</p>
            <p>Our work spans project design, technical advisory, engineering, renewable energy development, greenhouse gas accounting, carbon finance, digital MRV, climate smart agriculture, circular bioeconomy, and climate related business development.</p>
          </div>
        </div>
      </section>

      {/* 3. Our belief */}
      <section className="about-belief">
        <div className="shell">
          <div className="eyebrow">What we believe</div>
          <p className="about-belief-statement">Climate action should go beyond plans and reports.</p>
          <p className="about-belief-support">It should result in functioning technologies, stronger enterprises, measurable emissions reductions, better use of resources, new investment opportunities, and improved livelihoods.</p>
        </div>
      </section>

      {/* 4. Mission + Vision */}
      <section className="section">
        <div className="shell mv-grid">
          <article className="mv-panel mv-mission">
            <div className="eyebrow">Our mission</div>
            <p>To develop and scale practical climate solutions that reduce emissions, strengthen resilience, create economic opportunities, and support Africa’s transition toward sustainable development.</p>
          </article>
          <article className="mv-panel mv-vision">
            <div className="eyebrow">Our vision</div>
            <p>An Africa where climate action supports cleaner energy, productive agriculture, resilient communities, competitive businesses, and inclusive economic growth.</p>
          </article>
        </div>
      </section>

      {/* 5. How we work */}
      <section className="section about-how">
        <div className="shell">
          <div className="section-intro">
            <div>
              <div className="eyebrow">How we work</div>
              <h2>Six capabilities, one outcome.</h2>
            </div>
            <p className="section-description">We combine science, engineering, finance, digital technologies, local knowledge, and partnerships — all connected to one goal: practical climate solutions.</p>
          </div>
          <CapabilityNetwork />
        </div>
      </section>

      {/* 6. Project journey */}
      <section className="section about-journey-section">
        <div className="shell">
          <div className="section-intro">
            <div>
              <div className="eyebrow">Our project journey</div>
              <h2>From early concept to scaling.</h2>
            </div>
            <p className="section-description">Our projects are designed around measurable results — from early concept development through feasibility, financing, implementation, monitoring, reporting, and scaling.</p>
          </div>
          <ol className="journey">
            {journey.map(([num, label]) => (
              <li key={num} className="journey-step">
                <span className="journey-num">{num}</span>
                <span className="journey-label">{label}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 7. Areas of expertise */}
      <section className="section">
        <div className="shell">
          <div className="section-intro">
            <div>
              <div className="eyebrow">What we do</div>
              <h2>Our areas of expertise.</h2>
            </div>
            <p className="section-description">Connected capabilities across energy, agriculture, finance, data, and the circular bioeconomy.</p>
          </div>
          <div className="pillar-grid">
            {expertise.map((area, i) => {
              const Icon = area.icon;
              return (
                <article className="pillar-card" key={area.name}>
                  <div className="pillar-top">
                    <span className="pillar-icon"><Icon /></span>
                    <span className="pillar-num">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h3>{area.name}</h3>
                  <p>{area.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Africa-first */}
      <section className="about-africa">
        <div className="shell about-africa-inner">
          <div className="about-africa-copy">
            <div className="eyebrow">Why Africa</div>
            <h2>Built Around Africa</h2>
            <p>Africa requires climate solutions designed around its own production systems, institutions, markets, resources, and development priorities.</p>
            <p>We combine local implementation experience with international climate methods, digital technologies, engineering, science, and finance.</p>
          </div>
          <div className="about-africa-tags" aria-label="Elements of our Africa-first approach">
            {['Technology', 'Agriculture', 'Energy', 'Finance', 'Data', 'Partnerships'].map(tag => (
              <span key={tag} className="africa-tag">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Idea to implementation */}
      <section className="section">
        <div className="shell">
          <div className="section-intro">
            <div>
              <div className="eyebrow">Our approach</div>
              <h2>From idea to implementation.</h2>
            </div>
          </div>
          <ol className="ideaflow">
            {ideaFlow.map((step, i) => (
              <li key={step} className="ideaflow-step">
                <span className="ideaflow-name">{step}</span>
                {i < ideaFlow.length - 1 && <ArrowRight className="ideaflow-arrow" aria-hidden="true" />}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 10. Our people */}
      <section className="section team-section">
        <div className="shell">
          <div className="section-intro">
            <div>
              <div className="eyebrow">Our people</div>
              <h2>The people connecting the possibilities.</h2>
            </div>
          </div>
          <div className="team-grid">
            {team.map(([name, role, description]) => (
              <article className="team-person" key={name}>
                <h3>{name}</h3>
                <div className="team-role">{role}</div>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Partnership ecosystem */}
      <section className="section about-eco">
        <div className="shell">
          <div className="section-intro">
            <div>
              <div className="eyebrow">Who we work with</div>
              <h2>We Don't Work Alone</h2>
            </div>
            <p className="section-description">Climate action requires collaboration across government, research, finance, technology, development, and the private sector.</p>
          </div>
          <div className="eco-tags">
            {ecosystem.map(item => <span key={item} className="eco-tag">{item}</span>)}
          </div>
          <div className="eco-logos">
            {partnerLogos.map(p => (
              <figure key={p.name} className="eco-logo">
                <img src={p.src} alt={`${p.name} logo`} loading="lazy" />
                <figcaption>{p.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Principles */}
      <section className="section">
        <div className="shell">
          <div className="section-intro">
            <div>
              <div className="eyebrow">Our principles</div>
              <h2>How we think about climate work.</h2>
            </div>
          </div>
          <div className="principle-grid">
            {principles.map(([name, body]) => (
              <article key={name} className="principle">
                <h3>{name}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 13. CTA */}
      <section className="about-cta">
        <div className="shell about-cta-inner">
          <div className="eyebrow">Let's build together</div>
          <h2>Have a climate challenge? Let's turn it into a practical solution.</h2>
          <div className="hero-actions">
            <Button asChild variant="brand" size="lg"><Link to="/contact">Partner With Us <ArrowUpRight /></Link></Button>
            <Button asChild variant="heroOutline" size="lg"><Link to="/services">Explore Our Solutions <ArrowRight /></Link></Button>
          </div>
        </div>
      </section>
    </main>
  );
}
