// import { gql } from '@apollo/client';
import { GraphQLClient, gql } from 'graphql-request';

const client = new GraphQLClient(process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_URL);

export const getAllPosts = () => {
	const query = gql`
		{
			posts(sort: "date:desc") {
				id
				title
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

export const getPostById = (postId) => {
	const query = gql`
		{
			post(id:"${postId}") {
				id
				title
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
