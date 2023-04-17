let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let respostaEsta = document.querySelector('#respostaEsta')
let aviso = document.querySelector('#aviso')
let pontos = 0
let placar = 0

let numQuestao = document.querySelector('#numQuestao')
let pergunta = document.querySelector('#perguntas')

let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

let articleQuestoes = document.querySelector('.questoes')

let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao: 0,
    pergunta: "",
    alternativaA: "Alternativa A",
    alternativaB: "Alternativa B",
    alternativaC: "Alternativa C",
    alternativaD: "Alternativa D",
    correta: "0",
}
const q1 = {
    numQuestao: 1,
    pergunta: "De onde é a invenção do chuveiro elétrico?",
    alternativaA: "A = França",
    alternativaB: "B = Inglaterra",
    alternativaC: "C = Brasil",
    alternativaD: "D = Austrália",
    correta: "C = Brasil",
}
const q2 = {
    numQuestao: 2,
    pergunta: "Quantas casas decimais tem o número pi?",
    alternativaA: "A = Milhares ",
    alternativaB: "B = Vinte",
    alternativaC: "C = Infinitas",
    alternativaD: "D = Centenas ",
    correta: "C = Infinitas",
}
const q3 = {
    numQuestao: 3,
    pergunta: "Qual o livro mais vendido no mundo a seguir à Bíblia?",
    alternativaA: "A = Ela, a Feiticeira",
    alternativaB: "B = O Pequeno Príncipe",
    alternativaC: "C = Dom Quixote",
    alternativaD: "D = O Senhor dos Anéis",
    correta: "C = Dom Quixote",
}
const q4 = {
    numQuestao: 4,
    pergunta: "O que a palavra legend significa em português?",
    alternativaA: "A = Legenda",
    alternativaB: "B = Lenda",
    alternativaC: "C = Legendário",
    alternativaD: "D = História",
    correta: "B = Lenda",
}
const q5 = {
    numQuestao: 5,
    pergunta: "Quais o menor e o maior país do mundo?",
    alternativaA: "A = Vaticano e Rússia",
    alternativaB: "B = Malta e Estados Unidos",
    alternativaC: "C = Nauru e China",
    alternativaD: "D = Mônaco e Canadá",
    correta: "A = Vaticano e Rússia",
}
const questoes = [q0, q1, q2, q3, q4, q5]

let numero = document.querySelector('#numero')
let total = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões" + totalDeQuestoes)
total.textContent = totalDeQuestoes

numQuestao.textContent = q1.numQuestao
perguntas.textContent = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

function proximaQuestao(nQuestao){
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
}
function bloquearAlternativas(){
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
    d.classList.add('bloqueado')
}
function desbloquearAlternativas(){
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
    d.classList.remove('bloqueado')
}
function verificarSeAcertou(nQuestao, resposta){
    let numeroDaQuestao = nQuestao.value
    console.log("Questão" + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    console.log("RespU" + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    console.log("respC" + certa)

    if(respostaEscolhida == certa){
        respostaEsta.textContent = "Correta 😊"
        pontos += 10
    } else {
        respostaEsta.textContent = "Errada 😢"
    }

    placar = pontos 
    instrucoes.textContent = "Pontos" + placar

    bloquearAlternativas()

    setTimeout(function(){
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes){
            console.log('Fim do Quez, parabens por chegar até aqui 🎆')
            FimDoQuez()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}
function FimDoQuez() {
    instrucoes.textContent = "Fim do Quez!"
    numQuestao.textContent = ""

    let pont = ""
    pontos == 0 ? pont ='ponto':pont = 'pontos'

    pergunta.textContent = "Você conseguiu" + pontos + " " + pont

    aviso.textContent = "Você conseguiu" + pontos + " " + pont

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""
    d.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')
    d.setAttribute('value', '0')

    articleQuestoes.style.display = 'none'

    setTimeout(function(){
        location.reload();
    }, 5000)
}
