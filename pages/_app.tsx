import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence } from 'framer-motion';
import NProgress from 'nprogress';
import '@public/asset/css/nprogress.min.css';

NProgress.configure({
	minimum: 0.3,
	easing: 'ease',
	speed: 800,
	showSpinner: false,
});

Router.events.on('routeChangeStart', () => {
	NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  :root {
    --background: rgba(243, 244, 246, 1);
    --backgroundPost:rgba(249, 250, 251, 1);
    --colorPrimary:rgba(31, 41, 55, 1);
    --colorSecondary: rgba(55, 65, 81, 1);
    --colorTertiary: rgba(75, 85, 99, 1);
    --colorQuarternary: rgba(112, 112, 112, 1);
    --navColor: rgba(255, 255, 255, 0.8);
    --footerColor: rgba(255, 255, 255, 1);
    --navHoverColor: #e200e2;
    --linkColor:#0000cc;
    -quoteBackground: rgba(243, 244, 246, 1);
    --border: rgba(218,218,218,1)
}

  [data-theme='dark'] {
    --background: #181818;
    --backgroundPost: #181818;
    --colorPrimary:rgba(229, 231, 235, 1);
    --colorSecondary:rgba(229, 231, 235, 1);
    --colorTertiary: rgba(209, 213, 219, 1);
    --colorQuarternary: rgba(243, 244, 246, 1);
    --navColor: rgba(32, 32, 32, 0.5);
    --footerColor: rgba(32, 32, 32, 1);
    --navHoverColor: #e200e2;
    --linkColor:#e200e2;
    --quoteBackground: #3b3b3b;
    --border: #6b6b6b
}

  .active {
		color: var(--navHoverColor);
		font-weight: 600;
	}

  .cover-image {
    object-fit: cover;
  }

  .article-image {
		border-radius: 1.25rem;
    object-fit: cover;
  }

  .profile-image {
    border-radius: 999px;
  }
`;

interface Props {
	Component: any;
	pageProps: any;
}

export default function App({ Component, pageProps }: Props) {
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta charSet="utf-8" />
				<meta name="locale" content="id" />
				<meta
					name="google-site-verification"
					content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION}
				/>
				<meta name="robots" content="index, follow" />
				<meta name="author" content="Mekel Ilyasa" />
				<meta name="description" content="" />
				<meta property="og:site_name" content="Mekel Ilyasa Personal Blog" />
				<meta name="twitter:site_name" content="Mekel Ilyasa Personal Blog" />
				<meta name="twitter:site" content="@mekelilyasa3" />
				<meta name="twitter:creator" content="@mekelilyasa3" />
			</Head>
			<GlobalStyle />
			<ThemeProvider>
				<AnimatePresence exitBeforeEnter>
					<Component {...pageProps} />
				</AnimatePresence>
			</ThemeProvider>
		</>
	);
}
