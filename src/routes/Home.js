import React, {useRef, useState} from "react";
import { connect } from 'react-redux';
import {addTodo} from "../store";
import {Todo} from "../components/Todo"

const Home = ({todos,dispatchAdd}) => {
  console.log(todos);
	const [text, setText] = useState("");
	const inputRef = useRef();

	const handleChange = () => {
		const cur = inputRef.current?.value;
		setText(cur ? cur : text);
	};

  const handleSubmit = (e) =>{
    e.preventDefault();
    setText('');
    dispatchAdd(text);
  }

	return (
		<>
			<h1>Todo</h1>
			<form onSubmit={handleSubmit}>
				<input
					ref={inputRef}
					type="text"
					placeholder="Enter"
					value={text}
					onChange={handleChange}
				></input>
				<button type="submit">
					ADD
				</button>
			</form>
      <ul>
        {todos.map((todo)=>(
          <Todo key={todo.id} text={todo.text}></Todo>
        ))}
        </ul>
		</>
	);
};

function mapStateToProps(state, Props){
  console.log(state);
  return { todos: state }
}

function mapDispatchToProps(dispatch){
  return {
    dispatchAdd: text => dispatch(addTodo(text)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)