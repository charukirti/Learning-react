import { useDispatch } from 'react-redux';
import Button from '../../ui/Button'
import { decreseItemQuantity, increaseItemQuantity } from './CartSlice';
export default function UpdateItemQuantity({ pizzaId, currentQuantity }) {
    const dispatch = useDispatch()
    return (
        <div className='flex gap-1 items-center md:gap-3'>
            <Button type="round" onClick={() => dispatch(decreseItemQuantity(pizzaId))}>-</Button>
            <span className='text-sm font-medium'>{currentQuantity}</span>
            <Button type="round" onClick={() => dispatch(increaseItemQuantity(pizzaId))}>+</Button>
        </div>
    )
}

