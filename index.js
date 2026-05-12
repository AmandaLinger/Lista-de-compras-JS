function adcItem(){
    let listaInput = document.getElementById('lista-input').value;
    var itemTemplate = document.querySelector('.item-container');

    if(listaInput == ''){
        window.alert("Adicione um novo item por favor")
    } else {
        // Clona o template
        let novoItem = itemTemplate.cloneNode(true);
        novoItem.classList.remove('displayNone');
        limpaInput();
        
        // Adiciona o nome do item
        novoItem.querySelector('.name-item').textContent = listaInput;
        
        // Insere o novo item após o template
        itemTemplate.after(novoItem);
    }
}

function limpaInput(){
    document.getElementById('lista-input').value = '';
}

document.querySelector('form').addEventListener('submit', function(){
    event.preventDefault()
    adcItem();
})

function addAlertKeyframes() {
    const styleId = 'alert-remove-animation-style';
    if (document.getElementById(styleId)) return;
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
        @keyframes alertRemove-slide {
            0% { opacity: 0; transform: translateY(0px); }
            20% { opacity: 1; transform: translateY(20); }
            80% { opacity: 1; transform: translateY(20); }
            100% { opacity: 0; transform: translateY(0); }
        }
        .alert-remove {
            animation: alertRemove-slide 4s ease-in-out forwards;
        }
    `;
    document.head.appendChild(style);
}

addAlertKeyframes();

function btnLixeira(){
    var selectedRadio = document.querySelector('.radio:checked');
    var alertRemove = document.getElementById('container-alert');
    if(selectedRadio){
        const item = selectedRadio.closest('.item-container');
        item.remove();
        alertRemove.classList.remove('displayNone');
        alertRemove.classList.add('alert-remove');
        setTimeout(() => {
            alertRemove.classList.add('displayNone');
            alertRemove.classList.remove('alert-remove');
        }, 5000);
    } else {
        window.alert('Selecione um item para deletar');
    }
}


function btnX(){
    alertRemove.classList.add('displayNone');
}