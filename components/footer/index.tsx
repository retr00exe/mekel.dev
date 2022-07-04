import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@core/utils/animate';

const Footer: React.FC = () => {
	return (
		<motion.p
			exit={{ opacity: 0 }}
			initial="initial"
			animate="animate"
			variants={fadeInUp}
			className="w-full max-h-10 py-3 mx-auto text-sm text-center text-[#1f2937] bg-white duration-[600ms] ease"
		>
			Made with ❤️ using{' '}
			<a
				href="https://nextjs.org/"
				target="_blank"
				rel="noopener noreferrer"
				className="underline text-[#0000cc]"
			>
				Next.js
			</a>{' '}
			&{' '}
			<a
				href="https://strapi.io/"
				target="_blank"
				rel="noopener noreferrer"
				className="underline text-[#0000cc]"
			>
				Strapi
			</a>
		</motion.p>
	);
};

export default Footer;
