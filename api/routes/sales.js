const express = require('express');
const Sale = require('../models/Sale');
const router = express.Router();
const SaleService = require('../services/salesService');

// POST /sales - Criar uma nova venda
router.post('/', async (req, res) => {
    try {
        const sale = await SaleService.purchase(req.body);
        res.status(201).send(sale);
    } catch (error) {
        res.status(400).send(error);
    }
});

// GET /sales - Listar todas as vendas
router.get('/', async (req, res) => {
    try {
        const sales = await Sale.findAll();
        res.send(sales);
    } catch (error) {
        res.status(500).send(error);
    }
});

// GET /sales/:id - Obter uma venda específica pelo ID
router.get('/:id', async (req, res) => {
    try {
        const sale = await Sale.findByPk(req.params.id);
        if (sale) {
            res.send(sale);
        } else {
            res.status(404).send({ message: 'Sale not found' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

// PUT /sales/:id - Atualizar uma venda pelo ID
router.put('/:id', async (req, res) => {
    try {
        const sale = await Sale.findByPk(req.params.id);
        if (sale) {
            await sale.update(req.body);
            res.send(sale);
        } else {
            res.status(404).send({ message: 'Sale not found' });
        }
    } catch (error) {
        res.status(400).send(error);
    }
});

// DELETE /sales/:id - Deletar uma venda pelo ID
router.delete('/:id', async (req, res) => {
    try {
        const sale = await Sale.findByPk(req.params.id);
        if (sale) {
            await sale.destroy();
            res.send({ message: 'Sale deleted' });
        } else {
            res.status(404).send({ message: 'Sale not found' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
