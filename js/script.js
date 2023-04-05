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
    // add local storage check to this line later
    // add save to local storage to this line later
    todoItem.append(itemLi);

    let editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.innerHTML = "edit";
    todoItem.append(editBtn);
    editBtn.addEventListener("click", () => updateTodo); 
    // {
    //     updateTodo();
    //     // todoList.removeChild(divTodo);
    //     // add save to local storage to this line later
    // });

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = "delete";
    todoItem.append(deleteBtn);
    deleteBtn.addEventListener("click", () => {
        todoItem.remove();
        // todoList.removeChild(divTodo);
        // add save to local storage to this line later
    });

    todoList.append(todoItem);

    return todoList;
}

const addTodo = (e) => {
    e.preventDefault();
    console.log(e.target);
    const todos = checkTodosLocalStorage();

    if(addTodoBtn.value != "Submit") {
        e.target.previousSibling.innerText = inputTodo.value;
        addTodoBtn.value = "Submit";
        inputTodo.value = "";
        return false;
    }

    if(inputTodo.value.trim() !== "") {
        createTodoItem(inputTodo.value);
        todos.push(inputTodo.value);
        saveTodoLocalStorage(todos);
        // add save to local storage to this line later
        inputTodo.value = "";
        inputTodo.focus();
    }

}

const updateTodo = (e) => {
    e.preventDefault();
    console.log(e.target.previousSibling.innerText);
    if(e.target.classList.contains("edit-btn")) {
        console.log(e.target);
        inputTodo.value = e.target.previousSibling.innerText;
        addTodoBtn.value = "edit";
        // editItem = e;
    }
}

// Function to check if there are todos already in the  Local Storage array or the array is empty
const checkTodosLocalStorage = () => {
    return JSON.parse(localStorage.getItem("todo") || "[]");
}

// Function to save a todo to Local Storage
const saveTodoLocalStorage = (todo) => {
    // const todos = checkTodosLocalStorage();
    // todos.push(todo);
    localStorage.setItem("todo", JSON.stringify(todo));
}

const deleteTodoLocalStorage = (todo) => {
    
}

const getTodos = () => {
    const todos = checkTodosLocalStorage();

    todos.forEach(todo => {
        createTodoItem(todo);
    });
}


addTodoBtn.addEventListener("click", addTodo);
document.addEventListener("DOMContentLoaded", getTodos);
