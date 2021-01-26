import React, { Component } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Cards from '../components/Cards';
import Footer from '../components/Footer';

export default class Home extends Component {
	static async getInitialProps() {
		const res = await fetch(`https://strapi-backend-01.herokuapp.com/posts`);
		const data = await res.json();
		return {
			posts: data,
		};
	}

	render() {
		return (
			<div className="flex flex-col h-screen">
				<Head>
					<title>Home</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<Navbar />
				<Cards data={this.props} />
				<Footer />
			</div>
		);
	}
}
