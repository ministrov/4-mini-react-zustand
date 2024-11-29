import { Button } from 'antd';
import { CoffeeCategory } from '../../types/coffeeTypes';
import { setParams, useCoffeeStore } from '../../model/coffeeStore';
import { useShallow } from 'zustand/react/shallow';
import styles from './CategoryPicker.module.css';

function CategoryPicker() {
    const [params] = useCoffeeStore(useShallow((state) => [state.params]));
    return (
        <div className={styles['category-picker']}>
            {Object.keys(CoffeeCategory).map((key) => (
                <Button
                    key={key}
                    danger={params.type === key}
                    onClick={() => {
                        setParams({
                            type: CoffeeCategory[key as keyof typeof CoffeeCategory]
                        });
                    }}
                >
                    {key}
                </Button>
            ))}
        </div>
    )
}

export default CategoryPicker