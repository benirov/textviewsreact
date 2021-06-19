export const obtenerVistaPreviaTexto = (texto) => {
    if(texto){
        return texto.substr(0, 45)+"..."
    }
    
}