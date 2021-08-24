// import { gql } from '@apollo/client';
import { GraphQLClient, gql } from 'graphql-request';

const client = new GraphQLClient(process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_URL);

export const getAllPosts: () => Promise<any> = () => {
	const query = gql`
		{
			posts(sort: "date:desc") {
				id
				title
				slug
				content
				cover {
					url
				}
				date
			}
		}
	`;
	return client.request(query);
};

export const getPostById: (slug: string) => Promise<any> = (slug) => {
	const query = gql`
		{
			posts(where: { slug: "${slug}" }) {
				id
				title
				slug
				content
				cover {
					url
				}
				date
			}
		}
	`;
	return client.request(query);
};
