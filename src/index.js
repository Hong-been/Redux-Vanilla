import { createStore } from 'redux';

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD = "ADD";
const DELETE = "DELETE";

const dispatchAddTodo = (payload)=>{
  store.dispatch({type:ADD,payload});
}
const dispatchDeleteTodo = (payload)=>{
  store.dispatch({type:DELETE,payload});
}

const reducer = (state=[], action)=>{
  switch(action.type){
    case ADD:
      return [...state, action.payload];
    case DELETE:
      return state.filter(({id})=> id!==action.payload.id);
    default:
      return state;
  }
}

const store =  createStore(reducer);

const deleteTodo = (id)=>{
  dispatchDeleteTodo({id});
}

const paintTodos = ()=>{
  ul.innerHTML='';
  store.getState().forEach(({id,todo})=>{
    const li = document.createElement("li");
    const btn = document.createElement("button");

    btn.innerText="DEL";
    btn.addEventListener("click",()=>deleteTodo(id));
    li.id=id;
    li.textContent=todo;
    li.appendChild(btn);
    ul.appendChild(li);
  })
}

store.subscribe(paintTodos);

const handleSubmit = (e)=>{
  e.preventDefault();
  const id = Date.now();
  const todo = input.value;
  input.value = '';
  dispatchAddTodo({id,todo});
}

form.addEventListener('submit',handleSubmit);