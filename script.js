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

const updateService = (index, service) => {
  const dbService = readService()
  dbService[index] = service
  setLocalStorage(dbService)
}

const readService = () => getLocalStorage()

const createService = (service) => {
  const dbService = getLocalStorage()
  dbService.push (service)
  setLocalStorage(dbService)
}

const isValidFields = () => {
  return document.querySelector('form').reportValidity()
}