// ============================
// DADOS DOS PRODUTOS
// ============================

const produtos = [

{ nome: "Arroz", categoria: "Mercearia" },
{ nome: "Feijão", categoria: "Mercearia" },
{ nome: "Macarrão", categoria: "Mercearia" },
{ nome: "Óleo de Soja", categoria: "Mercearia" },
{ nome: "Azeite de Oliva", categoria: "Mercearia" },
{ nome: "Farinha de Trigo", categoria: "Mercearia" },
{ nome: "Farinha de Mandioca", categoria: "Mercearia" },
{ nome: "Farinha de Rosca", categoria: "Mercearia" },
{ nome: "Fubá", categoria: "Mercearia" },
{ nome: "Amido de Milho", categoria: "Mercearia" },
{ nome: "Açúcar", categoria: "Mercearia" },
{ nome: "Açúcar Mascavo", categoria: "Mercearia" },
{ nome: "Café", categoria: "Mercearia" },
{ nome: "Milho Verde", categoria: "Mercearia" },
{ nome: "Ervilha", categoria: "Mercearia" },
{ nome: "Molho de Tomate", categoria: "Mercearia" },
{ nome: "Extrato de Tomate", categoria: "Mercearia" },
{ nome: "Atum", categoria: "Mercearia" },
{ nome: "Sardinha", categoria: "Mercearia" },

{ nome: "Sal", categoria: "Temperos e Condimentos" },
{ nome: "Pimenta do Reino", categoria: "Temperos e Condimentos" },
{ nome: "Páprica Defumada", categoria: "Temperos e Condimentos" },
{ nome: "Páprica Doce", categoria: "Temperos e Condimentos" },
{ nome: "Páprica Picante", categoria: "Temperos e Condimentos" },
{ nome: "Orégano", categoria: "Temperos e Condimentos" },
{ nome: "Cominho", categoria: "Temperos e Condimentos" },
{ nome: "Canela em Pau", categoria: "Temperos e Condimentos" },
{ nome: "Canela em Pó", categoria: "Temperos e Condimentos" },
{ nome: "Mostarda", categoria: "Temperos e Condimentos" },
{ nome: "Ketchup", categoria: "Temperos e Condimentos" },
{ nome: "Maionese", categoria: "Temperos e Condimentos" },
{ nome: "Shoyu", categoria: "Temperos e Condimentos" },
{ nome: "Vinagre", categoria: "Temperos e Condimentos" },

{ nome: "Banana", categoria: "Hortifruti" },
{ nome: "Maçã", categoria: "Hortifruti" },
{ nome: "Laranja", categoria: "Hortifruti" },
{ nome: "Limão", categoria: "Hortifruti" },
{ nome: "Abacaxi", categoria: "Hortifruti" },
{ nome: "Mamão", categoria: "Hortifruti" },
{ nome: "Batata", categoria: "Hortifruti" },
{ nome: "Batata Doce", categoria: "Hortifruti" },
{ nome: "Cebola", categoria: "Hortifruti" },
{ nome: "Alho", categoria: "Hortifruti" },
{ nome: "Tomate", categoria: "Hortifruti" },
{ nome: "Alface", categoria: "Hortifruti" },
{ nome: "Repolho", categoria: "Hortifruti" },
{ nome: "Cenoura", categoria: "Hortifruti" },
{ nome: "Pepino", categoria: "Hortifruti" },
{ nome: "Pimentão Verde", categoria: "Hortifruti" },
{ nome: "Pimentão Vermelho", categoria: "Hortifruti" },
{ nome: "Pimentão Amarelo", categoria: "Hortifruti" },
{ nome: "Abobrinha", categoria: "Hortifruti" },
{ nome: "Berinjela", categoria: "Hortifruti" },
{ nome: "Cheiro Verde", categoria: "Hortifruti" },
{ nome: "Ovos", categoria: "Hortifruti" },

{ nome: "Carne Moída", categoria: "Açougue" },
{ nome: "Acém", categoria: "Açougue" },
{ nome: "Patinho", categoria: "Açougue" },
{ nome: "Coxão Mole", categoria: "Açougue" },
{ nome: "Coxão Duro", categoria: "Açougue" },
{ nome: "Alcatra", categoria: "Açougue" },
{ nome: "Picanha", categoria: "Açougue" },
{ nome: "Costela", categoria: "Açougue" },
{ nome: "Linguiça", categoria: "Açougue" },
{ nome: "Bacon", categoria: "Açougue" },
{ nome: "Filé de Frango", categoria: "Açougue" },
{ nome: "Peito de Frango", categoria: "Açougue" },
{ nome: "Coxa e Sobrecoxa", categoria: "Açougue" },

{ nome: "Filé de Tilápia", categoria: "Peixaria" },
{ nome: "Salmão", categoria: "Peixaria" },
{ nome: "Sardinha Fresca", categoria: "Peixaria" },
{ nome: "Camarão", categoria: "Peixaria" },

{ nome: "Presunto", categoria: "Frios" },
{ nome: "Mussarela", categoria: "Frios" },
{ nome: "Queijo Prato", categoria: "Frios" },
{ nome: "Queijo Minas", categoria: "Frios" },
{ nome: "Queijo Parmesão", categoria: "Frios" },
{ nome: "Mortadela", categoria: "Frios" },
{ nome: "Salame", categoria: "Frios" },
{ nome: "Peito de Peru", categoria: "Frios" },

{ nome: "Leite", categoria: "Laticínios" },
{ nome: "Leite em Pó", categoria: "Laticínios" },
{ nome: "Manteiga", categoria: "Laticínios" },
{ nome: "Margarina", categoria: "Laticínios" },
{ nome: "Requeijão", categoria: "Laticínios" },
{ nome: "Iogurte", categoria: "Laticínios" },
{ nome: "Creme de Leite", categoria: "Laticínios" },

{ nome: "Pão Francês", categoria: "Padaria e Panificação" },
{ nome: "Pão de Forma", categoria: "Padaria e Panificação" },
{ nome: "Pão de Hambúrguer", categoria: "Padaria e Panificação" },
{ nome: "Pão de Hot Dog", categoria: "Padaria e Panificação" },
{ nome: "Massa de Pizza", categoria: "Padaria e Panificação" },

{ nome: "Leite Condensado", categoria: "Doces e Confeitaria" },
{ nome: "Chocolate em Pó", categoria: "Doces e Confeitaria" },
{ nome: "Achocolatado", categoria: "Doces e Confeitaria" },
{ nome: "Gelatina", categoria: "Doces e Confeitaria" },
{ nome: "Doce de Leite", categoria: "Doces e Confeitaria" },

{ nome: "Água", categoria: "Bebidas" },
{ nome: "Refrigerante", categoria: "Bebidas" },
{ nome: "Suco", categoria: "Bebidas" },
{ nome: "Cerveja", categoria: "Bebidas" },
{ nome: "Vinho Tinto", categoria: "Bebidas" },
{ nome: "Vinho Branco", categoria: "Bebidas" },
{ nome: "Energético", categoria: "Bebidas" },
{ nome: "Cachaça", categoria: "Bebidas" }

]

