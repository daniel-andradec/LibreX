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
router.get('/:id', async (req, res) => {
    try {
        const sales = await SaleService.findAll(req.params.id);
        res.send(sales);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
