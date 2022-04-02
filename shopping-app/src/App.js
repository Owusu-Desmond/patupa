import React , { useState } from 'react';
import Nav from './Nav'
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
      return <span> The items</span>;
    case 'carts':
      return <span> The carts</span>;
    default:
  }
}
export default App;
