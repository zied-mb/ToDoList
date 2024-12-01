class ToDo {
  constructor(id, text, completed = false) {
    this.id = id
    this.text = text
    this.completed = completed
  }
}

class ToDoList {
  constructor() {
    this.todos = []

    this.input = document.getElementById("newTodo")
  }

  addTodo() {
    const todoText = this.input.value
    if (todoText !== "") {
      const todo = new ToDo(Math.random(), todoText)
      this.todos.push(todo)
      this.displayTodo(todo)
      this.input.value = ""
      console.log(this.todos)
    }
  }

  displayTodo(todo) {
    const todoListElement = document.getElementById("todoList");

    const li = document.createElement("li");
    li.innerHTML = `
    <input type="checkbox" ${todo.completed ? "checked" : ""} 
    onclick="todoList.toggleCompleted(${todo.id})">
    <span class="${todo.completed ? "completed" : ""}">${todo.text}</span>
    <button onclick="todoList.deleteTodo(${todo.id})">Delete</button>
    `;

    todoListElement.appendChild(li);
  }

  toggleCompleted(id) {
    const todoToUpdate = this.todos.find((todo) => todo.id === id);
    if(todoToUpdate) {
      // todoToUpdate.onOff()
      todoToUpdate.completed = !todoToUpdate.completed
      console.log(this.todos)
      this.refreshTodoList()
    }
  }

  refreshTodoList() {
    const todoListElement = document.getElementById("todoList");
    todoListElement.innerHTML = "";
    this.todos.forEach((todo) => this.displayTodo(todo));
    // for (let i = 0; i < todoList.length; i++) {
    //   displayTodo(todoList[i])
    // }
  }

  deleteTodo(id) {
    const indexToDelete = this.todos.findIndex((todo) => todo.id === id);
    if (indexToDelete !== -1) {
      this.todos.splice(indexToDelete, 1);
      this.refreshTodoList();
      console.log(this.todos);
    }
  }
}


const todoList = new ToDoList()