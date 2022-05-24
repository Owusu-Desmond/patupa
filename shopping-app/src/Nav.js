import React from 'react';
import './App.css';

const Nav = ({activeTab,onTabChange}) => {
    const tabClass = (tabName) => {
        return `App-nav-item ${
                    (activeTab === tabName) ? 'selected' : ''
                }`;
        }
    return (
        <nav className='App-nav'>
            <ul>
                <li className={tabClass('home')}>
                    <button onClick={() => onTabChange('home')}>Home</button>
                </li>
                <li className={tabClass('items')}>
                    <button onClick={() => onTabChange('items')}>Items</button>
                </li>
                <li className={tabClass('carts')}>
                    <button onClick={() => onTabChange('carts')}>Carts</button>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;