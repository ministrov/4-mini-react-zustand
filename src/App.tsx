import { useEffect } from 'react';
import { Card, Input, Button, Layout, Menu } from 'antd';
// import { SearchOutlined } from '@ant-design/icons';
// import { TodoType, useTodoStore } from './model/todoStore';
// import Card from 'antd/es/card';
import Meta from 'antd/es/card';
import { Rate, Tag } from 'antd';
import Logo from './components/logo/Logo';
import { CoffeeType, OrderItem } from './types/coffeeTypes';
// import { Button } from 'antd/es/radio';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useCoffeeStore } from './model/coffeeStore';
import './App.css';
import { useSearchStore } from './model/searchStore';
import SkeletonImage from './components/skeletonImage/SkeletonImage';
// import { useCounterStore } from './model/counterStore';
// import { TodoType, useTodoStore } from './model/todoStore';
// import { resetAllStoreStates } from './helpers/create';

const { Header, Content, Footer } = Layout;

const items = new Array(3).fill(null).map((_, index) => ({
  key: String(index + 1),
  label: `nav ${index + 1}`,
}));

function App() {
  // const { counter, increment, decrement } = useCounterStore();
  // const { todos, addTodo } = useTodoStore();
  const { coffeeList, getCoffeeList, addCoffeeToCart, cart, clearCart, orderCoffee, address, setAddress } = useCoffeeStore();
  const { text, setText } = useSearchStore();

  useEffect(() => {
    getCoffeeList();
  }, []);

  // const cart: OrderItem[] = [];

  return (
    <div className='main-page'>
      <Header style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '6px'
      }}>

        <Logo />
        <Menu
          theme={'dark'}
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <div className='wrapper'>
        <Content style={{ padding: '48px' }}>
          <Input className='wrapper__input' value={text} onChange={(e) => setText(e.target.value)} placeholder='Поиск' />

          <div className='wrapper__content'>
            <ul className='wrapper__list cards-list'>
              {coffeeList?.map((coffee: CoffeeType) => (
                <Card key={coffee.id}
                  cover={<SkeletonImage />}
                  className='cards-list__card'
                  actions={[<Button onClick={() => addCoffeeToCart(coffee)}>{coffee.price} <ShoppingCartOutlined /></Button>]}
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
              {cart && cart.length > 0
                ?
                <>
                  {cart.map((item: OrderItem) => (
                    <div key={item.id}>{item.name}</div>
                  ))}
                  <Input value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Адрес доставки' />
                  <Button onClick={orderCoffee} type='primary' disabled={!address}>Заказать</Button>
                  <Button onClick={clearCart}>Очистить корзину</Button>
                </> : <>Корзина пуста</>
              }
            </aside>
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
