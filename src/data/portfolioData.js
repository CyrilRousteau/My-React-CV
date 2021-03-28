import React from 'react';
import img1 from "../assets/images/ofig-panier-CSS.png";
import img2 from "../assets/images/dice-game-JS.png";
import img3 from "../assets/images/oblog-JS.png";
import img4 from '../assets/images/TodoList-React.png';
import img5 from "../assets/images/foodswap-react.png";
import img6 from "../assets/images/foodswap-responsive.png";
import img7 from "../assets/images/cv-cyril.png";

export const portfolioData = [
  {
    id:1,
    name:`O\'Fig`,
    languages:['html', 'css'],
    languagesIcons:['fab fa-html5','fab fa-css3-alt'],
    source:'',
    info:`O'Fig est les des premiers projets de découverte du html et CSS, l'objectif étant de réaliser une intégration en utilisant flexbox, les balises sémantiques et les class CSS.`,
    picture:img1,
  },
  {
    id:2,
    name:'Jeux de dé aléatoire',
    languages:['html', 'css','javascript'],
    languagesIcons:['fab fa-html5','fab fa-css3-alt','fab fa-js'],
    source:'',
    info:`Dice-Roller est un jeu de dé qui permet de travailler sur les premières fonctionnalitées en javascript (tirer un nombre aléatoire) ou encore ajouter un paramètre afin de récupérer l'identité du joueur.
    Nous y verrons entre autre la manière de gérer des sprites en CSS`,
    picture:img2,
  },
  {
    id:3,
    name:`O'Blog`,
    languages:['html', 'css','node.js', 'express','ejs'],
    languagesIcons:['fab fa-html5','fab fa-css3-alt', 'fab fa-node'],
    source:'',
    info:`Dans ce  projet, nous mettrons en place un serveur avec npm, ejs et express. L'intégration des chemins d'accès dans les url et la récupération de données dans des datas en dur.
    Nous commencerons à déstructurer les fonctions liées aux routes dans un module différent afin de mieux organiser notre code.`,
    picture:img3,
  },
  {
    id:4,
    name:'Todo List',
    languages:['css','javascript', 'node.js','react'],
    languagesIcons:['fab fa-css3-alt', 'fab fa-js', 'fab fa-node','fab fa-react'],
    source:'',
    info:`Création d'une to list en React avec l'intégration des states et des champs contrôlés.`,
    picture:img4,
  },
  {
    id:5,
    name:'FoodSwap',
    languages:['css','javascript','react', 'node.js'],
    languagesIcons:['fab fa-css3-alt', 'fab fa-js','fab fa-react', 'fab fa-node'],
    source:'',
    info:`Projet de fin de formation. Méthode CRUD sur 4 sprint avec une équipe formée de 2 développeurs back et 3 développeurs front.
    Site internet FoodSwap qui consiste à proposer et partager des plats réalisés à domicile avec ses voisins ou amis.
    La base de donnée est gérée avec PostgreSQL, le back avec Node.js et l'hébergement avec AWS. React côté front sans utlisation de CMS.
    Le MVP est respecté et le projet est présenté en live sur Youtube.`,
    picture:img5,
  },
  {
    id:6,
    name:'FoodSwap Responsive',
    languages:['css','javascript','react', 'node.js        '],
    languagesIcons:['fab fa-css3-alt', 'fab fa-js','fab fa-react', 'fab fa-node'],
    source:'',
    info:`Le projet FoodSwap en responsive`,
    picture:img6,
  },
  {
    id:7,
    name:'Mon C-V',
    languages:['css','javascript','react'],
    languagesIcons:['fab fa-css3-alt','fab fa-js','fab fa-react'],
    source:'',
    info:`Ce curriculum vitae est entièrement fait en React`,
    picture:img7,
  }
  
]




