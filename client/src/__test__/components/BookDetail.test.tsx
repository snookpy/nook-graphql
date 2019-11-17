import * as React from 'react';
import { mount } from 'enzyme';
import { MockedProvider } from '@apollo/react-testing';
import wait from 'waait';
import { act } from 'react-dom/test-utils';

import BookDetails from '../../components/BookDetail';
import { getBookQuery } from '../../queries/quries';

const result ={
    book: {
        id: '123', name: 'Buck', genre: 'bulldog', author: {
            id: "a1",
            name: "nook",
            age: 32,
            books: []

        }
    },
}

const mocks = [
    {
        request: {
            query: getBookQuery,
            variables: {
                id: '123',
            },
        },
        result: {
            data: result
        }
    },
];

it('renders without error', async () => {
    await act(async () => {
        const warp = mount(
            <MockedProvider mocks={mocks} addTypename={false}>
                <BookDetails bookId="123" />
            </MockedProvider>,
        );

        await wait(0);

        warp.update();

        expect(warp.find('#book-details div h2').text()).toBe(result.book.name)
        expect(warp.find('#book-details div p').at(0).text()).toBe(result.book.genre)
        expect(warp.find('#book-details div p').at(1).text()).toBe(result.book.author.name)
    })
});