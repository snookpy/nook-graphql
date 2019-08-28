import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getBooksQuery } from '../queries/quries';

export interface BookListProps { }

const StringTemplate = (html: any) => {
    return (
        <div>
            <ul id="book-list">
                {html}
            </ul>
        </div>
    )
}

const BookList: React.SFC<BookListProps> = () => {
    const {loading, error, data} = useQuery(getBooksQuery);

    if (loading)
        return StringTemplate(<p>Loading...</p>)
    if (error)
        return StringTemplate(<p>Error :(</p>)
    
    return (
        StringTemplate(data.books
            .map((book: any) => 
                <li key={book.id}>{book.name}</li>))
    );
}
 
export default BookList;