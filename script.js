function iniciaModal(modalID) {
  const modal = document.getElementById(modalID);
  if(modal) {
  modal.classList.add('mostrar');
  modal.addEventListener('click', (e) => {
      if(e.target.id == modalID || e.target.className == 'fechar') {
          modal.classList.remove('mostrar')
      }
    });
  }
}

const btn = document.querySelector('.btn.btn-primary')
btn.addEventListener('click', () => iniciaModal('modal-adicionar'));



function addToTable() {

  const nome = document.getElementById('nome').value;
  const imagem = document.getElementById('imagem').files[0].name; 
  const descricao = document.getElementById('descricao').value;
  const table = document.getElementById('myTable');

  const tableSize = table.rows.length;
  const row = table.insertRow(tableSize);
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);
  row.id = tableSize;


  cell1.innerHTML = nome;
  cell2.innerHTML = imagem;
  cell3.innerHTML = descricao;


  document.getElementById('nome').value = "";
  document.getElementById('imagem').files[0].name="";
  document.getElementById('descricao').value = "";


  return false;
}