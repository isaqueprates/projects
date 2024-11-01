"use client";
import "./articles.css";
import image from "../assets/imagens/person-professional.e0f3da65.png";
import image2 from "../assets/imagens/purpose-image.3e0752bb.png";
import React from "react";
import Link from "next/link";

export default function Articles() {

    return (
        <div className="articles">
            <div className="content">
                <h1 className="title">Conheça melhor a <a href="https://lacreisaude.com.br/" target="_blank">Lacrei Saúde</a></h1>
                <p>Clique em um dos botôes e sera redirecionado para o site principal da lacrei saúde</p>
            </div>

            <div className="container-cards">
                <div className="card">
                    <div className="content-card">
                        <img src={image.src} alt="" />
                        <h2>Profissionais da saúde</h2>
                        <p>
                        Buscamos profissionais da saúde qualificados que priorizam o bem-estar físico e mental de pessoas LGBTQIAPN+L G B T Q I A P N mais.
                        </p>
                    </div>
                    <a href="https://lacreisaude.com.br/">Conhecer</a>
                </div>
                <div className="card">
                    <div className="content-card">
                        <img src={image2.src} alt="" />
                        <h2>O que é a
                        Lacrei Saúde?</h2>
                        <p>O nosso papel é construir a conexão entre as pessoas da comunidadeLGBTQIAPN+L G B T Q I A P N maisque precisam de atendimento clínico com profissionais da saúde.
                        Tudo isso com segurança, inclusão e representatividade.
                        Surgimos da esperança de ter um atendimento clínico qualificado, seguro e empático para todas as pessoas.
                        </p>
                    </div>
                    <a href="https://lacreisaude.com.br/">Conhecer</a>
                </div>
            </div>
        </div>
    );
}
