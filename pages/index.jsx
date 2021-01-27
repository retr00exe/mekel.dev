import React, { Component } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Cards from '../components/Cards';
import Footer from '../components/Footer';

export default class Home extends Component {
	static async getInitialProps() {
		const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/posts`);
		const data = await res.json();
		return {
			posts: data,
		};
	}

	render() {
		return (
			<>
				<Head>
					<title>Home</title>
					<link rel="icon" href="/favicon.ico" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
				</Head>
				<Navbar />
				<ContentWrapper>
					<h1>My Posts</h1>
					{this.props.posts.map((post) => (
						<Cards post={post} key={post._id} />
					))}
				</ContentWrapper>
				<Footer />
			</>
		);
	}
}

const ContentWrapper = styled.div`
	background-color: rgba(243, 244, 246, 1);
	padding-bottom: 4rem;
	h1 {
		padding-top: 5rem;
		text-align: center;
		font-size: 1.5rem;
		line-height: 2rem;
		font-weight: 700;
		color: rgba(31, 41, 55, 1);
	}
`;
