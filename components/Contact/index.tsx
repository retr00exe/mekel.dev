import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebookSquare } from 'react-icons/fa';
import { fadeInUp, stagger } from '@core/utils/animate';

const Contact: React.FC = () => {
	return (
		<motion.div
			exit={{ opacity: 0 }}
			variants={stagger}
			initial="initial"
			animate="animate"
			className="py-16 px-8 flex-cc col duration-[600ms] ease"
		>
			<div className="max-w-[600px] my-16 text-[#1f2937]">
				<motion.h1 variants={fadeInUp}>Contact Me</motion.h1>
				<motion.p variants={fadeInUp} className="text-justify text-xl -lg:text-base">
					Hi there, you can reach me by follow my social media or email me at mekelilyasa@live.com.
					I am quite active at Facebook and Instagram, feel free to leave me a message :)
				</motion.p>
			</div>
			<motion.div variants={fadeInUp} className="icons text-4xl mx-2 text-[#1f2937] hover:pointer">
				<a
					href="https://github.com/retr00exe"
					aria-label="Github"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaGithub className="icon hover:text-[#1f2937]" />
				</a>
				<a
					href="https://www.linkedin.com/in/mekelilyasa/"
					aria-label="Linkedin"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaLinkedin className="icon hover:text-[#0077b7]" />
				</a>
				<a
					href="https://www.instagram.com/mekelilyasa/"
					aria-label="Instagram"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaInstagram className="icon hover:text-[#c21a73]" />
				</a>
				<a
					href="https://www.facebook.com/mekel.ilyasa/"
					aria-label="Facebook"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaFacebookSquare className="icon hover:text-[#465993]" />
				</a>
			</motion.div>
		</motion.div>
	);
};

export default Contact;
