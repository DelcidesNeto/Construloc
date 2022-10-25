function mostrar_botao(n){
    var botao = window.document.querySelector(`#botao${n}`)
    botao.style.display = 'block'
}


function esconder_botao(n){
    var botao = window.document.querySelector(`#botao${n}`)
    botao.style.display = 'none'
}


function mostrar_imagem(n){
    var img = window.document.querySelector(`#img${n}`)
    img.style.opacity = '100%'
}


function escurecer_imagem(n){
    var img = window.document.querySelector(`#img${n}`)
    img.style.opacity = '75%'
}
