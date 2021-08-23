import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeInUp } from '@core/utils/animate';

const Footer: React.FC = () => {
	return (
		<FooterWrapper>
			<motion.p
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
			</motion.p>
		</FooterWrapper>
	);
};

const FooterWrapper = styled.footer`
	width: 100%;
	max-height: 1.75rem;
	margin: 0 auto;
	font-size: 0.75rem;
	text-align: center;
	background-color: var(--navColor);
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
