import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

const pages = [
  { url: '/', changefreq: 'daily', priority: 1.0 }, // Replace with your homepage URL and other pages.
  { url: '/features', changefreq: 'weekly', priority: 0.8 },
  { url: '/contact', changefreq: 'weekly', priority: 0.8 },
  // Add more pages as needed.
];

export default async function generateSitemap(req, res) {
  if (!res) return {};
  try {
    const smStream = new SitemapStream({ hostname: 'https://www.gadegos.in' });

    pages.forEach((page) => {
      smStream.write(page);
    });

    smStream.end();

    const sitemap = await streamToPromise(smStream);
    res.setHeader('Content-Type', 'application/xml');
    res.write(sitemap);
    res.end();
  } catch (e) {
    console.log(e);
    res.send(JSON.stringify(e));
  }
}
