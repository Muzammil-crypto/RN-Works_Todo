import {createContext} from 'react';

export interface Todo {
  text: string;
  completed: boolean;
}

interface TodoContextType {
  value: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  toDoList: Todo[];
  setTodoList?: React.Dispatch<React.SetStateAction<Todo[]>>;
  error: Boolean;
  setError?: React.Dispatch<React.SetStateAction<Boolean>>;
}
export const TodoContext = createContext<TodoContextType>({
  value: '',
  toDoList: [],
  error: false,
});
