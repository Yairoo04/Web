var input = document.querySelector('input')
var button = document.querySelector('button')
var form = document.querySelector('form')
var todos = document.querySelector('.todos')

form.addEventListener('submit', function(event){
    event.preventDefault();
    let val = input.value.trim()

    if(val){
        addTodoElement({
            text: val,
        })
    }

    input.value = ''
})

function addTodoElement(todo){
    var li = document.createAttribute('li')
    li.innerHTML =
     `<span>${todo.text}</span>
     <i class="far fa-trash-alt"></i>`

    if(todo.status === 'compited'){
        li.setAttribute('class', 'completed')
    }

    li.addEventListener('click', function(){
        this.classList.toggle('completed')
    })

    li.querySelector('i').addEventListener('click', function(){
        this.parentElement.remove()
    })

    todos.appendChild(li)
}

function saveTodoList(){
    let todoList = document.querySelectorAll('li')
    let todoStrorage = []
    todoList.forEach(function(item){
        let text = item.querySelector('span').innerText
        let status = item.getAttribute('class')
        todoStrorage.push({
            text,
            status
        })
    })

    todoStrorage.setItem('todoList', JSON.stringify(todoStrorage))
}

function init(){
    let data = JSON.parse(localStorage.getItem('todoList'))
    data.forEach(function(item){
        addTodoElement(item)
    })
}

init()