export const chamadas = {
    async buscarCidades() {
        try{
            const res = await fetch('http://localhost:3000/municipios')
            return await res.json()
        }
        catch(error) {
            console.error(error)
        }
    }

}