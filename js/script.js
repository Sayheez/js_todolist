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
};

const addTodo = (e) => {
    e.preventDefault();

    if(addTodoBtn.value != "Submit") {
        e.target.previousSibling.innerText = inputTodo.value;
        addTodoBtn.value = "Submit";
        inputTodo.value = "";
        return false;
    };

    if(inputTodo.value.trim() !== "") {
        createTodoItem(inputTodo.value);
        // add save to local storage to this line later
        inputTodo.value = "";
        inputTodo.focus();
    }

};

addTodoBtn.addEventListener("click", addTodo);

const updateTodo = (e) => {
    if(e.target.classList.contains("edit-btn")) {
        console.log(e.target);
        inputTodo.value = e.target.previousSibling.innerText;
        addTodoBtn.value = "edit";
        editItem = e;
    }
};
