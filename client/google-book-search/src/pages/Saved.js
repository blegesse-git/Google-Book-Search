import React, { useEffect, useState } from "react";
import { Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import API from "../utils/api";

function Saved() {

  const [savedBooks, setSavedBooks] = useState([])

  useEffect(() => {
    ViewBooks();
  }, [])

  const ViewBooks = () => {
    API.getBook()
      .then(res => {
        setSavedBooks(res.data)
      })
      .catch(err => console.log(err));
  }

  const removeBook = (id) => {
    API.deleteBook(id)
      .then(res => {
        ViewBooks()
      })
      .catch(err => console.log(err));
  }

  return (
    <Container fluid>

      {savedBooks.length ? (
        <List>
          <h5 className="ml-4 mt-2">Results:</h5>
          {savedBooks.map((book, index) => (
            <ListItem
              key={index} 
              name={"Remove"}
              index={book._id}
              book={book}
              clicked={removeBook} />
          ))}
        </List>
      ) : (<h3>No Results to Display</h3>)
      }

      
    </Container>
  );
}


export default Saved;