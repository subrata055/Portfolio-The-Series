// Builds optimized portrait assets from pic.png (and its cutout) in the project root.
import sharp from 'sharp';
import { mkdirSync, existsSync, copyFileSync } from 'node:fs';
import { execSync } from 'node:child_process';

const OUT = 'public/assets';
mkdirSync(OUT, { recursive: true });

// Check if cutout exists; if not, generate it from pic.png via Python rembg
const hasCutout = existsSync('pic_cutout.png') || existsSync(`${OUT}/portrait_cutout.png`);

if (!hasCutout) {
  console.log('Generating cutout from pic.png via scripts/build_subrata_assets.py...');
  execSync('python scripts/build_subrata_assets.py', { stdio: 'inherit' });
}

const sourceFile = existsSync(`${OUT}/portrait_cutout.png`)
  ? `${OUT}/portrait_cutout.png`
  : 'pic_cutout.png';

// Ensure root pic_cutout.png and public/assets/portrait_cutout.png stay in sync
if (existsSync(`${OUT}/portrait_cutout.png`) && existsSync('pic_cutout.png')) {
  copyFileSync(`${OUT}/portrait_cutout.png`, 'pic_cutout.png');
}

const cutout = await sharp(sourceFile).toBuffer();

for (const w of [1100, 720, 420]) {
  await sharp(cutout)
    .resize({ width: w })
    .webp({ quality: 88, alphaQuality: 92 })
    .toFile(`${OUT}/portrait-${w}.webp`);
}

// Social share image (1200x630) on a dark backdrop
const portrait = await sharp(cutout).resize({ height: 600 }).png().toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 4, background: '#07070a' } })
  .composite([
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <defs><radialGradient id="g" cx="78%" cy="45%" r="45%"><stop offset="0" stop-color="#e5132b" stop-opacity="0.45"/><stop offset="1" stop-color="#e5132b" stop-opacity="0"/></radialGradient></defs>
        <rect width="1200" height="630" fill="url(#g)"/>
      </svg>`),
    },
    { input: portrait, gravity: 'southeast' },
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <text x="72" y="300" font-family="Impact, 'Arial Narrow', sans-serif" font-size="128" fill="#f4f1ec" letter-spacing="4">SUBRATA</text>
        <text x="78" y="352" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="26" fill="#ff3d5a" letter-spacing="16">THE SERIES</text>
        <text x="78" y="420" font-family="Helvetica, Arial, sans-serif" font-weight="600" font-size="18" fill="#a7a6ad" letter-spacing="5">CLOUD &amp; DEVSECOPS ENGINEER • AWS • KUBERNETES</text>
      </svg>`),
    },
  ])
  .jpeg({ quality: 85 })
  .toFile(`${OUT}/og-image.jpg`);

console.log('Images built successfully from pic.png');
