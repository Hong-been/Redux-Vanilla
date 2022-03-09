import React, {useRef, useState} from "react";
import { useSelector,useDispatch } from 'react-redux';
import {addTodo} from "../store";
import Todo from "../components/Todo"

const Home = () => {
  const dispatch = useDispatch();
  const todos = useSelector(store=>store);

	const [text, setText] = useState("");
	const inputRef = useRef();

	const handleChange = () => {
		const cur = inputRef.current?.value;
		setText(cur ? cur : text);
	};

  const handleSubmit = (e) =>{
    e.preventDefault();
    setText('');
    dispatch(addTodo(text));
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
          <Todo key={todo.id} id={todo.id} text={todo.text}></Todo>
        ))}
        </ul>
		</>
	);
};

export default Home;