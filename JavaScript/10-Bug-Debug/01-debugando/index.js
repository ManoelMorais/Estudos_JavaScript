/**
 * *** BUG
 * Um bug é um termo utilizado na programção para descrever um erro, 
 * defeito ou comportamento indesejado em um software.
 *
 * Ele ocorre quando um código do programa não se comporta como esperado 
 * e produz resultados incorretos, inesperados ou inconsistentes.
 *
 * *** DEBUG
 * O debug (depuração) é o processo de identificar, analisar e corrigir bugs 
 * em um programa de computador. Envolve a investigação e a resolução
 *  de problemas para entender e corrigir o comportamento indesejado
 * do software
 *
 * O objetivo do debug é encontrar a causa raiz do bug e corrigi-lo 
 * para garantir que o programa funcione corretamente
 */

// alguns comando como o debugger;

const bugNum = () => {
    const number = '123';
    console.log(number === 123)
    if(number === 123){
        return "Seu número é 123 - type Number"
    }
    console.log(number)
    return "deu ruim"
};


console.log(bugNum())

/**
 * usar o terminal de depuração ou console.log para ajudar a saber onde eta o erro
 */
