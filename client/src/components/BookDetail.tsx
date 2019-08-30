import * as React from 'react';
import {getBookQuery} from '../queries/quries';
import { useQuery } from '@apollo/react-hooks';


export interface BookDetailsProps {
    bookId: string;
}

 
const BookDetails: React.SFC<BookDetailsProps> = ({bookId}) => {
    const {loading, error, data} = useQuery(getBookQuery, {
        variables: {id: bookId}
    });

    if(!bookId) {
        return <p>select once</p>
    }
    if (loading)
        return (<p>Loading...</p>)
    if (error){
        console.log(error)
        return (<p>Error :(</p>)
    }
    return (
        <div id="book-details">
            <p>Output book details here</p>
            <div>
                <h2>{data.book.name}</h2>
                <p>{data.book.genre}</p>
                <p>{data.book.author.name}</p>
                <p>ALl books by this author</p>
                <ul className="other-books">
                    {
                        data.book.author.books.map((boo: any) => {
                            return <li key={boo.id}>{boo.name}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    );
}
 
export default BookDetails;