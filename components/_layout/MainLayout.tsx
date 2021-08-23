import React from 'react';
import Head from 'next/head';
import useClearance from '@core/hooks/useClearance';
import Navbar from '@components/navbar';
import Footer from '@components/footer';

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
				{title && <title>{title} — Mekel Ilyasa Personal Blog</title>}
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
					property="og:url"
					content={`${process.env.HOSTNAME}/post/${
						post ? post.slug : `${process.env.HOSTNAME}`
					}`}
				/>
				<meta
					name="twitter:url"
					content={`${process.env.HOSTNAME}/post/${
						post ? post.slug : `${process.env.HOSTNAME}`
					}`}
				/>
			</Head>
			<header ref={HeaderRef}>
				{navbar ? <Navbar active title={post.title} /> : <Navbar />}
			</header>
			<main style={{ minHeight: `calc(100vh - ${clearance}px)` }}>
				{children}
			</main>
			<footer ref={FooterRef}>
				<Footer />
			</footer>
		</>
	);
};

export default DynamicLayout;
