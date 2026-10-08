import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowUpRight, Sun, Sprout, Coins, Radio, Briefcase, Recycle, Activity, Gauge, Flag, MapPin, Cpu } from 'lucide-react';
import { cycleSteps, pages } from '@/lib/site-content';
import moa from '@/assets/partner-moa.png.asset.json';
import mopd from '@/assets/partner-mopd.png.asset.json';
import wsu from '@/assets/partner-wsu.jpg.asset.json';
import ilri from '@/assets/partner-ilri.png.asset.json';
import worldbank from '@/assets/partner-worldbank.png.asset.json';
import undp from '@/assets/partner-undp.png.asset.json';
import unep from '@/assets/partner-unep.jpg.asset.json';

const services = [
  { icon: Sun, title: 'Renewable Energy & Biogas', body: 'Site assessment, system design, installation, commissioning and performance monitoring.', to: '/services' as const },
  { icon: Sprout, title: 'Climate Smart Agriculture', body: 'Manure management, nutrient recycling, forage production and low-emission livestock systems.', to: '/services' as const },
  { icon: Coins, title: 'Carbon Markets & Climate Finance', body: 'Project screening, GHG baselines, emissions reduction calculations and investor engagement.', to: '/carbon-markets' as const },
  { icon: Radio, title: 'Digital MRV & Climate Data', body: 'GHG inventories, NDC tracking, field data collection, reporting and verification.', to: '/digital-mrv' as const },
  { icon: Briefcase, title: 'Climate Advisory & Business Models', body: 'Climate strategy, feasibility, project design, investment planning and business modelling.', to: '/climate-business-models' as const },
  { icon: Recycle, title: 'Circular Bioeconomy & Resource Recovery', body: 'Converting agricultural waste into energy, fertilizer, feed-related resources and productive inputs.', to: '/services' as const },
];

export function ServicesGrid() {
  return <div className="pillar-grid">{services.map(({ icon: Icon, title, body, to }, i) => <Link to={to} key={title} className="pillar-card"><div className="pillar-top"><span className="pillar-icon"><Icon /></span><span className="pillar-num">0{i + 1}</span></div><h3>{title}</h3><p>{body}</p><span className="text-link">Learn more <ArrowUpRight /></span></Link>)}</div>;
}

const impacts = ['Productive starting point', 'Waste becomes a resource', 'Methane capture', 'Renewable gas', 'Heat, power & potential vehicle fuel', 'Nutrient-rich by-product', 'Organic fertilizer for soils', 'Feed returns to the herd'];

export function CircularRing() {
  const [active, setActive] = useState(0);
  const n = cycleSteps.length;
  return <div className="ring-wrap">
    <div className="ring" role="group" aria-label="Circular economy steps">
      <svg viewBox="0 0 100 100" className="ring-track" aria-hidden="true"><circle cx="50" cy="50" r="40" /><circle cx="50" cy="50" r="40" className="ring-progress" style={{ strokeDashoffset: 251.3 * (1 - (active + 1) / n) }} /></svg>
      {cycleSteps.map(([name], i) => { const a = (i / n) * 2 * Math.PI - Math.PI / 2; return <button key={name} type="button" className={`ring-node ${i === active ? 'is-active' : ''}`} style={{ left: `${50 + 40 * Math.cos(a)}%`, top: `${50 + 40 * Math.sin(a)}%` }} onClick={() => setActive(i)} aria-pressed={i === active}><span className="ring-dot">{i + 1}</span><span className="ring-name">{name}</span></button>; })}
      <div className="ring-center" aria-live="polite"><span className="ring-step">Step {active + 1} of {n}</span><strong>{cycleSteps[active][0]}</strong><em>{impacts[active]}</em><p>{cycleSteps[active][1]}</p></div>
    </div>
  </div>;
}

export function MrvDashboard() {
  const bars = [38, 52, 46, 64, 58, 72, 68, 80];
  return <div className="dash" aria-label="Illustrative digital MRV dashboard layout">
    <div className="dash-head"><span><Cpu />Digital MRV · concept preview</span><span className="dash-tag">Illustrative · no live data</span></div>
    <div className="dash-grid">
      <div className="dash-tile"><span className="dash-label"><MapPin />Field data collection</span><div className="dash-rows">{['Activity records', 'Site surveys', 'Technology logs'].map(r => <div key={r}><span>{r}</span><i /></div>)}</div></div>
      <div className="dash-tile"><span className="dash-label"><Activity />Sensor feeds</span><svg viewBox="0 0 200 60" className="dash-line" aria-hidden="true"><polyline points="0,40 25,34 50,38 75,22 100,28 125,16 150,24 175,12 200,18" /></svg></div>
      <div className="dash-tile dash-wide"><span className="dash-label"><Gauge />GHG emissions calculations · baseline vs project</span><div className="dash-bars" aria-hidden="true">{bars.map((h, i) => <span key={i} style={{ height: `${h}%` }} />)}</div></div>
      <div className="dash-tile"><span className="dash-label"><Flag />NDC indicators</span><div className="dash-rows">{['Energy', 'Agriculture', 'Waste'].map(r => <div key={r}><span>{r}</span><i /></div>)}</div></div>
    </div>
  </div>;
}

const partnerLogos: Record<string, string> = {
  'Ethiopian Ministry of Agriculture': moa.url,
  'Ethiopian Ministry of Planning and Development': mopd.url,
  'Wolaita Sodo University': wsu.url,
  'International Livestock Research Institute (ILRI)': ilri.url,
  'World Bank': worldbank.url,
  'United Nations Development Programme (UNDP)': undp.url,
  'United Nations Environment Programme (UNEP)': unep.url,
};

export function PartnersGrid() {
  const list = pages.partners.sections.map(p => p.title);
  return <div className="marquee" aria-label="Partner organisations">
    <ul className="sr-only">{list.map(t => <li key={t}>{t}</li>)}</ul>
    <div className="marquee-track" aria-hidden="true">{[...list, ...list].map((t, i) => <div className="marquee-item" key={i}><img src={partnerLogos[t]} alt="" loading="lazy" /><span>{t}</span></div>)}</div>
  </div>;
}
