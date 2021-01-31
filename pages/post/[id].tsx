import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CodeBlock from '../../components/CodeBlock';
import { formatDate } from '../../utils/date';

export default function Post({ post }) {
	const router = useRouter();
	if (router.isFallback) {
		return <div>Loading...</div>;
	}

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
					<h1>{post.title}</h1>
					<div>
						<p>By Mekel Ilyasa on {formatDate(post.date)}</p>
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
	padding-bottom: 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	.container {
		width: 100%;
		max-width: 800px;
		padding: 4rem 2rem 2rem 2rem;
		font-size: 1.15rem;
		p {
			color: rgba(31, 41, 55, 1);
		}
		.content {
			text-align: justify;
		}
	}
`;

export async function getServerSideProps(ctx) {
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
