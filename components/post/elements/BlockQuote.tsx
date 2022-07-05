import React from 'react';

interface Props {
	children: string;
}

const BlockQuote: React.FC<Props> = ({ children }: Props) => {
	return (
		<blockquote className="m-0 pl-4 text-[#1f2937] bg-[#f3f4f6] border-l-[0.4rem] border-[#dadada]">
			{children}
		</blockquote>
	);
};

export default BlockQuote;
