import "./footer.css";

export default function Footer() {
    return (
        <footer className="footer">
        
            <div className="container-footer">
                <div className="footer-column">
                    <p>Quero deixar claro que este projeto foi desenvolvido apenas para fins educativos.
                        As imagens dos profissionais da lacrei saúde foram usadas apenas para fins de estudo, nâo podem ser usadas para fins comerciais ficando restritido o direito de uso a nâo ser que a lacrei saude autorize.
                    </p>
                </div>
                <div className="footer-column"> <a href="https://lacreisaude.com.br/" target="_blank" rel="noopener noreferrer">connheça a lacrei saúde site oficial Aqui</a>.
                        obrigado por utilizar minha aplicação. me segue nas minhas redes sociais.
                        <a href="https://github.com/isaqueprates" target="_blank" rel="noopener noreferrer">Github</a>
                        <a href="https://www.linkedin.com/in/isaqueprates/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                </div>
                <div className="footer-column">
                    <a href="https://lacreisaude.com.br/seguranca-e-privacidade/" target="_blank" rel="noopener noreferrer">Seguranca e privacidade</a>
                    <a href="https://lacreisaude.com.br/termos-de-uso/" target="_blank" rel="noopener noreferrer"> Termos de uso</a>
                    <a href="https://paciente.lacreisaude.com.br/" target="_blank" rel="noopener noreferrer"> Buscar Atendimento</a>
                    <a href="https://lacreisaude.com.br/quem-somos/" target="_blank" rel="noopener noreferrer">Quem Somos </a>
                </div>
            </div>

            <h4>Created by Isaque Prates</h4>
            
        </footer>
    );
  }