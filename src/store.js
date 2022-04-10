import {createStore} from "redux"; 
import {createAction} from "@reduxjs/toolkit";

export const AddActionCreator = createAction("add");
export const DeleteActionCreator = createAction("delete");

  const reducer = (state = [], action) => {
    console.log("pre: ",state,action.type);
    switch (action.type) {
      case AddActionCreator.type:{
        const newState = [{ text: action.payload, id: Date.now() }, ...state];
        console.log("next: ",newState);
        return newState;
      }
      case DeleteActionCreator.type:{
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