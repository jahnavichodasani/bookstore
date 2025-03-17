const express = require('express');
const { getBooks, addBook,updateBook, deleteBook } = require('../controllers/bookController');
const router = express.Router();
router.get('/', getBooks);
router.post('/', addBook);

router.put('/:id', updateBook);

// DELETE - Delete a book by ID
router.delete('/:id', deleteBook);



module.exports = router;