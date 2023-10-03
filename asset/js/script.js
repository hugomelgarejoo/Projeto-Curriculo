
// Função para Efeito Digitando.

function escrevendoLetra(){
    function ativaLetra(elemento){
        const arrTexto = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        arrTexto.forEach((letra,i)=> {
            setTimeout(()=>{
                elemento.innerHTML += letra;
            }, 75 * i);
        });
    }
    
    const titulo = document.querySelector('.digitando');
    ativaLetra(titulo);
}

escrevendoLetra()

// Função para Menu

function menu(){
    const ativaMenu = document.querySelector('.icone');
    const navMenu = document.querySelector('header .navbar')
    
    ativaMenu.addEventListener('click', ()=> {
        navMenu.classList.toggle('ativado')
        
    })
}

menu()

