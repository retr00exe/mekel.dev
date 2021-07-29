import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import AboutContent from '../components/About';
import Navbar from '../components/Navbar';

const About: React.FC = () => {
	return (
		<>
			<Head>
				<title>About | Mekel Ilyasa Personal Blog</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Navbar />
			<AboutContent />
			<Footer />
		</>
	);
};

export default About;
