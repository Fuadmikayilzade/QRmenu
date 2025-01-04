import React from "react";
import "./Home.css";
import logo from "./images/logo.png";

const Home = () => {
  return (
    <div className="background">
      <div className="home">
        <header className="header">
          <a href="/">
            <img src={logo} alt="DigiMenu.az Logo" className="logo1" />
          </a>
          <h1 className="title">Rəqəmsal Menyunuza Xoş Gəlmisiniz!</h1>
        </header>
        <section className="services">
          <h2>Xidmətlərimiz</h2>
          <p>
            Restoran və kafelər üçün innovativ, sürətli və rahat menyu həlləri təqdim edirik. QR kodlarla istifadəsi asandır!
          </p>
          <a href="/contact" className="button">
            Bizimlə Əlaqə Saxlayın
          </a>
        </section>
        <footer className="footer">
          © 2025 DigiMenu.az. Bütün hüquqlar qorunur.
        </footer>
      </div>
    </div>
  );
};

export default Home;
