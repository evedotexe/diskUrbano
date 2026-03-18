import "dotenv/config";
import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const urlPublica = 'https://servicodados.ibge.gov.br/api/v1/localidades/municipios'

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/municipios', async (req, res) => {
    const response = await fetch(urlPublica)
    const data = await response.json()
    res.json(data)
});

app.post('/ocorrencia', async (req, res) => {
    try {
        const { estado, municipio, tipo, descricao } = req.body;
        const ocorrencia = await prisma.ocorrencias.create({
            data: { estado, municipio, tipo, descricao }
        })
        res.status(201).json({ success: true, message: 'Ocorrência criada com sucesso', data: ocorrencia })
    }
    catch (error) {
        console.error(error)
        res.status(500).json({ success: false, message: 'Erro ao criar ocorrência' })
    }
})

app.listen(3000, () => {
    console.log('servidor rodando :3')
})
