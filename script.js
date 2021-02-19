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

const transactions = [
    {
        id:1,
        description:"Luz",
        amount: -50000,
        date: "23/01/2021",
    },
    {
        id:2,
        description:"Website",
        amount: 500000,
        date: "23/01/2021",
    },
    {
        id:3,
        description:"Internet",
        amount: -20000,
        date: "23/01/2021",
    },
]

// Eu preciso somar as entradas
// depois eu preciso somar as saidas e
// remover das entradas o valor das saidas
// assim, eu terei o total

const Transaction = {
    incomes() {
        // Somar as entradas
    },
    expenses() {
        // Somar as saídas
    },
    total() {
        // Entradas - saidas
    }

}