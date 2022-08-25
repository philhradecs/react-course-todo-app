import { useLocalStorage } from '@rehooks/local-storage';
import { Todo } from '../test-data/test-todos';

export const useTodos = () => {
  const [todos, setTodos] = useLocalStorage<Todo[]>('todos', []);

  const addTodo = (todo: Todo) => setTodos([todo, ...todos]);
  const clearTodos = () => setTodos([]);

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
  };

  return { addTodo, clearTodos, toggleTodo, todos };
};
