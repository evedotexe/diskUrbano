export const chamadas = {
    async buscarCidades() {
        try{
            const res = await fetch('http://localhost:3000/municipios')
            return await res.json()
        }
        catch(error) {
            console.error(error)
        }
    },

    async novaOcorrencia(dados) {
        try {
            const res = await fetch('http://localhost:3000/ocorrencia', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    estado: dados.selectEstados,
                    municipio: dados.selectMunicipios,
                    tipo: dados.selectTipo,
                    descricao: dados.descricao
                })
            });
            
            if (res.ok) {
                alert('Ocorrência registrada com sucesso!');
                return res.json();
            } else {
                throw new Error('Erro ao registrar ocorrência');
            }
        }
        catch(error) {
            console.error(error);
            alert('Erro ao registrar: ' + error.message);
        }
    }

}