import React from 'react';
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
			<motion.div
				exit={{ opacity: 0 }}
				variants={stagger}
				initial="initial"
				animate="animate"
				className="bg-[#f3f4f6] pt-24 pb-16 duration-[600ms] ease"
			>
				{posts.map((post) => (
					<motion.div key={post.id} variants={fadeInUp}>
						<Card post={post} key={post.id} />
					</motion.div>
				))}
			</motion.div>
		</MainLayout>
	);
};

export default Home;

export async function getStaticProps() {
	const { posts } = await getAllPosts();
	return {
		props: {
			posts,
		},
	};
}
