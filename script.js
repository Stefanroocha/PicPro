const listaOpcoes = document.querySelector(".ul-s-hero")
    listaOpcoes.addEventListener("click", indentificarOpcoes)

    function indentificarOpcoes(event) {
        
        const element = event.target

        if(element.tagName == "LI") {
            const id = element.id

            const secaoescolha = document.querySelector(`div[data-id="${id}"]`)
            
            removeClasseMostrar ()
            secaoescolha.classList.add("mostrar")
        }
    }
    

    function removeClasseMostrar (){
        const divs = document.querySelectorAll(".s-hero-secondy .container div")
        
        for (let i =0; i < divs.length; i++) {
            divs[i].classList.remove("mostrar")
        }
    }