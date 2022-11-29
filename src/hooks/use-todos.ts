import { useLocalStorage } from '@rehooks/local-storage';
import { Todo } from '../test-data/test-todos';

export const useTodos = () => {
  const [todos, setTodos] = useLocalStorage<Todo[]>('todos', []);

  const addTodo = (title: string) => {
    const newId =
      todos.length > 0 ? Math.max(...todos.map((d) => d.id)) + 1 : 1;
    const newTodo = { title, completed: false, id: newId };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id: number) => {
    const newTodos = todos.filter((item) => item.id !== id);
    return setTodos(newTodos);
  };

  const toggleTodo = (id: number) => {
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

  const clearTodos = () => setTodos([]);

  return { addTodo, removeTodo, clearTodos, toggleTodo, todos };
};
