# Projeto de Site sobre Lanchas

Este projeto é um site responsivo desenvolvido com React e Bootstrap, com foco na exibição de informações sobre lanchas, incluindo uma simulação de dados utilizando JSON. O projeto também incorpora animações usando a biblioteca AOS (Animate On Scroll) para tornar a navegação mais interativa.

## Tecnologias Utilizadas

- **React**: Framework JavaScript para construção de interfaces de usuário.
- **Vite**: Ferramenta de build e bundler para projetos em React, proporcionando uma configuração mais rápida e eficiente.
- **Bootstrap**: Biblioteca de componentes de interface para criar um layout responsivo e elegante.
- **AOS (Animate On Scroll)**: Biblioteca de animação para adicionar efeitos enquanto o usuário rola a página.
- **Axios**: Biblioteca para fazer requisições HTTP, usada para buscar dados simulados no formato JSON.

## Funcionalidades

- **Exibição de Lanchas**: O site exibe informações sobre diferentes modelos de lanchas, com detalhes como especificações técnicas, imagens e preço.
- **Simulação de Dados JSON**: As informações das lanchas são carregadas a partir de um arquivo JSON, simulando dados dinâmicos de uma API.
- **Animações ao Rolamento**: Ao rolar a página, animações aparecem graças à integração com a biblioteca AOS, oferecendo uma experiência mais fluida e interativa.

## Como Iniciar o Projeto

### Pré-requisitos

- Node.js
- npm ou yarn

### Passos para rodar o projeto

1. Clone o repositório:
   ```bash
git clone https://github.com/JorgeCasalini/Lanchas-Hulk.git
````
2. Acesse a pasta do projeto:
```bash
cd Site Lancha
```
3.Instale as dependências:

```bash
npm install
```
4.Inicie o servidor de desenvolvimento:

```bash
npm run dev
```
5.Abra o navegador e acesse:

```bash
http://localhost:3000
```
## Dificuldades Enfrentadas

Durante o desenvolvimento do projeto, enfrentei alguns desafios, como:

- **Integração com Axios e JSON**: Inicialmente, houve dificuldades em configurar as requisições corretamente para carregar o arquivo JSON. A resolução veio ao testar as diferentes configurações de caminhos e garantir que o JSON fosse bem estruturado.
  
- **Configuração do Vite**: Embora o Vite tenha simplificado o processo de desenvolvimento, houve a necessidade de ajustar algumas configurações para trabalhar de maneira eficiente com o React e as animações AOS.
  
- **Responsividade com Bootstrap**: Um dos maiores desafios foi garantir que o layout ficasse bem ajustado em dispositivos de diferentes tamanhos. O uso de componentes do Bootstrap ajudou, mas alguns ajustes de CSS personalizados foram necessários.

## Conclusão

Este projeto ajudou a aprimorar minhas habilidades em React, integração com bibliotecas como Axios e AOS, e a utilização do Vite como bundler. Apesar dos desafios, o resultado final é um site funcional e interativo, com um layout responsivo e animações que melhoram a experiência do usuário.


