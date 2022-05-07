import React , { useState } from 'react';
import { items } from './static-data';
import Nav from './Nav'
import ItemPage from './ItemPage';
import CartPage from './CartPage';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('items');
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart(previous => {
     return [...previous, item];
    })
  }
  return (
    <div className='App'>
      <Nav
        activeTab = {activeTab}
        onTabChange = {setActiveTab}
      />
      <div>
        {summarizeCart(cart).length} items
      </div>
      <main className='App-content'>
        <Content tab={activeTab} onAddToCart={addToCart} cart={summarizeCart(cart)} />
      </main>
    </div>
  )
}
const summarizeCart = (cart) => {
  const groupItems = (cart) => cart.reduce((summary, item) => {
    summary[item.id] = summary[item.id] || {
      ...item,
      count : 0
    }
    summary[item.id].count++;
    return summary;
  },{})
  return Object.values(groupItems(cart));
}
const Content = ({cart,tab, onAddToCart}) =>{
  switch (tab) {
    case 'items':
      return <span> <ItemPage items={items} onAddToCart={onAddToCart}/></span>;
    case 'carts':
      return <span> <CartPage items={summarizeCart(cart)}/> </span>;
    default: 
  }
}
export default App;
