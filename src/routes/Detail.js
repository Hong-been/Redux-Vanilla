import React from 'react'
import { useParams } from 'react-router-dom';

const Detail = () => {
  const id = useParams().id;
  return (
    <>
    <h1>Detail</h1>
    <div>id: {id}</div>
    </>
  )
}

export default Detail;
