
import image1 from '../assets/imagens/privacy-security-doctor2.fbf30b4b.png';
import './about.css';

export default  function About() {
    return (
      <div >
        <main >
          <div className="about">
            <div className="card">
              <img src={image1.src} alt="imagen de uma medica" />
              <div className="card-text">
                <h2>Privacidade na Lacrei Saúde</h2>
                <p>A sua segurança é nossa prioridade. Por esse motivo você pode acessar ou modificar seus dados cadastrados a qualquer momento em nossa plataforma.</p>
                <p>Protegemos os dados das pessoas que utilizam nossa plataforma. Trabalhamos com transparência aos titulares, de acordo com a Lei Geral de Proteção de Dados Pessoais (LGPD).</p>
              </div>
            </div>
          </div>
        </main> 
      </div>
    );
  }