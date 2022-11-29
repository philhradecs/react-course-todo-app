import { useState } from 'react';
import { useTodos } from '../hooks/use-todos';

export const AddTodo = () => {
  const { addTodo } = useTodos();

  const [title, setTitle] = useState('');

  const handleAddTodo = () => {
    setTitle('');
    addTodo(title);
  };

  return (
    <div>
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        name="title"
        placeholder="Add a Todo"
        className="text-black rounded-sm px-2"
      ></input>
      <button
        onClick={handleAddTodo}
        className="ml-2 rounded-full text-3xl p-2"
      >
        +
      </button>
    </div>
  );
};
