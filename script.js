/* 
Consultei o repositório da Gisele Costa para resolver o requisito nº 7
link: https://github.com/tryber/sd-011-project-pixels-art/pull/104/commits/e828d37ace8a073bdea26e8b4c069f29c8eaf998#
*/

let colorPalette = document.getElementById("color-palette");

colorPalette.addEventListener("click", selectColor);

function selectColor(event) {
    let eventTarget = event.target, //seleciona o evento alvo
        colors = document.getElementsByClassName('color'); //cria um HTML array com todas as minhas 'li's/cores
    for (let index = 0; index < colors.length; index += 1) {
        colors[index].classList.remove('selected'); //remove a cor selecionada antes de selecionar outra cor
        if (eventTarget.className !== 'selected') { //se o meu evento alvo não tiver a classe 'selected' então...
            eventTarget.classList.add('selected');//adiciona a classe no evento alvo/seleciona a nova cor
        }
    }
}

let pixelBoard = document.getElementById("pixel-board");//chama o quadro de pixels

pixelBoard.addEventListener("click", paintPixel);//ao clicar no meu quadro de pixels aciona um evento

function paintPixel(event){
    let eventTarget = event.target, //o evento que eu cliquei
        selectedColor = document.getElementsByClassName("selected")[0].classList[1];//recebe a cor selecionada
    eventTarget.style.backgroundColor = selectedColor;//atribui nova cor no pixel
}