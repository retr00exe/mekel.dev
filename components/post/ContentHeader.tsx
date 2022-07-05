import React from 'react';
import { motion } from 'framer-motion';
import AuthorCard from '@components/_shared/AuthorCard';
import { fadeInUp } from '@core/utils/animate';

interface Props {
	post: any;
	readtime: string;
}

const ContentHeader: React.FC<Props> = ({ post, readtime }: Props): JSX.Element => {
	return (
		<div className="pb-8">
			<motion.h1 variants={fadeInUp}>{post.title}</motion.h1>
			<motion.div variants={fadeInUp} className="text-[#1f2937] gotham">
				<AuthorCard
					name="Mekel Ilyasa"
					image="https://avatars.githubusercontent.com/u/55347344?s=460&u=f5b39bf3ba4461a448a4ea15d6bd28fc6b7b4337&v=4"
					date={post.date}
					readtime={readtime}
				/>
			</motion.div>
		</div>
	);
};

export default ContentHeader;
