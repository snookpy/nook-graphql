import React from 'react';
import BookList from './components/BookList';
import ApolloCLient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks';
import AddBook from './components/AddBook';

const client = new ApolloCLient({
  uri: 'http://localhost:4000/graphql'
})

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Book's Reding List</h1>
        <BookList/>
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
