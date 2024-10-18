# Gerenciador de videos favoritos estilo netFlix

### Descrição
    Um app estilo netflix que separe por categoria os videos que gosto.

### Dominio
    videos

### features
- Lista podcast por categorias
    - nomes
    - favoritos
    - assistidos
    - criadores


## Como Fazer

    - Lista podcast por categorias

   #### Como implementar

    vou retornar uma api rest com: nome do canal, nome do episodio, imagem da capa, link do video

    ``` js
    [
        {
            canalName: "MORADA",
            episode: "SÓ TU ÉS SANTO + MEDLEY - TOUR ADORE (AO VIVO) | MORADA",
            urlImg: "https://i.ytimg.com/vi/2rpaccTwmio/maxresdefault.jpg",
            link:"https://www.youtube.com/watch?v=2rpaccTwmio",
            categories:"[]"
        },
        {
            canalName: "Isadora Pompeo",
            episode: "Isadora Pompeo - Ovelhinha (Ao Vivo)",
            urlImg: "https://i.ytimg.com/vi/OEDQj7XucHg/maxresdefault.jpg",
            link:"https://www.youtube.com/watch?v=OEDQj7XucHg",
            categories:"[]"
        },
    ]

    ``` 

* Observações

    o "Fs" serve para ler e escrever arquivos 
    o "path" serve para localizar diretorios