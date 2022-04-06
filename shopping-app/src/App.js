import React , { useState } from 'react';
import { items } from './static-data';
import Nav from './Nav'
import ItemPage from './ItemPage';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('items');
  return (
    <div className='App'>
      <Nav
        activeTab = {activeTab}
        onTabChange = {setActiveTab}
      />
      <main className='App-content'>
        <Content tab={activeTab} />
      </main>
    </div>
  )
}

const Content = ({tab}) =>{
  switch (tab) {
    case 'items':
      return <span> <ItemPage items={items}/></span>;
    case 'carts':
      return <span> The carts</span>;
    default:
  }
}
export default App;
