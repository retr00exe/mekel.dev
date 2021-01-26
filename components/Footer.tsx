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
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	margin: 0 auto;
	font-size: 0.75rem;
	text-align: center;
	background-color: #fff;
	.footer-container {
		padding: 0.5rem;
	}
	p {
		a {
			text-decoration: underline;
			color: #0000cc;
		}
	}
`;

export default Footer;
