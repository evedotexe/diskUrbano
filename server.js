import express from "express";
const app = express();
const urlPublica = 'https://servicodados.ibge.gov.br/api/v1/localidades/municipios'

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    next()
})
app.use(express.static('public'))
app.use(express.json())

app.get('/municipios', async (req, res) => {
    const response = await fetch(urlPublica)
    const data = await response.json()
    res.json(data)
});


app.listen(3000, () => {
    console.log('servidor rodando :3')
})