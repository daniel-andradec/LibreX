const Sale = require('../models/Sale');
const Book = require('../models/Book');

const NotFoundError = require('../utils/errors/NotFoundError');



class SaleService{
    async purchase(body){
        const book = await Book.findByPk(body.idLivro);
        if(book.available){
            book.available = false;
            await book.save();
            const sale = await Sale.create(body);
            return sale;
        } else {
            throw new NotFoundError('Book not found');
        }
    }
}

module.exports = new SaleService;