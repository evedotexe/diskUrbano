import { chamadas } from "./service/api.js";

const selectEstados = document.getElementById('inputEstados')

export const ui = {
    async listarMunicipio() {
        const municipios = await chamadas.buscarCidades()
        console.log(municipios)

        selectEstados.addEventListener('change', async () => {
            const municipiosEstados = municipios.filter(m => m.microrregiao?.mesorregiao?.UF?.nome === selectEstados.value)

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