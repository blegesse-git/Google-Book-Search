import axios from "axios";

export default {
  getBooks: function () {
    return axios.get("/api/books");
  },
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },
  getBook: function (id) {
    return axios.get("/api/books/" + id);
  },
  updateBook: function (id, bookData) {
    return axios.put("/api/books/" + id, bookData)
  },
  getGoogleBooks: function(bookName) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + bookName)
  }
};