
import React from 'react';
import OrderProvider from './Component/Store/OrderProvider';
import './App.css';
import Order from './Component/Order/Order';
import Header from './Component/Layout/Header';

const App = ()  => {

  return (
    <OrderProvider>
    <Header />
    <Order />
  </OrderProvider>
);
    }
    export default App;