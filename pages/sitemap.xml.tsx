import { Component } from 'react';
import { getAllPosts } from '../lib/graphql/queries';

interface Post {
	title: string;
	slug: string;
	date: Date;
}

const getSitemap: (posts: Post[]) => string = (posts) => `<?xml version="1.0" encoding="utf-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://mekelilyasa.now.sh/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://mekelilyasa.now.sh/about</loc>
    <changefreq>yearly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://mekelilyasa.now.sh/contact</loc>
    <changefreq>yearly</changefreq>
    <priority>0.9</priority>
  </url>
  ${posts
		.map((post) => {
			return `
    <url>
      <loc>https://mekelilyasa.now.sh/posts/${post.slug}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.9</priority>
    </url>
    `;
		})
		.join('')}
</urlset>`;

class Sitemap extends Component {
	public static async getInitialProps({ res }) {
		const { posts } = await getAllPosts();
		res.setHeader('Content-Type', 'text/xml');
		res.write(getSitemap(posts));
		res.end();
	}
}

export default Sitemap;
