function addTag (father, tag, text) {
    let callFather = document.getElementsByTagName(father);
    // Chama o elemento pai
    let createTag = document.createElement(tag);
    // Cria a tag
    createTag.id = "title";
    // Adiciona a id
    let addText = document.createTextNode(text);
    // Cria o texto da tag
    createTag.appendChild(addText);
    //Adiciona o texto na tag criada
    callFather[0].appendChild(createTag);
    // Adiciona a tag como primeiro elemento no pai
    return callFather;
}

addTag("body", "h1", "Paleta de Cores");