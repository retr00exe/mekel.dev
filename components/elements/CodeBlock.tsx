import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface Props {
	language: any;
	value: any;
}

const CodeBlock: React.FC<Props> = ({ value }) => {
	return (
		<SyntaxHighlighter language="python" style={dracula} wrapLines>
			{value}
		</SyntaxHighlighter>
	);
};

export default CodeBlock;
