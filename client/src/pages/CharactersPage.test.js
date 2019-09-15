import React from 'react';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';


import { GET_CHARACTERS_QUERY } from '../apollo';
import { CharactersPage } from './CharactersPage';
import { history } from '../history';
import { act } from 'react-dom/test-utils';

describe('CharactersPage', () => {
    test('It should render CharactersPage', async done => {
        await act(async () => {
            const { findByText, findByTestId } = render(
                <MockedProvider mocks={mocks} addTypename={false}>
                    <Router history={history}>
                        <CharactersPage />
                    </Router>
                </MockedProvider>
            );

            const characters = await findByText('Characters');
            const img = await findByTestId('img');
            const name = await findByText('Charlie');

            expect(characters.textContent).toBe('Characters');
            expect(img).not.toBe(null);
            expect(name.textContent).toBe('Charlie');
            done();
        });
    });
});

const mocks = [
    {
        request: {
            query: GET_CHARACTERS_QUERY,
            variables: { orderBy: 'name', offset: 0, limit: 10 }
        },
        result: {
            data: {
                characters: {
                    offset: 10,
                    count: 10,
                    total: 20,
                    limit: 100,
                    results: [
                        {
                            id: 1,
                            name: 'Charlie',
                            resourceURI: '',
                            description: 'description',
                            thumbnail: { value: '' },
                            comics: { items: [] },
                            urls: []
                        }
                    ]
                }
            }
        }
    }
];
