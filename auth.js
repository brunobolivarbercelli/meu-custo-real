// ============================
// SUPABASE LOGIN
// ============================

// coloque aqui suas credenciais depois
const SUPABASE_URL = "https://hktwiocqfaklatowwkcl.supabase.co"
const SUPABASE_KEY = "sb_publishable_K4HnKxzjw_FTXl4Bs3tc5g_usbp6GFu"

let supabaseClient = null

if(window.supabase){

supabaseClient = window.supabase.createClient(
SUPABASE_URL,
SUPABASE_KEY
)

}

// ============================
// LOGIN
// ============================

async function login(){

const email = document.getElementById("email").value
const senha = document.getElementById("senha").value

if(!email || !senha){

alert("Preencha email e senha")

return

}

const { data, error } =
await supabaseClient.auth.signInWithPassword({

email: email,
password: senha

})

if(error){

alert(error.message)

}else{

usuarioLogado(data.user)

fecharLogin()

}

}

// ============================
// LOGOUT
// ============================

async function logout(){

if(!supabaseClient) return

await supabaseClient.auth.signOut()

const botao = document.getElementById("botaoLogin")

if(botao){

botao.textContent = "Login"

botao.onclick = abrirLogin

}

}



// ============================
// CADASTRO
// ============================

async function cadastrar(){

const email = document.getElementById("email").value.trim()
const senha = document.getElementById("senha").value.trim()

if(email === "" || senha === ""){

alert("Preencha email e senha")

return

}

if(senha.length < 6){

alert("A senha precisa ter pelo menos 6 caracteres")

return

}

const { data, error } =
await supabaseClient.auth.signUp({

email: email,
password: senha

})

if(error){

alert(error.message)

}else{

alert("Conta criada! Verifique seu email.")

}

}

// ============================
// VERIFICAR SESSÃO
// ============================

document.addEventListener("DOMContentLoaded", async () => {

if(!supabaseClient) return

const { data } = await supabaseClient.auth.getSession()

if(data.session){

usuarioLogado(data.session.user)

}

})

function usuarioLogado(user){

const botao = document.getElementById("botaoLogin")

if(botao){

botao.textContent = "Sair"

botao.onclick = logout

}

}


