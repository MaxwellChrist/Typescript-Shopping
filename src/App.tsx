import { useState } from 'react'
import { useQuery } from 'react-query'
import Item from './Item/Item'

// Material UI Stuff
import Drawer from '@mui/material/Drawer'
import LinearProgress from '@mui/material/LinearProgress'
import Grid from '@mui/material/Grid'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

// styled component stuff
import Wrapper from './App.styles'

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

const getProducts = async (): Promise<CartItemType[]> => 
  await(await fetch('http://fakestoreapi.com/products')).json()


function App() {
  const { data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts)
  
  const getTotalItems = () => null
  const handleAddToCart = (clickedItem: CartItemType) => null
  const handleRemoveFromCart = () => null

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong...</div>

  return (
    <div className="App">
      <Wrapper>
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