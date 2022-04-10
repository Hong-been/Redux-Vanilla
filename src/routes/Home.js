import React, {useRef} from "react";
import { useSelector,useDispatch} from 'react-redux';
import {add} from "../store";
import Todo from "../components/Todo"

const Home = () => {
  const dispatch = useDispatch();
  const todos = useSelector(store=>store);
	const inputRef = useRef();

  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(add(inputRef.current.value));
		inputRef.current.value="";
  }

	return (
		<>
			<h1>Todo</h1>
			<form onSubmit={handleSubmit}>
				<input
					ref={inputRef}
					type="text"
					placeholder="Enter"
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