function adcItem(){
    let listaInput = document.getElementById('lista-input').value;
    let itemTemplate = document.querySelector('.item-container');

    if(listaInput == '' || listaInput.trim() == ''){
        window.alert("Adicione um novo item por favor")
    } else {
        // Clona o template
        let novoItem = itemTemplate.cloneNode(true);

        novoItem.classList.remove('displayNone');
        
        // Adiciona o nome do item
        novoItem.querySelector('.name-item').textContent = listaInput;
        
        // Insere o novo item após o template
        itemTemplate.after(novoItem);
        
        // Limpa o input
        document.getElementById('lista-input').value = '';
        
        // Adiciona funcionalidade ao botão de deletar
        novoItem.querySelector('.btn_lixeira').addEventListener('click', function(){
            let checkboxDoItem = novoItem.querySelector('.radio');
            
            if (checkboxDoItem.checked){
                novoItem.remove();
            }else{
                window.alert('Selecione um item para deletar')
            }
        })
    }
}

document.querySelector('form').addEventListener('submit', function(){
    event.preventDefault()
    adcItem();
})