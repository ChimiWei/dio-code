const form = document.getElementById('todo-form')
const todoList = document.getElementById('todo-list')
form.addEventListener('submit', (e) =>{
    e.preventDefault()
    const newTodo = document.getElementById('new-todo')
    addTodo(newTodo.value);
    form.reset()

})

function addTodo(Todo) {
    const todoItem = document.createElement('li');
    const checkbox = document.createElement('input');
    const todoText = document.createElement('span')
    const todo = document.createTextNode(Todo);

    checkbox.setAttribute('type', 'checkbox');
    todoItem.setAttribute('name', Todo);
    todoItem.setAttribute('id', Todo);
    todoText.appendChild(todo)
    todoItem.appendChild(checkbox);
    todoItem.appendChild(todoText);

    todoText.classList.add('todo');
    checkbox.classList.add('toggle')

    todoList.appendChild(todoItem)

}
