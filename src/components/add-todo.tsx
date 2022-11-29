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
    <div className="flex items-center gap-2">
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        name="title"
        placeholder="Add a Todo"
        className="text-black rounded-sm px-2"
      ></input>
      <div>
        <button onClick={handleAddTodo} className="text-3xl">
          +
        </button>
      </div>
    </div>
  );
};
