let userLogado = JSON.parse(localStorage.getItem('userLogado'))

let logado = document.querySelector('#logado')

logado.innerHTML = `Ola ${userLogado.nome}`


if(localStorage.getItem('token') == null){
    alert('Você precisa estar logado para acessar essa pagina!!')
    window.location.href = 'https://luanvictorms.github.io/Tela-login-lvl2/index.html'
}

function sair(){
    localStorage.removeItem('token')
    window.location.href = 'https://luanvictorms.github.io/Tela-login-lvl2/index.html'
}
