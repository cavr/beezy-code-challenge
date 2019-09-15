import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';

import { List } from '../common';
import { GET_CHARACTERS_QUERY } from '../../apollo/';
import { CharacterPreview } from './CharacterPreview';

export const CharacterContainerList = ({
    onClick,
    filters
}) => {
    const { loading, error, data, fetchMore } = useQuery(GET_CHARACTERS_QUERY, {
        variables: filters,
        notifyOnNetworkStatusChange: true
    });

    const { results, count, total, offset } =
        (data && data.characters) || {};

    const disabled = count + offset === total;

    const loadMore = () => {
        count + offset < total &&
            fetchMore({
                variables: {
                    offset: results.length
                },
                updateQuery: (prev, { fetchMoreResult }) => {

                    return !fetchMoreResult
                        ? prev
                        : {
                            ...prev,
                            characters: {
                                ...prev.characters,
                                ...fetchMoreResult.characters,
                                results: [
                                    ...prev.characters.results,
                                    ...fetchMoreResult.characters.results
                                ]
                            }
                        };
                }
            });
    };

    return (
        <List
            data={results}
            onClick={onClick}
            component={CharacterPreview}
            loading={loading}
            error={error}
            loadMore={loadMore}
            disabled={disabled}
        />
    );
};

CharacterContainerList.propTypes = {
    filters: PropTypes.object,
    onClick: PropTypes.func
};
