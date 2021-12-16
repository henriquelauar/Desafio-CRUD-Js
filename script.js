const openModal = () => document.getElementById('modal-adicionar')
    .classList.add('mostrar')

const closeModal = () => {
    clearFields()
    document.getElementById('modal-adicionar').classList.remove('mostrar')
}