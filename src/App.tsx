import { useState } from 'react'
import { useQuery } from 'react-query'

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
  console.log(data)

  return (
    <div className="App">
      Beginning
    </div>
  );
}

export default App;