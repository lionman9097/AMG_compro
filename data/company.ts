export interface CompanyInfo {
  name: string
  brand: string
  tagline: string
  shortDescription: string
  description: string
  founded: number
  stats: { label: string; value: number; suffix: string }[]
  mission: string
  vision: string
  values: { title: string; description: string; icon: string }[]
  milestones: { year: number; title: string; description: string }[]
  contact: {
    address: string
    phone: string
    email: string
    hours: string
  }
}

export const company: CompanyInfo = {
  name: 'PT Anugrah Megah Perkasa',
  brand: 'DURABUILD',
  tagline: 'Built to Seal. Built to Last.',
  shortDescription: 'Official distributor of DURABUILD high-performance neutral and acetic silicone sealants for construction, door/window glazing, and industrial manufacturing.',
  description: 'PT Anugrah Megah Perkasa is a premier distributor of DURABUILD industrial silicone sealants and weather-resistant adhesive solutions. Founded with a commitment to engineering excellence, we supply one-component neutral moisture-cure silicones, high-temperature adhesives, and specialty anti-fungal formulations to major construction contractors, door/window fabricators, facade specialists, and manufacturing plants across Indonesia and the Asia-Pacific.',
  founded: 2008,
  stats: [
    { label: 'Years of Engineering Bonds', value: 18, suffix: '+' },
    { label: 'Substrate Compatibility', value: 95, suffix: '%' },
    { label: 'Extrudability Speed (g/5s)', value: 62, suffix: '' },
    { label: 'Thermal Resistance Range', value: 300, suffix: '°C' },
  ],
  mission: 'To deliver world-class DURABUILD silicone sealant solutions that provide uncompromised weather protection, high elasticity, and long-lasting structural adhesion for every building and product.',
  vision: 'To be the most trusted and reliable silicone sealant supplier in Southeast Asia, renowned for technical accuracy, stringent quality standards, and dedicated client support.',
  values: [
    {
      title: 'Weather & UV Resistance',
      description: 'DURABUILD formulations withstand extreme UV radiation, temperature shifts (-40°C to +150°C), and harsh outdoor exposure.',
      icon: 'Shield',
    },
    {
      title: 'Technical Rigor (TDS Verified)',
      description: 'Every batch is tested for density (1.50 g/cm³), shore hardness (38 Shore A), and adhesion pass rates (≥95%).',
      icon: 'FlaskConical',
    },
    {
      title: 'High Elasticity & Adhesion',
      description: 'Superior displacement deformation recovery and multi-substrate bonding for glass, tiles, aluminum, and metals.',
      icon: 'Award',
    },
    {
      title: 'Safety & Environmental Standards',
      description: 'Controlled ketoxime release during cure with zero toxic side effects after full curing.',
      icon: 'ShieldCheck',
    },
  ],
  milestones: [
    { year: 2008, title: 'Company Foundation', description: 'PT Anugrah Megah Perkasa established as a specialist distributor for industrial adhesives.' },
    { year: 2012, title: 'DURABUILD Partnership', description: 'Secured official distribution partnership for DURABUILD Neutral and Acetic silicone sealant lines.' },
    { year: 2016, title: 'Facade & Glazing Division', description: 'Expanded supply chain to major curtain wall and aluminum door/window fabrication projects.' },
    { year: 2019, title: 'ISO 9001 Certification', description: 'Achieved ISO 9001 quality management system standards for sealant warehousing and distribution.' },
    { year: 2023, title: 'Nationwide Logistics Network', description: 'Established 6 regional distribution hubs supporting over 2,500 commercial and industrial clients.' },
  ],
  contact: {
    address: 'Jl. Industri Raya No. 88, Kawasan Industri Pulogadung, Jakarta Timur 13920, Indonesia',
    phone: '+62 21 4683 2000',
    email: 'info@anugrah-megahperkasa.com',
    hours: 'Monday – Friday: 8:00 AM – 5:00 PM (WIB)',
  },
}
