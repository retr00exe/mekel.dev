import React, { Component } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Content from '../components/Content';
import Footer from '../components/Footer';

export default class Home extends Component {
	static async getInitialProps() {
		const res = await fetch(`https://strapi-backend-01.herokuapp.com/posts`);
		const data = await res.json();
		console.log(data);
		return {
			slug: data,
		};
	}

	render() {
		console.log(this.props);
		return (
			<div className="flex flex-col h-screen">
				<Head>
					<title>Create Next App</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<Navbar />
				<div className="bg-gray-100">
					<h1 className="pt-4 text-center text-2xl font-bold ">My Posts</h1>
					<Content />
					<Content />
					<Content />
				</div>
				<Footer />
			</div>
		);
	}
}
