import React from 'react';
import Head from 'next/head';
import useClearance from '@core/hooks/useClearance';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

interface Props {
	children: React.ReactNode;
	title?: string;
	className?: string;
}

const DynamicLayout = ({ children, title }: Props): JSX.Element => {
	const [clearance, HeaderRef, FooterRef] = useClearance(0);

	return (
		<>
			<Head>
				{title && <title>{title} — Mekel Ilyasa Personal Blog</title>}
			</Head>
			<header ref={HeaderRef}>
				<Navbar />
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
