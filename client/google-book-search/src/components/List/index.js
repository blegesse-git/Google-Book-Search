import React from "react";
import { Col, Row } from "../../components/Grid";


export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem({ book, clicked , index, name }) {
  return <li className="list-group-item">
    <Row>
      <Col size="md-9">
        <h3>{book.title}</h3>
        <h5>by {book.authors ? book.authors.join(", ") : " ..."}</h5>
      </Col>
      <Col size="md-3">
        <button type="button" className="btn m-1">
          <a
            style={{ textDecoration: "none", color: "black" }}
            href={book.link}
            target="_blank"
          >Read</a>
        </button>
        <button
          type="button"
          className="btn m-1"
          data-id={index}
          onClick={(event) => {
            clicked(event.target.getAttribute("data-id"))
          }}
        >{name}</button>
      </Col>
    </Row>
    <Row>
      <Col size="md-3">
        <img src={book.image} />
      </Col>
      <Col size="md-9">
        <p>{book.description}</p>
      </Col>
    </Row>
  </li>;
}