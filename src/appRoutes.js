import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import App from './App';
import MenuMakanan from '../src/Pages/MenuMakanan';
import MenuMinuman from '../src/Pages/MenuMinuman';
import Kontak from '../src/Pages/Kontak';

const AppRoutes = () => {
  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/menu_makanan" element={<MenuMakanan />} />
        <Route path="/menu_minuman" element={<MenuMinuman />} />
        <Route path="/kontak" element={<Kontak />} />
    </Routes>
    </div>
    </Router>
  )
}

export default AppRoutes;
