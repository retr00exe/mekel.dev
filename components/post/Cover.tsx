import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp } from '@core/utils/animate';

interface Props {
	post: {
		title: string;
		cover: {
			url: string;
		};
	};
}

const Cover: React.FC<Props> = ({ post }: Props): JSX.Element => {
	return (
		<motion.div variants={fadeInUp}>
			<Image
				src={post.cover.url}
				alt={post.title}
				width={800}
				height={500}
				layout="responsive"
				className="article-image"
			/>
		</motion.div>
	);
};

export default Cover;
