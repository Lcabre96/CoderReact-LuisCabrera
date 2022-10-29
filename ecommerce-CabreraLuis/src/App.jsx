import {useState} from 'react'
import NavBar from './components/Menu/NavBar'
import ItemListContainer from './components/ItemContainer/ItemListContainer'


function App() {
  
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={'Ecommerce'} />
    </div>
  )
}

export default App
