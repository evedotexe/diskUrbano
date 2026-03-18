import { chamadas } from "./service/api.js";

const selectEstados = document.getElementById('inputEstados');
const selectMunicipio = document.getElementById('inputMunicipio');

let municipiosCache = [];

export const ui = {
    async listarMunicipio() {
        municipiosCache = await chamadas.buscarCidades()

        selectEstados.addEventListener('change', async () => {
            const municipiosEstados = municipiosCache.filter(m => m.microrregiao?.mesorregiao?.UF?.nome === selectEstados.value)

            const selectMunicipio = document.getElementById('inputMunicipio')
            selectMunicipio.innerHTML = ''

            municipiosEstados.forEach(m => {
                const opcaoMunicipio = document.createElement('option')
                opcaoMunicipio.setAttribute('value', m.nome);
                opcaoMunicipio.textContent = m.nome;
                selectMunicipio.appendChild(opcaoMunicipio)
            });
            
        })
    }
}