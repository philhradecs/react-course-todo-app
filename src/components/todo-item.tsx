import { useTodos } from '../hooks/use-todos';
import { Todo } from '../test-data/test-todos';

type TodoProps = {
  todo: Todo;
};

export const TodoItem = ({ todo: { completed, title, id } }: TodoProps) => {
  const { toggleTodo } = useTodos();

  return (
    <li>
      <div
        onClick={() => toggleTodo(id)}
        className={`flex items-center justify-between cursor-pointer border border-gray-700 mb-4 px-4 py-2 rounded x hover:border-gray-600 ${
          completed ? 'bg-green-900' : 'bg-slate-800'
        }`}
      >
        {title}
        {completed && <div>✓</div>}
      </div>
    </li>
  );
};
