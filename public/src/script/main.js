import { ui } from "./ui.js";
import { chamadas } from "./service/api.js";

const selectEstados = document.getElementById('inputEstados')
const selectMunicipios = document.getElementById('inputMunicipio')

document.addEventListener('DOMContentLoaded', async () => {
    ui.listarMunicipio();
})

async function SubmitEvent() {
    const ocorrencia = {
        estado: null,
        municipio: null,
        tipo: null,
        descricao: null
    };

    try{
        await chamadas.enviarOcorrencia()
    }
    catch(error){

    }
}