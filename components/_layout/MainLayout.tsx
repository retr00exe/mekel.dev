import React from 'react';
import Head from 'next/head';
import useClearance from '@core/hooks/useClearance';
import Navbar from '@components/navbar';
import Footer from '@components/footer';
import styled from 'styled-components';

interface Props {
	children: React.ReactNode;
	title?: string;
	className?: string;
	post?: any;
	navbar?: boolean;
}

const DynamicLayout = ({
	children,
	title,
	post,
	navbar,
}: Props): JSX.Element => {
	const [clearance, HeaderRef, FooterRef] = useClearance(0);

	return (
		<>
			<Head>
				{title && <title>{title} — Mekel Ilyasa</title>}
				<meta property="og:type" content="article" />
				<meta
					property="og:title"
					content={post ? post.title : 'Mekel Ilyasa Personal Blog'}
				/>
				<meta
					property="og:image"
					content={
						post
							? post.cover.url
							: 'https://res.cloudinary.com/retr00exe/image/upload/v1611939899/medium_astroboy_52092ece77.webp'
					}
				/>
				<meta
					property="og:url"
					content={
						post
							? `${process.env.HOSTNAME}/post/${post.slug}`
							: `${process.env.HOSTNAME}`
					}
				/>
				<meta name="twitter:type" content="article" />
				<meta
					name="twitter:title"
					content={post ? post.title : 'Mekel Ilyasa Personal Blog'}
				/>
				<meta
					name="twitter:image"
					content={
						post
							? post.cover.url
							: 'https://res.cloudinary.com/retr00exe/image/upload/v1611939899/medium_astroboy_52092ece77.webp'
					}
				/>
				<meta
					name="twitter:url"
					content={
						post
							? `${process.env.HOSTNAME}/post/${post.slug}`
							: `${process.env.HOSTNAME}`
					}
				/>
			</Head>
			<header ref={HeaderRef}>
				{navbar ? <Navbar active title={post.title} /> : <Navbar />}
			</header>
			<Main clearance={clearance} post={post}>
				{children}
			</Main>
			<footer ref={FooterRef}>
				<Footer />
			</footer>
		</>
	);
};

interface MainProps {
	clearance: number;
	post: any;
}

const Main = styled.main<MainProps>`
	min-height: calc(100vh - ${({ clearance }) => clearance}px);
	background-color: ${({ post }) =>
		post ? 'var(--backgroundPost);' : 'var(--background)'};
	transition-duration: 0.6s;
	transition-timing-function: ease;
`;

export default DynamicLayout;
