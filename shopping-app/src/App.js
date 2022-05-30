import React , { useState } from 'react';
import { items } from './static-data';
import Nav from './Nav'
import HomePage from './HomePage';
import ItemPage from './ItemPage';
import CartPage from './CartPage';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart(previous => {
     return [...previous, item];
    })
    console.log(cart);
  }
  const removeItem = (item) => {
    let itemIndex = cart.findIndex(i => i.id === item.id);
    if (itemIndex >= 0) {
      console.log(200);
        setCart(cart => {
          const cartCopy = [...cart];
          cartCopy.splice(itemIndex,1);
          return cartCopy;
        }
      );
    };

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
        <Content tab={activeTab} onAddToCart={addToCart} onRemoveItem={removeItem} cart={summarizeCart(cart)} />
      </main>
    </div>
  )
}
// summarize cart to ignore already added items
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
// switch app content to components
const Content = ({cart,tab, onAddToCart , onRemoveItem}) =>{
  switch (tab) {
    case 'items':
      return <span> <ItemPage items={items} onAddToCart={onAddToCart}/></span>;
    case 'carts':
      return <span> <CartPage items={cart} onRemoveOne={onRemoveItem} onAddOne={onAddToCart}/> </span>;
    case 'home':
      return <span> <HomePage /></span>
    default: 
  }
}
export default App;
