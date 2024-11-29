import { useEffect } from 'react';
import { Input, Layout } from 'antd';
// import { SearchOutlined } from '@ant-design/icons';
// import { TodoType, useTodoStore } from './model/todoStore';
// import Card from 'antd/es/card';
import CoffeeCard from './components/cofffeeCard/CoffeeCard';
import Cart from './components/cart/Cart';
import { CoffeeType } from './types/coffeeTypes';
// import { Button } from 'antd/es/radio';
import { useCoffeeStore } from './model/coffeeStore';
import './App.css';
// import { useSearchStore } from './model/searchStore';
import { useUrlStorage } from './hooks/use-url-storage';
import MainHeader from './components/mainHeader/MainHeader';
// import { useCounterStore } from './model/counterStore';
// import { TodoType, useTodoStore } from './model/todoStore';
// import { resetAllStoreStates } from './helpers/create';

const { Content, Footer } = Layout;

function App() {
  // const { counter, increment, decrement } = useCounterStore();
  // const { todos, addTodo } = useTodoStore();
  const { coffeeList, getCoffeeList, params, setParams } = useCoffeeStore();
  // const { text, setText } = useSearchStore();

  useEffect(() => {
    getCoffeeList(params);
  }, []);

  useUrlStorage(params as any, setParams);

  // const cart: OrderItem[] = [];

  return (
    <div className='main-page'>
      <MainHeader />
      <div className='wrapper'>
        <Content style={{ padding: '48px' }}>
          <Input className='wrapper__input' value={params.text} onChange={(e) => setParams({ text: e.target.value })} placeholder='Поиск' />

          <div className='wrapper__content'>
            <ul className='wrapper__list cards-list'>
              {coffeeList?.map((coffee: CoffeeType) => (
                <CoffeeCard key={coffee.id} coffee={coffee} />
              ))}
            </ul>

            <Cart />
          </div>
        </Content>
      </div>
      <Footer style={{ textAlign: 'center', borderRadius: '6px' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </div>
  )
}

export default App
