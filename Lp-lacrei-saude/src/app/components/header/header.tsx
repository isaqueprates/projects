
import React from "react";
import Image from "../../assets/imagens/logo.png";
import "./header.css";

export function Header() {
    return (
        <header className="container-header">
          <div className="logo"><img src={Image.src} alt="logo" /></div>
          <nav className="container-menu">
            <a className="iten-menu" href="http://localhost:3000/">Home</a>
            <a className="iten-menu" href="/about">About</a>
          </nav>
        </header>
    );
}