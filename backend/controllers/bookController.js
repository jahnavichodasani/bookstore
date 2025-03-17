const Book = require('../models/Book');
exports.getBooks = async (req, res) => {
    const books = await Book.find();
    res.json(books);
};
exports.addBook = async (req, res) => {
    const newBook = new Book(req.body);
    await newBook.save();
    res.status(201).json(newBook);
};

// Update an existing book by ID
exports.updateBook = async (req, res) => {
    const { id } = req.params; // Extract the book ID from the URL parameters
    const updatedData = req.body;

    try {
        const updatedBook = await Book.findByIdAndUpdate(id, updatedData, { new: true });
        if (!updatedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.json(updatedBook);
    } catch (err) {
        res.status(500).json({ message: 'Error updating the book', error: err });
    }
};

// Delete a book by ID
exports.deleteBook = async (req, res) => {
    const { id } = req.params; // Extract the book ID from the URL parameters

    try {
        const deletedBook = await Book.findByIdAndDelete(id);
        if (!deletedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.json({ message: 'Book deleted successfully', book: deletedBook });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting the book', error: err });
    }
};