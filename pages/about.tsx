import React from 'react';
import MainLayout from '@components/_layout/MainLayout';
import AboutContent from '@components/about/About';

const About: React.FC = () => {
	return (
		<MainLayout title="About">
			<AboutContent />
		</MainLayout>
	);
};

export default About;
