import React from "react";
import Image from "../assets/imagens/logo.png";
import "./header.css";
import Link from "next/link";

export function Header() {
    return (
        <header className="container-header">
          <div className="logo mx-8"><img src={Image.src} alt="logo" /></div>
          <nav className="container-menu">
            <a className="iten-menu" href="http://localhost:3000/">Home</a>
            <a className="iten-menu" href="/about">About</a>
            <a className="iten-menu " href="/contact">Contact</a>
          </nav>
        </header>
    );
}