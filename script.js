const inputElem = document.getElementById('itemInput')
const addButton = document.getElementById('addButton')
const clearButton = document.getElementById('clearButton')
const todoListElem = document.getElementById('todoList')

let todosArray = []

function addNewTodo(){
let newTodoTitle = inputElem.value
// console.log(newTodoTitle)
let newTodoObj = {
    id : todosArray.length + 1,
    title : newTodoTitle,
    complete : false
}
 inputElem.value =''

todosArray.push(newTodoObj)
// console.log(todosArray)
setLocalStorage(todosArray)
todosGenerator(todosArray )
inputElem.focus()

}

function setLocalStorage(todosList){
localStorage.setItem('todos', JSON.stringify(todosList))
}

function todosGenerator(todosList){
    let newTodoLiElem, newTodoLabelElem, newTodoCompleteBtn, newTodoDeleteBtn

    todoListElem.innerHTML = '' 
    
    todosList.forEach(function (todo){
        // console.log(todo); 
        newTodoLiElem = document.createElement('li')
        newTodoLiElem.className = 'completed well'
        // console.log(newTodoLiElem);
        
        newTodoLabelElem = document.createElement('label')
        newTodoLabelElem.innerHTML = todo.title
        // console.log(newTodoLabelElem)

        newTodoCompleteBtn = document.createElement('button')
        newTodoCompleteBtn.className = 'btn btn-success'
        newTodoCompleteBtn.innerHTML ='Complete'

        // console.log(newTodoCompleteBtn)



        newTodoDeleteBtn = document.createElement('button')
        newTodoDeleteBtn.className = 'btn btn-danger'
        newTodoDeleteBtn.innerHTML = 'Delete'
        
        // console.log(newTodoDeleteBtn)

        newTodoLiElem.append(newTodoLabelElem, newTodoCompleteBtn, newTodoDeleteBtn)
        // console.log(newTodoLiElem)

        todoListElem.append(newTodoLiElem)
        // console.log(todoListElem )




    })
    

}


function getLocalStorage(){
    let localStorageTodos = JSON.parse( localStorage.getItem('todos'))
    // console.log(localStorageTodos)
    if(localStorageTodos){
        todosArray = localStorageTodos

    }else{
        todosArray = []
    }
    todosGenerator(todosArray)

}

function clearTodos(){
    todosArray=[]
    todosGenerator(todosArray)
    localStorage.removeItem('todos')
}


window.addEventListener ('load', getLocalStorage)
addButton.addEventListener('click', addNewTodo)
clearButton.addEventListener('click', clearTodos)

inputElem.addEventListener('keydown', function(event){
    console.log(event)

    if(event.code === 'Enter'){
        addNewTodo()    

    }
})
