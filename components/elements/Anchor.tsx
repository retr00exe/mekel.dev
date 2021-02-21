interface Props {
	href: string;
}

const Anchor: React.FC<Props> = ({ href, children }) => {
	return (
		<a style={{ color: 'blue' }} href={href} target="_blank" rel="noopener">
			{children}
		</a>
	);
};

export default Anchor;
