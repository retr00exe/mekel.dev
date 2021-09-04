import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import ImageRenderer from '@components/post/elements/Image';
import Anchor from '@components/post/elements/Anchor';
import CodeBlock from '@components/post/elements/CodeBlock';
import BlockQuote from '@components/post/elements/BlockQuote';
import { fadeInUp } from '@core/utils/animate';

interface Props {
	post: {
		content: string;
	};
}

const ContentBody: React.FC<Props> = ({ post }: Props): JSX.Element => {
	return (
		<ContentWrapper as={motion.div} variants={fadeInUp}>
			<ReactMarkdown
				className="content"
				renderers={{
					link: Anchor,
					code: CodeBlock,
					image: ImageRenderer,
					blockquote: BlockQuote,
				}}
			>
				{post.content}
			</ReactMarkdown>
		</ContentWrapper>
	);
};

const ContentWrapper = styled(motion.div)`
	.content {
		color: var(--colorPrimary);
		line-height: 1.9;
	}
	@media (max-width: 640px) {
		text-align: justify;
	}
`;

export default ContentBody;
