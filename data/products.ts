export interface TdsRow {
  test: string
  standard: string
  result: string
}

export interface ApplicationStep {
  step: number
  title: string
  description: string
}

export interface Product {
  id: string
  name: string
  brand: string
  tagline: string
  category: 'neutral-cure' | 'acetic-cure' | 'multipurpose'
  description: string
  specs: {
    temperatureRange: string
    cureType: string
    color: string
    application: string
    density: string
    hardness: string
    tackFreeTime: string
    curingSpeed: string
  }
  characters: string[]
  applicationAreas: string[]
  tds: TdsRow[]
  applicationMethods: ApplicationStep[]
  colors: string[]
  packaging: string[]
  storageSafety: {
    storagePeriod: string
    storageConditions: string
    attention: string[]
  }
}

export const productCategories = [
  { id: 'neutral-cure', label: 'Neutral Cure', icon: 'Shield' as const },
  { id: 'acetic-cure', label: 'Acetic Cure', icon: 'FlaskConical' as const },
  { id: 'multipurpose', label: 'Multipurpose & Adhesive', icon: 'Sparkles' as const },
]

export const products: Product[] = [
  {
    id: 'db-ns100',
    name: 'DURABUILD Neutral Silicone High Quality Sealant',
    brand: 'DURABUILD',
    tagline: 'BUILT TO SEAL. BUILT TO LAST.',
    category: 'neutral-cure',
    description: 'DURABUILD Neutral silicone weather resistant adhesive is a one-component moisture cure silicone engineered for premium door, window, glass, and aluminum curtain wall sealing.',
    specs: {
      temperatureRange: '-40°C to +150°C',
      cureType: 'Neutral Moisture Cure (Non-Corrosive)',
      color: 'Black, White, Transparent, Brown',
      application: 'Doors, windows, glass, tiles, aluminum curtain walls',
      density: '1.50 g/cm³',
      hardness: '38 Shore A',
      tackFreeTime: '22 min',
      curingSpeed: '2.0 mm / 24h',
    },
    characters: [
      'Good elasticity and displacement deformation ability',
      'Strong adhesion and compatibility with glass, tiles, and most aluminum surfaces',
      'Anti-aging, UV-resistant, and resilient against extreme high/low temperature changes',
      'Widely used across architectural bonding and weather sealing occasions',
      'One component, easy-to-use moisture cure silicone with long-lasting performance',
    ],
    applicationAreas: [
      'Adhesive and sealing of various types of doors and windows',
      'Various substrates such as glass, tiles, and most aluminum surfaces',
      'Perimeter sealing of curtain walls and exterior building envelopes',
    ],
    tds: [
      { test: 'Appearance', standard: 'Uniform and delicate paste like substance', result: 'Uniform and delicate paste like substance' },
      { test: 'Density (g/cm³)', standard: '1.50 ± 0.02', result: '1.50' },
      { test: 'Droop (mm)', standard: '≤ 1', result: '0' },
      { test: 'Extrudability (g/5s)', standard: '≥ 35', result: '62' },
      { test: 'Surface dry time (min)', standard: '≤ 60', result: '22' },
      { test: 'Curing (mm/24H)', standard: '≥ 2.0', result: '2.0' },
      { test: 'Hardness (Shore A)', standard: '30 – 60', result: '38' },
      { test: 'Damage area of glass aluminum plate adhesion (%)', standard: '≥ 95', result: 'PASS' },
      { test: '150°C Evaporate (%)', standard: '≤ 10', result: '8' },
    ],
    applicationMethods: [
      {
        step: 1,
        title: 'Pretreatment of bonding surface',
        description: 'The bonding surface must be clean and dry. Solvents such as alcohol, isopropanol, or acetone should be used to remove grease, dust, or other pollutants that affect bonding.',
      },
      {
        step: 2,
        title: 'Silicone application',
        description: 'Cut open the pipe mouth, cover it with a glue nozzle, cut nozzle into a suitable slope, and apply to construction site with a glue gun. Allow surface skin to form as it cures from surface to interior.',
      },
    ],
    colors: ['Black', 'White', 'Transparent', 'Brown'],
    packaging: ['300ML Cartridge Tube', '600ML Sausage Foil Pack'],
    storageSafety: {
      storagePeriod: '12 months from manufacture date',
      storageConditions: 'Store in a cool and ventilated environment away from fire, heat, and oxidizing substances. Keep container sealed to avoid water and moisture.',
      attention: [
        'Releases small amount of ketoxime small molecules during curing; workplace must maintain sufficient ventilation.',
        'Avoid direct contact between skin and eyes. Operators should wear protective clothing, gloves, and mask.',
        'If contact occurs on skin, dry with cloth and rinse with water. In eyes, rinse with plenty of water for 15 minutes and seek medical attention.',
        'After the product is completely cured, there are no toxic side effects. Keep out of reach of children.',
      ],
    },
  },
  {
    id: 'wacker-gp',
    name: 'WACKER® GP - General Purpose Silicone Sealant',
    brand: 'WACKER',
    tagline: 'General Purpose Acetoxy Silicone Sealant',
    category: 'acetic-cure',
    description: 'WACKER® GP - General Purpose is a one-part, acetoxy silicone sealant for many applications. It cures at room temperature in the presence of atmospheric moisture to give a permanently flexible silicone rubber.',
    specs: {
      temperatureRange: '-40°C to +100°C',
      cureType: 'Acetoxy (Acetic Moisture Cure)',
      color: 'Transparent S1, White S1, Black S1, Bronze S1, Grey S3, Aluminium 03',
      application: 'Window glazing, stainless sash, plumbing joints',
      density: '0.97 g/cm³',
      hardness: '18 Shore A',
      tackFreeTime: 'approx. 25 min (Skin forming)',
      curingSpeed: '800 g/min extrusion rate',
    },
    characters: [
      'One-part, ready-to-use acetoxy silicone sealant for general purpose building applications',
      'Cures at room temperature with atmospheric moisture into permanently flexible silicone rubber',
      'Non-sag consistency (ISO 7390) ideal for vertical joint sealing and glass sash',
      'Rapid skin forming time (approx. 25 min at 23°C / 50% r.h.)',
      'High extrusion rate of 800 g/min at 6 bar for fast, smooth, and effortless application',
      'High flexibility with 520% ultimate elongation (ISO 37 S2-dumbbell)',
      'Available in 6 architectural color formulations matching window profiles',
    ],
    applicationAreas: [
      'Window Glazing',
      'Stainless Sash Sealing',
      'Plumbing Joints & Sanitary Fixtures',
      'General architectural and interior joint sealing',
    ],
    tds: [
      { test: 'Cure type', standard: 'Internal Method', result: 'Acetoxy' },
      { test: 'Density at 23 °C (g/cm³)', standard: 'ISO 1183-1 A', result: '0.97' },
      { test: 'Consistency', standard: 'ISO 7390', result: 'non-sag' },
      { test: 'Extrusion rate at 6 bar (g/min)', standard: 'Internal Method', result: '800' },
      { test: 'Skin forming time at 23 °C / 50 % r.h.', standard: 'Internal Method', result: 'approx. 25 min' },
      { test: 'Hardness Shore A', standard: 'ISO 868', result: '18' },
      { test: 'Modulus at 100 % (joint) (N/mm²)', standard: 'ISO 8339-A', result: '0.36' },
      { test: 'Tensile strength (joint) (N/mm²)', standard: 'ISO 8339-A', result: '0.5' },
      { test: 'Ultimate elongation (joint) (%)', standard: 'ISO 8339-A', result: '150 %' },
      { test: 'Modulus at 100 % (S2-dumbbell) (N/mm²)', standard: 'ISO 37', result: '0.29' },
      { test: 'Tensile strength (S2-dumbbell) (N/mm²)', standard: 'ISO 37', result: '1.22' },
      { test: 'Ultimate elongation (S2-dumbbell) (%)', standard: 'ISO 37', result: '520 %' },
    ],
    applicationMethods: [
      {
        step: 1,
        title: 'Surface preparation',
        description: 'Ensure bonding surfaces are dry, clean, and free from grease, dust, or contaminants. Clean with a suitable solvent and wipe dry.',
      },
      {
        step: 2,
        title: 'Sealant application & tooling',
        description: 'Cut nozzle tip at a 45° angle matching joint dimension. Extrude sealant smoothly into the joint and tool within 15 minutes before skin forms.',
      },
    ],
    colors: ['Transparent S1', 'White S1', 'Black S1', 'Bronze S1', 'Grey S3', 'Aluminium 03'],
    packaging: ['Standard Cartridge Tube (280ml / 300ml)'],
    storageSafety: {
      storagePeriod: '12 months from manufacture date',
      storageConditions: 'Store in a cool, dry place in unopened original packaging.',
      attention: [
        'Releases small amount of acetic acid vapor during curing; ensure good room ventilation.',
        'Avoid prolonged skin and eye contact. In case of contact, rinse immediately with water.',
        'Fully cured silicone rubber is chemically inert, flexible, and non-toxic.',
      ],
    },
  },
  {
    id: 'super-shield',
    name: 'SUPER SHIELD Premium Sealant & Adhesive',
    brand: 'SUPER SHIELD',
    tagline: 'STRONG • WEATHERSHIELD • MULTIPURPOSE',
    category: 'multipurpose',
    description: 'SUPER SHIELD Sealant is a high quality multipurpose protective sealant designed to provide maximum bonding strength and protection against water, heat, and extreme weather.',
    specs: {
      temperatureRange: '-',
      cureType: 'Oil Free Multipurpose Protective',
      color: '-',
      application: 'Glass & Aluminum joints, construction, roofing & gutters, DIY & industrial, ACP',
      density: '-',
      hardness: '-',
      tackFreeTime: '+/- 10 min (Skin Over)',
      curingSpeed: '24h (Full Cure)',
    },
    characters: [
      'Oil Free formulation',
      'High strength bond for maximum adhesion',
      'Water & extreme weather resistant (Weathershield protection)',
      'Crack-proof & flexible formulation',
      'Suitable for both interior & exterior applications',
      'Eco friendly & quality assured',
    ],
    applicationAreas: [
      'Glass & Aluminum joints',
      'Construction',
      'Roofing & Gutters',
      'DIY & Industrial Projects',
      'ACP (Aluminum Composite Panel)',
    ],
    tds: [],
    applicationMethods: [
      {
        step: 1,
        title: 'Surface Cleaning',
        description: 'Clean surface from dust & grease.',
      },
      {
        step: 2,
        title: 'Nozzle Preparation',
        description: 'Cut nozzle tip as needed.',
      },
      {
        step: 3,
        title: 'Application',
        description: 'Apply sealant evenly.',
      },
      {
        step: 4,
        title: 'Tooling & Finishing',
        description: 'Smooth before curing.',
      },
    ],
    colors: [],
    packaging: [],
    storageSafety: {
      storagePeriod: '-',
      storageConditions: 'Store in a cool & dry place. Keep away from direct sunlight.',
      attention: [
        'Keep out of reach of children.',
        'Avoid direct contact with eyes.',
        'Use in well ventilated area.',
      ],
    },
  },
]
