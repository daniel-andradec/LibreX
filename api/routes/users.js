const express = require('express');
const User = require('../models/User'); 
const router = express.Router();

// POST /users - Criar um novo usuário
router.post('/', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

// GET /users - Ler todos os usuários
router.get('/', async (req, res) => {
    try {
        const users = await User.findAll();
        res.send(users);
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
});

// GET /users/:id - Ler um usuário específico pelo ID
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            res.send(user);
        } else {
            res.status(404).send({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

// PUT /users/:id - Atualizar um usuário pelo ID
router.put('/:id', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            await user.update(req.body);
            res.send(user);
        } else {
            res.status(404).send({ error: 'User not found' });
        }
    } catch (error) {
        res.status(400).send(error);
    }
});

// DELETE /users/:id - Deletar um usuário pelo ID
router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            await user.destroy();
            res.send({ message: 'User deleted' });
        } else {
            res.status(404).send({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
