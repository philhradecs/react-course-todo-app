import { useTodos } from '../hooks/use-todos';
import { Todo } from '../test-data/test-todos';

type TodoProps = {
  todo: Todo;
};

export const TodoItem = ({ todo: { completed, title, id } }: TodoProps) => {
  const { toggleTodo, removeTodo } = useTodos();

  return (
    <li className="mb-3">
      <div className="flex items-center gap-2">
        <div
          onClick={() => toggleTodo(id)}
          className={`flex flex-1 items-center justify-between cursor-pointer border border-gray-700 px-4 py-2 rounded hover:border-gray-600 ${
            completed ? 'bg-green-900' : 'bg-slate-800'
          }`}
        >
          {title}
          {completed && <div>✓</div>}
        </div>
        <button onClick={() => removeTodo(id)}>✗</button>
      </div>
    </li>
  );
};
