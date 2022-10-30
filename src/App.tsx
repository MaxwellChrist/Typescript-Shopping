import { useState } from 'react'
import { useQuery } from 'react-query'

// Material UI Stuff
import Drawer from '@mui/material/Drawer'
import LinearProgress from '@mui/material/LinearProgress'
import Grid from '@mui/material/Grid'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

// My Components
import Item from './Item/Item'
import Cart from './Cart/Cart'

// styled component stuff
import { Wrapper, StyledButton } from './App.styles'

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

const getProducts = async (): Promise<CartItemType[]> => {
  return await(await fetch('http://fakestoreapi.com/products')).json()
}

function App() {
  const [cartisOpen, setCartIsOpen] = useState(false)
  const [cartItems, setCartItems] = useState([] as CartItemType[])

  const { data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts)
  
  const getTotalItems = (items: CartItemType[]) => {
    return items.reduce((a: number, items) => a  + items.amount, 0)
  }
  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      const isItemInCart = prev.find(item => item.id === clickedItem.id)
      if (isItemInCart) {
        return prev.map(item => (
          item.id === clickedItem.id ? {...item, amount: item.amount + 1} : item
        ))
      }
      return [...prev, {...clickedItem, amount: 1}]
    })
  }
  const handleRemoveFromCart = () => null

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong...</div>

  return (
    <div className="App">
      <Wrapper>
        <Drawer anchor="right" open={cartisOpen} onClose={() => setCartIsOpen(false)}>
          <Cart cartItems={cartItems} addToCart={handleAddToCart} removeFromCart={handleRemoveFromCart} />
        </Drawer>
        <StyledButton onClick={() => setCartIsOpen(true)}>
          <Badge badgeContent={getTotalItems(cartItems)} color="error">
            <ShoppingCartIcon />
          </Badge>
        </StyledButton>
          <Grid container spacing={3}>
          {data?.map(item => (
            <Grid item key={item.id} xs={12} sm={4}>
              <Item item={item} handleAddToCart={handleAddToCart} />
            </Grid>
          ))}
          </Grid>
      </Wrapper>
    </div>
  );
}

export default App;