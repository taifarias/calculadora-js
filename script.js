let displayValue = '';  // cria variavel displayValuevalor com valor inicial vazio

function appendNumber(number) {   // cria a função que adiciona o valor numérico a operação
    displayValue += number;      //adiciona valor number ao valor que está na variavel displayValue
    updateDisplay();            // chama a função para atualizar o que está visivel no display da calculadora
}

function appendOperator(operator) {       //cria a função que irá concatenar o operador 
    displayValue += operator;            // concatena o operador a variavel displayValue
    updateDisplay();                    // chama a função para atualizar o que está visivel no display
}

function clearDisplay() {      // cria a função que irá apagar o que estiver na variavel displayValue
    displayValue = '';        // colocar valor vazio novamente na variavel displayValue
    updateDisplay();         // chama a função para atualizar o que está visivel no display
}

function calculateResult() {   //função que calcula o resultado das operações
    try {
        displayValue = eval(displayValue);       //a função eval  avalie dinamicamente código string no displayValue
    } catch (error) {                           //se prepara para mostrar mensagem de erro, caso ocorra
        displayValue = 'Error';
    }
    updateDisplay();                         // chama a função para atualizar o que está visivel no display
}   

function updateDisplay() {        //função que atualiza o display
    document.getElementById('display').value = displayValue;  // "conecta" o que está no HTML com ID display, a variavel displayValue no JavaScript.
}


document.addEventListener('keydown', function(event) {
    // Verifica se uma tecla numérica foi pressionada (0-9)
    if (event.key >= '0' && event.key <= '9') {
        appendNumber(event.key);
    }
    // Verifica se uma tecla de operador foi pressionada (+, -, *, /)
    else if (['+', '-', '*', '/'].includes(event.key)) {
        appendOperator(event.key);
    }
    // Verifica se a tecla Enter foi pressionada para calcular o resultado
    else if (event.key === 'Enter') {
        calculateResult();
    }
    // Verifica se a tecla Escape foi pressionada para limpar o visor
    else if (event.key === 'Escape') {
        clearDisplay();
    }
});