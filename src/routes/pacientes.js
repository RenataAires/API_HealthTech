const express = require('express');
const router = express.Router();
const {cadastrarPaciente, listarPacientes, buscarPaciente} = require('../controllers/pacientesController');

router.post('/', cadastrarPaciente);
router.get('/', listarPacientes);
router.get('/:id', buscarPaciente);

module.exports = router;