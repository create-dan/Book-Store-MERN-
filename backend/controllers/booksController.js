const Book = require("../model/Book");

const getAllBooks = async (req, res, next) => {
  let books;
  try {
    books = await Book.find();
  } catch (err) {
    console.log(err);
  }

  if (!books) {
    return res.status(404).json({ message: "Error ! NO product found" });
  }

  return res.status(200).json({ books });
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findById(id);
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    res.status(404).json({ message: "NO BOOK FOUND" });
  }

  return res.status(200).json({ book });
};

const addBook = async (req, res, next) => {
  const { name, author, description, price, avaliable, image } = req.body;
  let book;

  try {
    book = new Book({
      name,
      author,
      description,
      price,
      avaliable,
      image,
    });
    await book.save();
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    return res.status(500).json({ message: "Unable to Add" });
  }

  return res.status(200).json({ book });
};

const updateById = async (req, res, next) => {
  const id = req.params.id;
  const { name, author, description, price, avaliable, image } = req.body;

  let book;
  try {
    book = await Book.findByIdAndUpdate(id, {
      name,
      author,
      description,
      price,
      avaliable,
      image,
    });

    book = await book.save();
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    return res.status(404).json({ message: "Unable to update" });
  }

  return res.status(200).json({ book });
};

const deleteBook = async (req, res, next) => {
  const id = req.params.id;

  let book;
  try {
    book = await Book.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    return res.status(404).json({ message: "Unable to delete" });
  }

  return res.status(200).json({ message: "product deleted" });
};

exports.getAllBooks = getAllBooks;
exports.getById = getById;
exports.addBook = addBook;
exports.updateById = updateById;
exports.deleteBook = deleteBook;
