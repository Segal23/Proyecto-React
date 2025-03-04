import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'


function App() {
  const [count, setCount] = useState(0);
  const itemText = 'Este sitio está actualmente en contrucción...';

  return (
    <>
      <Navbar/>
      <ItemListContainer itemListText={itemText}/>
    </>
  )
}

export default App
