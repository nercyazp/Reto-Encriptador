
let texto="";
let letra="";
let resultado ="";

function obtenerTextoEncriptar(){
    let textarea = document.getElementById("textareaId").value;
    resultado = encriptarTexto(textarea);
    console.log(resultado);
    document.getElementById("textoFinal").style.display = 'block';
    document.getElementById("textoFinal").innerHTML = resultado;
    document.getElementById("h1Mjs").style.display = 'none';
    document.getElementById("h2Mjs").style.display = 'none';
    document.getElementById("imgMuneco").style.display = 'none';    
    document.getElementById("bontonCopiar").style.display = 'block';    
}
function obtenerTextoDesencriptar(){
    let textarea = document.getElementById("textareaId").value;
    console.log(textarea);
    resultado = desencriptarTexto(textarea);
    console.log(resultado);
    document.getElementById("textoFinal").style.display = 'block';
    document.getElementById("textoFinal").innerHTML = resultado;
    document.getElementById("h1Mjs").style.display = 'none';
    document.getElementById("h2Mjs").style.display = 'none';
    document.getElementById("imgMuneco").style.display = 'none';    
    document.getElementById("bontonCopiar").style.display = 'block';    
}
function encriptarTexto(texto){
    let nuevoTexto="";
    for (let i =0; i<texto.length; i++){
        letra = texto[i];
        switch (letra) {
            case "a":
                letra = "ai"
                break;
            case "e":
                letra = "enter";
                break;
            case "i":
                letra = "ines";
                break;
            case "o":
                letra = "ober";
                break;
            case "u":
                letra = "ufat";
                break;
            default:
                // Si la letra no está en el switch, se agrega sin cambios
            break;
        }
        nuevoTexto += letra;
    }
    return nuevoTexto;
}

function desencriptarTexto(texto) {
    let nuevoTexto = texto; // Se creo una copia de la cadena original
    // Reemplaza todas las apariciones de cada una de las coincidencias, use esta funcion que encontre en la documentacion para optimizar el code
    //la g nos permite el reemplazo de todas las coincidencias sin esto, la funcion reempkazararia solo la primera coincidencia
    nuevoTexto = nuevoTexto.replace(/ai/g, 'a'); 
    nuevoTexto = nuevoTexto.replace(/enter/g, 'e'); 
    nuevoTexto = nuevoTexto.replace(/ines/g, 'i'); 
    nuevoTexto = nuevoTexto.replace(/ober/g, 'o'); 
    nuevoTexto = nuevoTexto.replace(/ufat/g, 'u'); 
    return nuevoTexto; // Devuelve la cadena desencriptada
  }

function limpiarTextarea() {
    const textarea = document.getElementById("textareaId").value;
    if (textarea) {
        document.getElementById("textareaId").value= ""; // Limpia el contenido del textarea
        document.getElementById("textoFinal").style.display = 'none';
        document.getElementById("h1Mjs").style.display = 'block';
        document.getElementById("h2Mjs").style.display = 'block';
        document.getElementById("imgMuneco").style.display = 'block';    
        document.getElementById("bontonCopiar").style.display = 'none'
    } else {
      console.error(`Por favor escribir el texto`);
    }
  }

('¡Texto copiado al portapapeles!');

function copiar() {
    // obtengo el elemento P
    const textp = document.getElementById('textoFinal');
  
    // Obtengo el texto del elemento <p>
    const textoACopiar = textp.textContent;
  
    // Creo un objeto ClipboardItem con el texto a copiar
    const item = new ClipboardItem({ 'text/plain': new Blob([textoACopiar], { type: 'text/plain' }) });
  
    // Copio el objeto ClipboardItem al portapapeles
    navigator.clipboard.write([item])
      .then(() => {
        // Muestra un mensaje de confirmación por si encuentro error
        alert('¡Texto copiado al portapapeles!');
      })
      .catch(err => {
        console.error('Error al copiar al portapapeles:', err);
      });
  }