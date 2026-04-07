const db = require('../database/database.js');

const cadastrarPaciente = (req, res) => {
    const {nome, idade, sexo, endereco, telefone, condicao_saude_inicial} = req.body;

    const stmt = db.prepare(`
        INSERT INTO cadastro (nome, idade, sexo, endereco, telefone, condicao_saude_inicial) VALUES (?, ?, ?, ?, ?, ?)`);

    const resultado = stmt.run(nome, idade, sexo, endereco, telefone, condicao_saude_inicial);

    res.json({mensagem: 'Paciente cadastrado!', id: resultado.lastInsertRowid});

}

const listarPacientes = (req, res) => {
    const pacientes = db.prepare('SELECT * FROM cadastro').all();
    res.json(pacientes);
}

const buscarPaciente = (req, res) => {
    const {id} = req.params;
    const paciente = db.prepare('SELECT * FROM cadastro WHERE id = ?').get(id);

    if (!paciente){
        return res.json({mensagem: 'Paciente não encintrado!'});
    }

    res.json(paciente);
} 

module.exports = {cadastrarPaciente, listarPacientes, buscarPaciente};