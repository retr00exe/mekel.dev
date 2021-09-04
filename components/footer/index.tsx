import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeInUp } from '@core/utils/animate';

const Footer: React.FC = () => {
	return (
		<FooterWrapper
			as={motion.p}
			exit={{ opacity: 0 }}
			initial="initial"
			animate="animate"
			variants={fadeInUp}
		>
			Made with ❤️ using{' '}
			<a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
				Next.js
			</a>{' '}
			&{' '}
			<a href="https://strapi.io/" target="_blank" rel="noopener noreferrer">
				Strapi
			</a>
		</FooterWrapper>
	);
};

const FooterWrapper = styled(motion.p)`
	width: 100%;
	max-height: 2.5rem;
	padding: 0.75rem 0;
	margin: 0 auto;
	font-size: 0.75rem;
	text-align: center;
	color: var(--colorPrimary);
	background-color: var(--footerColor);
	transition-duration: 0.6s;
	transition-timing-function: ease;
	p {
		color: var(--colorPrimary);
		a {
			text-decoration: underline;
			color: var(--linkColor);
		}
	}
`;

export default Footer;
