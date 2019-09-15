import ApolloClient, { InMemoryCache } from 'apollo-boost';

const uri = process.env.REACT_APP_APOLLO_SERVER_URL;

const cache = new InMemoryCache();


export const client = new ApolloClient({
    uri,
    cache
});