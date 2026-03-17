import { ui } from "./ui.js";
import { chamadas } from "./service/api.js";

document.addEventListener('DOMContentLoaded', async () => {
    ui.listarMunicipio();

    document.getElementById('formOcorrencia')
        .addEventListener('submit', submitEvent);
})

async function submitEvent(event) {
    event.preventDefault()

    const selectEstados = document.getElementById('inputEstados').value
    const selectMunicipios = document.getElementById('inputMunicipio').value
    const selectTipo = document.getElementById('tipoOcorrencia').value
    const descricao = document.getElementById('descricaoOcorrencia').value

    console.log('Dados do formulário:', { selectEstados, selectMunicipios, selectTipo, descricao })

    if (!selectEstados || !selectMunicipios || !selectTipo || !descricao) {
        alert('Por favor preencha tudo corretamente!');
        return;
    }

    await chamadas.novaOcorrencia({ selectEstados, selectMunicipios, selectTipo, descricao })

    event.target.reset();
}