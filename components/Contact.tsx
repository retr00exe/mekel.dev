import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
	FaGithub,
	FaLinkedin,
	FaInstagram,
	FaFacebookSquare,
} from 'react-icons/fa';

const Contact = () => {
	const fadeInUp = {
		initial: {
			y: 60,
			opacity: 0,
		},
		animate: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.6,
				ease: [0.6, -0.05, 0.01, 0.99],
			},
		},
	};
	const stagger = {
		animate: {
			transition: {
				staggerChildren: 0.15,
			},
		},
	};
	return (
		<motion.div
			exit={{ opacity: 0 }}
			variants={stagger}
			initial="initial"
			animate="animate"
		>
			<ContactWrapper>
				<div className="header">
					<motion.h1 variants={fadeInUp}>Contact Me</motion.h1>
					<motion.p variants={fadeInUp}>
						Hi there, you can reach me by follow my social media or email me at
						mekelilyasa@live.com. I am quite active at Facebook and Instagram,
						feel free to leave me a message or ask me some question about
						science or tech :)
					</motion.p>
				</div>
				<motion.div variants={fadeInUp} className="icons">
					<a
						href="https://github.com/retr00exe"
						aria-label="Github"
						target="_blank"
						rel="noopener"
					>
						<FaGithub className="icon github" />
					</a>
					<a
						href="https://www.linkedin.com/in/mekelilyasa/"
						aria-label="Linkedin"
						target="_blank"
						rel="noopener"
					>
						<FaLinkedin className="icon linkedin" />
					</a>
					<a
						href="https://www.instagram.com/mekelilyasa/"
						aria-label="Instagram"
						target="_blank"
						rel="noopener"
					>
						<FaInstagram className="icon instagram" />
					</a>
					<a
						href="https://www.facebook.com/mekel.ilyasa/"
						aria-label="Facebook"
						target="_blank"
						rel="noopener"
					>
						<FaFacebookSquare className="icon facebook" />
					</a>
				</motion.div>
			</ContactWrapper>
		</motion.div>
	);
};

const ContactWrapper = styled.div`
	height: 100vh;
	padding: 4rem 2rem;
	background-color: rgba(243, 244, 246, 1);
	display: flex;
	flex-direction: column;
	align-items: center;
	.header {
		max-width: 600px;
		margin: 4rem 0;
		p {
			font-size: 1.25rem;
			text-align: justify;
		}
		@media (max-width: 1024px) {
			p {
				font-size: 1rem;
			}
		}
	}
	.github {
		font-size: 2rem;
		margin: 0 0.5rem;
		&:hover {
			cursor: pointer;
			color: #14191e;
		}
	}
	.linkedin {
		font-size: 2rem;
		margin: 0 0.5rem;
		&:hover {
			cursor: pointer;
			color: #0077b7;
		}
	}
	.instagram {
		font-size: 2rem;
		margin: 0 0.5rem;
		&:hover {
			cursor: pointer;
			color: #c21a73;
		}
	}
	.facebook {
		font-size: 2rem;
		margin: 0 0.5rem;
		&:hover {
			cursor: pointer;
			color: #465993;
		}
	}
`;

export default Contact;
