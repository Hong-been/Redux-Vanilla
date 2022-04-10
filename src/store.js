import {configureStore, createAction, createReducer,createSlice} from "@reduxjs/toolkit";

/*
const reducer = createReducer([],{
  [AddAction] : (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  [DeleteAction] : (state, action) => {
    return state.filter(toDo => toDo.id !== action.payload)
  },
})
*/
const ToDos = createSlice({
  name: 'ToDosReducer',
  initialState: [],
  reducers: {
    add:  (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove : (state, action) => {
      return state.filter(toDo => toDo.id !== action.payload)
    },
  }
})

const store = configureStore({reducer: ToDos.reducer});

export const {add, remove} = ToDos.actions;

export default store;