import NavBar from './components/Menu/NavBar'
import ItemListContainer from './components/ItemContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';



function App() {
  
  return (
    <BrowserRouter className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={'Ecommerce'} />} />
        <Route path='/categoria/:categoriaId' element={<ItemListContainer greeting={'Ecommerce'} />} />
        <Route path='/detail/:productId' element={<ItemDetailContainer />} />

        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
