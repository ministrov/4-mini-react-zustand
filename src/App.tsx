// import { useState } from 'react';
// import { Card, Checkbox, Input, Button, Tooltip } from 'antd';
// import { SearchOutlined } from '@ant-design/icons';
// import { TodoType, useTodoStore } from './model/todoStore';
import Card from 'antd/es/card';
import Meta from 'antd/es/card';
import { Rate, Tag } from 'antd';
import { CoffeeType } from './types/coffeeTypes';
import './App.css';
import { Button } from 'antd/es/radio';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useCoffeeStore } from './model/coffeeStore';
import { useEffect } from 'react';

function App() {
  const { coffeeList, getCoffeeList } = useCoffeeStore();

  useEffect(() => {
    getCoffeeList();
  }, []);
  // const coffeeList: CoffeeType[] | undefined = [];
  // const { todos, addTodo, changeIsComplete } = useTodoStore();
  // const [value, setValue] = useState<string>('');
  // const [status, setStatus] = useState<"" | "error" | "warning" | undefined>('');


  // const addTodoItem = () => {
  //   if (value === '') {
  //     setStatus('error');
  //     return;
  //   }

  //   if (value.length < 3) {
  //     setStatus('warning');
  //     return;
  //   }

  //   if (value) {
  //     setStatus('');
  //   }
  //   addTodo(value);
  //   setValue('');
  // }

  return (
    <div className='wrapper'>
      <ul className='wrapper__list cards-list'>
        {coffeeList?.map((coffee: CoffeeType) => (
          <Card key={coffee.id}
            cover={<img src={coffee.image}
              alt={coffee.name} />}
            className='cards-list__card'
            actions={[<Button>{coffee.price} <ShoppingCartOutlined /></Button>]}
          >
            <Meta title={coffee.name}></Meta>
            <Tag color='magenta' style={{ marginTop: '16px' }}>{coffee.type}</Tag>
            <div className="cards-list__description">{coffee.subTitle}</div>
            <Rate allowHalf defaultValue={coffee.rating} disabled />
          </Card>
        ))}
      </ul>
      {/* <div className='wrapper__header'>
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
      </ul> */}
    </div>
  )
}

export default App
