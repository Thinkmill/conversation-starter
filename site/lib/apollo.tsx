import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { useMemo } from 'react';

let apolloClientUsedOnClient: ApolloClient<NormalizedCacheObject> | null = null;
const GRAPHQL_API =
	process.env.NODE_ENV === 'production'
		? 'http://localhost:4000/api/graphql'
		: 'http://localhost:4000/api/graphql';

function createApolloClient() {
	return new ApolloClient({
		ssrMode: typeof window === 'undefined',
		link: new HttpLink({
			uri: GRAPHQL_API,
			credentials: 'same-origin',
		}),
		cache: new InMemoryCache(),
	});
}

export function initializeApollo(initialState = null) {
	const apolloClient = apolloClientUsedOnClient ?? createApolloClient();
	if (initialState) {
		apolloClient.cache.restore(initialState);
	}
	// For SSG and SSR always create a new Apollo Client
	if (typeof window === 'undefined') return apolloClient;
	// Create the Apollo Client once in the client
	if (!apolloClientUsedOnClient) apolloClientUsedOnClient = apolloClient;
	return apolloClient;
}

export function useApollo(initialState: any) {
	const store = useMemo(() => initializeApollo(initialState), [initialState]);
	return store;
}
