var input = document.querySelector('input')
var button = document.querySelector('button')
var form = document.querySelector('form')
var todos = document.querySelector('.todos')

form.addEventListener('submit', function(event){
    event.preventDefault();
    let val = input.value.trim()

    if(val){

    }
})

function addTodoElement(todo){
    var li = document.createAttribute('li')
    li.innerHTML =
     ' <span>${}</span> <i class="far fa-trash-alt"></i>'
}