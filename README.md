### <div align="center">Escolha seu idioma | Choose your language </div>

<div align="center">

[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](https://github.com/edilan-ribeiro/fm-job-listings/blob/main/README.md) 
[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/edilan-ribeiro/fm-job-listings/blob/main/README.en.md)<br>
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

</div>
<br>
<a name="readme-top"></a>

<br />
<div align="center">
  <a href="https://github.com/edilan-ribeiro/fm-job-listings">
    <img src="./public/images/readme/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Job listings with filtering</h3>

  <p align="center">
    Desafio do FrontEnd Mentor de uma página para listagem de vagas
  </p>
  
  <a href="https://fm-job-listings-one.vercel.app/">View Demo</a>
</div>

<br>

<details>
  <summary>Índice</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o projeto</a>
      <ul>
        <li><a href="#feito-com">Feito com</a></li>
        <li><a href="#notas-de-destaque">Notas de destaque</a></li>
        <li><a href="#desafios-e-aprendizados">Desafios e aprendizados</a></li>
        </ul>
    </li>
    <li><a href="#utilização">Utilização</a></li>
    <li><a href="#contato">Contato</a></li>
  </ol>
</details>

<br><br>
## Sobre o projeto

 <img src="./public/images/readme/desktop.gif" alt="gif do projeto no desktop" width="400" height="250">


<br>Esse projeto permite o usuário obter informações sobre vagas de emprego e também filtrar elas de forma simples e rápida!

<img src="./public/images/readme/mobile.gif" alt="gif do projeto no celular" width="150" height="330">


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Feito com

<div align="center">

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%2320232a.svg?style=for-the-badge&logo=javascript)
![HTML5](https://img.shields.io/badge/HTML5%20-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS%20-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Notas de destaque

O projeto é bem minimalista no design, mas exige um pouco de planejamento na lógica de filtragem 👷‍♂️ 


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Desafios e aprendizados

🧑‍🎤 1..2...3...Testando, Composition pattern.
A composição de padrões no React oferece flexibilidade e reutilização de código, permitindo a construção de componentes complexos combinando componentes menores, essa abordagem promove uma estrutura modular tornando o projeto mais escalável.

🤹🏼 Falando um pouco do filtro, primeiro ele junta os dados de tech stack (posição, senioridade, linguagens e ferramentas), depois ele aplica duas condições:

1- verificando se o array de itens selecionados esta vazio ele repassa um novo array com todos os itens do arquivo de dados

2- caso o array de itens selecionados não esteja vazio, ele compara quais arrays de tech stack possuem itens que também estão presentes no array de selecionados, estando ambos de acordo e possuindo a mesma quantidade de sub arrays é gerado o novo array com os itens filtrados 🧙


Em resumo foi possível aprender e praticar:
 - Aprender React composition pattern
 - Aprender um pouco sobre React Framer para uma pequena animação 
 - Praticar mais o Sass

 <p align="right">(<a href="#readme-top">back to top</a>)</p>

## Utilização

Após clonar, baixar ou fazer um fork, utilize o comando abaixo para instalar as dependências do projeto:

```shell
npm install
```

Esse projeto te permite:
- Ler as vagas (🤷)
- Filtrar vagas por:
      
      - posição (frontend, fullstack, backend)
      - senioridade (junior, midweight, senior)
      - linguagens (HTML,CSS,Javascript, Python, Ruby, )
      - ferramentas (React, Sass, RoR, Vue, Django)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contato

💌 Para me mandar uma mensagem basta usar um dos botões abaixo!<br>

  <a href = "mailto:edilanbusiness@gmail.com" target="_blank"><img src="https://img.shields.io/badge/-gmail-333333?style=flat&logo=gmail&logoColor=EA4335" height="25"></a>
  <a href="https://www.linkedin.com/in/edilan-ribeiro-santos" target="_blank"><img src="https://img.shields.io/badge/-linkedin-333333?style=flat&logo=linkedin&logoColor=0A66C2" height="25"></a> 
  <a href="https://whatsa.me/5561983769634/?t=Ol%C3%A1,%20vim%20atrav%C3%A9s%20do%20seu%20GitHub!" target="_blank">
  <img src="https://img.shields.io/badge/-whatsapp-333333?style=flat&logo=whatsapp&logoColor=25D366" height="25"></a>



<p align="right">(<a href="#readme-top">back to top</a>)</p>
