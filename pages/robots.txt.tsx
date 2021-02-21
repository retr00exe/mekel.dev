import { Component } from 'react';

const getRobots: () => string = () => `User-agent: *
Disallow: /_next/static/
Sitemap: https://mekelilyasa.now.sh/sitemap.xml
`;

class Sitemap extends Component {
	public static async getInitialProps({ res }) {
		res.setHeader('Content-Type', 'text/plain');
		res.write(getRobots());
		res.end();
	}
}

export default Sitemap;
