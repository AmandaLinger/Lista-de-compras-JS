function adcItem(){
    let listaInput = document.getElementById('lista-input').value;
    let itemContainer = document.querySelector('.item-container');
    let nameItem = document.querySelector('.name-item')


    if(listaInput == '' || listaInput.trim() == ''){
        window.alert("Adicione um novo item por favor")
    } else{
        itemContainer.classList.add('displayVisivel')
        nameItem.textContent = listaInput

    }

}

document.querySelector('form').addEventListener('submit', function(){
    event.preventDefault()
    adcItem();
})