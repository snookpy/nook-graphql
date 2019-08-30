import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getBooksQuery } from '../queries/quries';
import BookDetails from './BookDetail';

export interface BookListProps { }

const BookList: React.SFC<BookListProps> = () => {
    const {loading, error, data} = useQuery(getBooksQuery);
    const [selected, setSelect] = React.useState("")
    if (loading)
        return <p>Loading...</p>
    if (error)
        return <p>Error :(</p>
    
    return (
        <div>
            <ul id="book-list">
            {data.books
            .map((book: any) => 
                <li onClick={e => {setSelect( book.id )}} key={book.id}>{book.name}</li>)}
            </ul>
            <BookDetails bookId={selected} />
        </div>
    );
}
 
export default BookList;