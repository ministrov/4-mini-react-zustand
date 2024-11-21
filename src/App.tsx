import { useState, useEffect } from 'react';
import { Card, Input, Button } from 'antd';
// import { SearchOutlined } from '@ant-design/icons';
// import { TodoType, useTodoStore } from './model/todoStore';
// import Card from 'antd/es/card';
import Meta from 'antd/es/card';
import { Rate, Tag } from 'antd';
import { CoffeeType, OrderItem } from './types/coffeeTypes';
// import { Button } from 'antd/es/radio';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useCoffeeStore } from './model/coffeeStore';
import './App.css';
// import { useCounterStore } from './model/counterStore';
// import { TodoType, useTodoStore } from './model/todoStore';
// import { resetAllStoreStates } from './helpers/create';

function App() {
  // const { counter, increment, decrement } = useCounterStore();
  // const { todos, addTodo } = useTodoStore();
  const { coffeeList, getCoffeeList } = useCoffeeStore();
  const [textValue, setTextValue] = useState<string | undefined>('');

  const handleSearch = (value: string) => {
    getCoffeeList({ text: value });
    setTextValue(value);
  };

  useEffect(() => {
    getCoffeeList();
  }, []);

  const cart: OrderItem[] = [];

  return (
    <div className='wrapper'>
      <Input value={textValue} onChange={(e) => handleSearch(e.target.value)} placeholder='Поиск' />

      <div className='wrapper__content'>
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

        <aside className='cart'>
          <h2>Заказ</h2>
          {cart && cart.length > 0 ? <>
            {cart.map((item: OrderItem) => (
              <div key={item.id}>{item.name}</div>
            ))}
            <Input placeholder='Адрес доставки' />
            <Button type='primary'>Заказать</Button>
            <Button>Очистить корзину</Button>
          </> : <>Корзина пуста</>}
        </aside>
      </div>
    </div>
  )
}

export default App
