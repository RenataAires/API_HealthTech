const db = require('../database/database');

const registrarAtendimento = (req, res) => {
    const{id_cadastro, data_atendimento, tipo_tratamento, remedios, situacao,} = req.body;

    const stmt = db.prepare(`
        INSERT INTO evolucao (id_cadastro, data_atendimento, tipo_tratamento, remedios, situacao) VALUES (?, ?, ?, ?, ?)`);
    const resultado = stmt.run(id_cadastro, data_atendimento, tipo_tratamento, remedios, situacao);
    
    res.json({mensagem:'Atendimento registrado!', id:resultado.lastInsertRowid});
}

const listarAtendimentos = (req, res) => {
    const {id_cadastro} = req.params;
    const atendimentos = db.prepare('SELECT * FROM evolucao WHERE id_cadastro = ?').all(id_cadastro);
    res.json(atendimentos);
}

module.exports = { registrarAtendimento, listarAtendimentos};