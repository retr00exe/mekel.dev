import React from 'react';
interface Props {
	href: string;
	children: React.ReactNode;
}

const Anchor: React.FC<Props> = ({ href, children }: Props) => {
	return (
		<a
			style={{ color: 'blue' }}
			href={href}
			target="_blank"
			rel="noopener noreferrer"
		>
			{children}
		</a>
	);
};

export default Anchor;
