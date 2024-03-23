
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ProductDetail from './components/ProductDetail'
import ProductList from './components/ProductList'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProductList/>}/>
          <Route path='/:id' element={<ProductDetail/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
