const Book = require('../models/Book');

const path = require('path')
const NotFoundError = require('../utils/errors/NotFoundError');

class BooksService {
    async create(body, fotoPath){
        const { title, author, ...otherDetails } = body;
        const book = await Book.create({
            title,
            author,
            foto: fotoPath,
            ...otherDetails
        });

        return book;
    }

    async getAllBooks(){
        const books = await Book.findAll({
            where: { available: true }
        });
        return books;
    }

    async getBookById(id){
        const book = await Book.findByPk(id);
        if (book) {
            return book;
        } else {
            throw new NotFoundError('Livro não encontrado.');
        }
    }

    async getPhoto(id){
        const book = await Book.findByPk(id);
        if (book && book.foto) {
            const fullPath = path.join(book.foto);
            return fullPath;
        } else {
            throw new NotFoundError('Livro não encontrado.');
        }
    }

}

module.exports = new BooksService;