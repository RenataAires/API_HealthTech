const express = require('express');
const router = express.Router();
const {registrarAtendimento, listarAtendimentos} = require('../controllers/evolucaoController');

router.post('/:id_cadastro', registrarAtendimento);
router.get('/:id_cadastro', listarAtendimentos);

module.exports = router;