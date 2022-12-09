import Unburied from "./assets/images/unburied.png";
import Weather from "./assets/images/Weather.png";
import Notes from "./assets/images/Notes.png";
import Work from "./assets/images/Work.png";
import Tutorial from "./assets/images/Tutorial.png";
import Jate from "./assets/images/Jate.png";
import Read from "./assets/images/Read.png";

export default [
  {
    id: 1,
    name: "Unburied: Museum Cataloger",
    image: Unburied,
    github: "https://github.com/PierTwo/unburied-museum-cataloger",
    deploy: "https://piertwo.github.io/unburied-museum-cataloger/",
    technical:
      "Skills used: Javascript, HTML, CSS, Third-party APIs for the Met museum and Art Insititute of Chicago, Jquery, Materialize, Git",
    description:
      "Helps you search the collections of two different museum APIs based on your search parameters and displays the results in an image carousel. When clicking on the image you'll be taken to the museum's website of the specfic piece. Your search history will be displayed in the saved searches.",
  },
  {
    id: 2,
    name: "HTML Tutorial",
    image: Tutorial,
    github: "https://github.com/PierTwo/HTML-For-Beginners",
    deploy: "https://lit-bayou-05963.herokuapp.com/",
    technical:
      "Skills used: This was my final project of the coding course, so we used most of our collected knowledge but also implementing skills with React, MongoDB back-end/Mongoose, GraphQL/Node/Express, Code Mirror, and Apollo, ",
    description:
      "Fully Mern-stacked application for teaching users basic html skills. After creating an account and logging in, the user can view a tutorial, expalining html skills and will also get to use a code editor and see their code being run in an iframe on the page. At the end is a quiz to see if you've retained the knowledge. The app tracks the progress you've made in the tutorial and will know if you've finished it. At it's current state, more tutorials could be added eventually for other languages like Javascript.",
  },
  {
    id: 3,
    name: "Weather Dashboard",
    image: Weather,
    github: "https://github.com/nuglah/ryan-weather-dashboard",
    deploy: "https://nuglah.github.io/ryan-weather-dashboard/",
    technical:
      "Skills used: Furthered my understanding of APIs, CSS framework Bootstrap, Jquery, Moment.js",
    description:
      "Simple weather app that uses the Open weather API and displays information for the prompted location for the currrent weather and a five day forecast. Saves your search history for ease of use.",
  },
  {
    id: 4,
    name: "Memorize",
    image: Notes,
    github: "https://github.com/nhastings1/project-2-flashdata",
    deploy: "https://nameless-hamlet-43462.herokuapp.com/",
    technical:
      "Skills used: MySQL/Sequelize, Node, Express, Bulma, Heroku, Handlebars",
    description:
      "The application lets you make collections of flashcards for studying or memorization. You can make as many collections as you want and add a flashcard to any of them and when viewing a collection you'll get a shuffled view of them with a button ot reveal the answer.",
  },
  {
    id: 5,
    name: "Read Me Generator",
    image: Read,
    github: "https://github.com/nuglah/ryan-green-readme-generator",
    deploy: "",
    technical: "Skills used: Node, Javascript, Inquirer",
    description:
      "A command line application using the inquirer package to quickily generate a read me file from simple responses. It was good practice using node.js and implementing javascript knowledge in the various node features and practice with writefile, appendfile, and require.",
  },
  {
    id: 7,
    name: "JATE",
    image: Jate,
    github: "https://github.com/nuglah/week19-text-editor",
    deploy: "https://gentle-fortress-86670.herokuapp.com/",
    technical:
      "Skills used: IndexedDB, Webpack, Babel, Service Workers, App Manifests",
    description:
      "An in-browser text editor that will format your text like a text editor would. Data will persist when you leave the page and will install as an app when you click the install button and can be used offline.",
  },
];
