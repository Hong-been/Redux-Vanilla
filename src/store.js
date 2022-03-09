import {createStore} from "redux"; 

const ADD = "add";
const DELETE = "delete";

const addTodo = (payload)=>{
  return (
    {type:ADD,payload}
  )};

const deleteTodo = (payload)=>{
  return (
    {type:DELETE,payload}
  )};

  const reducer = (state = [], action) => {
    switch (action.type) {
      case ADD:
        return [{ text: action.payload.text, id: Date.now() }, ...state];
      case DELETE:
        return state.filter(toDo => toDo !== action.payload.id);
      default:
        return state;
    }
  };

const store = createStore(reducer);

store.subscribe(()=>{

});

export default store;