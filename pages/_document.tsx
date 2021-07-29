import React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}
	render() {
		return (
			<Html lang="id">
				<Head>
					<meta
						name="google-site-verification"
						content="FxUzKQItSGogZl9uidDBbvYi58mSK49aDSMobEhj52U"
					/>
					<meta name="robots" content="index, follow" />
					<meta name="author" content="Mekel Ilyasa" />
					<meta
						name="description"
						content="Mekel Ilyasa personal blog berisi tentang opini dan cerita mengenai pengalam pribadi penulis serta pandangan mengenai perkembangan dunia teknologi dan sains"
					/>
					<meta name="locale" content="id" />
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
