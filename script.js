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

const saveService = () => {
  if (isValidFields()) {
      const service = {
          nome: document.getElementById('nome').value,
          imagem: document.getElementById('imagem').value,
          descricao: document.getElementById('descricao').value,
      }
      const index = document.getElementById('nome').dataset.index
      if (index == 'new') {
          createService(service)
          updateTable()
          closeModal()
      } else {
          updateService(index, service)
          updateTable()
          closeModal()
      }
  }
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
  document.querySelector('#myTable>tbody').appendChild(newRow)
}

const clearTable = () => {
  const rows = document.querySelectorAll ('#myTable>tbody tr')
  rows.forEach(row => row.parentNode.removeChild(row))
}

const updateTable = () => {
  const dbService = readService ()
  clearTable ()
  dbService.forEach(createRow)
}

const fillFields = (service) => {
  document.getElementById('nome').value = service.nome
  document.getElementById('imagem').value = service.imagem
  document.getElementById('descricao').value = service.descricao
  document.getElementById('nome').dataset.index = service.index
}

const editService = (index) => {
  const service = readService()[index]
  service.index = index
  fillFields(service)
  openModal ()
}

const editDelete = (e) => {
  if (e.target.type == 'button') {
    const [action, index] = e.target.id.split( '-' )
    if (action == 'edit') {
      editService(index)
    } else {
      const service = readService()[index]
      const response = confirm(`Deseja realmente excluir o serviço ${service.nome}?`)
      if (response) {
          deleteService(index)
          updateTable()
      }
    }
  } 
}

updateTable()

document.getElementById('btnEnviar').addEventListener('click', saveService)

document.querySelector('#myTable>tbody').addEventListener('click', editDelete)

document.getElementById('btnAdc').addEventListener('click', openModal)

document.getElementById('btnFechar').addEventListener('click', closeModal)

document.querySelector('.fechar').addEventListener('click', closeModal)