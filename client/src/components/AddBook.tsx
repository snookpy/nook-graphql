import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getAuthorsQuery } from '../queries/quries';

export interface AddBookProps {

}

const SelectAuthors = () => {

    const {loading, error, data} = useQuery(getAuthorsQuery)
    if (loading)
        return (<option>loading...</option>)
    if (error)
    return (<option>error :(</option>)

    return  data.authors.map((author: any) => <option key={author.id}
        value={author.id}>{author.name}</option>)
    
}

const AddBook: React.SFC<AddBookProps> = () => {
    const [author, setAuthor] = React.useState({
        name: '',
        genre: '',
        authorId: ''
    })

    const submitForm = (e: React.FormEvent) => {
        e.preventDefault()

        console.log("author author", author)
    }

    return (
        <div>
            <form id="add-book" onSubmit={ submitForm }>
                <div className="field">
                    <label htmlFor="">Book name:</label>
                    <input type="text" onChange={(e) => setAuthor({...author, name: e.target.value })} />
                </div>
                <div className="field">
                    <label htmlFor="">Genre:</label>
                    <input type="text" onChange={(e) => setAuthor({...author, genre: e.target.value })}/>
                </div>
                <div className="field">
                
                    <label htmlFor="">Author:</label>
                    <select name="" onChange={(e) => setAuthor({...author, authorId: e.target.value })}>
                        {SelectAuthors()}
                    </select>
                    
                </div>
                <button> + </button>
            </form>
        </div>
    );
}
 
export default AddBook;