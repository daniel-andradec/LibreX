const express = require('express');
const router = express.Router();
const upload = require('../config/multerConfig');
const path = require('path');
const BooksService = require('../services/booksService');

router.post('/', upload.single('foto'), async (req, res) => {
    try {
        const fotoPath = req.file ? req.file.path : null;
        const book = await BooksService.create(req.body, fotoPath);
        res.status(200).send(book);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/', async (req, res) => {
    try {
        const books = await BooksService.getAllBooks();
        res.send(books);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const book = await BooksService.getBookById(req.params.id);
        res.send(book);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/:id/photo', async (req, res) => {
    try {
        const fullPath = await BooksService.getPhoto(req.params.id);
        res.sendFile(fullPath, { root: path.join(__dirname, '..') });
    } catch (error) {
        res.status(400).send({ message: 'Erro no servidor ao buscar a foto do livro!' });
    }
});

module.exports = router;
