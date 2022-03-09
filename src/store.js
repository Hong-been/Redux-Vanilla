import {createStore} from "redux"; 

const ADD = "add";
const DELETE = "delete";

export const addTodo = (payload)=>{
  return (
    {type:ADD,payload}
  )};

export const deleteTodo = (payload)=>{
  return (
    {type:DELETE,payload}
  )};

  const reducer = (state = [], action) => {
    switch (action.type) {
      case ADD:
        return [{ text: action.payload, id: Date.now() }, ...state];
      case DELETE:
        return state.filter(toDo => toDo !== action.payload);
      default:
        return state;
    }
  };

const store = createStore(reducer);

store.subscribe(()=>{

});

export default store;