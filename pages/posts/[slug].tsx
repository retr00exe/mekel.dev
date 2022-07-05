import React, { useState, useEffect } from 'react';
import { NextRouter, useRouter } from 'next/router';
import { motion } from 'framer-motion';
import readingTime from 'reading-time';
import MainLayout from '@components/_layout/MainLayout';
import Spinner from '@components/post/elements/Spinner';
import Cover from '@components/post/Cover';
import ContentHeader from '@components/post/ContentHeader';
import ContentBody from '@components/post/ContentBody';
// import Comment from '@components/post/Comment';
import { getPostById, getAllPosts } from '@core/graphql/queries';
import { stagger } from '@core/utils/animate';

interface Post {
	post: {
		title: string;
		content: string;
		slug: string;
		cover: {
			name?: string;
			url: string;
		};
		date: Date;
		createdAt?: Date;
		updatedAt?: Date;
	};
}

export default function Post({ post }: Post): JSX.Element {
	const router: NextRouter = useRouter();
	if (router.isFallback) {
		return <Spinner />;
	}

	const [navbar, setNavbar] = useState<boolean>(false);
	const stats = readingTime(post.content);

	const changeNavbar = () => {
		window.scrollY >= 200 ? setNavbar(true) : setNavbar(false);
	};

	useEffect(() => {
		window.addEventListener('scroll', changeNavbar);
		return () => window.removeEventListener('scroll', changeNavbar);
	});

	return (
		<MainLayout title={post.title} navbar={navbar} post={post}>
			<motion.div
				variants={stagger}
				exit={{ opacity: 0 }}
				initial="initial"
				animate="animate"
				className="w-full max-w-[1000px] bg-[#f9fafb] px-8 py-16 text-lg flex col mx-auto duration-[600ms] ease"
			>
				<ContentHeader post={post} readtime={stats.text} />
				<Cover post={post} />
				<ContentBody post={post} />
				{/* <Comment post={post} /> */}
			</motion.div>
		</MainLayout>
	);
}

export async function getStaticPaths() {
	const { posts } = await getAllPosts();
	return {
		fallback: true,
		paths: posts.map((post) => ({
			params: {
				slug: post.slug,
			},
		})),
	};
}

export async function getStaticProps(ctx) {
	const { posts } = await getPostById(ctx.params.slug);
	const [post] = posts;
	return {
		props: {
			post,
		},
	};
}
