// src/HomePage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <a href="#" className="logo">
          <img src="https://www.ine.mx/assets/images/portal-ine.svg" alt="Logo Votaciones" />
          <h2 className="nombre empresa">Blockchain</h2>
        </a>
        <nav>
          <a href="#" className="nav-link">Inicio</a>
          <a href="#" className="nav-link">Votar</a>
          <button className="nav-button">Conectar</button>
        </nav>
      </header>
      <section id="inicio">
        <div className="inicio-content">
          <img src="https://www.ine.mx/assets/images/vota_logo.svg" alt="Imagen de inicio" className="inicio-img" />
          <h1 className="inicio-title">Bienvenido a Blockchain Voting</h1>
          <h2 className="inicio-subtitle">Tu plataforma segura para votaciones</h2>
          <button className="inicio-button" onClick={() => navigate('/votacion')}>¡VOTA YA!</button>
        </div>
      </section>
      <section className="seccion-nueva">
        <h2 className="titulo-seccion">Cargos a elegir</h2>
        <div className="contenedor-numeros">
          <div className="numero-contenedor">
            <div className="numero">1</div>
            <div className="texto-numero">Presidente de la republica</div>
          </div>
          <div className="numero-contenedor">
            <div className="numero">2</div>
            <div className="texto-numero">Senaduria</div>
          </div>
          <div className="numero-contenedor">
            <div className="numero">3</div>
            <div className="texto-numero">Diputaciones Feberales</div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <ul className="social-icon">
          <li className="icon-elem">
            <a href="#" className="icon">
              <ion-icon name="logo-youtube"></ion-icon>
            </a>
          </li>
          <li className="icon-elem">
            <a href="#" className="icon">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
          <li className="icon-elem">
            <a href="#" className="icon">
              <ion-icon name="logo-whatsapp"></ion-icon>
            </a>
          </li>
          <li className="icon-elem">
            <a href="#" className="icon">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>
        </ul>
        <ul className="menu">
          <li className="menu-elem">
            <a href="#" className="menu-icon">Equipo</a>
          </li>
          <li className="menu-elem">
            <a href="#" className="menu-icon">Contacto</a>
          </li>
          <li className="menu-elem">
            <a href="#" className="menu-icon">Sobre Nosotros</a>
          </li>
        </ul>
        <p className="text">@2024 Votación Descentralizada México. Todos los derechos reservados.</p>
      </footer>
      <script
        type="module"
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
      ></script>
    </div>
  );
}

export default HomePage;
