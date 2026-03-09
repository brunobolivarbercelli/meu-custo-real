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

  // Depois de logar com sucesso, atualiza o botão
  usuarioLogado(data.user)
}

// Atualiza botão para estado logado
// Atualiza botão para estado logado
function usuarioLogado(user){
  const botaoLogin = document.getElementById("botaoLogin")
  const menuUsuario = document.getElementById("menuUsuario")

  botaoLogin.textContent = user.email + " ▾"

  // Remove qualquer listener antigo de abrir login
  botaoLogin.replaceWith(botaoLogin.cloneNode(true))
  const novoBotao = document.getElementById("botaoLogin")

  // Agora, clicar abre o menu de usuário
  novoBotao.addEventListener("click", (e) => {
    e.stopPropagation() // impede que clique abra modal login
    menuUsuario.style.display = menuUsuario.style.display === "none" ? "block" : "none"
  })

  // Evita que menu feche ao clicar dentro dele
  menuUsuario.addEventListener("click", (e) => e.stopPropagation())

  // Fecha menu ao clicar fora
  document.addEventListener("click", () => {
    menuUsuario.style.display = "none"
  })
}

// Logout
async function logout(){
  if(!supabaseClient) return
  await supabaseClient.auth.signOut()

  const botaoLogin = document.getElementById("botaoLogin")
  const menuUsuario = document.getElementById("menuUsuario")

  botaoLogin.textContent = "Login"
  menuUsuario.style.display = "none"

  // Reatribui função de abrir modal de login
  botaoLogin.replaceWith(botaoLogin.cloneNode(true))
  document.getElementById("botaoLogin").addEventListener("click", abrirLogin)
}
