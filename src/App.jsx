import { Routes, Route } from "react-router-dom";
import Products from "./pages/Productos";
import Products_men from "./pages/Products_men";
import Products_woman from "./pages/Products_woman";
import Footer from "./pages/Footer";
import './App.css'

function App() {
  return (
    <>
    <Routes>
        {/* Ruta Padre */}
      <Route path="/Products" element={<Products/>}>
        
          {/* Rutas Hijas (Anidadas) */}
        <Route path="Products_men" element={<Products_men />} />
        <Route path="Products_woman" element={<Products_woman />} />

        <Route index element={<div className="category">Selecciona una categoría</div>} />
      </Route>
    </Routes>
    <Footer>
    </Footer>
    </>
  );
}

export default App
