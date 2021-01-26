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
		console.log(this.props.posts);
		return (
			<div className="flex flex-col h-screen">
				<Head>
					<title>Home</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<Navbar />
				<div className="bg-gray-100 pb-16">
					<h1 className="mt-20 text-center text-2xl font-bold text-gray-800">
						My Posts
					</h1>
					{this.props.posts.map((post) => (
						<Cards post={post} key={post._id} />
					))}
				</div>
				<Footer />
			</div>
		);
	}
}
