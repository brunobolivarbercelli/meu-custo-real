// ============================
// SUPABASE LOGIN
// ============================

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

async function login() {
  const email = document.getElementById("email").value
  const senha = document.getElementById("senha").value

  if(!email || !senha){
    alert("Preencha email e senha")
    return
  }

  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email,
    password: senha
  })

  if(error){
    alert(error.message)
    return
  }

  alert("Login realizado!")

  fecharLogin()

  usuarioLogado(data.user)
}

function usuarioLogado(user){
  const botaoLogin = document.getElementById("botaoLogin")
  const menuUsuario = document.getElementById("menuUsuario")

  botaoLogin.textContent = user.email + " ▾"

  botaoLogin.replaceWith(botaoLogin.cloneNode(true))
  const novoBotao = document.getElementById("botaoLogin")

  novoBotao.addEventListener("click", (e) => {
    e.stopPropagation() // impede que clique abra modal login
    menuUsuario.style.display = menuUsuario.style.display === "none" ? "block" : "none"
  })

  menuUsuario.addEventListener("click", (e) => e.stopPropagation())

  document.addEventListener("click", () => {
    menuUsuario.style.display = "none"
  })
}

// ============================
// LOGOUT
// ============================

async function logout(){
  if(!supabaseClient) return
  await supabaseClient.auth.signOut()

  const botaoLogin = document.getElementById("botaoLogin")
  const menuUsuario = document.getElementById("menuUsuario")

  botaoLogin.textContent = "Login"
  menuUsuario.style.display = "none"

  botaoLogin.replaceWith(botaoLogin.cloneNode(true))
  document.getElementById("botaoLogin").addEventListener("click", abrirLogin)
}
