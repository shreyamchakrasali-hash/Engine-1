import sharp from '../node_modules/sharp/lib/index.js';

export async function getOgImage(pageUrl) {
  try {
    const res = await fetch(pageUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    const html = await res.text();
    let match = html.match(/property="og:image"\s+content="([^"]+)"/i) ||
                html.match(/content="([^"]+)"\s+property="og:image"/i) ||
                html.match(/<meta\s+name="image"\s+content="([^"]+)"/i) ||
                html.match(/"image":\s*"([^"]+)"/i);
    if (match && !match[1].includes('logo') && !match[1].includes('favicon')) {
      return match[1];
    }
    // Search for product image URLs
    const productMatch = html.match(/(https?:\/\/[^"'\s]+\/product\/[^"'\s]+\.(?:jpg|jpeg|png|webp))/i) ||
                         html.match(/(https?:\/\/[^"'\s]+\/products\/[^"'\s]+\.(?:jpg|jpeg|png|webp))/i) ||
                         html.match(/(https?:\/\/[^"'\s]+tatacroma\.com\/[^"'\s]+\.(?:jpg|jpeg|png|webp))/i) ||
                         html.match(/(https:\/\/cdn\.moglix\.com\/p\/[^"'\s]+)/i);
    return productMatch ? productMatch[1] : null;
  } catch (err) {
    console.error(`Error fetching ${pageUrl}:`, err.message);
    return null;
  }
}

async function test() {
  const url = 'https://www.croma.com/samsung-rr20-183-litres-3-star-direct-cool-single-door-refrigerator-with-anti-bacterial-gasket-rr20h2723s8-nl-elegant-inox-/p/321134';
  const img = await getOgImage(url);
  console.log('Result:', img);
}

if (process.argv[1] && process.argv[1].endsWith('fetch_product_image.mjs')) {
  test();
}
