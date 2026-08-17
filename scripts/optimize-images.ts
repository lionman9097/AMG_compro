import path from 'node:path'
import sharp from 'sharp'

async function main() {
  console.log('🚀 Optimizing images and generating social previews...')

  // 1. Generate 1200x630 OG Image for social platforms
  const width = 1200
  const height = 630

  const logo1 = await sharp('public/logo1.png').resize({ height: 110 }).toBuffer()
  const logo3 = await sharp('public/logo3.png').resize({ height: 70 }).toBuffer()
  const logo2 = await sharp('public/logo2.png').resize({ height: 50 }).toBuffer()

  const svgCard = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#09090b" />
          <stop offset="50%" stop-color="#18181b" />
          <stop offset="100%" stop-color="#030712" />
        </linearGradient>
      </defs>
      
      <rect width="${width}" height="${height}" fill="url(#bg)" />
      
      <circle cx="1100" cy="100" r="300" fill="#0284c7" opacity="0.12" />
      <circle cx="150" cy="550" r="220" fill="#0284c7" opacity="0.08" />
      
      <rect x="36" y="36" width="1128" height="558" rx="28" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="2" />
      
      <text x="100" y="270" font-family="'Inter', system-ui, sans-serif" font-size="52" font-weight="700" fill="#ffffff" letter-spacing="-1">
        PT Anugrah Megah Perkasa
      </text>

      <text x="100" y="325" font-family="'Inter', system-ui, sans-serif" font-size="24" font-weight="500" fill="#a1a1aa" letter-spacing="-0.3">
        Official Distributor of DURABUILD Industrial Silicone Sealants
      </text>

      <text x="100" y="400" font-family="'Inter', system-ui, sans-serif" font-size="18" font-weight="600" fill="#38bdf8" letter-spacing="1">
        NEUTRAL MOISTURE CURE  •  WEATHER &amp; UV RESISTANT  •  HIGH ELASTICITY
      </text>

      <text x="100" y="520" font-family="'JetBrains Mono', monospace" font-size="16" font-weight="400" fill="#71717a">
        Jakarta, Indonesia  |  info@anugrah-megahperkasa.com  |  ISO 9001 Certified
      </text>
    </svg>
  `

  await sharp(Buffer.from(svgCard))
    .composite([
      { input: logo1, top: 85, left: 100 },
      { input: logo3, top: 105, left: 780 },
      { input: logo2, top: 115, left: 1010 },
    ])
    .png({ quality: 90 })
    .toFile('public/og-image.png')

  console.log('  ✓ Generated: public/og-image.png (1200x630)')

  // 2. Generate optimized WebP versions of high-res assets
  await sharp('public/durabuild_main.png')
    .webp({ quality: 85 })
    .toFile('public/durabuild_main.webp')
  console.log('  ✓ Generated: public/durabuild_main.webp')

  await sharp('public/technical.png')
    .webp({ quality: 85 })
    .toFile('public/technical.webp')
  console.log('  ✓ Generated: public/technical.webp')

  await sharp('public/color_options.jpg')
    .webp({ quality: 85 })
    .toFile('public/color_options.webp')
  console.log('  ✓ Generated: public/color_options.webp')

  console.log('✨ Image optimization complete!')
}

main().catch((err) => {
  console.error('❌ Error optimizing images:', err)
  process.exit(1)
})
