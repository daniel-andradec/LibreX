const express = require('express');
const User = require('../models/User'); 
const Book = require('../models/Book'); 
const Sale = require('../models/Sale');
const router = express.Router();
const upload = require('../config/multerConfig');
const {loginMiddleware, notLoggedIn} = require('../utils/auth');
const UsersService = require('../services/usersService');

router.post('/', upload.single('foto'), async (req, res) => {
    try {
        const fotoPath = req.file ? req.file.path : null;
        req.body.fotoPath = fotoPath;
        const user = await UsersService.create(req.body);
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});


router.post('/login', notLoggedIn, loginMiddleware);

router.post('/logout', async (req, res, next) => {
    try{
        res.clearCookie('jwt');
        res.status(200).send('Deslogado com sucesso');
    }catch(error){
        next(error);
    }
});

router.put('/updateSenha', async (req, res, next) => {
    try {
        await UsersService.updatePassword(req.body);
        res.status(200).send('Senha atualizada com sucesso!');
    } catch (error) {
        res.status(400).send(error);
    }
} );

router.get('/:id', async (req, res) => {
    try {
        const user = await UsersService.findById(req.params.id);
        if (user) {
            res.send(user);
        } else {
            res.status(404).send({ error: 'Usuário não encontrado' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/:id/photo', async (req, res) => {
    try {
        const path = await UsersService.getPhoto(req.params.id);
        res.sendFile(path, { root: path.join(__dirname, '..') });
    } catch (error) {
        res.status(500).send({ message: 'Erro do servidor ao recuperar a foto do usuário!' });
    }
});

// GET /users/:id/books - Pegar todos os livros que um usuário possui
router.get('/:id/books', async (req, res) => {
    try {
        const books = await UsersService.getAllBooks(req.params.id);
        res.send(books);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Erro do servidor ao recuperar livros!' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const user = await UsersService.update(req.params.id, req.body);
        res.send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

// PUT /users/:id/photo - Atualizar a foto de um usuário específico
router.put('/:id/photo', upload.single('foto'), async (req, res) => {
    try {
        const path = req.file ? req.file.path : null;
        const user = await UsersService.updatePhoto(req.params.id, path);
        res.send(user);
    } catch (error) {
        res.status(500).send({ message: 'Erro do servidor ao atualizar foto!' });
    }
});

module.exports = router;
