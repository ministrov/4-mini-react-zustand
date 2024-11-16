import { useState } from 'react';
import { TodoState } from './model/todoStore'
import { Card, Checkbox, Input, Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
// import { getTen } from './helpers/addTen';
// import { useCounterStore } from './model/counterStore'
import './App.css'

function App() {
  const [todos, setTodos] = useState<TodoState[] | []>([]);
  const [value, setValue] = useState<string>('');
  // const todos: TodoState[] = [];
  // const { counter, increment, decrement } = useCounterStore();

  const addTodo = () => {
    if (todos.length === 0) {
      setTodos((prevState) => [...prevState, { id: Math.trunc((Math.random() * 10) + 1), title: value, isCompleted: true }]);
    } else {
      // setTodos([item]);
    }
  }

  return (
    <div className='wrapper'>
      <div className='wrapper__header'>
        <Input style={{ width: '350px' }} onChange={(e) => setValue(e.target.value)} placeholder='Введите значение' value={value} required />
        <Tooltip title="search">
          <Button shape="circle" icon={<SearchOutlined />} onClick={addTodo}/>
        </Tooltip>
      </div>
      {/* <button onClick={increment}>+</button>
      <span>{counter}</span>
      <button onClick={decrement}>-</button>
      <button onClick={getTen}>add 10</button> */}
      <ul className='wrapper__list'>
        {todos.length > 0 && todos.map((todo: TodoState) => (
          <Card key={todo.id} className='card'>
            <Checkbox checked={todo.isCompleted} />
            <span>{todo.title}</span>
          </Card>
        ))}

        {todos.length === 0 && <p>Нужно ввести название таски</p>}
      </ul>
    </div>
  )
}

export default App
