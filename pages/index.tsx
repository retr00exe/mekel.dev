import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Navbar from '@components/Navbar';
import Cards from '@components/Cards';
import Footer from '@components/Footer';
import { getAllPosts } from '@core/graphql/queries';
import { fadeInUp, stagger } from '@core/utils/animate';

interface Props {
	posts;
}

export default function Home({ posts }: Props): JSX.Element {
	return (
		<>
			<Head>
				<title>Home | Mekel Ilyasa Personal Blog</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Navbar />
			<motion.div
				exit={{ opacity: 0 }}
				variants={stagger}
				initial="initial"
				animate="animate"
			>
				<ContentWrapper>
					{posts.map((post) => (
						<motion.div key={post.id} variants={fadeInUp}>
							<Cards post={post} key={post.id} />
						</motion.div>
					))}
				</ContentWrapper>
			</motion.div>
			<Footer />
		</>
	);
}

const ContentWrapper = styled.div`
	background-color: var(--background);
	padding: 6rem 0 4rem 0;
	transition-duration: 0.6s;
	transition-timing-function: ease;
`;

export async function getStaticProps() {
	const { posts } = await getAllPosts();
	return {
		props: {
			posts,
		},
	};
}
