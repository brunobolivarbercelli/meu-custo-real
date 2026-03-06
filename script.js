// ============================
// DADOS DOS PRODUTOS
// ============================

const produtos = [
  { nome: "arroz", categoria: "Mercearia" },
  { nome: "feijao", categoria: "Mercearia" },
  { nome: "macarrao", categoria: "Mercearia" },
  { nome: "oleo", categoria: "Mercearia" },
  { nome: "farinha_trigo", categoria: "Mercearia" },
  { nome: "farinha_rosca", categoria: "Mercearia" },
  { nome: "acucar", categoria: "Mercearia" },
  { nome: "sal", categoria: "Mercearia" },
  { nome: "farinha_mandioca", categoria: "Mercearia" },

  { nome: "banana", categoria: "Hortifruti" },
  { nome: "maca", categoria: "Hortifruti" },
  { nome: "batata", categoria: "Hortifruti" },
  { nome: "cebola", categoria: "Hortifruti" },
  { nome: "alho", categoria: "Hortifruti" },
  { nome: "tomate", categoria: "Hortifruti" },
  { nome: "alface", categoria: "Hortifruti" },
  { nome: "ovos", categoria: "Hortifruti" },

  { nome: "presunto", categoria: "Frios" },
  { nome: "mussarela", categoria: "Frios" },
  { nome: "margarina", categoria: "Frios" },
  { nome: "manteiga", categoria: "Frios" },
  { nome: "leite", categoria: "Frios" },
  { nome: "leite_po", categoria: "Frios" },

  { nome: "agua", categoria: "Liquidos" },
  { nome: "cerveja", categoria: "Liquidos" },
  { nome: "vinho", categoria: "Liquidos" },
  { nome: "destilados", categoria: "Liquidos" },

  { nome: "carne_moida", categoria: "Acougue" },
  { nome: "file_frango", categoria: "Acougue" },
  { nome: "bife_bovino", categoria: "Acougue" },
  { nome: "linguica", categoria: "Acougue" },
  { nome: "peixe", categoria: "Acougue" },

  { nome: "embalagem_aluminio_p", categoria: "Embalagens" },
  { nome: "embalagem_aluminio_m", categoria: "Embalagens" },
  { nome: "embalagem_aluminio_g", categoria: "Embalagens" },
  { nome: "embalagem_isopor_p", categoria: "Embalagens" },
  { nome: "embalagem_isopor_m", categoria: "Embalagens" },
  { nome: "embalagem_isopor_g", categoria: "Embalagens" },
  { nome: "embalagem_papelao_p", categoria: "Embalagens" },
  { nome: "embalagem_papelao_m", categoria: "Embalagens" },
  { nome: "embalagem_papelao_g", categoria: "Embalagens" },
]

const categorias = [...new Set(produtos.map((p) => p.categoria))]

let cesta = []

// ============================
// RENDER CATEGORIAS
// ============================

function renderCategorias() {
  const menu = document.getElementById("menuCategorias")
  menu.innerHTML = ""

  categorias.forEach((cat) => {
    const btn = document.createElement("button")
    btn.textContent = cat

    btn.onclick = () => {
      renderProdutos(cat)
    }

    menu.appendChild(btn)
  })
}

// ============================
// RENDER PRODUTOS
// ============================

function renderProdutos(categoria) {
  const grid = document.getElementById("gridProdutos")
  grid.innerHTML = ""

  const filtrados = produtos.filter((p) => p.categoria === categoria)

  filtrados.forEach((produto) => {
    const card = document.createElement("div")
    card.className = "cardProduto"

    card.innerHTML = `

<img src="assets/images/${produto.nome}.png">

<h3>${produto.nome.replace("_", " ")}</h3>

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

function buscarProduto() {
  const termo = document.getElementById("busca").value.toLowerCase()

  const grid = document.getElementById("gridProdutos")
  grid.innerHTML = ""

  const filtrados = produtos.filter((p) => p.nome.includes(termo))

  filtrados.forEach((produto) => {
    const card = document.createElement("div")
    card.className = "cardProduto"

    card.innerHTML = `

<img src="assets/images/${produto.nome}.png">

<h3>${produto.nome.replace("_", " ")}</h3>

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

let produtoAtual = ""

function abrirCalculadora(nome) {
  produtoAtual = nome

  document.getElementById("painelCalculadora").style.display = "block"

  document.getElementById("nomeProduto").textContent = nome.replace("_", " ")
  function fecharCalculadora() {
    document.getElementById("painelCalculadora").style.display = "none"
  }
}

// ============================
// MASCARA DINHEIRO
// ============================

function mascaraDinheiro(campo) {
  let v = campo.value.replace(/\D/g, "")

  v = (v / 100).toFixed(2) + ""

  v = v.replace(".", ",")

  campo.value = "R$ " + v
}

// ============================
// CALCULO
// ============================

function calcular() {
  let preco = document.getElementById("preco").value

  preco = preco.replace("R$", "").replace(",", ".").trim()

  preco = parseFloat(preco)

  const pesoComprado = converterParaBase(
    document.getElementById("pesoComprado").value,
  )

  const pesoUsado = converterParaBase(
    document.getElementById("pesoUsado").value,
  )

  if (!preco || !pesoComprado || !pesoUsado) {
    document.getElementById("resultado").textContent = "R$ 0.00"

    return 0
  }

  const precoPorGrama = preco / pesoComprado

  const custo = precoPorGrama * pesoUsado

  document.getElementById("resultado").textContent = "R$ " + custo.toFixed(2)

  return custo
}

// ============================
// ADICIONAR NA CESTA
// ============================

function adicionarCesta() {
  const custo = calcular()

  cesta.push({
    produto: produtoAtual,
    valor: custo,
  })

  renderCesta()

  limparCalculadora()

  fecharCalculadora()
}

// ============================
// RENDER CESTA
// ============================

function renderCesta() {
  const lista = document.getElementById("listaCesta")
  lista.innerHTML = ""

  let total = 0

  cesta.forEach((item, index) => {
    total += item.valor

    const div = document.createElement("div")

    div.innerHTML = `

${item.produto} - R$ ${item.valor.toFixed(2)}

<button onclick="removerItem(${index})">🗑</button>

`

    lista.appendChild(div)
  })

  document.getElementById("totalReceita").textContent = "R$ " + total.toFixed(2)
}

// ============================
// REMOVER ITEM
// ============================

function removerItem(index) {
  cesta.splice(index, 1)

  renderCesta()
}

function fecharCalculadora() {
  document.getElementById("painelCalculadora").style.display = "none"
}

function limparCalculadora() {
  document.getElementById("preco").value = ""
  document.getElementById("pesoComprado").value = ""
  document.getElementById("pesoUsado").value = ""

  document.getElementById("resultado").textContent = "R$ 0.00"
}

// ============================
// CONVERTER PESOS E MEDIDAS
// ============================

function converterParaBase(valor) {
  if (!valor) return 0

  valor = valor.toString().toLowerCase().trim()

  if (valor.includes("kg")) {
    return parseFloat(valor.replace("kg", "")) * 1000
  }

  if (valor.includes("g")) {
    return parseFloat(valor.replace("g", ""))
  }

  if (valor.includes("ml")) {
    return parseFloat(valor.replace("ml", ""))
  }

  if (valor.includes("l")) {
    return parseFloat(valor.replace("l", "")) * 1000
  }

  return parseFloat(valor)
}

// ============================
// INICIAR SISTEMA
// ============================

renderCategorias()
renderProdutos("Mercearia")
