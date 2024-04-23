const express = require('express');
const Book = require('../models/Book');
const router = express.Router();
const upload = require('../config/multerConfig');
const path = require('path')

// POST /books - Criar um novo livro
router.post('/', upload.single('foto'), async (req, res) => {
    try {
        const { title, author, ...otherDetails } = req.body;
        const fotoPath = req.file ? req.file.path : null;
        const book = await Book.create({
            title,
            author,
            foto: fotoPath,
            ...otherDetails
        });
        res.status(201).send(book);
    } catch (error) {
        res.status(400).send(error);
    }
});

// GET /books - Listar todos os livros
router.get('/', async (req, res) => {
    try {
        const books = await Book.findAll({
            where: { available: true }
        });
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

// GET /books/:id/photo - Obter a foto de um livro específico
router.get('/:id/photo', async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (book && book.foto) {
            // Ajustando para usar um caminho simples diretamente para 'uploads'
            const fullPath = path.join(book.foto);
            res.sendFile(fullPath, { root: path.join(__dirname, '..') });
        } else if (book && !book.foto) {
            res.status(404).send({ message: 'No photo available for this book.' });
        } else {
            res.status(404).send({ message: 'Book not found.' });
        }
    } catch (error) {
        res.status(500).send({ message: 'Server error while retrieving photo.' });
        console.log(error)
    }
});

module.exports = router;
