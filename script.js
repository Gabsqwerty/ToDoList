document.addEventListener('keypress', function(e){
    if(e.which == 13){
      newTask();
    }
  }, false);

function newTask() {

    const task = document.getElementById("input")
    const itens = document.getElementById("theList")
    const itenList = document.createElement('li')
    itenList.setAttribute('class', 'itenList')
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.value = 1;
    checkbox.name = "check";
    if (task.value.length === 0) {alert('[Erro] É necessário inserir algo na caixa de texto ou número de tarefas alcançado')}
     else {
        itenList.appendChild(checkbox)
        itenList.appendChild(document.createTextNode(task.value));
        itens.appendChild(itenList);
        task.value = ''
    }
}

function check(checked = true) {
    var cbs = document.querySelectorAll('input[name="check"]');
    cbs.forEach((cb) => {
        cb.checked = checked;
    });
}

const btn = document.querySelector('#checkA');
btn.onclick = checkAll;

function checkAll() {
    check();
    this.onclick = uncheckAll;
}

function uncheckAll() {
    check(false); 
    this.onclick = checkAll;
}

function deleteTask() {
    const ckList = document.querySelectorAll("input[name=check]:checked");
    ckList.forEach(function(el) {
      el.parentElement.remove();
    });
  }