import logo from './logo.svg';
import './App.css';
import pgimg from './images/restaurant.jpg'

function App() {
  return (
    <div className="App">
      <div className="navegacion">
          <h4 className="nav-h4">Inicio</h4>
          <h4 className="nav-h4">Menus</h4>
          <h4 className="nav-h4">Contacto</h4>
          <h4 className="nav-h4">Trabaja con nosotros</h4>
      </div>

        <div>
          <header className="encabezado">Restaurante Austral</header>
        
        </div>
        <div className="presentacion" >
          <h2 className="h2">Nuestros Productos</h2>
        <div className="presentacion2">
          <div class="card">
            <div class="card-body">
            <img src={pgimg} className="imagen1" alt="...."/>
              <h5 class="card-title">Card title</h5>
              <p className="parrafo"> Este restaurante esta pensando para un menú universitario.
              <br/>Te ofrecemos los diferentes tipos de menú,
                    rápidos y deliciosos:
              </p>
            <ul>
                       <li>Sadnwich</li>
                       <li>Empanadas</li>
                       <li>Carlitos</li>
                       <li>Pizzas</li>
                       <li>Bebidas frescas</li>
                       <li>Cafeteria</li>
                       <li>Licuados</li>
            </ul>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
         
          </div>
          <div class="card">
            <div class="card-body">
            <img src={pgimg} className="imagen1" alt="...."/>
              <h5 class="card-title">Card title</h5>
              <p className="parrafo"> Este restaurante esta pensando para un menú universitario.
              <br/>Te ofrecemos los diferentes tipos de menú,
                    rápidos y deliciosos:
              </p>
            <ul>
                       <li>Sadnwich</li>
                       <li>Empanadas</li>
                       <li>Carlitos</li>
                       <li>Pizzas</li>
                       <li>Bebidas frescas</li>
                       <li>Cafeteria</li>
                       <li>Licuados</li>
            </ul>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
         
          </div>
          <div class="card">
            <div class="card-body">
            <img src={pgimg} className="imagen1" alt="...."/>
              <h5 class="card-title">Card title</h5>
              <p className="parrafo"> Este restaurante esta pensando para un menú universitario.
              <br/>Te ofrecemos los diferentes tipos de menú,
                    rápidos y deliciosos:
              </p>
            <ul>
                       <li>Sadnwich</li>
                       <li>Empanadas</li>
                       <li>Carlitos</li>
                       <li>Pizzas</li>
                       <li>Bebidas frescas</li>
                       <li>Cafeteria</li>
                       <li>Licuados</li>
            </ul>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
         
          </div>
        </div>

    </div>
  </div>


  );
}

export default App;
