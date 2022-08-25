import { useTodos } from '../hooks/useTodos';
import { TodoItem } from './todo-item';

export const TodoList = () => {
  const { todos } = useTodos();

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
