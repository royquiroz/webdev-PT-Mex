const express = require('express');
const router  = express.Router();
const Book = require('../models/Book');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// Mostramos los libros
router.get('/books', (req, res) => {
  Book.find()
      .then(books => {
          res.render('books', {header: "Books", books})
      })
});

// Mostramos el formulario para crear un libro
router.get("/books/add", (req, res) => {
    res.render("create-book", {header: "Crear libro"})
});


// Mostrar el detalle del libro
router.get('/books/:id', (req, res) => {
  Book.findById(req.params.id)
      .then(book => {
        res.render("bookDetail", {header: book.title, book})
      })
});

module.exports = router;