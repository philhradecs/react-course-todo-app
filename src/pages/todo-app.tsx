import { AddTodo } from '../components/add-todo';
import { Layout } from '../components/layout';
import { TodoList } from '../components/todo-list';
import { useTodos } from '../hooks/use-todos';

export const TodoApp = () => {
  const { clearTodos } = useTodos();

  return (
    <Layout>
      <div className="flex items-center gap-6 ">
        <h1 className="text-3xl">Todo App</h1>
        <div
          onClick={clearTodos}
          className="text-sm text-gray-400 cursor-pointer"
        >
          clear Todos
        </div>
      </div>
      <div className="my-4">
        <AddTodo />
      </div>
      <TodoList />
    </Layout>
  );
};
