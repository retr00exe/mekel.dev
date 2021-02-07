import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animate';

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
				<a href="https://nextjs.org/" target="_blank" rel="noopener">
					Next.js
				</a>{' '}
				&{' '}
				<a href="https://strapi.io/" target="_blank" rel="noopener">
					Strapi
				</a>
			</motion.p>
		</FooterWrapper>
	);
};

const FooterWrapper = styled.footer`
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
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
