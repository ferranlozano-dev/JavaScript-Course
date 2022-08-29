// Instalar axios para hacer llamadas a servicios externos (una API por ejemplo)
import axios from "axios"

//Parte de código copiado de la documentación de axios
axios.get('https://pokeapi.co/api/v2/pokemon/ditto')

  .then(function (response) {
    // handle success
    console.log("Success!!!")
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log("Error!!!")
    console.log(error);
  })  