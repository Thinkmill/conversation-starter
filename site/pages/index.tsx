import { gql } from '@apollo/client';

import { initializeApollo } from '../lib/apollo';
import { Listing } from '../components/Listing';
import { Layout } from '../components/Layout';
import { Posts } from '../types';

export default function Home({ posts }:{posts: Posts}) {
	if (!posts) {
		return (
			<Layout>
				<p css={{ color: 'var(--danger)' }}>
					- We were not able to fetch the data. Please try again. -
				</p>
			</Layout>
		);
	}

	return (
		<Layout>
			<Listing posts={posts} />
		</Layout>
	);
}

export async function getStaticProps() {
	const apollo = initializeApollo();

	const posts = await apollo.query({
		query: gql`
			query {
				posts(where: { status: { notIn: "draft" } }) {
					title
					content
					publishDate
					author {
						name
					}
				}
			}
		`,
	});

	return {
		props: { posts: posts.data.posts },
		revalidate: true,
	};
}
