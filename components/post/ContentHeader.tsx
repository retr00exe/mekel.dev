import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import AuthorCard from '@components/_shared/AuthorCard';
import { fadeInUp } from '@core/utils/animate';

interface Props {
	post: any;
	readtime: string;
}

const ContentHeader: React.FC<Props> = ({ post, readtime }: Props): JSX.Element => {
	return (
		<HeaderWrapper>
			<motion.h1 variants={fadeInUp}>{post.title}</motion.h1>
			<motion.div variants={fadeInUp} className="header">
				<AuthorCard
					name="Mekel Ilyasa"
					image="https://avatars.githubusercontent.com/u/55347344?s=460&u=f5b39bf3ba4461a448a4ea15d6bd28fc6b7b4337&v=4"
					date={post.date}
					readtime={readtime}
				/>
			</motion.div>
		</HeaderWrapper>
	);
};

const HeaderWrapper = styled.div`
	padding-bottom: 2rem;
	h1 {
		color: var(--colorPrimary);
		font-family: Gotham;
	}
`;

export default ContentHeader;
