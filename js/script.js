const inputTodo = document.querySelector(".todo-input");
const addTodoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");

const editItem = null;

const createTodoItem = (item) => {
    let divTodo = document.createElement("div");
    divTodo.classList.add("todo-div");

    let itemLi = document.createElement("li");
    itemLi.classList.add("todo-task");
    itemLi.innerText = item;
    // add local storage check to this line later
    // add save to local storage to this line later
    divTodo.append(itemLi);

    let editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.innerHTML = "edit";
    divTodo.append(editBtn);

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = "delete";
    divTodo.append(deleteBtn);
    deleteBtn.addEventListener("click", () => {
        divTodo.remove();
        // todoList.removeChild(divTodo);
        // add save to local storage to this line later
    });

    todoList.append(divTodo);

    return todoList;
};

const addTodo = (e) => {
    e.preventDefault();

    if(addTodoBtn.value != "Submit") {
        e.target.previousSibling.innerText = inputTodo.value;
        addTodoBtn.value = "Submit";
        inputTodo.value = "";
    };

    if(inputTodo.value.trim() !== "") {
        createTodoItem(inputTodo.value);
        // add save to local storage to this line later
        inputTodo.value = "";
    }

};

addTodoBtn.addEventListener("click", addTodo);