import  { Outlet, Link } from "react-router-dom";
import "./Productos.css"
import "./Products_men.css"
import "./Products_women.css"

function Productos () {
  return (
    <div>
      <header>
        <h1>Productos</h1>
        <Outlet /> 
      </header>
      <nav>
        <Link to="Products_men" className="hombre_title">Productos para hombre    </Link>
        <Link to="Products_woman" className="mujer_title">Productos para mujer   </Link>   
        <Link to="home" className="home_title">home   </Link> 
      </nav>
    </div>
  );
}

export default Productos
