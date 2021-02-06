import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import readingTime from 'reading-time';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CodeBlock from '../../components/CodeBlock';
import { formatDate } from '../../utils/date';

export default function Post({ post }) {
	const router = useRouter();
	if (router.isFallback) {
		return <div>Loading...</div>;
	}
	const stats = readingTime(post.content);
	function LinkRenderer(props) {
		return (
			<a
				style={{ color: 'blue' }}
				href={props.href}
				target="_blank"
				rel="noopener"
			>
				{props.children}
			</a>
		);
	}

	return (
		<>
			<Head>
				<title>{post.title}</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Navbar />
			<PostWrapper>
				<div className="container">
					<div className="header">
						<h1>{post.title}</h1>
						<div className="footer">
							<div className="content-footer">
								<Image
									src="https://avatars.githubusercontent.com/u/55347344?s=460&u=f5b39bf3ba4461a448a4ea15d6bd28fc6b7b4337&v=4"
									alt=""
									width={50}
									height={50}
									className="profile-image"
								/>
								<div className="content-profile">
									<p id="author">Mekel Ilyasa</p>
									<p id="date">{formatDate(post.date)}</p>
								</div>
							</div>
							<div className="readtime">
								<p>{stats.text}</p>
							</div>
						</div>
					</div>
					<Image
						src={post.cover.url}
						alt={post.title}
						width={500}
						height={300}
						layout="responsive"
						className="cover-image"
					/>
					<ReactMarkdown
						className="content"
						renderers={{ link: LinkRenderer, code: CodeBlock }}
					>
						{post.content}
					</ReactMarkdown>
				</div>
			</PostWrapper>
			<Footer />
		</>
	);
}

const PostWrapper = styled.div`
	background-color: rgba(243, 244, 246, 1);
	padding-bottom: 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	.container {
		width: 100%;
		max-width: 800px;
		padding: 4rem 2rem 2rem 2rem;
		font-size: 1.15rem;
		.header {
			padding-bottom: 2rem;
			.footer {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				.content-footer {
					display: flex;
					align-items: center;
					.content-profile {
						margin-left: 1rem;
						#author {
							color: rgba(31, 41, 55, 1);
							font-size: 0.875rem;
							line-height: 1.25rem;
							font-weight: 600;
							margin: 0;
						}
						#date {
							color: rgba(75, 85, 99, 1);
							font-size: 0.875rem;
							line-height: 1.25rem;
							margin: 0;
						}
					}
				}
				.readtime {
					color: rgba(156, 163, 175, 1);
					text-transform: capitalize;
				}
			}
		}
		.content {
			text-align: justify;
			line-height: 1.6;
		}
	}
`;

export async function getStaticPaths() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/posts`);
	const posts = await res.json();
	return {
		fallback: true,
		paths: posts.map((post) => ({
			params: {
				id: post._id,
			},
		})),
	};
}

export async function getStaticProps(ctx) {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/posts/${ctx.params.id}`
	);
	const post = await res.json();
	return {
		props: {
			post,
		},
	};
}
