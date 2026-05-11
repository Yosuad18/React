function Footer() {
  return (
    <footer className="footer">
      
      <div className="footer-container">
        
        <div className="footer-section">
          <h3 className="footer-logo">TOP STYLE</h3>
          <p>La mejor moda para hombre y mujer en un solo lugar.</p>
        </div>

        <div className="footer-section">
          <h4>Contacto</h4>
          <ul>
            <p>📍 Calle Falsa 123, Popayán</p>
            <p>📞 +57 300 000 0000</p>
            <p>✉️ contacto@topstyle.com</p>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Síguenos</h4>
          <div className="social-links">
            <a href="#">Instagram       </a>
            <a href="#">Facebook        </a>
            <a href="#">Twitter         </a>
          </div>
        </div>
      </div> 

      <div className="footer-bottom">
        <p>&copy; 2026 Top Style Store - Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;