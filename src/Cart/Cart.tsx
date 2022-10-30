import CartItem from '../CartItem/CartItem'

// Styles
import { CartWrapper } from './Cart.styles'

// Types
import { CartItemType } from '../App'

type Props = {
    cartItems: CartItemType[]
    addToCart: (clickedItem: CartItemType) => void
    removeFromCart: (id: number) => void
}

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart}) => {
    return (
        <CartWrapper>
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? <p>No items in cart</p> : null}
            {cartItems.map(item => (
                <CartItem />
            ))}
        </CartWrapper>
    )
}

export default Cart