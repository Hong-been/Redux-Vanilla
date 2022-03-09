import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../store';

const Todo = ({text,dispatchDelete}) => {
  const handleDelete = (e)=>{
    e.preventDefault();
    dispatchDelete();
  }

  return (
    <li>
      {text}<button onClick={handleDelete}>DEL</button>
    </li>
  )
}

function mapDispatchToProps(dispatch,props){
  return {
    dispatchDelete: () => dispatch(deleteTodo(props.id)),
  }
}

export default connect(null,mapDispatchToProps)(Todo)