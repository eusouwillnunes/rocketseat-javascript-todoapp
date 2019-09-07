var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var tasks = JSON.parse(localStorage.getItem('task_list')) || [];

function renderTasks(){
  listElement.innerHTML = '';

  for(task of tasks){
    var taskElement = document.createElement('li');
    var taskText = document.createTextNode(task);

    var linkDelElement = document.createElement('a');
    var linkDelText = document.createTextNode('Excluir');
    var spaceText = document.createTextNode(' - ');
    linkDelElement.appendChild(linkDelText);
    linkDelElement.setAttribute('href', '#')

    var pos = tasks.indexOf(task);

    linkDelElement.setAttribute('onclick', 'deleteTask('+ pos +')');

    taskElement.appendChild(taskText);
    taskElement.appendChild(spaceText);
    taskElement.appendChild(linkDelElement);
    listElement.appendChild(taskElement);
  }
}

renderTasks();

function addTask(){
  var taskText = inputElement.value;

  tasks.push(taskText);
  inputElement.value = '';

  renderTasks();
  saveToStorage()
}

buttonElement.onclick = addTask;

function deleteTask(pos){
  tasks.splice(pos, 1);
  renderTasks();
  saveToStorage()
}

function saveToStorage(){
  localStorage.setItem('task_list', JSON.stringify(tasks));
}