import { createStore } from 'redux';

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD = "ADD";
const DELETE = "DELETE";

const reducer = (state, action)=>{
  if(!state) return { };

  const cur = state.count;
  switch(action.type){
    case ADD:
      return [];
    case DELETE:
      return [];
    default:
      return state;
  }
}

const store =  createStore(reducer);

const addTodo = (id,todo)=>{
  const li = document.createElement("li");
  li.innerText = todo;
  ul.appendChild(li);
}

const handleSubmit = (e)=>{
  e.preventDefault();
  const id = Date.now();
  const todo = input.value;
  input.value = '';
  addTodo(id,todo);
}

form.addEventListener('submit',handleSubmit);