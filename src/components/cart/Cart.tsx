import { Button, Input } from "antd";
import { useCoffeeStore } from "../../model/coffeeStore"
import { OrderItem } from "../../types/coffeeTypes";


function Cart() {
    const { cart, address, setAddress, clearCart, orderCoffee } = useCoffeeStore();
    return (
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
    )
}

export default Cart