import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Categories from './pages/Categories'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories/:id" element={<Categories />} />
  </Routes>
)

export default Rotas
