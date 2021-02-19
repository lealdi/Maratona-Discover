const Modal = {
    open(){
        //Abrir Modal
        //Adicionar a classe active ao modal
        document.querySelector(".modal-overlay")
        .classList.add("active")
    },
    close(){
        //Fechar o Modal
        //Remover a classe active do modal
        document.querySelector(".modal-overlay")
        .classList.remove("active")
    }
}

