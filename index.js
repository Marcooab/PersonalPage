import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

function maquinaEscrever(texto, elemento, velocidade) {
  var i = 0;
  var intervalo = setInterval(function() {
    // Adiciona o próximo caractere ao texto
    elemento.textContent += texto.charAt(i);
    i++;

    // Verifica se todo o texto foi digitado
    if (i > texto.length) {
      clearInterval(intervalo);
    }
  }, velocidade);
}

var textoParaDigitar = `I'm Brazilian, originally from Florianópolis and have lived in Portugal since 2019. \n 
Before programming, I graduated in Law. I am the youngest child in a family of 2 brothers. \n
Course currently Systems Analysis and Development, with graduation scheduled for June 2024. 
My main technologies are techs focused on FrontEnd. HTML, CSS, JavaScript, REACT JS, DOM manipulation, SASS, TypeScript, API consumption, etc. 
In the BackEnd part, I work with NodeJS and have knowledge of Python, SQL, GoogleSheets/Excel and Tableau. 
I have training in Agile methodologies, namely SCRUM. For version control, I use Git/Github. 
I am currently part of a Bootcamp (MasterSchool, 6 months duration, currently in the last month) aimed at part of data analysis. 
I speak English and have basic knowledge of German. Certain that life is a "variable" in "constant" evolution, I make myself available.`

var elementoTexto = document.getElementById('texto-maquina');
var velocidadeDigitacao = 50;

maquinaEscrever(textoParaDigitar, elementoTexto, velocidadeDigitacao);

