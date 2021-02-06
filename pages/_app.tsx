import Router from 'next/router';
import { createGlobalStyle } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import NProgress from 'nprogress';
import '../public/asset/css/nprogress.min.css';

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

  .active {
			color: #673ab7;
			font-weight: 600;
		}

  .cover-image {
    object-fit: cover;
  }
  
  .profile-image {
    border-radius: 999px;
  }
`;

export default function App({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<AnimatePresence exitBeforeEnter>
				<Component {...pageProps} />
			</AnimatePresence>
		</>
	);
}
