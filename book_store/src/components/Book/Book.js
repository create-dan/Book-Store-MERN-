import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";
import "./Book.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Book = (props) => {
  const history = useNavigate();
  const { _id, name, author, description, price, image } = props.book;

  const deleteHandler = async () => {
    if (window.confirm("Are You Sure ?")) {
      await axios
        .delete(`http://localhost:5000/books/${_id}`)
        .then((res) => res.data)
        .then(() => history("/"))
        .then(() => history("/books"));

      
    }
  };

  return (
    <div className="card">
      <img src={image} alt={name} />
      <article>By {author}</article>
      <h2>{name}</h2>
      <p>{description}</p>
      <h2>Rs {price}</h2>

      <Button
        LinkComponent={Link}
        to={`/books/${_id}`}
        variant="outlined"
        startIcon={<UpdateIcon />}
        sx={{ mt: "auto " }}
      >
        Update
      </Button>

      <Button
        onClick={deleteHandler}
        variant="outlined"
        startIcon={<DeleteIcon />}
        sx={{ mt: "auto" }}
      >
        Delete
      </Button>
    </div>
  );
};

export default Book;
