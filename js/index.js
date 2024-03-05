function tooggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')
   
    //pegar a tag img
    const img = document.querySelector("#profile img")

    if(html.classList.contains('light')) {
        // se tiver light mode, adicionar a imagens light
        img.setAttribute("src", "./imagens/imagem-light.jpg")
    } else {
        //se tiver sem light mode, manter a imagem normal
        img.setAttribute("src", "./imagens/IMG_20220920_165317_612.jpg")
    }
}