import Button from '@mui/material/Button';

// Types
import { CartItemType } from '../App';

// Styles
import ItemWrapper from './Item.styles';

type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void
}

const Item: React.FC<Props> = ({item, handleAddToCart }) => (
    <ItemWrapper>
        <img src={item.image} alt={item.title} />
        <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h3>${item.price}</h3>
        </div>
        <Button onClick={() => handleAddToCart(item)}></Button>
    </ItemWrapper>
)

export default Item