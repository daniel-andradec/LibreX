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

    async findAll(id){
        const sales = await Sale.findAll({
            where: {
                idVendedor: id
            }
        });
        const purchases = await Sale.findAll({
            where: {
                idComprador: id
            }
        });

        sales.forEach(sale => {
            sale.dataValues.sale = 1;
        });
        purchases.forEach(purchase => {
            purchase.dataValues.sale = 0;
        });

        const allSales = sales.concat(purchases);

        return allSales;
    }
}

module.exports = new SaleService;