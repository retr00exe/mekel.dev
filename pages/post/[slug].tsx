import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { NextRouter, useRouter } from 'next/router';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { DiscussionEmbed } from 'disqus-react';
import ReactMarkdown from 'react-markdown';
import readingTime from 'reading-time';
import Navbar from '@components/navbar';
import Footer from '@components/footer';
import Spinner from '@components/post/elements/Spinner';
import ImageRenderer from '@components/post/elements/Image';
import Anchor from '@components/post/elements/Anchor';
import CodeBlock from '@components/post/elements/CodeBlock';
import BlockQuote from '@components/post/elements/BlockQuote';
import AuthorCard from '@components/_shared/AuthorCard';
import { getPostById, getAllPosts } from '@core/graphql/queries';
import { fadeInUp, stagger } from '@core/utils/animate';

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

	const [navbar, setNavbar] = useState<boolean>(true);
	const stats = readingTime(post.content);

	const changeNavbar = () => {
		window.scrollY >= 200 ? setNavbar(false) : setNavbar(true);
	};

	useEffect(() => {
		window.addEventListener('scroll', changeNavbar);
		return () => window.removeEventListener('scroll', changeNavbar);
	});

	return (
		<>
			<Head>
				<title>{post.title} | Mekel Ilyasa Personal Blog</title>

				<meta property="og:type" content="article" />
				<meta property="og:title" content={post.title} />
				<meta property="og:image" content={post.cover.url} />
				<meta
					property="og:url"
					content={`${process.env.HOSTNAME}/post/${post.slug}`}
				/>

				<meta name="twitter:type" content="article" />
				<meta name="twitter:title" content={post.title} />
				<meta name="twitter:image" content={post.cover.url} />
				<meta
					name="twitter:url"
					content={`${process.env.HOSTNAME}/post/${post.slug}`}
				/>
			</Head>
			{navbar ? <Navbar /> : <Navbar active title={post.title} />}
			<motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
				<PostWrapper>
					<motion.div variants={stagger} className="container">
						<div className="header-container">
							<motion.h1 variants={fadeInUp}>{post.title}</motion.h1>
							<motion.div variants={fadeInUp} className="header">
								<AuthorCard
									name="Mekel Ilyasa"
									image="https://avatars.githubusercontent.com/u/55347344?s=460&u=f5b39bf3ba4461a448a4ea15d6bd28fc6b7b4337&v=4"
									date={post.date}
									readtime={stats.text}
								/>
							</motion.div>
						</div>
						<motion.div variants={fadeInUp}>
							<Image
								src={post.cover.url}
								alt={post.title}
								width={800}
								height={500}
								layout="responsive"
								className="article-image"
							/>
						</motion.div>
						<motion.div variants={fadeInUp}>
							<ReactMarkdown
								className="content"
								renderers={{
									link: Anchor,
									code: CodeBlock,
									image: ImageRenderer,
									blockquote: BlockQuote,
								}}
							>
								{post.content}
							</ReactMarkdown>
						</motion.div>
						<DiscussionEmbed
							shortname="mekelilyasa"
							config={{
								url: `${process.env.HOSTNAME}/post/${post.slug}`,
								identifier: post.slug,
								title: post.title,
							}}
						/>
					</motion.div>
				</PostWrapper>
			</motion.div>
			<Footer />
		</>
	);
}

const PostWrapper = styled.div`
	background-color: var(--backgroundPost);
	padding-bottom: 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	transition-duration: 0.6s;
	transition-timing-function: ease;
	.container {
		width: 100%;
		max-width: 800px;
		padding: 4rem 2rem 2rem 2rem;
		font-size: 1.15rem;
		.header-container {
			padding-bottom: 2rem;
			h1 {
				color: var(--colorPrimary);
			}
		}
		.content {
			color: var(--colorPrimary);
			text-align: justify;
			line-height: 1.6;
		}
	}
`;

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
