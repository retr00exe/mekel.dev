import React from 'react';
import Footer from '../components/Footer';
import AboutContent from '../components/About';
import Navbar from '../components/Navbar';

const About = () => {
	return (
		<>
			<Navbar/>
			<AboutContent />
			<Footer fixed/>
		</>
	);
}

export default About;
