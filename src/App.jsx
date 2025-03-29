import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from "react-router";



function App() {
  // const [count, setCount] = useState(0);
  
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}></Route>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}></Route>
          <Route path='/products/:productId' element={<ItemDetailContainer/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
