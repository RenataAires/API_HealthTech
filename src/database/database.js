const Database = require('better-sqlite3');
const db = new Database('cuidadora.db');

db.exec(`
    CREATE TABLE IF NOT EXISTS cadastro(
    id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, idade INTEGER, sexo TEXT, endereco TEXT,
    telefone TEXT, condicao_saude_inicial TEXT)`);

db.exec(` 
    CREATE TABLE IF NOT EXISTS evolucao(
    id INTEGER PRIMARY KEY AUTOINCREMENT, id_cadastro INTEGER, data_atendimento TEXT,tipo_tratamento TEXT,
    remedios TEXT, situacao TEXT,
    FOREIGN KEY (id_cadastro) REFERENCES cadastro(id))`);    

    module.exports = db;
    
