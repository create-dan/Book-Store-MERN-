const express = require("express");
const router = express.Router();
const booksController = require("../controllers/booksController");

router.get("/", booksController.getAllBooks);
router.get("/:id", booksController.getById);
router.post("/", booksController.addBook);
router.put("/:id", booksController.updateById);
router.delete("/:id", booksController.deleteBook);

module.exports = router;
