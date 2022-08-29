// Instalar axios para hacer llamadas a servicios externos (una API por ejemplo)
import chalk from "chalk";

//Parte de código copiado de la documentación de axios
chalk.ansi256('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(function (response) {
    // handle success
    console.log("Success!!!")
    console.log('%c ERROR! ', 'background: #222; color: #41CFC9')
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log("Error!!!")
    console.log(error);
    console.log('%c ERROR! ', 'background: #222; color: #41CFC9')
  })  