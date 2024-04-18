const express = require('express');
const Book = require('../models/Book');
const router = express.Router();

// POST /books - Criar um novo livro
router.post('/', async (req, res) => {
    try {
        const book = await Book.create(req.body);
        res.status(201).send(book);
    } catch (error) {
        res.status(400).send(error);
    }
});

// GET /books - Listar todos os livros
router.get('/', async (req, res) => {
    try {
        const books = await Book.findAll();
        res.send(books);
    } catch (error) {
        res.status(500).send(error);
    }
});

// GET /books/:id - Obter um livro específico
router.get('/:id', async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (book) {
            res.send(book);
        } else {
            res.status(404).send({ message: 'Book not found' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

// PUT /books/:id - Atualizar um livro
router.put('/:id', async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (book) {
            await book.update(req.body);
            res.send(book);
        } else {
            res.status(404).send({ message: 'Book not found' });
        }
    } catch (error) {
        res.status(400).send(error);
    }
});

// DELETE /books/:id - Deletar um livro
router.delete('/:id', async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (book) {
            await book.destroy();
            res.send({ message: 'Book deleted' });
        } else {
            res.status(404).send({ message: 'Book not found' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
