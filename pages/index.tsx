import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Card from '@components/Home/Card';
import MainLayout from '@components/_layout/MainLayout';
import { getAllPosts } from '@core/graphql/queries';
import { fadeInUp, stagger } from '@core/utils/animate';

interface Props {
	posts: any;
}

const Home: React.FC<Props> = ({ posts }: Props): JSX.Element => {
	return (
		<MainLayout title="Blog">
			<Cards
				as={motion.div}
				exit={{ opacity: 0 }}
				variants={stagger}
				initial="initial"
				animate="animate"
			>
				{posts.map((post) => (
					<motion.div key={post.id} variants={fadeInUp}>
						<Card post={post} key={post.id} />
					</motion.div>
				))}
			</Cards>
		</MainLayout>
	);
};

export default Home;

const Cards = styled(motion.div)`
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
