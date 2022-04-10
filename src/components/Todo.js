import React from 'react';
import { useDispatch } from 'react-redux';
import {DeleteActionCreator} from "../store";
import {Link} from "react-router-dom";

const Todo = ({id,text}) => {
  const dispatch = useDispatch();

  const handleDelete = (e)=>{
    e.preventDefault();
    dispatch(DeleteActionCreator(id));
  }

  return (
    <Link to={`/${id}`}>
      <li>
        {text}<button onClick={handleDelete}>DEL</button>
      </li>
    </Link>
  )
}

export default Todo;