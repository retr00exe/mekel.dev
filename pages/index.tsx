import Head from 'next/head';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import { fadeInUp, stagger } from '../utils/animate';

export default function Home({ posts }) {
	return (
		<>
			<Head>
				<title>Home</title>
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
						<motion.div key={post._id} variants={fadeInUp}>
							<Cards post={post} key={post._id} />
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
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/posts?_sort=date:DESC`
	);
	const data = await res.json();
	return {
		props: {
			posts: data,
		},
	};
}
