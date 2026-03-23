let campoItem = document.getElementById('lista-input');
var btnAdicionar = document.querySelector('.adicionar')
var listaContainer = document.querySelector('.item-container').parentElement;

btnAdicionar.addEventListener("click", (event) => {
    event.preventDefault();
    
    if(!campoItem.value.trim()){
        alert('Por favor, insira um item para compra')
    } else{
        console.log(campoItem.value)
        
        const novoItem = document.createElement('div');
        novoItem.className = 'item-container displayBlock';
        
        novoItem.innerHTML = `
            <div class="space-container">
                <button type="radio" class="radio"></button>
                <p class="name-item">${campoItem.value}</p>
            </div>
            <div>
                <button class="btn_lixeira">
                    <img src="assets/img/Frame-3.svg" alt="ícone de lixeira">
                </button>
            </div>
        `;
        
        listaContainer.appendChild(novoItem);
        campoItem.value = '';
        campoItem.focus();
    }
})
