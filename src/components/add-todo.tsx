import { useState, FormEvent } from 'react';
import { useTodos } from '../hooks/useTodos';

export const AddTodo = () => {
  const { addTodo } = useTodos();

  const [title, setTitle] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setTitle('');
    addTodo({ title: title, completed: false, id: title });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          name="title"
          placeholder="Add a Todo"
          className="text-black rounded-sm px-2"
        ></input>
        <button type="submit" className="ml-2 rounded-full text-3xl p-2">
          +
        </button>
      </form>
    </div>
  );
};
