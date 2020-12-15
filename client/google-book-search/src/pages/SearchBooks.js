import React, { useState, useEffect } from "react";
import API from "../utils/api";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

function Search() {
  const [bookName, setBookName] = useState("");
  const [googleBooks, setGoogleBooks] = useState([])

  const saveBookHandler = (index) => {
    const data = googleBooks[index];
    API.saveBook(data)
      .then(() => {})
      .catch(err => console.log("Error", err));
  }

  function handleInputChange(event) {
    setBookName(event.target.value)
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (bookName) {
      API.getGoogleBooks(bookName)
        .then(res => {
          setGoogleBooks(res.data.items.map(({ volumeInfo }) => {
            return {
              title: volumeInfo.title,
              description: volumeInfo.description,
              authors: volumeInfo.authors,
              image: volumeInfo.imageLinks.thumbnail,
              link: volumeInfo.infoLink
            }
          }))
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <Container fluid>

      <form>
        <Row>
          <Col size="md-10">
            <Input
              onChange={handleInputChange}
              name="title"
              placeholder="Book Name"
            />
          </Col>
          <Col size="md-2">
            <FormBtn
              onClick={handleFormSubmit}
            >Search</FormBtn>
          </Col>
        </Row>
      </form>

      {googleBooks.length ? (
        <List>
          <h5 className="ml-4 mt-2">Results:</h5>
          {googleBooks.map((book, index) => (
            <ListItem
              key={index}
              name={"Save"}
              index={index}
              book={book}
              clicked={saveBookHandler} />
          ))}
        </List>
      ) : (<h3>No Results to Display</h3>)
      }

    </Container>
  );
}


export default Search;