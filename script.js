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

const clearFields = () => {
  const fields = document.querySelectorAll('.modal-field')
  fields.forEach(field => field.value = "")
}

const createRow = (service, index) => {
  const newRow = document.createElement('tr')
  newRow.innerHTML = `
  <td>${service.nome}</td>
  <td><img src=${service.imagem} class="img-fluid"></td>
  <td>${service.descricao}</td>
  <td>
    <button type="button" class="btn btn-secondary m-1" id="edit-${index}">Editar</button>
    <button type="button" class="btn btn-danger m-1" id="delete-${index}">Excluir</button>    
  </td>
  `
  document.querySelector('#myTable>tbody.movel').appendChild(newRow)
}