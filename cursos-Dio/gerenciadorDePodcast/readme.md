# Gerenciador de Podcast

Uma api para aplicativo estilo Netflix que organiza e separa os vídeos favoritos por categorias, permitindo fácil acesso e visualização de podcasts.

## Índice

- [Tecnologias Usadas](#tecnologias-usadas)
- [Instalação](#instalação)
- [Modelos e Trechos de Código](#modelos-e-trechos-de-código)
- [Uso](#uso)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Considerações](#considerações)

## Tecnologias Usadas

- **TypeScript**: Para desenvolvimento de aplicações robustas e escaláveis.
- **Node.js**: Ambiente de execução para o servidor.
- **Tsup**: Para empacotamento e build do código.
- **TSX**: Para execução e desenvolvimento do código TypeScript.

## Instalação

Instruções para instalar e configurar o projeto.

```bash
# Clonando o repositório
git clone https://github.com/seu-usuario/gerenciadordepodcast.git

# Navegando para o diretório do projeto
cd gerenciadordepodcast

# Instalando as dependências
npm install
```

## Modelos e Trechos de Código

    - Exemplo de Resposta da API
````JSON
    [
        {
            "canalName": "MORADA",
            "episode": "SÓ TU ÉS SANTO + MEDLEY - TOUR ADORE (AO VIVO) | MORADA",
            "urlImg": "https://i.ytimg.com/vi/2rpaccTwmio/maxresdefault.jpg",
            "link": "https://www.youtube.com/watch?v=2rpaccTwmio",
            "categories": "[]"
        },
        {
            "canalName": "Isadora Pompeo",
            "episode": "Isadora Pompeo - Ovelhinha (Ao Vivo)",
            "urlImg": "https://i.ytimg.com/vi/OEDQj7XucHg/maxresdefault.jpg",
            "link": "https://www.youtube.com/watch?v=OEDQj7XucHg",
            "categories": "[]"
        }
    ]
````

## Código do Servidor

````js
export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {
    const baseUrl = request.url?.split("?")[0];
    
    if (request.method === HttpMethod.GET && baseUrl === Routes.list) {
        await controllerPodcastList(request, response);
    }

    if (request.method === HttpMethod.GET && baseUrl === Routes.filter) {
        await controllerPodcastFilter(request, response);
    }
}

````

## Uso

  #### Para executar o aplicativo, utilize os seguintes comandos:

* Para desenvolvimento:

    ````bash
        npm run start:dev
    ````

* Para produção:

    ````bash
        npm run start:prod
    ````

## Contribuição

1. Fork o repositório.
2. Crie uma nova branch (git checkout -b feature/nome-da-feature).
3. Faça suas alterações e commit (git commit -m 'Adiciona uma nova feature').
4. Faça push para a branch (git push origin feature/nome-da-feature).
5. Abra um Pull Request.

## Licença

    Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para mais detalhes.

## Considerações

    Agradeço por visitar meu projeto! Se tiver dúvidas ou sugestões, não hesite em entrar em contato. Sua opinião é muito importante para mim!