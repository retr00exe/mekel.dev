import Head from 'next/head';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Cards from '../components/Cards';
import Footer from '../components/Footer';

export default function Home({ posts }) {
	return (
		<>
			<Head>
				<title>Home</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Navbar />
			<ContentWrapper>
				{posts.map((post) => (
					<Cards post={post} key={post._id} />
				))}
			</ContentWrapper>
			<Footer />
		</>
	);
}

const ContentWrapper = styled.div`
	background-color: rgba(243, 244, 246, 1);
	padding: 6rem 0 4rem 0;
`;

export async function getStaticProps() {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/posts?_sort=date:DESC`
	);
	const data = await res.json();
	return {
		props: {
			posts: data,
		},
	};
}
