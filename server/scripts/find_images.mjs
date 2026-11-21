// Native fetch in Node 18+
async function searchImages(query) {
  try {
    const url = `https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}`;
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    const html = await res.text();
    // extract URLs from html
    const matches = [...html.matchAll(/uddg=([^&]+)/g)].map(m => decodeURIComponent(m[1]));
    console.log(`Query "${query}": found ${matches.length} links`);
    matches.slice(0, 3).forEach(l => console.log('  -> ' + l));
  } catch (e) {
    console.error(e.message);
  }
}

searchImages('Samsung refrigerator RT28 vijaysales').then(() => 
searchImages('LG refrigerator GL-B201 croma'));
