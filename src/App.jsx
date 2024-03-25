import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import PageNotFound from './pages/PageNotFound'
import { AuthProvider } from './context/AuthContext'
import Cart from './pages/Cart';
import AddCartProduct from './pages/AddCartProduct';

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
              <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/addCartProduct' element={<AddCartProduct />}/>
                <Route path='*' element={<PageNotFound />} />
              </Routes>
          </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
