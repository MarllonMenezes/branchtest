function Dom (seletor) {
    const elementList = document.querySelectorAll(seletor);
    this.elements = elementList;
    this.addClass = function (classe) {
        elementList.forEach((element) => {
            element.classList.add(classe);
        });
    }
}

const listaItens = new Dom('li');
const ul = new Dom('ul');

listaItens.addClass('ativar');
ul.addClass('ativar-ul');