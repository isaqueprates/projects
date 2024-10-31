import "./articles.css";

export default function Articles() {
    return (
        <div className="articles">
            <div className="content">
                <h1 className="title">Conheça melhor a <a href="http://localhost:3000/">Lacrei Saude</a></h1>
                <p>Clique em um dos botôes e sera redirecionado para o site principal da lacrei saude</p>
            </div>

            <div className="container-cards">
                <div className="card">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti fugit quasi cumque ad voluptates, quibusdam aperiam blanditiis laboriosam debitis harum quod eveniet! Expedita qui deleniti officiis ipsam minima et illum.
                    </p>
                    <button>Abrir site</button>
                </div>
                <div className="card">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique blanditiis nesciunt hic nisi itaque libero a iusto doloribus voluptates. Eum voluptate nobis ex architecto harum repellendus, sint blanditiis ipsam quam.
                    </p>
                    <button>Abrir site</button>
                </div>
            </div>
        </div>
    );
}