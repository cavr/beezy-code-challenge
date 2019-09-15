import React from 'react';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';


import { GET_CHARACTER_QUERY } from '../apollo';
import { CharacterPage } from './CharacterPage';
import { history } from '../history';
import { act } from 'react-dom/test-utils';

describe('CharacterPage', () => {
    const props = {
        match: { params: { id: 1 } }
    };

    test('Render loading OK', async () => {
        await act(async () => {
            const { container } = render(
                <MockedProvider mocks={[]} >
                    <Router history={history}>
                        <CharacterPage {...props} />
                    </Router>
                </MockedProvider>
            );
            const circle = container.querySelector('.MuiSkeleton-root');
            expect(circle).not.toBe(null);
        });
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