// ============================
// VARIÁVEIS
// ============================

const categorias = [...new Set(produtos.map(p => p.categoria))]
let cesta = []
let produtoAtual = ""

// ============================
// FUNÇÃO LIMPAR TEXTO
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

const btn=document.createElement("button")
btn.textContent=cat

btn.onclick=()=>{
renderProdutos(cat)
}

menu.appendChild(btn)

})

}

// ============================
// RENDER PRODUTOS
// ============================

function renderProdutos(categoria){

const grid=document.getElementById("gridProdutos")
grid.innerHTML=""

const filtrados=produtos.filter(p=>p.categoria===categoria)

filtrados.forEach(produto=>{

const card=document.createElement("div")
card.className="cardProduto"

const imgNome=limparTexto(produto.nome)

card.innerHTML=`

<img src="assets/images/${imgNome}.png">

<h3>${produto.nome}</h3>

<button onclick="abrirCalculadora('${produto.nome}')">
Calcular
</button>

`

grid.appendChild(card)

})

}

// ============================
// BUSCA
// ============================

function buscarProduto(){

const termo=limparTexto(
document.getElementById("busca").value
)

const grid=document.getElementById("gridProdutos")
grid.innerHTML=""

const filtrados=produtos.filter(p=>
limparTexto(p.nome).includes(termo)
)

filtrados.forEach(produto=>{

const imgNome=limparTexto(produto.nome)

const card=document.createElement("div")

card.className="cardProduto"

card.innerHTML=`

<img src="assets/images/${imgNome}.png">

<h3>${produto.nome}</h3>

<button onclick="abrirCalculadora('${produto.nome}')">
Calcular
</button>

`

grid.appendChild(card)

})

}

