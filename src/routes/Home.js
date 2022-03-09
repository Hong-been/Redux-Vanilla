import React, {useRef, useState} from "react";

export const Home = () => {
	const [text, setText] = useState("");
	const inputRef = useRef();

	const handleChange = () => {
		const cur = inputRef.current?.value;
		setText(cur ? cur : text);
	};

  const handleSubmit = (e) =>{
    e.preventDefault();
    setText('');
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
		</>
	);
};
