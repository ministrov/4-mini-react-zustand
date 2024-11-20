import { useState } from 'react';
import { Card, Checkbox, Input, Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { TodoType, useTodoStore } from './model/todoStore';
import './App.css'

function App() {
  const { todos, addTodo, changeIsComplete } = useTodoStore();
  const [value, setValue] = useState<string>('');
  const [status, setStatus] = useState<"" | "error" | "warning" | undefined>('');


  const addTodoItem = () => {
    if (value === '') {
      setStatus('error');
      return;
    }

    if (value.length < 3) {
      setStatus('warning');
      return;
    }

    if (value) {
      setStatus('');
    }
    addTodo(value);
    setValue('');
  }

  return (
    <div className='wrapper'>
      <div className='wrapper__header'>
        <Input
          style={{ width: '350px' }}
          onChange={(e) => setValue(e.target.value)}
          placeholder='Введите значение'
          value={value}
          status={status}
          required
        />
        <Tooltip title="search">
          <Button shape="circle" icon={<SearchOutlined />} onClick={addTodoItem} />
        </Tooltip>
      </div>

      <ul className='wrapper__list'>
        {todos.length > 0 && todos.map((todo: TodoType, index: number) => (
          <Card key={todo.id} className='card'>
            <Checkbox checked={todo.isCompleted} onChange={() => changeIsComplete(index)} />
            <span>{todo.title}</span>
          </Card>
        ))}

        {todos.length === 0 && <p>Нужно ввести название таски</p>}
      </ul>
    </div>
  )
}

export default App