// ============================
// CALCULADORA
// ============================

function abrirCalculadora(nome){

produtoAtual=nome

document.getElementById("painelCalculadora").style.display="block"

document.getElementById("nomeProduto").textContent=nome

}

function fecharCalculadora(){

document.getElementById("painelCalculadora").style.display="none"

}

// ============================
// MASCARA DINHEIRO
// ============================

function mascaraDinheiro(campo){

let v=campo.value.replace(/\D/g,"")

v=(v/100).toFixed(2)+"" 

v=v.replace(".",",")

campo.value="R$ "+v

}

// ============================
// CONVERSÃO PESOS
// ============================

function converterParaBase(valor){

if(!valor)return 0

valor=valor.toLowerCase().trim()

if(valor.includes("kg"))
return parseFloat(valor)*1000

if(valor.includes("g"))
return parseFloat(valor)

if(valor.includes("ml"))
return parseFloat(valor)

if(valor.includes("l"))
return parseFloat(valor)*1000

return parseFloat(valor)

}

// ============================
// CALCULO
// ============================

function calcular(){

let preco=document.getElementById("preco").value

preco=preco.replace("R$","").replace(",",".").trim()

preco=parseFloat(preco)

const pesoComprado=converterParaBase(
document.getElementById("pesoComprado").value
)

const pesoUsado=converterParaBase(
document.getElementById("pesoUsado").value
)

if(!preco||!pesoComprado||!pesoUsado){

document.getElementById("resultado").textContent="R$ 0.00"

return 0

}

const precoPorGrama=preco/pesoComprado

const custo=precoPorGrama*pesoUsado

document.getElementById("resultado").textContent=
"R$ "+custo.toFixed(2)

return custo

}

// ============================
// CESTA
// ============================

function adicionarCesta(){

const custoBase=calcular()

const margem=parseFloat(
document.getElementById("margemLucro").value
)||0

const taxa=parseFloat(
document.getElementById("taxaPlataforma").value
)||0

const custoFinal=
custoBase+
custoBase*(margem/100)+
custoBase*(taxa/100)

cesta.push({

produto:produtoAtual,
custoBase:custoBase,
margem:margem,
taxaPlataforma:taxa,
valor:custoFinal

})

renderCesta()

limparCalculadora()

fecharCalculadora()

}

// ============================
// RENDER CESTA
// ============================

function renderCesta(){

const lista=document.getElementById("listaCesta")

lista.innerHTML=""

let total=0

cesta.forEach((item,index)=>{

total+=item.valor

const div=document.createElement("div")

div.innerHTML=`

<strong>${item.produto}</strong> - R$ ${item.valor.toFixed(2)}
<br>
<small>Custo: R$ ${item.custoBase.toFixed(2)} | Margem: ${item.margem}% | Taxa: ${item.taxaPlataforma}%</small>
<br>
<button onclick="removerItem(${index})">🗑</button>

`

lista.appendChild(div)

})

document.getElementById("totalReceita").textContent=
"R$ "+total.toFixed(2)

}

// ============================
// REMOVER ITEM
// ============================

function removerItem(index){

cesta.splice(index,1)

renderCesta()

}

// ============================
// LIMPAR CALCULADORA
// ============================

function limparCalculadora(){

document.getElementById("preco").value=""
document.getElementById("pesoComprado").value=""
document.getElementById("pesoUsado").value=""

document.getElementById("resultado").textContent="R$ 0.00"

}

// ============================
// INICIAR SISTEMA
// ============================

renderCategorias()

renderProdutos("Mercearia")
