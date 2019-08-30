import * as React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries/quries';
import { ApolloError } from 'apollo-boost'
export interface AddBookProps {

}

const SelectAuthors = (loading: boolean, error: ApolloError | undefined, data: any) => {

    if (loading)
        return (<option>loading...</option>)
    if (error)
    return (<option>error :(</option>)

    return  data.authors.map((author: any) => <option key={author.id}
        value={author.id}>{author.name}</option>)
    
}

const AddBook: React.SFC<AddBookProps> = () => {
    const [author, setNewAuthor] = React.useState({
        name: '',
        genre: '',
        authorId: ''
    })
    const [setBook, data] = useMutation(addBookMutation, {
        refetchQueries: [
            {query: getBooksQuery}
        ]
    });
    const {loading: authorLoading, error: authorError, data: authorData, refetch} = useQuery(getAuthorsQuery)


    const submitForm = (e: React.FormEvent) => {
        e.preventDefault()
        setBook({variables: {...author}})
    }

    return (
        <div>
            <form id="add-book" onSubmit={ submitForm }>
                <div className="field">
                    <label htmlFor="">Book name:</label>
                    <input type="text" onChange={(e) => setNewAuthor({...author, name: e.target.value })} />
                </div>
                <div className="field">
                    <label htmlFor="">Genre:</label>
                    <input type="text" onChange={(e) => setNewAuthor({...author, genre: e.target.value })}/>
                </div>
                <div className="field">
                    <label htmlFor="">Author:</label>
                    <select name="" onChange={(e) => setNewAuthor({...author, authorId: e.target.value })}>
                        {SelectAuthors(authorLoading, authorError, authorData)}
                    </select>
                </div>
                <button> + </button>
            </form>
        </div>
    );
}
 
export default AddBook;