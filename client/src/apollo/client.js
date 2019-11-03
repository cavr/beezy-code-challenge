import ApolloClient, { InMemoryCache, gql } from 'apollo-boost';

const uri = process.env.REACT_APP_APOLLO_SERVER_URL;

const cache = new InMemoryCache({
    dataIdFromObject: (value) => value.id,
    cacheRedirects: {
        Query: {
            character: (_, args, { getCacheKey }) => {
                return getCacheKey({ __typeName: 'Character', id: args.id })
            }
        }
    }
});


export const client = new ApolloClient({
    uri,
    cache,
    resolvers: {
        Mutation: {
            changeName: (_root, variables, { cache, getCacheKey }) => {
                debugger;
                const id = getCacheKey({ __typename: 'Name', id: variables.id });
                const fragment = gql`
                fragment  value on Name {
                    value
                }`;
                const value = cache.readFragment({ fragment, id });
                const data = { ...value, value: variables.value };
                cache.writeData({ id, data });
                return { id, data };
            }
        },
        Query: {
            user: (root, { id }, ) => {
                debugger;
                return { __typename: 'User', name: 'Charlie', id }
            },
            student: (root, args, cache) => {
                debugger;
                return { __typename: 'Student', name: 'Richard' }
            }
        },
        User: {
            name: (root, params) => {
                return {
                    ...root, name: 'Override', secondName: 'dcs', hello: 'Halloween',
                    nest: { __typeName: 'What', give: 'give' }
                }
            }
        }
    }
});

client.writeData({
    data: {
        name: { value: 'ascas', __typename: 'Name', id: 1, value2: 'dontChange' }
    }
})