import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const todos = useSelector(store => store);
  const id = useParams().id;
  return (
    <>
    <h1>Detail</h1>
    <div>{todos.filter(todo => todo.id==id).map(todo=>todo.text)}</div>
    </>
  )
}

export default Detail;
