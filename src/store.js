import {createStore} from "redux"; 
import {createAction, createReducer} from "@reduxjs/toolkit";

export const AddAction = createAction("add");
export const DeleteAction = createAction("delete");

const reducer = createReducer([],{
  [AddAction] : (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  [DeleteAction] : (state, action) => {
    return state.filter(toDo => toDo.id !== action.payload)
  },
})

const store = createStore(reducer);

export default store;