import ethiopiaCattle from '@/assets/projects/ethiopia-cattle.webp';
import biogasCleanCooking from '@/assets/projects/biogas-clean-cooking.webp';
import soilCrops from '@/assets/projects/soil-crops.webp';
import wasteBiogasFacility from '@/assets/projects/waste-biogas-facility.webp';
import cngCleanTransport from '@/assets/projects/cng-clean-transport.webp';
import organicBioFertilizer from '@/assets/projects/organic-bio-fertilizer.webp';
import organicWasteSorting from '@/assets/projects/organic-waste-sorting.webp';
import agroforestryCanopy from '@/assets/projects/agroforestry-canopy.webp';
import soilCarbonRegeneration from '@/assets/projects/soil-carbon-regeneration.webp';
import geospatialDroneSurvey from '@/assets/projects/geospatial-drone-survey.webp';
import eastAfricaHarvest from '@/assets/projects/east-africa-harvest.webp';
import dairyImprovedFeed from '@/assets/projects/dairy-improved-feed.webp';
import dairyMilkProduction from '@/assets/projects/dairy-milk-production.webp';
import digitalMrvDashboard from '@/assets/projects/digital-mrv-dashboard.webp';
import earthObservationSatellite from '@/assets/projects/earth-observation-satellite.webp';
import fieldSensorStation from '@/assets/projects/field-sensor-station.webp';
import { media, mediaAlt } from '@/lib/media';

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
};

export type ProjectCoordinates = {
  lat: number;
  lng: number;
  label: string;
  precision: string;
};

export type ActiveProject = {
  slug: string;
  aliases?: string[];
  index: string;
  title: string;
  location: string;
  status: string;
  summary: string;
  focusAreas: string[];
  heroImage: {
    src: string;
    alt: string;
    caption: string;
  };
  gallery: GalleryImage[];
  coordinates: ProjectCoordinates;
  overview: string;
  challenge: string;
  solution: string;
  system: {
    step: string;
    detail: string;
  }[];
  technology: string;
  climateBenefits: string[];
  economicSocialBenefits: string[];
  digitalMrv: string;
  partners: string;
  quickFacts: {
    label: string;
    value: string;
  }[];
};

