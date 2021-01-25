import styled from 'styled-components';

const Footer = () => {
	return (
		<FooterWrapper>
			<div className="footer-container">
				<p>
					Made with ❤️ using{' '}
					<a href="https://nextjs.org/" target="_blank">
						Next.js
					</a>{' '}
					&{' '}
					<a href="https://strapi.io/" target="_blank">
						Strapi
					</a>
				</p>
			</div>
		</FooterWrapper>
	);
};

const FooterWrapper = styled.footer`
	max-width: 800px;
	margin: 0 auto;
	font-size: 0.75rem;
	display: flex;
	justify-content: center;
	.footer-container {
		padding: 0.75rem;
	}
	p {
		a {
			text-decoration: underline;
			color: #0000cc;
		}
	}
`;

export default Footer;
