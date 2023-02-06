import React, {useState} from 'react';
import {Todo, TodoContext} from './src/contexts/TodoContext';
import {Homepage} from './src/pages/Homepage';

function App(): JSX.Element {
  const [value, setValue] = useState<string>('');
  const [toDoList, setTodoList] = useState<Todo[]>([]);
  const [error, setError] = useState<Boolean>(false);
  return (
    <TodoContext.Provider
      value={{
        value,
        setValue,
        toDoList,
        setTodoList,
        error,
        setError,
      }}>
      <Homepage />
    </TodoContext.Provider>
  );
}

export default App;
