import {createStore} from "redux"; 

const ADD = "add";
const DELETE = "delete";

export const AddActionCreator = (payload)=>{
  return (
    {type:ADD,payload}
  )};

export const DeleteActionCreator = (payload)=>{
  return (
    {type:DELETE,payload}
  )};

  const reducer = (state = [], action) => {
    console.log("pre: ",state,action.type);
    switch (action.type) {
      case ADD:{
        const newState = [{ text: action.payload, id: Date.now() }, ...state];
        console.log("next: ",newState);
        return newState;
      }
      case DELETE:{
        const newState = state.filter(toDo => toDo.id !== action.payload);
        console.log("next: ",newState);
        return newState;
      }
      default:
        console.log("next: ",state);
        return state;
    }
  };

const store = createStore(reducer);

store.subscribe(()=>{

});

export default store;