export const activeProjects: ActiveProject[] = [
  {
    slug: 'circular-biogas-digestate-crop-production',
    aliases: ['circular-biogas'],
    index: '01',
    title: 'Circular Biogas, Digestate and Crop Production',
    location: 'Kindo Koysha District, Wolaita Zone, South Ethiopia Regional State, Ethiopia',
    status: 'Active · Implementation',
    summary:
      'Household livestock manure biogas systems that convert cattle manure into clean cooking energy and organic fertilizer, creating a circular production system linking livestock, manure, renewable energy, soil fertility, crops, forage, and household energy.',
    focusAreas: [
      'Clean cooking',
      'Biogas',
      'Organic fertilizer',
      'Forage',
      'Circular bioeconomy',
      'Climate mitigation',
    ],
    heroImage: {
      src: ethiopiaCattle,
      alt: 'Cattle herd in rural Ethiopia',
      caption: 'Illustrative photograph: cattle husbandry in Ethiopia. Feedstock foundation for household biodigestion.',
    },
    gallery: [
      {
        src: ethiopiaCattle,
        alt: 'Smallholder cattle in Ethiopia',
        caption: 'Livestock manure is collected daily to supply household anaerobic digesters.',
      },
      {
        src: biogasCleanCooking,
        alt: 'Clean cooking flame from biogas',
        caption: 'Biogas provides smokeless, renewable household cooking energy, replacing firewood.',
      },
      {
        src: soilCrops,
        alt: 'Young crops growing in nutrient-rich soil',
        caption: 'Digestate is returned to farm soils as rich organic fertilizer for food crops and forage.',
      },
    ],
    coordinates: {
      lat: 6.932,
      lng: 37.534,
      label: 'Kindo Koysha District, Wolaita Zone',
      precision: 'Approximate district center (Kindo Koysha, Wolaita Zone)',
    },
    quickFacts: [
      { label: 'Location', value: 'Kindo Koysha District, Wolaita Zone, Ethiopia' },
      { label: 'Scale', value: 'Smallholder household systems' },
      { label: 'Feedstock', value: 'Cattle manure & livestock waste' },
      { label: 'Energy Output', value: 'Renewable biogas for household cooking' },
      { label: 'Bio-Product', value: 'Nutrient-rich organic digestate fertilizer' },
      { label: 'Circular Loop', value: 'Livestock → Manure → Biogas → Digestate → Forage & Crops' },
    ],
    overview:
      'Africa Climate Actions PLC is implementing household livestock manure biogas systems that convert cattle manure into clean cooking energy and organic fertilizer. The biogas replaces firewood used for household cooking, while nutrient-rich digestate is returned to farms as organic fertilizer for food crops and livestock feed production. The project creates a circular production system linking livestock, manure, renewable energy, soil fertility, crops, forage, and household energy.',
    challenge:
      'Rural households in the Wolaita Zone face severe pressure on forest and biomass resources due to heavy reliance on firewood for daily cooking, causing persistent indoor smoke pollution and respiratory hazards. Concurrently, unmanaged cattle manure in homesteads loses valuable agricultural nutrients to open volatilization and generates fugitive greenhouse gas emissions rather than fueling local productivity.',
    solution:
      'Household biogas systems capture the energy value of cattle manure for clean cooking, and the resulting digestate is returned to farms as organic fertilizer, linking livestock, manure, renewable energy, soil fertility, crops, forage, and household energy in one circular system.',
    system: [
      {
        step: 'Livestock Manure Collection',
        detail: 'Cattle manure is gathered daily from household corrals and feeding areas.',
      },
      {
        step: 'Household Biodigestion',
        detail: 'Manure is fed into sealed anaerobic digester units installed near the homestead.',
      },
      {
        step: 'Clean Biogas Recovery',
        detail: 'Methane-rich biogas is piped directly to domestic low-pressure cooking stoves.',
      },
      {
        step: 'Firewood Displacement',
        detail: 'Household cooking shifts from gathering forest firewood to smokeless renewable biogas.',
      },
      {
        step: 'Digestate Slurry Discharge',
        detail: 'Effluent rich in bioavailable nitrogen, phosphorus, and potassium is collected.',
      },
      {
        step: 'Organic Fertilizer Application',
        detail: 'Digestate is applied to household farm plots, enriching soil organic matter.',
      },
      {
        step: 'Crops & Forage Production',
        detail: 'Enhanced crop yields and high-protein livestock forage close the circular bioeconomy loop.',
      },
    ],
    technology:
      'Household-scale anaerobic digestion systems designed for local livestock-keeping conditions, featuring durable fixed-dome and continuous-flow modular digesters with corrosion-resistant gas conveyance, low-pressure cookstoves, and designated slurry handling pits that facilitate easy digestate transfer onto crop and forage beds.',
    climateBenefits: [
      'Substantial reduction in firewood consumption, preserving local tree canopy and community forest cover.',
      'Direct mitigation of methane emissions through enclosed anaerobic capture of livestock manure.',
      'Improvement of soil organic matter and soil health, enhancing land-based carbon retention.',
      'Displacement of fossil-based and non-renewable biomass fuels in household cooking routines.',
    ],
    economicSocialBenefits: [
      'Elimination of indoor smoke and particulate matter, significantly reducing respiratory illnesses among women and children.',
      'Drastic reduction in hours spent gathering firewood, allowing more time for education, farm stewardship, and enterprise.',
      'Sustained supply of free organic fertilizer, boosting food crop yields and improving high-protein forage for livestock.',
      'Protection of household income by removing the need to purchase external cooking fuels and chemical fertilizers.',
    ],
    digitalMrv:
      'Project monitoring connects household activity records with standardized greenhouse gas accounting methods. Digester operational tracking, household fuel replacement logs, and compost/digestate application records provide transparent data to substantiate verified clean cooking energy adoption and emissions reductions.',
    partners:
      'The project is developed in close collaboration with relevant local institutions, agricultural extension offices, and farming communities in Kindo Koysha District and the Wolaita Zone. External partner formalization is currently in development.',
  },
  {
    slug: 'organic-waste-compressed-biogas-fertilizer',
    aliases: ['organic-waste-to-compressed-biogas'],
    index: '02',
    title: 'Organic Waste to Compressed Biogas and Organic Fertilizer',
    location: 'Sheger City, Ethiopia',
    status: 'Active · Pilot',
    summary:
      'This pilot demonstrates how urban and agricultural organic waste can be converted into renewable transport fuel and marketable organic fertilizer, demonstrating a circular urban bioeconomy model connecting waste management, clean transport, livestock production, renewable energy, fertilizer production, and climate mitigation.',
    focusAreas: [
      'Organic waste',
      'Compressed biogas',
      'Clean transport',
      'Organic fertilizer',
      'Circular economy',
      'Resource recovery',
    ],
    heroImage: {
      src: wasteBiogasFacility,
      alt: 'Anaerobic bio-energy and biogas upgrading facility',
      caption: 'Illustrative bio-energy infrastructure: anaerobic digestion and gas upgrading system.',
    },
    gallery: [
      {
        src: wasteBiogasFacility,
        alt: 'Industrial bio-energy facility',
        caption: 'Anaerobic digestion plant engineered for municipal and agricultural organic feedstocks.',
      },
      {
        src: organicWasteSorting,
        alt: 'Organic waste sorting and recovery',
        caption: 'Organic fractions of municipal waste, cattle manure, and poultry manure are aggregated.',
      },
      {
        src: cngCleanTransport,
        alt: 'Clean transport vehicle powered by compressed biogas',
        caption: 'Biogas is cleaned, upgraded to biomethane, and compressed for vehicle transport fuel.',
      },
      {
        src: organicBioFertilizer,
        alt: 'Organic bio-fertilizer application',
        caption: 'Digestate is processed into marketable, high-nutrient organic fertilizer for agriculture.',
      },
    ],
    coordinates: {
      lat: 9.052,
      lng: 38.648,
      label: 'Sheger City, Oromia',
      precision: 'Approximate regional municipal area (Sheger City, Oromia)',
    },
    quickFacts: [
      { label: 'Location', value: 'Sheger City, Oromia, Ethiopia' },
      { label: 'Project Phase', value: 'Pilot demonstration & bioeconomy model' },
      { label: 'Key Feedstocks', value: 'Municipal organic waste, cattle manure, poultry manure' },
      { label: 'Primary Energy Product', value: 'Compressed Biogas (CBG) for vehicle fuel' },
      { label: 'Co-Product', value: 'Commercial-grade organic fertilizer' },
      { label: 'Urban Impact', value: 'Waste diversion, clean air, and fossil diesel displacement' },
    ],
    overview:
      'This pilot demonstrates how urban and agricultural organic waste can be converted into renewable transport fuel and marketable organic fertilizer. Organic fractions of municipal solid waste, cattle manure, and poultry manure from integrated dairy and poultry production systems will be used as feedstocks. Anaerobic digestion produces biogas that can be cleaned and upgraded to compressed biogas for vehicle fuel. Digestate will be processed into organic fertilizer for agricultural use. The pilot demonstrates a circular urban bioeconomy model connecting waste management, clean transport, livestock production, renewable energy, fertilizer production, and climate mitigation.',
    challenge:
      'Rapidly urbanizing metropolitan areas such as Sheger City generate heavy quantities of municipal organic waste alongside livestock manure from peri-urban poultry and dairy farms. Without integrated recovery systems, these wastes are dumped in open landfills or unmanaged piles, generating hazardous methane emissions, contaminating local soil and water tables, and wasting organic nutrients while urban transit remains tied to imported fossil diesel.',
    solution:
      'Anaerobic digestion produces biogas that can be cleaned and upgraded to compressed biogas for vehicle fuel. Digestate will be processed into organic fertilizer for agricultural use — a circular urban bioeconomy model connecting waste management, clean transport, livestock production, renewable energy, fertilizer production, and climate mitigation.',
    system: [
      {
        step: 'Feedstock Aggregation',
        detail: 'Municipal organic solid waste fractions, dairy cattle manure, and poultry litter are collected.',
      },
      {
        step: 'Anaerobic Digestion',
        detail: 'High-rate anaerobic digesters break down organic matter in controlled, sealed vessels.',
      },
      {
        step: 'Biogas Generation',
        detail: 'Raw biogas containing methane and carbon dioxide is continuously produced.',
      },
      {
        step: 'Cleaning & Upgrading',
        detail: 'H2S, moisture, and CO2 are removed to produce high-purity biomethane (>95% CH4).',
      },
      {
        step: 'Gas Compression (CBG)',
        detail: 'Biomethane is compressed to automotive cylinder pressures for vehicle fueling.',
      },
      {
        step: 'Digestate Processing',
        detail: 'Solid and liquid digestate fractions are separated, stabilized, and conditioned.',
      },
      {
        step: 'Marketable Organic Fertilizer',
        detail: 'Commercial organic fertilizer is bagged and supplied to peri-urban agricultural growers.',
      },
    ],
    technology:
      'Medium-to-large-scale anaerobic digestion with dedicated pre-treatment, advanced scrubbing and pressure swing adsorption (PSA) or membrane gas upgrading to vehicle-grade compressed biomethane (CBG), combined with mechanical dewatering and organic fertilizer granulation equipment.',
    climateBenefits: [
      'Elimination of fugitive methane emissions from open municipal waste dumps and manure stockpiles.',
      'Direct substitution of diesel and gasoline in urban commercial and public transport with renewable CBG.',
      'Decarbonization of regional agriculture by replacing synthetic fertilizers with biological organic nutrients.',
      'Significant reduction in urban landfill footprints and methane leakage.',
    ],
    economicSocialBenefits: [
      'Creation of new green jobs in waste logistics, bio-refinery plant operations, and fuel distribution.',
      'Lower fuel costs for municipal and commercial fleet operators transitioning to compressed biogas.',
      'Readily available, affordable organic fertilizer for surrounding crop and horticultural farmers.',
      'Improved public health and sanitary conditions by diverting decomposing municipal solid waste.',
    ],
    digitalMrv:
      'The pilot connects feedstock intake weigh scales, digester telemetry, gas production sensors, and vehicle dispensing records to automated emission calculation models, documenting verified climate performance and net emission reductions as the pilot scales.',
    partners:
      'The pilot is designed to link waste management, livestock production, municipal authorities, and clean transport operators in and around Sheger City. Formal stakeholder agreements and institutional frameworks are in active development.',
  },
  {
    slug: 'nature-based-carbon-market-pilot',
    aliases: ['nature-based-carbon-market'],
    index: '03',
    title: 'Nature-Based Carbon Market Pilot',
    location: 'Oromia and South Ethiopia Regional States, Ethiopia',
    status: 'Active · In development',
    summary:
      'A nature-based carbon market pilot combining regenerative agriculture, agroforestry, improved soil management, and sustainable crop-livestock production, backed by a scalable AI-powered digital MRV system combining field data, geospatial information, remote sensing, and carbon accounting.',
    focusAreas: [
      'Soil organic carbon',
      'Agroforestry',
      'Regenerative agriculture',
      'Carbon markets',
      'AI',
      'Digital MRV',
    ],
    heroImage: {
      src: agroforestryCanopy,
      alt: 'Agroforestry and regenerative agricultural landscape',
      caption: 'Illustrative landscape: agroforestry integration and tree canopy across cultivated farmland.',
    },
    gallery: [
      {
        src: agroforestryCanopy,
        alt: 'Agroforestry tree canopy over farmland',
        caption: 'Multi-strata agroforestry enhances biomass carbon and stabilizes microclimates.',
      },
      {
        src: soilCarbonRegeneration,
        alt: 'Rich soil organic carbon and fertile earth',
        caption: 'Regenerative agronomic practices restore depleted soil organic carbon pools.',
      },
      {
        src: geospatialDroneSurvey,
        alt: 'Aerial geospatial drone surveying fields',
        caption: 'Drone surveying, satellite remote sensing, and field data feed into the digital MRV engine.',
      },
      {
        src: eastAfricaHarvest,
        alt: 'Farmer holding harvest grain',
        caption: 'Improved soil resilience translates directly to strengthened smallholder food security.',
      },
    ],
    coordinates: {
      lat: 7.15,
      lng: 38.52,
      label: 'Oromia & South Ethiopia Regional States',
      precision: 'Regional pilot landscape corridor (Oromia & South Ethiopia Regional States)',
    },
    quickFacts: [
      { label: 'Location', value: 'Oromia and South Ethiopia Regional States, Ethiopia' },
      { label: 'Scope', value: 'Smallholder farming landscapes & agroforestry corridors' },
      { label: 'Interventions', value: 'Regenerative agriculture, agroforestry, reduced tillage, cover crops' },
      { label: 'Carbon Asset', value: 'Soil Organic Carbon (SOC) & perennial tree biomass' },
      { label: 'Verification System', value: 'AI-assisted digital MRV & satellite remote sensing' },
      { label: 'Target Pathway', value: 'High-integrity carbon market crediting & farmer benefit-sharing' },
    ],
    overview:
      'Africa Climate Actions PLC is developing a nature-based carbon market pilot combining regenerative agriculture, agroforestry, improved soil management, and sustainable crop-livestock production. The project will assess opportunities to increase soil organic carbon, improve farm productivity, strengthen climate resilience, and generate measurable greenhouse-gas mitigation. A scalable AI-powered digital MRV system will combine field data, geospatial information, remote sensing, digital records, and carbon accounting to support future expansion into a large soil organic carbon sequestration program.',
    challenge:
      'Decades of intensive continuous cultivation, biomass burning, and severe erosion have depleted soil organic carbon across Ethiopian farming regions. Degraded soils suffer poor moisture retention, leading to drought vulnerability, stagnating yields, and rural poverty. Despite enormous potential to sequester atmospheric carbon in African soils, smallholders have historically been excluded from carbon finance due to prohibitive ground-sampling costs and the absence of high-integrity verification systems.',
    solution:
      'The project will assess opportunities to increase soil organic carbon, improve farm productivity, strengthen climate resilience, and generate measurable greenhouse-gas mitigation. A scalable AI-powered digital MRV system will combine field data, geospatial information, remote sensing, digital records, and carbon accounting to support future expansion into a large soil organic carbon sequestration program.',
    system: [
      {
        step: 'Farmer & Land Stratification',
        detail: 'Smallholder plots are georeferenced and grouped into homogeneous agro-ecological strata.',
      },
      {
        step: 'Regenerative Agriculture',
        detail: 'Farmers implement reduced tillage, crop residue retention, and multi-species cover cropping.',
      },
      {
        step: 'Agroforestry Integration',
        detail: 'Multipurpose nitrogen-fixing and fruit trees are planted within crop and livestock borders.',
      },
      {
        step: 'Soil Baseline & Field Sampling',
        detail: 'Targeted soil core testing establishes calibrated baseline soil organic carbon stocks.',
      },
      {
        step: 'Remote Sensing & AI Analytics',
        detail: 'Satellite indices (NDVI, soil moisture, canopy cover) are processed via machine learning.',
      },
      {
        step: 'Digital MRV Carbon Accounting',
        detail: 'IPCC Tier 2/3 biogeochemical models compute verified carbon sequestration deltas.',
      },
      {
        step: 'Carbon Market Readiness',
        detail: 'Verified carbon credits are prepared for voluntary markets with direct community benefit sharing.',
      },
    ],
    technology:
      'A multi-tier digital MRV architecture: high-resolution satellite imagery (Sentinel-2, Landsat), digital elevation terrain modeling, localized soil spectral libraries, mobile GIS field surveying tools, and machine-learning models trained to estimate soil organic carbon dynamics with auditable accuracy.',
    climateBenefits: [
      'Durable atmospheric carbon dioxide removal and sequestration in mineral soil organic carbon pools.',
      'Significant perennial above-ground and below-ground woody biomass carbon accumulation.',
      'Enhanced landscape water infiltration and moisture storage, mitigating regional drought severity.',
      'Reduction in agricultural nitrous oxide emissions through balanced biological nutrient management.',
    ],
    economicSocialBenefits: [
      'Reversal of soil degradation, producing tangible increases in staple crop and forage productivity.',
      'Prospective carbon finance revenue channels providing diversified income directly to smallholders.',
      'Increased resilience to changing rainfall patterns and climate shocks.',
      'Protection of local watersheds, preserving vital downstream irrigation and domestic water resources.',
    ],
    digitalMrv:
      'Digital MRV is at the core of this pilot: field data, geospatial information, remote sensing, digital records, and carbon accounting combine to make soil carbon results measurable and credible. Scaled AI algorithms minimize manual sampling costs while meeting rigorous international carbon standard requirements.',
    partners:
      'The pilot is being developed with engagement across agricultural research institutions, regional bureau of agriculture stakeholders, and carbon market advisors in Oromia and South Ethiopia Regional States. Formal institutional partnerships are in active preparation.',
  },
  {
    slug: 'climate-finance-climate-smart-dairy',
    aliases: ['climate-finance-for-climate-smart-dairy'],
    index: '04',
    title: 'Climate Finance for Climate-Smart Dairy',
    location: 'Ethiopia (National focus across key dairy shed regions)',
    status: 'Active · Investment development',
    summary:
      'This initiative assesses climate-finance opportunities and develops bankable investment concepts for climate-smart dairy development in Ethiopia, connecting increased milk production with improved feed systems, manure management, renewable energy, methane mitigation, and stronger farm economics.',
    focusAreas: [
      'Dairy',
      'Climate finance',
      'Food production',
      'Methane mitigation',
      'Adaptation',
      'Investment',
    ],
    heroImage: {
      src: dairyImprovedFeed,
      alt: 'Climate-smart dairy cattle with optimized feed',
      caption: 'Illustrative livestock management: dairy cattle with improved high-protein forage and feed.',
    },
    gallery: [
      {
        src: dairyImprovedFeed,
        alt: 'Dairy cow eating improved forage feed',
        caption: 'High-quality forage and balanced nutrition directly lower enteric methane intensity per liter of milk.',
      },
      {
        src: dairyMilkProduction,
        alt: 'Dairy milk production and collection',
        caption: 'Clean handling and cold-chain infrastructure secure perishable milk value for farmers.',
      },
      {
        src: media.farm,
        alt: 'Dairy herd on pasture grazing land',
        caption: 'Integrated pasture management strengthens dairy herd health and farm economics.',
      },
      {
        src: media.solar,
        alt: 'Solar energy installation',
        caption: 'Decentralized solar cooling replaces diesel generators across rural milk collection centers.',
      },
    ],
    coordinates: {
      lat: 8.75,
      lng: 38.98,
      label: 'Central Highlands & Dairy Milksheds, Ethiopia',
      precision: 'National milkshed initiative corridor (Central Highlands & dairy sheds)',
    },
    quickFacts: [
      { label: 'Geographic Scope', value: 'Ethiopian dairy shed regions (Central Highlands & Regional Corridors)' },
      { label: 'Focus Sector', value: 'Climate-smart dairy production & cold-chain systems' },
      { label: 'Core Interventions', value: 'Improved forage, ration balancing, manure digesters, solar chilling' },
      { label: 'Climate Impact', value: 'Enteric methane reduction & manure emissions abatement' },
      { label: 'Financial Instrument', value: 'Bankable blended finance packages & concessional capital' },
      { label: 'Target Beneficiaries', value: 'Smallholder dairy farmers, commercial dairies, and rural milk cooperatives' },
    ],
    overview:
      'This initiative assesses climate-finance opportunities and develops bankable investment concepts for climate-smart dairy development in Ethiopia. The work connects increased milk and food production with improved feed systems, manure management, renewable energy, greenhouse-gas mitigation, climate adaptation, and stronger farm economics. The objective is to identify investment packages that can attract climate finance while delivering measurable production, mitigation, adaptation, and livelihood benefits.',
    challenge:
      'Ethiopia possesses one of the largest cattle populations in Africa, yet dairy sector productivity remains severely constrained by poor-quality seasonal forage, inadequate veterinary care, lack of cold-chain preservation, and unmanaged animal manure. This low productivity creates very high greenhouse gas emissions intensity per unit of consumable milk. Meanwhile, smallholder dairy producers face prohibitive interest rates and lack bankable financing models to adopt climate-smart technologies.',
    solution:
      'The work connects increased milk and food production with improved feed systems, manure management, renewable energy, greenhouse-gas mitigation, climate adaptation, and stronger farm economics. The objective is to identify investment packages that can attract climate finance while delivering measurable production, mitigation, adaptation, and livelihood benefits.',
    system: [
      {
        step: 'Milkshed Baseline Assessment',
        detail: 'Herd inventory, feed sourcing, dairy yields, and emissions intensity profiles are mapped.',
      },
      {
        step: 'Nutritional & Feed Upgrading',
        detail: 'High-protein fodder trees, Rhodes grass, and ration balancing cut enteric fermentation.',
      },
      {
        step: 'Manure Biogas Capture',
        detail: 'Dairy manure is routed to anaerobic digesters for energy recovery and digestate recycling.',
      },
      {
        step: 'Solar Milk Chilling',
        detail: 'Off-grid solar cooling equipment is deployed at rural milk aggregation points.',
      },
      {
        step: 'Productivity Multiplication',
        detail: 'Per-cow daily milk production increases significantly, cutting emissions per liter.',
      },
      {
        step: 'Investment Modeling',
        detail: 'Bankable financial packages are structured blending commercial capital with concessional climate finance.',
      },
      {
        step: 'Climate Capital Deployment',
        detail: 'Funding facilities deploy capital to cooperatives, aggregators, and dairy producers.',
      },
    ],
    technology:
      'Greenhouse gas emission intensity modeling tools (GLEAM / IPCC Tier 2 for livestock), blended finance financial architecture models combining concessional climate debt and performance grants, alongside decentralized off-grid solar direct-drive milk cooling and anaerobic manure digestion units.',
    climateBenefits: [
      'Substantial reduction in enteric methane emissions intensity per liter of milk produced.',
      'Capture of dairy manure methane to generate clean on-farm thermal energy.',
      'Elimination of diesel fuel combustion through off-grid solar-powered milk collection chillers.',
      'Strengthened farm resilience to climate extremes through drought-tolerant forage cultivation.',
    ],
    economicSocialBenefits: [
      'Substantial increase in household milk sales and daily farm revenues for smallholder families.',
      'Significant reduction in post-harvest milk spoilage, expanding access to commercial dairy markets.',
      'Improved nutritional security, maternal health, and child nutrition in dairy-producing communities.',
      'Attraction of sustainable foreign and domestic climate investment into rural value chains.',
    ],
    digitalMrv:
      'Greenhouse gas assessment and monitoring designs support the investment case, connecting herd productivity data, feed composition records, and milk production volumes with verified climate finance reporting frameworks.',
    partners:
      'The initiative engages dairy development stakeholders, livestock research bodies, financial institutions, and international climate finance facilities across Ethiopia. Partnership structures are currently in development.',
  },
  {
    slug: 'digital-mrv-climate-intelligence',
    aliases: ['high-integrity-digital-mrv'],
    index: '05',
    title: 'High-Integrity Digital MRV and Climate Intelligence',
    location: 'National and project applications',
    status: 'Active · In development',
    summary:
      'Scalable digital MRV approaches supporting greenhouse-gas inventories, NDC implementation tracking, carbon-market projects, and climate investment, connecting field and sensor data, activity records, greenhouse-gas accounting, AI-assisted analytics, dashboards, and structured reporting.',
    focusAreas: [
      'GHG inventories',
      'NDC tracking',
      'Carbon markets',
      'Sensors',
      'AI analytics',
      'Climate data',
    ],
    heroImage: {
      src: media.data,
      alt: 'Satellite and digital data infrastructure in agricultural fields',
      caption: 'Illustrative technology: digital connectivity, telemetry, and data infrastructure.',
    },
    gallery: [
      {
        src: media.data,
        alt: 'Satellite infrastructure in agricultural landscapes',
        caption: 'Telecommunications and sensor connectivity linking field records with cloud accounting.',
      },
      {
        src: digitalMrvDashboard,
        alt: 'Climate intelligence dashboard and data visualization',
        caption: 'Automated analytics dashboards provide auditable tracking for NDC indicators and carbon projects.',
      },
      {
        src: earthObservationSatellite,
        alt: 'Earth observation satellite in orbit',
        caption: 'High-frequency remote sensing monitors land-use dynamics, canopy cover, and biomass.',
      },
      {
        src: fieldSensorStation,
        alt: 'Environmental field sensor station',
        caption: 'Ground IoT sensors record microclimatic, soil moisture, and greenhouse gas activity parameters.',
      },
    ],
    coordinates: {
      lat: 9.022,
      lng: 38.746,
      label: 'National Operations Hub, Addis Ababa',
      precision: 'National operations & data infrastructure hub (Addis Ababa / National scope)',
    },
    quickFacts: [
      { label: 'Deployment Scope', value: 'National systems, sectoral programs, & project applications' },
      { label: 'Key Pillars', value: 'Ground IoT, satellite remote sensing, activity records, AI QA/QC' },
      { label: 'Core Accounting', value: 'IPCC 2006/2019 Tier 1-3 GHG calculation engines' },
      { label: 'Primary Use Cases', value: 'National GHG inventories, NDC tracking, carbon crediting, climate finance' },
      { label: 'Sectors Served', value: 'Energy, AFOLU (Agriculture & Forestry), Waste management, Clean Transport' },
      { label: 'Platform Standards', value: 'UNFCCC Paris Agreement Article 6 & international carbon registries' },
    ],
    overview:
      'Africa Climate Actions PLC is developing scalable digital MRV approaches to support greenhouse-gas inventories, NDC implementation tracking, carbon-market projects, and climate investment. The system connects field and sensor data, activity records, greenhouse-gas accounting, data-quality controls, AI-assisted analytics, dashboards, and structured reporting. Applications can support national inventory improvement, NDC indicators, mitigation programs, carbon projects, renewable energy, agriculture, livestock, waste management, and nature-based solutions.',
    challenge:
      'Across Africa, climate initiatives face severe data fragmentation, reliance on static paper surveys, slow manual reporting cycles, and exorbitant third-party auditing costs. These barriers hinder national ministries from accurately reporting NDC milestones, prevent financial institutions from tracking climate portfolio performance, and delay high-integrity project developers from accessing global carbon finance.',
    solution:
      'The system connects field and sensor data, activity records, greenhouse-gas accounting, data-quality controls, AI-assisted analytics, dashboards, and structured reporting. Applications can support national inventory improvement, NDC indicators, mitigation programs, carbon projects, renewable energy, agriculture, livestock, waste management, and nature-based solutions.',
    system: [
      {
        step: 'Data Ingestion',
        detail: 'Ground sensors, mobile survey apps, remote sensing feeds, and activity registers feed into the system.',
      },
      {
        step: 'Quality Control & Validation',
        detail: 'Automated algorithmic checks flag anomalies, missing records, and spatial outliers.',
      },
      {
        step: 'GHG Accounting Engines',
        detail: 'Sector-specific engines calculate emissions and removals based on IPCC standards.',
      },
      {
        step: 'AI Geospatial Analytics',
        detail: 'Machine learning verifies land cover shifts, canopy density, and biomass trends.',
      },
      {
        step: 'Interactive Dashboards',
        detail: 'Stakeholders monitor live mitigation metrics, NDC milestones, and project KPIs.',
      },
      {
        step: 'Audit Trail Generation',
        detail: 'Immutable digital logs ensure complete data provenance and verification readiness.',
      },
      {
        step: 'Structured Reporting',
        detail: 'Automated outputs produce compliance-ready reports for UNFCCC, donors, and carbon registries.',
      },
    ],
    technology:
      'A connected digital architecture: field and sensor data collection, activity records, greenhouse-gas accounting engines, automated data quality controls, AI-assisted analytics, interactive dashboards, and structured reporting outputs engineered for scalability across African environments.',
    climateBenefits: [
      'Stronger, transparent national greenhouse gas inventories and timely NDC implementation tracking.',
      'Rigorous verification for voluntary and compliance carbon market projects, eliminating double-counting.',
      'Real-time evidence for climate adaptation and mitigation programs to optimize resource allocation.',
      'Standardized carbon accounting across energy, agricultural, forestry, and waste management sectors.',
    ],
    economicSocialBenefits: [
      'Drastically reduces transaction and verification costs for African climate and carbon projects.',
      'Accelerates access to international climate finance and carbon market revenues for local stakeholders.',
      'Builds national technological capacity and data sovereignty in climate intelligence governance.',
      'Equips policymakers and investors with reliable empirical data for long-term sustainable planning.',
    ],
    digitalMrv:
      'This project is the digital MRV capability itself — built to serve national systems and individual projects across energy, agriculture, livestock, waste, and nature-based solutions with end-to-end transparency and verifiable data integrity.',
    partners:
      'Applications are developed for national institutions, project developers, development partners, and carbon market participants working on inventories, NDC implementation, and green investments. Institutional partnerships are in active preparation.',
  },
];

export function getProject(slug: string): ActiveProject | undefined {
  return activeProjects.find((p) => p.slug === slug || p.aliases?.includes(slug));
}
