import React, { useState, useEffect } from 'react';

const Memo = () => {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const addTodo = () => {
    setTodos([...todos, 'New todo']);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.length > 5) {
      setTodos([...todos, text]);
      setText('');
    }
  };

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <h1>Memo</h1>
      <button onClick={addTodo}>Add Todo</button>
      <button onClick={incrementCount}>Increment Count: {count}</button>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleTextChange} />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default Memo;
