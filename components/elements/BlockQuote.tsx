import styled from 'styled-components';

interface Props {
	children: string;
}

const BlockQuote: React.FC<Props> = ({ children }) => {
	return <BlockQuoteContainer>{children}</BlockQuoteContainer>;
};

const BlockQuoteContainer = styled.blockquote`
	color: var(--colorPrimary);
	margin: 0;
	padding-left: 1em;
	border-left: 0.4em var(--border) solid;
	background: var(--quoteBackground);
`;

export default BlockQuote;
