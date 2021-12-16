const openModal = () => document.getElementById('modal-adicionar')
    .classList.add('mostrar')

const closeModal = () => {
    clearFields()
    document.getElementById('modal-adicionar').classList.remove('mostrar')
}

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_service')) ?? []
const setLocalStorage = (dbService) => localStorage.setItem("db_service", JSON.stringify(dbService))

const deleteService = (index) => {
  const dbService = readService ()
  dbService.splice(index, 1)
  setLocalStorage(dbService)
} 