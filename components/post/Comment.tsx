import React from 'react';
import { DiscussionEmbed } from 'disqus-react';

interface Props {
	post: {
		title: string;
		slug: string;
	};
}

const Comment: React.FC<Props> = ({ post }: Props): JSX.Element => {
	return (
		<DiscussionEmbed
			shortname="mekelilyasa"
			config={{
				url: `${process.env.HOSTNAME}/post/${post.slug}`,
				identifier: post.slug,
				title: post.title,
			}}
		/>
	);
};

export default Comment;
