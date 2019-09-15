import React from 'react';
import { Router } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import { ApolloProvider } from '@apollo/react-hooks';


import { GET_CHARACTER_QUERY, client } from '../apollo';
import { CharacterPage } from './CharacterPage';
import { history } from '../history';

describe('CharacterPage', () => {
    const props = {
        match: { params: { id: 1 } }
    };

    test('Render loading OK', async () => {
        const { container } = render(
            <ApolloProvider client={client}>
                <Router history={history}>
                    <CharacterPage {...props} />
                </Router>
            </ApolloProvider>
        );
        const circle = container.querySelector('.MuiSkeleton-root');
        expect(circle).not.toBe(null);
    });

    test('Render error OK', async () => {
        const { findByText } = render(
            <MockedProvider mocks={errorMocks} addTypename={false}>
                <Router history={history}>
                    <CharacterPage {...props} />
                </Router>
            </MockedProvider>
        );
        const error = await findByText('Error');
        expect(error.textContent).toBe('Error');
    });

    test('Render data OK', async () => {
        const { findByText } = render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <Router history={history}>
                    <CharacterPage {...props} />
                </Router>
            </MockedProvider>
        );
        const name = await findByText('name');
        expect(name.textContent).toBe('name');
    });


});

const mocks = [
    {
        request: {
            query: GET_CHARACTER_QUERY,
            variables: { id: 1 }
        },
        result: {
            data: {
                character: {
                    id: 1,
                    name: 'name',
                    resourceURI: '',
                    description: 'description',
                    thumbnail: { value: '' },
                    comics: { items: [] },
                    urls: []

                }
            }
        }
    }
];

const errorMocks = [
    {
        request: {
            query: GET_CHARACTER_QUERY
        },
        error: new Error('Error')
    }
];


