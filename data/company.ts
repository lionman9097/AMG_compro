export interface CompanyLocation {
  id: string
  title: string
  badge?: string
  city: string
  address: string
  whatsapp: string
  whatsappUrl: string
  phone: string
  phoneUrl: string
  isPrimary?: boolean
}

export interface StrategicPillar {
  title: string
  description: string
  icon: string
}

export interface ClientSegment {
  title: string
  description: string
  icon: string
}

export interface BrandPartner {
  name: string
  logo: string
  description: string
}

export interface CompanyInfo {
  name: string
  brand: string
  brandPartners: BrandPartner[]
  tagline: string
  shortDescription: string
  description: string
  stats: { label: string; value: number; suffix: string }[]
  commitment: {
    title: string
    pillars: string[]
    statement: string
    tagline: string
  }
  pillars: StrategicPillar[]
  clientSegments: ClientSegment[]
  contact: {
    address: string
    phone: string
    email: string
    hours: string
  }
  locations: CompanyLocation[]
}

export const company: CompanyInfo = {
  name: 'PT Anugerah Megah Perkasa',
  brand: 'Wacker & DURABUILD',
  brandPartners: [
    {
      name: 'WACKER',
      logo: '/logo2.png',
      description: 'Global pioneer in silicone and chemical innovations, providing industry-leading quality and specialized performance.',
    },
    {
      name: 'DURABUILD',
      logo: '/logo3.png',
      description: 'High-performance neutral silicone sealants and weather-resistant adhesives engineered for construction, glazing, and industrial applications.',
    },
    {
      name: 'SUPER SHIELD',
      logo: '/supershield_logo.png',
      description: 'Premium multipurpose protective sealants and high-strength adhesives engineered for construction, roofing, and weatherproofing.',
    },
  ],
  tagline: 'Trusted Partner for Quality Sealant Solutions',
  shortDescription: 'Distributor of sealant products and construction supporting materials, providing high-quality products to meet the needs of various construction, industrial, and building projects.',
  description: 'ANUGERAH MEGAH PERKASA is a company engaged as a distributor of sealant products and construction supporting materials, providing high-quality products to meet the needs of various construction, industrial, and building projects. As a distributor of Wacker and Durabuild, we are committed to delivering products with trusted quality, optimal performance, and suitability for professional field applications. By prioritizing product quality, service excellence, product availability, and customer satisfaction, Anugerah Megah Perkasa continues to build long-term relationships with contractors, applicators, building material stores, developers, and other customers.',
  stats: [
    { label: 'Authorized Brand Partners', value: 2, suffix: '+' },
    { label: 'Strategic Warehouse Hubs', value: 4, suffix: '+' },
    { label: 'Core Strategic Priorities', value: 4, suffix: '+' },
    { label: 'Client Ecosystem Segments', value: 4, suffix: '+' },
  ],
  commitment: {
    title: 'Our Commitment',
    pillars: ['Quality', 'Reliability', 'Professional Service'],
    statement: 'We believe that quality products must be supported by professional service. Therefore, we are ready to be your trusted partner in providing sealant solutions and construction needs.',
    tagline: 'Trusted Partner for Quality Sealant Solutions',
  },
  pillars: [
    {
      title: 'Product Quality',
      description: 'Supplying proven silicone sealants and construction materials that deliver optimal durability and meet strict field application standards.',
      icon: 'ShieldCheck',
    },
    {
      title: 'Service Excellence',
      description: 'Delivering responsive consultation, technical guidance, and reliable client support at every stage of the project.',
      icon: 'Headphones',
    },
    {
      title: 'Product Availability',
      description: 'Ensuring stable warehouse stock and efficient logistics so your construction and fabrication timelines run uninterrupted.',
      icon: 'Boxes',
    },
    {
      title: 'Customer Satisfaction',
      description: 'Building enduring commercial relationships through dependable fulfillment, transparent communication, and genuine value.',
      icon: 'Smile',
    },
  ],
  clientSegments: [
    {
      title: 'Contractors',
      description: 'General and specialized building contractors requiring certified sealants for major commercial and residential developments.',
      icon: 'Building2',
    },
    {
      title: 'Applicators',
      description: 'Professional glazing, facade, and sealant applicators needing consistent workability, rapid cure, and high bond strength.',
      icon: 'Wrench',
    },
    {
      title: 'Building Material Stores',
      description: 'Retail and wholesale building supply stores looking for high-demand, trusted sealant products with fast restocking.',
      icon: 'Store',
    },
    {
      title: 'Developers & Industrial',
      description: 'Real estate developers and manufacturing facilities looking for long-term weatherproofing and sealing reliability.',
      icon: 'Factory',
    },
  ],
  contact: {
    address: 'Jl. Daan Mogot No.121B, RT.006/RW.005, Duri Kepa, Kec. Kebun Jeruk, Kota Jakarta Barat , DKI Jakarta 11510',
    phone: '(021) 5660 147',
    email: '-',
    hours: 'Monday – Saturday: 8:00 AM – 5:00 PM',
  },
  locations: [
    {
      id: 'jakarta-hq',
      title: 'Kantor Jakarta',
      badge: 'Head Office',
      city: 'Jakarta Barat',
      address: 'Jl. Daan Mogot No.121B, RT.006/RW.005, Duri Kepa, Kec. Kebun Jeruk, Kota Jakarta Barat , DKI Jakarta 11510',
      whatsapp: '+62 858 9211 4782',
      whatsappUrl: 'https://wa.me/6285892114782',
      phone: '(021) 5660 147',
      phoneUrl: 'tel:+62215660147',
      isPrimary: true,
    },
    {
      id: 'bekasi-branch',
      title: 'Kantor Bekasi',
      badge: 'Branch Office',
      city: 'Bekasi',
      address: 'Perumahan Bojong Menteng Indah Blok H.11 Jl. Kemuning Raya, Bojong Menteng, Kec. Rawalumbu, Kota Bekasi, Jawa Barat 17117',
      whatsapp: '+62 858 9211 4782',
      whatsappUrl: 'https://wa.me/6285892114782',
      phone: '-',
      phoneUrl: '-',
    },
    {
      id: 'surabaya-branch',
      title: 'Kantor Surabaya',
      badge: 'Branch Office',
      city: 'Surabaya',
      address: 'Ruko Mangga Dua Blok B9 No 9, Jagir Wonokromo, Surabaya, Jawa Timur 60243',
      whatsapp: '+62 877 6956 9729',
      whatsappUrl: 'https://wa.me/6287769569729',
      phone: '-',
      phoneUrl: '-',
    },
    {
      id: 'semarang-branch',
      title: 'Kantor Semarang',
      badge: 'Branch Office',
      city: 'Semarang',
      address: 'Ruko Galaxy 10, Jl. Soekarno Hatta No.7, Sawahan Besar, Kec. Gayamsari, Kota Semarang, Jawa Tengah 50166',
      whatsapp: '+62 877 6956 9729',
      whatsappUrl: 'https://wa.me/6287769569729',
      phone: '-',
      phoneUrl: '-',
    },
  ],
}
