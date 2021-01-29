import { Component } from 'react';

const getSitemap = (posts) => `<?xml version="1.0" encoding="utf-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://mekelilyasa.now.sh/</loc>
    <lastmod>2021-29-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://mekelilyasa.now.sh/about</loc>
    <lastmod>2021-29-01</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://mekelilyasa.now.sh/contact</loc>
    <lastmod>2021-29-01</lastmod>
    <changefreq>never</changefreq>
    <priority>0.9</priority>
  </url>
  ${posts
		.map((post) => {
			return `
    <url>
      <loc>https://mekelilyasa.now.sh/posts/${post._id}</loc>
      <lastmod>2021-29-01</lastmod>
      <changefreq>yearly</changefreq>
      <priority>0.9</priority>
    </url>
    `;
		})
		.join('')}
</urlset>`;

class Sitemap extends Component {
	public static async getInitialProps({ res }) {
		const data = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/posts`);
		const posts = await data.json();
		res.setHeader('Content-Type', 'text/xml');
		res.write(getSitemap(posts));
		res.end();
	}
}

export default Sitemap;
