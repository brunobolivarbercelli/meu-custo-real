// ============================
// VARIÁVEIS
// ============================

const categorias = [...new Set(produtos.map(p => p.categoria))]
let cesta = []
let produtoAtual = ""
const listaProdutos = document.getElementById("listaProdutos")


// ============================
// LIMPAR TEXTO
// ============================

function limparTexto(str){

return str
.normalize("NFD")
.replace(/[\u0300-\u036f]/g,"")
.toLowerCase()
.replace(/\s+/g,"-")

}

// ============================
// RENDER CATEGORIAS
// ============================

function renderCategorias(){

const menu = document.getElementById("menuCategorias")
menu.innerHTML=""

categorias.forEach(cat=>{

const btn = document.createElement("button")
btn.textContent = cat
btn.onclick = ()=>renderProdutos(cat)

menu.appendChild(btn)

})

}

// ============================
// RENDER PRODUTOS
// ============================

function renderProdutos(categoria){

const grid = document.getElementById("gridProdutos")
grid.innerHTML=""

const filtrados = produtos.filter(p=>p.categoria===categoria)

filtrados.forEach(produto=>{

const card = document.createElement("div")
card.className="cardProduto"

const imgNome = limparTexto(produto.nome)

card.innerHTML = `
<img src="assets/images/${imgNome}.png">
<h3>${produto.nome}</h3>
<button onclick="abrirCalculadora('${produto.nome}')">Calcular</button>
`

grid.appendChild(card)

})

}

// ============================
// BUSCA
// ============================

function buscarProduto(){

const termo = limparTexto(
document.getElementById("busca").value
)

const grid = document.getElementById("gridProdutos")
grid.innerHTML=""

const filtrados = produtos.filter(p=>
limparTexto(p.nome).includes(termo)
)

filtrados.forEach(produto=>{

const imgNome = limparTexto(produto.nome)

const card = document.createElement("div")
card.className="cardProduto"

card.innerHTML = `
<img src="assets/images/${imgNome}.png">
<h3>${produto.nome}</h3>
<button onclick="abrirCalculadora('${produto.nome}')">Calcular</button>
`

grid.appendChild(card)

})

}

// ============================
// CALCULADORA
// ============================

function abrirCalculadora(nome){

produtoAtual = nome

document.getElementById("nomeProduto").textContent = nome

document.querySelector(".painelCalculadora")
.classList.add("ativa")

}

function fecharCalculadora(){

document.querySelector(".painelCalculadora")
.classList.remove("ativa")

}

// ============================
// MASCARA DINHEIRO
// ============================

function mascaraDinheiro(campo){

let v = campo.value.replace(/\D/g,"")

v = (v/100).toFixed(2)+""
v = v.replace(".",",")

campo.value = "R$ "+v

}

// ============================
// CONVERSÃO PESOS
// ============================

function converterParaBase(valor){

if(!valor) return 0

valor = valor.toLowerCase().trim()

if(valor.includes("kg")) return parseFloat(valor)*1000
if(valor.includes("g")) return parseFloat(valor)
if(valor.includes("ml")) return parseFloat(valor)
if(valor.includes("l")) return parseFloat(valor)*1000

return parseFloat(valor)

}

// ============================
// CALCULAR CUSTO BASE
// ============================

function calcularCustoBase(){

let preco = document.getElementById("preco").value

preco = preco.replace("R$","")
.replace(",",".")
.trim()

preco = parseFloat(preco)

const pesoComprado = converterParaBase(
document.getElementById("pesoComprado").value
)

const pesoUsado = converterParaBase(
document.getElementById("pesoUsado").value
)

if(!preco || !pesoComprado || !pesoUsado){
return 0
}

const precoPorGrama = preco / pesoComprado

return precoPorGrama * pesoUsado

}

// ============================
// ATUALIZAR CÁLCULO
// ============================

function atualizarCalculo(){

const custoBase = calcularCustoBase()

const margem = parseFloat(
document.getElementById("margemLucro").value
) || 0

const taxa = parseFloat(
document.getElementById("taxaPlataforma").value
) || 0

let valorFinal = custoBase

if(custoBase > 0){

const lucro = custoBase * (margem/100)
const taxaValor = custoBase * (taxa/100)

valorFinal = custoBase + lucro + taxaValor

}

document.getElementById("resultado").textContent =
"R$ " + valorFinal.toFixed(2)

renderCesta()


}

// ============================
// ADICIONAR NA CESTA
// ============================

function adicionarCesta(){

const preco = document.getElementById("preco").value
const pesoComprado = document.getElementById("pesoComprado").value
const pesoUsado = document.getElementById("pesoUsado").value

const custoBase = calcularCustoBase()

cesta.push({

produto: produtoAtual,
preco: preco,
pesoComprado: pesoComprado,
pesoUsado: pesoUsado,
custoBase: custoBase

})

renderCesta()

limparCalculadora()
fecharCalculadora()

}


// ============================
// RENDER CESTA
// ============================

function renderCesta(){

const lista = document.getElementById("listaCesta")
lista.innerHTML=""

let total = 0

const margem = parseFloat(
document.getElementById("margemLucro").value
) || 0

const taxa = parseFloat(
document.getElementById("taxaPlataforma").value
) || 0

cesta.forEach((item,index)=>{

const lucro = item.custoBase * (margem/100)
const taxaValor = item.custoBase * (taxa/100)

const valorFinal = item.custoBase + lucro + taxaValor

total += valorFinal

const div = document.createElement("div")

div.innerHTML = `

<strong>${item.produto}</strong> - R$ ${valorFinal.toFixed(2)}
<br>
<small>
Compra: ${item.preco} | ${item.pesoComprado}
<br>
Usado: ${item.pesoUsado}
</small>
<br>
<button onclick="removerItem(${index})">🗑</button>

`

lista.appendChild(div)

})

document.getElementById("totalReceita")
.textContent = "R$ "+total.toFixed(2)

}


// ============================
// REMOVER ITEM
// ============================

function removerItem(index){

cesta.splice(index,1)

renderCesta()

}

// ============================
// LIMPAR
// ============================

function limparCalculadora(){

document.getElementById("preco").value=""
document.getElementById("pesoComprado").value=""
document.getElementById("pesoUsado").value=""

document.getElementById("resultado").textContent="R$ 0.00"

}

// ============================
// ATIVA CÁLCULO AUTOMÁTICO
// ============================

function ativarCalculoAutomatico(){

const campos = [
"preco",
"pesoComprado",
"pesoUsado",
"margemLucro",
"taxaPlataforma"
]

campos.forEach(id=>{

const el = document.getElementById(id)

if(el){

el.addEventListener("input", atualizarCalculo)

}

})

}

window.addEventListener("DOMContentLoaded", ativarCalculoAutomatico)

// ============================
// INICIAR SISTEMA
// ============================

renderCategorias()
renderProdutos("Mercearia")

// ============================
// LOGIN SIMPLES
// ============================

document
.getElementById("botaoLogin")
.addEventListener("click", abrirLogin)

function abrirLogin(){

document
.getElementById("modalLogin").style.display = "flex"

}

function fecharLogin(){

document
.getElementById("modalLogin").style.display = "none"

}

document.addEventListener("DOMContentLoaded", () => {

const botaoLogin = document.getElementById("botaoLogin")

if(botaoLogin){

botaoLogin.addEventListener("click", abrirLogin)

}

})

