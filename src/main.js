import '../style.css';
const todoForm = document.getElementById('todoForm');
const todoInput = todoForm['todoInput'];
const submitBtn = todoForm['submitBtn'];



class Todo {
  constructor(title) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.completed = false;
  }



  static saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
  }


  static getTodos(){
    const lsTodos = JSON.parse(localStorage.getItem('todos')) || [];
    return lsTodos;
  }
}

/** @type {Todo[]} */
const todos = Todo.getTodos();


console.log(todos);


function addTodo(){
  if(todoInput.value.trim() === "") return;


  const newTodo = new Todo(todoInput.value.trim());
  console.log(newTodo);
  todos.push(newTodo);
  Todo.saveTodos(); 
  // console.log(todos);
}



// const Todo = new Todo('random title')

// todo.title



// let todo = {
//   id: 'zenoshihtzu',
//   title: 'cedaspin',
//   completed: true
// }





todoForm.addEventListener('submit', event => {
  event.preventDefault();
  addTodo();
  // console.log('form submitted');
});
