const express = require('express');
const User = require('../models/User'); 
const router = express.Router();
const upload = require('../config/multerConfig');
const path = require('path')
const {loginMiddleware, notLoggedIn} = require('../utils/auth');
const encryptPassword = require('../utils/encryptPassword');
const PermissionError = require('../utils/errors/PermissionError.js');
const bcrypt = require('bcrypt');

router.post('/', upload.single('foto'), async (req, res) => {
    try {
        req.body.senha = await encryptPassword(req.body.senha);
        const { name, email, ...otherDetails } = req.body;
        const fotoPath = req.file ? req.file.path : null;
        const user = await User.create({
            name,
            email,
            foto: fotoPath,
            ...otherDetails
        });
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
        console.log(req.body);
        const user = await User.findByPk(req.body.id);
        console.log(user);
        if (user) {
            const matchingPassword = await bcrypt.compare(req.body.atual, user.senha);
            if (!matchingPassword) {
                throw new PermissionError('Senha atual incorreta!');
            }
            user.senha = await encryptPassword(req.body.nova);
            await user.save();
            res.status(200).send('Senha atualizada com sucesso!');
        } else {
            res.status(404).send({ error: 'User not found' });
        }
    } catch (error) {
        res.status(400).send(error);
    }
} );

router.get('/', async (req, res) => {
    try {
        const users = await User.findAll();
        res.send(users);
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
});

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

router.get('/:id/photo', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user && user.foto) {
            // Ajustando para usar um caminho simples diretamente para 'uploads'
            const fullPath = path.join(user.foto);
            res.sendFile(fullPath, { root: path.join(__dirname, '..') });
        } else if (user && !user.foto) {
            res.status(404).send({ message: 'No photo available for this user.' });
        } else {
            res.status(404).send({ message: 'User not found.' });
        }
    } catch (error) {
        res.status(500).send({ message: 'Server error while retrieving photo.' });
        console.log(error)
    }
});

router.put('/:id', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            if (req.body.senha) {
                delete req.body.senha;
            }
            await user.update(req.body);
            res.send(user);
        } else {
            res.status(404).send({ error: 'User not found' });
        }
    } catch (error) {
        res.status(400).send(error);
    }
});

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
