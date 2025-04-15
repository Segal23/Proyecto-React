import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/CartContainer/CartContainer';
import { BrowserRouter, Routes, Route } from "react-router";
import OrderPurchase from './components/OrderPurchase/OrderPurchase';


function App() {
  
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}></Route>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}></Route>
          <Route path='/products/:productId' element={<ItemDetailContainer/>}></Route>
          <Route path='/cart' element={<CartContainer/>}></Route>
          <Route path='/purchase' element={<OrderPurchase/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
