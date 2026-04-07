const express = require('express');
const app = express();

app.use(express.json());

const pacientesRoutes = require('./src/routes/pacientes');
app.use('/pacientes', pacientesRoutes);

const evolucaoRoutes = require('./src/routes/evolucao');
app.use('/evolucao', evolucaoRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

