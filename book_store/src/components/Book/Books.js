import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../../App.css";
// import Book from "@mui/icons-material/Book";
import Book from "./Book";
import "./Book.css";
const URL = "http://localhost:5000/books";


const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Books = () => {
  const [books, setBooks] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);

  console.log(books);

  return (
    <div className="homeBackground">
      <ul>
        {books &&
          books.map((book, i) => (
            <li key={i}>
              <Book book={book} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Books;
