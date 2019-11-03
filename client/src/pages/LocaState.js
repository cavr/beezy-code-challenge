import React, { useEffect, useRef } from 'react';
import { useLazyQuery, useMutation, useApolloClient, useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

export const LocalState = props => {
    const ref = useRef();
    const clientQuery = gql`
    {
      name @client {
        value
        value2
        id
      }
    }
  `;
    const userQuery = gql`
    query User($id: Int!){
        user(id:$id) @client{
            name{
                id
                secondName
                hello
                nest
            }
            id
        }
    }`;

    const studentQuery = gql`
        query Student{
            student @client{
                name
            }
        }
    `


    const clientMutation = gql`
    mutation ChangeName($value: String!, $id: Int!) {
      changeName(value: $value, id: $id) @client
    }
  `;

    const client = useApolloClient();
    const [getData, { data }] = useLazyQuery(clientQuery);

    const { data: user } = useQuery(userQuery, { variables: { id: 10 } });

    const { data: studet } = useQuery(studentQuery);

    const [changeName, { data: response }] = useMutation(clientMutation);

    const handleClick = () => {
        changeName({ variables: { id: data.name.id, value: ref.current.value } });
    };

    const writeData = () => {
        client.writeData(
            {
                data: {
                    name: {
                        value: 'new',
                        __typename: 'Name',
                        id: 2,
                        value2: 'change'
                    }
                }
            }
        )
    }

    useEffect(() => {
        getData();
    }, [getData]);

    return (
        <div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
            <pre>{JSON.stringify(response, null, 2)}</pre>
            <h1>User</h1>
            <pre>{JSON.stringify(user, null, 2)}</pre>
            <h1>Student</h1>
            <pre>{JSON.stringify(studet, null, 2)}</pre>
            <input type="text" ref={ref}></input>
            <button onClick={handleClick}>Press</button>
            <button onClick={writeData}>Write Data</button>
        </div>
    );
};
