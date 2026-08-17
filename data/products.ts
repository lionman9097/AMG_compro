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
  category: 'neutral-cure' | 'acetic-cure' | 'high-temp' | 'specialty'
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
  { id: 'high-temp', label: 'High Temperature', icon: 'Flame' as const },
  { id: 'specialty', label: 'Specialty', icon: 'Sparkles' as const },
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
      tackFreeTime: '22 min (≤ 60 min standard)',
      curingSpeed: '2.0 mm / 24h',
    },
    characters: [
      'Has good elasticity and displacement deformation ability',
      'Has good adhesion and compatibility to most substrate surfaces (glass, tiles, aluminum)',
      'Anti-aging, anti-ultraviolet (UV) radiation and extreme high and low temperature changes',
      'Can be widely used in various bonding and sealing occasions',
      'One component easy to use, moisture cure silicone with long-lasting performance',
    ],
    applicationAreas: [
      'Adhesive and sealing of various types of doors and windows',
      'Various substrates, such as glass, tiles, and most aluminum surfaces',
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
        'After the product is completely cured, there are no toxic side effects. Avoid contact with children.',
      ],
    },
  },
  {
    id: 'db-ac200',
    name: 'DURABUILD Acetic Silicone High Quality Sealant',
    brand: 'DURABUILD',
    tagline: 'BUILT TO SEAL. BUILT TO LAST.',
    category: 'acetic-cure',
    description: 'Fast-curing acetoxy silicone sealant with high tensile strength and flexible bonding for glass, ceramic, and sanitary fixtures.',
    specs: {
      temperatureRange: '-40°C to +150°C',
      cureType: 'Acetoxy (Acetic Cure)',
      color: 'Clear, White, Black',
      application: 'Glass assembly, sanitary joints, ceramic tiling, aluminum profiles',
      density: '1.48 g/cm³',
      hardness: '35 Shore A',
      tackFreeTime: '15 min',
      curingSpeed: '2.5 mm / 24h',
    },
    characters: [
      'Fast curing formula with high initial bond strength',
      'Flexible, durable, and weather resistant',
      'Strong adhesion to non-porous substrates like glass and glazed ceramics',
      'Anti-aging and UV resistant for long service life',
    ],
    applicationAreas: [
      'Interior and exterior glass bonding and window perimeter sealing',
      'Bathroom, kitchen, and sanitary seam jointing',
      'General industrial bonding for non-corrosive substrates',
    ],
    tds: [
      { test: 'Appearance', standard: 'Uniform smooth paste', result: 'Uniform smooth paste' },
      { test: 'Density (g/cm³)', standard: '1.48 ± 0.02', result: '1.48' },
      { test: 'Droop (mm)', standard: '≤ 1', result: '0' },
      { test: 'Extrudability (g/5s)', standard: '≥ 40', result: '70' },
      { test: 'Surface dry time (min)', standard: '≤ 30', result: '15' },
      { test: 'Curing (mm/24H)', standard: '≥ 2.0', result: '2.5' },
      { test: 'Hardness (Shore A)', standard: '25 – 45', result: '35' },
      { test: 'Glass adhesion damage (%)', standard: '≥ 95', result: 'PASS' },
      { test: '150°C Evaporate (%)', standard: '≤ 10', result: '7.5' },
    ],
    applicationMethods: [
      {
        step: 1,
        title: 'Pretreatment of bonding surface',
        description: 'Clean surfaces thoroughly with alcohol or acetone. Ensure zero moisture or oil before applying.',
      },
      {
        step: 2,
        title: 'Silicone application',
        description: 'Trim nozzle at 45° angle, apply steadily using cartridge gun, and tool joint within 10 minutes.',
      },
    ],
    colors: ['Clear', 'White', 'Black'],
    packaging: ['300ML Cartridge Tube'],
    storageSafety: {
      storagePeriod: '12 months',
      storageConditions: 'Store below 27°C in dry, ventilated space.',
      attention: [
        'Releases acetic acid vapor during cure; ensure proper room ventilation.',
        'Avoid skin and eye contact during application.',
      ],
    },
  },
  {
    id: 'db-ht500',
    name: 'DURABUILD High Temperature Red 300°C Sealant',
    brand: 'DURABUILD',
    tagline: 'BUILT TO SEAL. BUILT TO LAST.',
    category: 'high-temp',
    description: 'Industrial high-temperature silicone engineered to maintain flexibility under continuous thermal stress up to 300°C.',
    specs: {
      temperatureRange: '-60°C to +300°C',
      cureType: 'Neutral High-Temp Cure',
      color: 'Red, Black',
      application: 'Flue pipes, industrial ovens, engine gaskets, heating ducts',
      density: '1.45 g/cm³',
      hardness: '40 Shore A',
      tackFreeTime: '20 min',
      curingSpeed: '2.0 mm / 24h',
    },
    characters: [
      'Continuous exposure up to 300°C without hardening or cracking',
      'Remains flexible and elastomeric across extreme thermal cycles',
      'Oil, chemical, and steam resistant formulation',
    ],
    applicationAreas: [
      'Industrial boilers, furnace doors, heating equipment seals',
      'Automotive engine valve covers, oil pans, exhaust manifolds',
    ],
    tds: [
      { test: 'Appearance', standard: 'Uniform red paste', result: 'Uniform red paste' },
      { test: 'Density (g/cm³)', standard: '1.45 ± 0.02', result: '1.45' },
      { test: 'Hardness (Shore A)', standard: '35 – 50', result: '40' },
      { test: 'Thermal Resistance', standard: '300°C continuous', result: 'PASS' },
    ],
    applicationMethods: [
      {
        step: 1,
        title: 'Surface preparation',
        description: 'Remove old gasket residue, grease, and rust with wire brush and solvent.',
      },
      {
        step: 2,
        title: 'Application',
        description: 'Apply continuous 3mm bead around joint perimeter and bolt holes before assembling.',
      },
    ],
    colors: ['Red', 'Black'],
    packaging: ['300ML Cartridge Tube'],
    storageSafety: {
      storagePeriod: '12 months',
      storageConditions: 'Cool, dry location away from direct sunlight.',
      attention: ['Keep away from children.', 'Maintain good ventilation during curing.'],
    },
  },
  {
    id: 'db-sp700',
    name: 'DURABUILD Anti-Fungal Sanitary Silicone',
    brand: 'DURABUILD',
    tagline: 'BUILT TO SEAL. BUILT TO LAST.',
    category: 'specialty',
    description: 'Anti-mold and anti-fungal silicone sealant with built-in biocide technology for cleanrooms, kitchens, and high-humidity areas.',
    specs: {
      temperatureRange: '-40°C to +120°C',
      cureType: 'Neutral Anti-Fungal',
      color: 'White, Translucent',
      application: 'Bathrooms, cleanrooms, food preparation areas, cold stores',
      density: '1.40 g/cm³',
      hardness: '32 Shore A',
      tackFreeTime: '18 min',
      curingSpeed: '2.2 mm / 24h',
    },
    characters: [
      'Active biocide protection prevents black mold and fungal growth',
      'Waterproof seal resistant to household detergents and hot water',
      'Non-yellowing crystal white and translucent finish',
    ],
    applicationAreas: [
      'Showers, bathtubs, sinks, tile joints, and kitchen countertops',
      'Pharmaceutical cleanrooms and food processing facilities',
    ],
    tds: [
      { test: 'Appearance', standard: 'Uniform white/translucent paste', result: 'Uniform white/translucent paste' },
      { test: 'Fungal Resistance', standard: 'Class 0 (No growth)', result: 'Class 0 PASS' },
      { test: 'Hardness (Shore A)', standard: '28 – 40', result: '32' },
    ],
    applicationMethods: [
      {
        step: 1,
        title: 'Joint cleaning',
        description: 'Ensure joint is 100% dry and free of mold spores before applying.',
      },
      {
        step: 2,
        title: 'Sealing',
        description: 'Smooth bead with soapy water tool within 10 minutes of extrusion.',
      },
    ],
    colors: ['White', 'Translucent'],
    packaging: ['300ML Cartridge Tube'],
    storageSafety: {
      storagePeriod: '12 months',
      storageConditions: 'Store in dry place between 5°C and 25°C.',
      attention: ['Avoid contact with eyes.', 'Cured sealant is non-toxic.'],
    },
  },
]
