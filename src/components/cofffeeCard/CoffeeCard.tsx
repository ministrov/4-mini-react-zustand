import { Card, Button, Tag, Rate } from 'antd';
import Meta from 'antd/es/card/Meta';
import SkeletonImage from '../skeletonImage/SkeletonImage';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { CoffeeType } from '../../types/coffeeTypes';
import { useCoffeeStore } from '../../model/coffeeStore';

type CoffeeCardProps = {
    coffee: CoffeeType;
}

function CoffeeCard({ coffee }: CoffeeCardProps) {
    const { addCoffeeToCart } = useCoffeeStore();

    return (
        <Card
            cover={<SkeletonImage />}
            className='cards-list__card'
            actions={[<Button onClick={() => addCoffeeToCart(coffee)}>{coffee.price} <ShoppingCartOutlined /></Button>]}
        >
            <Meta title={coffee.name}></Meta>
            <Tag color='magenta' style={{ marginTop: '16px' }}>{coffee.type}</Tag>
            <div className="cards-list__description">{coffee.subTitle}</div>
            <Rate allowHalf defaultValue={coffee.rating} disabled />
        </Card>
    )
}

export default CoffeeCard;