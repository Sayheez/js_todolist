const inputTodo = document.querySelector(".todo-input");
const addTodoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");

const editItem = null;

const createTodoItem = (item) => {
    let todoItem = document.createElement("ul");
    todoItem.classList.add("todo-div");

    let itemLi = document.createElement("li");
    itemLi.classList.add("todo-task");
    itemLi.innerText = item;
    todoItem.append(itemLi);

    let editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.innerHTML = "edit";
    todoItem.append(editBtn);
    editBtn.addEventListener("click", (e) =>  
    {
        updateTodo(e);
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = "delete";
    todoItem.append(deleteBtn);
    deleteBtn.addEventListener("click", (e) => {
        deleteTodoLocalStorage(e);
        todoItem.remove();
    });

    todoList.append(todoItem);

    return todoList;
}

// Function to add a todo 
const addTodo = (e) => {
    e.preventDefault();
    const todos = checkTodosLocalStorage();
  

    if(addTodoBtn.value != "Submit"  &&  e.target.previousSibling.innerText) { 
        let index = todos.indexOf(e.target.previousSibling.innerText);
        console.log(index);
        e.target.previousSibling.innerText = inputTodo.value;
        todos[index] = inputTodo.value;
        console.log(todos[index]);
        
        addTodoBtn.value = "Submit";
        localStorage.setItem("todo", JSON.stringify(todos));
        inputTodo.value = "";
        inputTodo.focus();

        return false;
    }

    if(inputTodo.value.trim() !== "") {
        createTodoItem(inputTodo.value);
        todos.push(inputTodo.value);
        saveTodoLocalStorage(todos);
        inputTodo.value = "";
        inputTodo.focus();
    }

}

const updateTodo = (e) => {
    e.preventDefault();

    const todos = checkTodosLocalStorage();
    
    if(e.target.classList.contains("edit-btn")) {

        inputTodo.value = e.target.previousSibling.innerText;
        addTodoBtn.value = "edit";
        inputTodo.focus();

        let elem = e.target.previousSibling.innerText;
        console.log(elem);
        let index = todos.indexOf(elem);
        console.log(index);
        // todos[index] = inputTodo.value;

        return;
    }
}

// Function to check if there are todos already in the  Local Storage array or the array is empty
const checkTodosLocalStorage = () => {
    return JSON.parse(localStorage.getItem("todo") || "[]");
}

// Function to save a todo to Local Storage
const saveTodoLocalStorage = (todo) => {
    localStorage.setItem("todo", JSON.stringify(todo));
}

// Function to delete from the local storage
const deleteTodoLocalStorage = (e) => {
    e.preventDefault();
    const todos = checkTodosLocalStorage();
    let tId = 0;
    if(e.target.classList.contains("delete-btn")) {
        console.log(tId);
        let todoEdit = e.target.previousSibling.previousSibling.innerText;  //target.parentElement.id;
        console.log(todos);
        todos.forEach(todo => {
            if(todo == todoEdit) {
                console.log(todoEdit + "" + "Yah ");
                tId = todos.indexOf(todoEdit);
                todos.splice(tId, 1);
                saveTodoLocalStorage(todos);
            } 
        })       
    }    
}

// Function to load todos from local storage and display on the UI
const getTodos = () => {
    const todos = checkTodosLocalStorage();

    todos.forEach(todo => {
        createTodoItem(todo);
    });
}

addTodoBtn.addEventListener("click", addTodo);
document.addEventListener("DOMContentLoaded", getTodos);
