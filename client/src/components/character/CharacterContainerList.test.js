import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';

import { GET_CHARACTERS_QUERY, client } from '../../apollo';
import { CharacterContainerList } from './CharacterContainerList';
import { ApolloProvider } from '@apollo/react-hooks';

describe('CharacterContainerList', () => {
    const props = {
        onClick: jest.fn(),
        filters: { name: 'name' }
    };

    test('Render loading OK', async () => {
        const { container } = render(
            <ApolloProvider client={client}>
                <CharacterContainerList {...props} />
            </ApolloProvider>
        );
        const circle = container.querySelector('circle');
        expect(circle).not.toBe(null);
    });

    test('Render error OK', async () => {
        const { findByText } = render(
            <MockedProvider mocks={errorMocks} addTypename={false}>
                <CharacterContainerList {...props} />
            </MockedProvider>
        );
        const error = await findByText('Error');
        expect(error.textContent).toBe('Error');
    });

    test('Render data OK', async () => {
        const { findByText } = render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <CharacterContainerList {...props} />
            </MockedProvider>
        );
        const name = await findByText('name');
        expect(name.textContent).toBe('name');
    });

    test('Render empty dadta OK', async () => {
        const { findByText } = render(
            <MockedProvider mocks={emptyMocks} addTypename={false}>
                <CharacterContainerList {...props} />
            </MockedProvider>
        );
        const noData = await findByText('No data');
        expect(noData.textContent).toBe('No data');
    });
});

const mocks = [
    {
        request: {
            query: GET_CHARACTERS_QUERY,
            variables: { name: 'name' }
        },
        result: {
            data: {
                characters: {
                    offset: 10,
                    count: 10,
                    total: 20,
                    limit: 100,
                    results: [{
                        id: 1,
                        name: 'name',
                        resourceURI: '',
                        description: 'description',
                        thumbnail: { value: '' },
                        comics: { items: [] },
                        urls: []
                    }]
                }
            }
        }
    }
];

const errorMocks = [
    {
        request: {
            query: GET_CHARACTERS_QUERY
        },
        error: new Error('Error')
    }
];

const emptyMocks = [
    {
        request: {
            query: GET_CHARACTERS_QUERY,
            variables: { name: 'name' }
        },
        result: {
            data: {
                characters: {
                    offset: 0,
                    count: 0,
                    total: 0,
                    limit: 20,
                    results: []
                }
            }
        }
    }
];
