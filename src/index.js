import { createStore } from 'redux';

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const PLUS = "plus";
const MINUS = "minus";

const CounterReducer = (state, action)=>{
  if(!state) return {count:0};

  const cur = state.count;
  switch(action.type){
    case PLUS:
      return {...state, count:cur+1};
    case MINUS:
      return {...state, count:cur-1};
    default:
      return state;
  }
}

const counterStore =  createStore(CounterReducer);
const onChange = ()=>{
  console.log(counterStore);
  number.innerText = counterStore.getState().count;
}

counterStore.subscribe(onChange);

add.addEventListener('click',()=>counterStore.dispatch({type:PLUS}));
minus.addEventListener('click',()=>counterStore.dispatch({type:MINUS}));