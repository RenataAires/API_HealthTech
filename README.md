# 🩺 API para controle de pacientes

## Sobre
API para registrar evolução de pacientes, desenvolvida para centralizar e organizar a rotina de cuidadores de idosos e com isso evitar a fragmentação das informações.

---

## 🚀 O Problema e a Solução
O cenário identificado apresentava uma cuidadora com dificuldades em gerenciar informações espalhadas em cadernos e mensagens. Esta solução propõe a centralização de dados em um banco relacional, permitindo:
- **Padronização:** Cadastro único de pacientes.
- **Rastreabilidade:** Histórico detalhado de cada atendimento (evolução).
- **Transparência:** Facilidade em gerar relatórios para familiares.

---

## 🛠️ Tecnologias Utilizadas
- **Node.js**: Ambiente de execução.
- **Express**: Framework para criação de rotas e APIs.
- **SQLite**: Banco de dados relacional leve.
- **Better-SQLite3**: Biblioteca de integração com o banco.

---

## 📂 Organização do Projeto (Arquitetura)
O projeto segue o padrão de separação de responsabilidades:
- `src/database`: Configuração e conexão com o SQLite.
- `src/routes`: Definição dos endpoints da API.
- `src/controllers`: Lógica de negócio e manipulação de dados.
- `server.js`: Ponto de entrada da aplicação.

---

## ⚙️ Como Executar
1. Clone o repositório.
2. No terminal, execute `npm install` para instalar as dependências.
3. Execute `npm run dev` para iniciar o servidor com Nodemon.
4. O servidor estará rodando em `http://localhost:3000`.

```bash
npm run dev
```
`http://localhost:3000
`

[Clique aqui](http://localhost:3000)

---

## 📍 Endpoints da API
- **POST /pacientes**: Cadastra um novo paciente.
- **GET /pacientes**: Lista todos os pacientes.
- **GET /pacientes/:id**: Busca dados de um paciente específico.
- **POST /evolucao/:id_cadastro**: Registra um atendimento.
- **GET /evolucao/:id_cadastro**: Lista o histórico de um paciente.

---

### Exemplo de JSON para Cadastro de Paciente (POST /pacientes)
```json
{
  "nome": "Maria Silva",
  "idade": 75,
  "sexo": "Feminino",
  "endereco": "Rua das Flores, 123",
  "telefone": "62999999999",
  "condicao_saude_inicial": "Hipertensão"
}

```

## 🔐 Segurança

A API utiliza Prepared Statements para todas as consultas ao banco de dados garantindo proteção contra ataques de SQL Injection.

---

## 👩🏻‍💻 Projeto educacional

Projeto desenvolvido para fins de aprendizado em backend com Node.js.
