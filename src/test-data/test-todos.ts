export type Todo = {
  completed: boolean;
  title: string;
  id: number;
};

export const testTodos: Todo[] = [
  { id: 1, title: 'Buy Groceries', completed: false },
  { id: 2, title: 'Plan Birthday Party', completed: false },
  { id: 3, title: 'Reconnect with Tuli', completed: true },
  { id: 4, title: 'Tend to the garden', completed: false },
  { id: 5, title: 'Send App requirements to Yennefer', completed: false },
];
