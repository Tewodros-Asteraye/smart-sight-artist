export type ActiveProject = {
  slug: string;
  index: string;
  title: string;
  location: string;
  status: string;
  summary: string;
  focusAreas: string[];
  image: 'farm' | 'solar' | 'data' | 'landscape' | 'harvest' | 'soil' | 'cattle';
  overview: string;
  challenge: string;
  solution: string;
  system: string[];
  technology: string;
  climateBenefits: string[];
  economicSocialBenefits: string[];
  digitalMrv: string;
  partners: string;
};

export const activeProjects: ActiveProject[] = [
  {
    slug: 'circular-biogas-digestate-crop-production',
    index: '01',
    title: 'Circular Biogas, Digestate and Crop Production',
    location: 'Kindo Koysha District, Wolaita Zone, South Ethiopia Regional State, Ethiopia',
    status: 'Active · Implementation',
    summary:
      'Household livestock manure biogas systems that convert cattle manure into clean cooking energy and organic fertilizer, creating a circular production system.',
    focusAreas: ['Clean cooking', 'Biogas', 'Organic fertilizer', 'Forage', 'Circular bioeconomy', 'Climate mitigation'],
    image: 'cattle',
    overview:
      'Africa Climate Actions PLC is implementing household livestock manure biogas systems that convert cattle manure into clean cooking energy and organic fertilizer. The biogas replaces firewood used for household cooking, while nutrient rich digestate is returned to farms as organic fertilizer for food crops and livestock feed production.',
    challenge:
      'Households depend on firewood for cooking, while livestock manure is often unmanaged — losing its energy and nutrient value and contributing to emissions and pressure on local resources.',
    solution:
      'Household biogas systems capture the energy value of cattle manure for clean cooking, and the resulting digestate is returned to farms as organic fertilizer, linking livestock, manure, renewable energy, soil fertility, crops, forage, and household energy in one circular system.',
    system: ['Livestock', 'Manure collection', 'Household biodigester', 'Biogas for cooking', 'Digestate', 'Organic fertilizer', 'Crops & forage'],
    technology:
      'Household-scale anaerobic digestion systems designed for local livestock keeping conditions, with digestate handling and application practices that return nutrients to food crop and forage production.',
    climateBenefits: [
      'Reduced reliance on firewood for household cooking',
      'Improved manure management and reduced methane emissions from unmanaged manure',
      'Nutrient recycling that supports soil fertility',
    ],
    economicSocialBenefits: [
      'Cleaner household energy for cooking',
      'Organic fertilizer for food crops and livestock feed production',
      'A circular production system linking energy, soil fertility, and farm productivity',
    ],
    digitalMrv:
      'Project monitoring connects household activity data with greenhouse gas calculations, supporting transparent tracking of clean cooking energy use and emissions reductions.',
    partners:
      'The project is developed in collaboration with relevant local institutions and communities in the Wolaita Zone.',
  },
  {
    slug: 'organic-waste-to-compressed-biogas',
    index: '02',
    title: 'Organic Waste to Compressed Biogas and Organic Fertilizer',
    location: 'Sheger City, Ethiopia',
    status: 'Active · Pilot',
    summary:
      'A pilot demonstrating how urban and agricultural organic waste can be converted into renewable transport fuel and marketable organic fertilizer.',
    focusAreas: ['Organic waste', 'Compressed biogas', 'Clean transport', 'Organic fertilizer', 'Circular economy', 'Resource recovery'],
    image: 'farm',
    overview:
      'This pilot demonstrates how urban and agricultural organic waste can be converted into renewable transport fuel and marketable organic fertilizer. Organic fractions of municipal solid waste, cattle manure, and poultry manure from integrated dairy and poultry production systems will be used as feedstocks.',
    challenge:
      'Urban and agricultural organic waste is an underused resource. Without productive pathways, it contributes to pollution and emissions instead of supporting clean energy and agriculture.',
    solution:
      'Anaerobic digestion produces biogas that can be cleaned and upgraded to compressed biogas for vehicle fuel. Digestate will be processed into organic fertilizer for agricultural use — a circular urban bioeconomy model connecting waste management, clean transport, livestock production, renewable energy, fertilizer production, and climate mitigation.',
    system: ['Organic waste & manure', 'Anaerobic digestion', 'Biogas', 'Cleaning & upgrading', 'Compressed biogas for transport', 'Digestate', 'Organic fertilizer'],
    technology:
      'Anaerobic digestion with biogas cleaning and upgrading to compressed biogas suitable for vehicle fuel, alongside digestate processing into marketable organic fertilizer.',
    climateBenefits: [
      'Renewable transport fuel from organic waste',
      'Reduced emissions from unmanaged organic waste',
      'Nutrient recovery through organic fertilizer production',
    ],
    economicSocialBenefits: [
      'A marketable organic fertilizer product for agriculture',
      'A circular urban bioeconomy model connecting waste, energy, and transport',
      'New value from municipal and agricultural organic waste streams',
    ],
    digitalMrv:
      'The pilot connects feedstock, gas production, and fertilizer data with emissions calculations to document climate performance as the model develops.',
    partners:
      'The pilot connects waste management, livestock production, and clean energy actors in and around Sheger City.',
  },
  {
    slug: 'nature-based-carbon-market-pilot',
    index: '03',
    title: 'Nature Based Carbon Market Pilot',
    location: 'Oromia and South Ethiopia Regional States, Ethiopia',
    status: 'Active · In development',
    summary:
      'A nature based carbon market pilot combining regenerative agriculture, agroforestry, improved soil management, and sustainable crop livestock production.',
    focusAreas: ['Soil organic carbon', 'Agroforestry', 'Regenerative agriculture', 'Carbon markets', 'AI', 'Digital MRV'],
    image: 'soil',
    overview:
      'Africa Climate Actions PLC is developing a nature based carbon market pilot combining regenerative agriculture, agroforestry, improved soil management, and sustainable crop livestock production.',
    challenge:
      'Soil degradation and unsustainable land management reduce farm productivity and climate resilience, while farmers lack access to finance that rewards measurable climate performance.',
    solution:
      'The project will assess opportunities to increase soil organic carbon, improve farm productivity, strengthen climate resilience, and generate measurable greenhouse gas mitigation. A scalable AI powered digital MRV system will combine field data, geospatial information, remote sensing, digital records, and carbon accounting to support future expansion into a large soil organic carbon sequestration program.',
    system: ['Regenerative agriculture', 'Agroforestry', 'Improved soil management', 'Field & geospatial data', 'Remote sensing', 'Carbon accounting', 'Carbon market readiness'],
    technology:
      'An AI powered digital MRV approach combining field data, geospatial information, remote sensing, digital records, and carbon accounting, designed to scale toward a large soil organic carbon sequestration program.',
    climateBenefits: [
      'Increased soil organic carbon',
      'Measurable greenhouse gas mitigation',
      'Stronger climate resilience across farming systems',
    ],
    economicSocialBenefits: [
      'Improved farm productivity',
      'Potential carbon revenue linked to verified climate performance',
      'A scalable model for nature based climate investment',
    ],
    digitalMrv:
      'Digital MRV is at the core of this pilot: field data, geospatial information, remote sensing, digital records, and carbon accounting combine to make soil carbon results measurable and credible.',
    partners:
      'The pilot is being developed with engagement across research, government, and climate finance stakeholders in Oromia and South Ethiopia Regional States.',
  },
  {
    slug: 'climate-finance-for-climate-smart-dairy',
    index: '04',
    title: 'Climate Finance for Climate Smart Dairy',
    location: 'Ethiopia',
    status: 'Active · Investment development',
    summary:
      'Assessing climate finance opportunities and developing bankable investment concepts for climate smart dairy development in Ethiopia.',
    focusAreas: ['Dairy', 'Climate finance', 'Food production', 'Methane mitigation', 'Adaptation', 'Investment'],
    image: 'harvest',
    overview:
      'This initiative assesses climate finance opportunities and develops bankable investment concepts for climate smart dairy development in Ethiopia.',
    challenge:
      'Dairy development must increase milk and food production while addressing emissions, feed systems, manure management, and farm economics — and it needs investment structures that climate finance can support.',
    solution:
      'The work connects increased milk and food production with improved feed systems, manure management, renewable energy, greenhouse gas mitigation, climate adaptation, and stronger farm economics. The objective is to identify investment packages that can attract climate finance while delivering measurable production, mitigation, adaptation, and livelihood benefits.',
    system: ['Improved feed systems', 'Manure management', 'Renewable energy', 'Milk & food production', 'GHG mitigation', 'Climate adaptation', 'Investment packages'],
    technology:
      'Investment concepts combine technical measures — feed improvement, manure management, and renewable energy — with financial modelling and greenhouse gas assessment to build bankable climate smart dairy packages.',
    climateBenefits: [
      'Methane mitigation across dairy production',
      'Climate adaptation built into farm systems',
      'Renewable energy integration',
    ],
    economicSocialBenefits: [
      'Increased milk and food production',
      'Stronger farm economics',
      'Investment packages designed to attract climate finance and deliver livelihood benefits',
    ],
    digitalMrv:
      'Greenhouse gas assessment and monitoring design support the investment case, connecting production and emissions data with climate finance requirements.',
    partners:
      'The initiative engages climate finance, dairy development, and investment stakeholders across Ethiopia.',
  },
  {
    slug: 'high-integrity-digital-mrv',
    index: '05',
    title: 'High Integrity Digital MRV and Climate Intelligence',
    location: 'National and Project Applications',
    status: 'Active · In development',
    summary:
      'Scalable digital MRV approaches supporting greenhouse gas inventories, NDC implementation tracking, carbon market projects, and climate investment.',
    focusAreas: ['GHG inventories', 'NDC tracking', 'Carbon markets', 'Sensors', 'AI analytics', 'Climate data'],
    image: 'data',
    overview:
      'Africa Climate Actions PLC is developing scalable digital MRV approaches to support greenhouse gas inventories, NDC implementation tracking, carbon market projects, and climate investment.',
    challenge:
      'Climate action at national and project level depends on credible data. Reporting gaps, fragmented records, and manual processes make it harder to track progress and attract investment.',
    solution:
      'The system connects field and sensor data, activity records, greenhouse gas accounting, data quality controls, AI assisted analytics, dashboards, and structured reporting. Applications can support national inventory improvement, NDC indicators, mitigation programs, carbon projects, renewable energy, agriculture, livestock, waste management, and nature based solutions.',
    system: ['Field & sensor data', 'Activity records', 'GHG accounting', 'Data quality controls', 'AI assisted analytics', 'Dashboards', 'Structured reporting'],
    technology:
      'A connected digital architecture: field and sensor data collection, activity records, greenhouse gas accounting engines, data quality controls, AI assisted analytics, dashboards, and structured reporting outputs.',
    climateBenefits: [
      'Stronger greenhouse gas inventories and NDC tracking',
      'Credible monitoring for carbon market projects',
      'Better evidence for mitigation programs',
    ],
    economicSocialBenefits: [
      'Climate investments that are easier to track and verify',
      'Reduced reporting gaps and stronger institutional ownership',
      'Decision support for climate programs and projects',
    ],
    digitalMrv:
      'This project is the digital MRV capability itself — built to serve national systems and individual projects across energy, agriculture, livestock, waste, and nature based solutions.',
    partners:
      'Applications are developed for national institutions and project developers working on inventories, NDC implementation, and carbon market projects.',
  },
];

export function getProject(slug: string) {
  return activeProjects.find((p) => p.slug === slug);
}
