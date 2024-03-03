// si no te'n surts llegint les dades des de l'API, pots fer servir aquesta
// variable que conté les mateixes dades i que pots consultar a data.js

// 1. (1p) Mira d'implementar una funció `request()` genèrica per fer peticions
//    a la base de dades. Aquesta únicament ha de gestionar peticions GET i se
//    li ha de passar la part d'endpoint que es necessiti (llibres, autors...).
//    Aquesta funció ha de retornar una promesa amb les dades corresponents i és
//    la que hauries de fer servir al llarg de tots els exercicis. A cada
//    exercici, enviaràs únicament la part de la URL que manqui per completar la
//    petició.

async function request(endpoint) {
  const response = await fetch(`http://localhost:3000/${endpoint}`);
  return response.json();
}

// 2. (1p) **Nombre de llibres:** Implementa la funció `numeroLlibres()` que
//    retorni el nombre de llibres disponibles a la base de dades.

async function numeroLlibres() {
  const llibres = await request('llibres');
  return llibres.length;
}

// 3. (1p) **LLibres per gènere:** Implementa la funció
//    `llibresPerGenere(genere)` que, donat un gènere, retorni un array amb els
//    títols dels llibres d'aquest gènere.

async function llibresPerGenere(genere) {
  const llibres = await request('llibres');
  const llibresFiltrats = llibres.filter((llibre) => llibre.genere === genere);
  const titols = llibresFiltrats.map((llibre) => llibre.titol);
  return titols;
  // Altrament ho podem fer tot en una sola línia
  // return llibres.filter((llibre) => llibre.genere === genere).map((llibre) => llibre.titol);
}

// 4. (1p) **Data de publicació:** Implementa la funció
//    `dataPublicacioLlibre(titol)` que, donat un títol de llibre, retorni la
//    data de publicació en format `dd/mm/aaaa`.

async function dataPublicacioLlibre(titol) {
  const llibres = await request('llibres');
  // El mètode 'find' ens va molt bé perquè ens retorna el primer element que compleixi la condició
  const llibre = llibres.find((llibre) => llibre.titol === titol);
  // La data de publicació la tenim en format ex: "publicat: '1851-10-18'" i la voldríem en format "18/10/1851"
  // Una bona opció és fer servir el mètode 'split' per separar la data en un array de tres elements
  const dataPublicacio = llibre.publicat.split('-');
  // I després fer servir el mètode 'reverse' per invertir l'ordre de l'array
  return dataPublicacio.reverse().join('/');

  // També podem crear-nos una variable del tipus Date (https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date)
  // const data = new Date(llibre.publicat);
  // I després fer servir el literal de plantilla per retornar la data en el format que volem
  // Retornem el nom de l'autor
  // return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
}

// 5. (1p) **Autor amb més llibres:** Implementa la funció
//    `autorAmbMesLlibres()` que retorni el nom de l'autor amb més llibres
//    publicats.

// Per una banda tenim els llibres amb l'id de l'autor i per l'altra banda tenim els autors amb el seu id.
async function autorAmbMesLlibres() {
  const llibres = await request('llibres');
  const llibresPerAutor = {};
  llibres.forEach((llibre) => {
    if (llibresPerAutor[llibre.autorId]) {
      llibresPerAutor[llibre.autorId]++;
    } else {
      llibresPerAutor[llibre.autorId] = 1;
    }
  });

  let maxLlibres = 0;
  // Pot ser que ens trboem amb més d'un autor amb el mateix nombre de llibres,
  // per això guardem els id dels autors amb més llibres dins un array
  let idAutorsMesLlibres = [];
  // llibresPerAutor és un objecte amb els id dels autors com a clau i el nombre de llibres com a valor
  for (const idAutor in llibresPerAutor) {
    // comprovem si el nombre de llibres de l'autor actual és més gran que el nombre màxim de llibres
    if (llibresPerAutor[idAutor] > maxLlibres) {
      // si és així, actualitzem el nombre màxim de llibres i guardem l'id de l'autor
      maxLlibres = llibresPerAutor[idAutor];
      // Em genero un nou array amb l'id de l'autor amb més llibres
      idAutorsMesLlibres = [idAutor];
    } else if (llibresPerAutor[idAutor] === maxLlibres) {
      idAutorsMesLlibres.push(idAutor);
    }
  }
  //console.log(idAutorsMesLlibres);

  const autors = await request('autors');
  const autorsAmbMesLlibres = autors.filter((autor) =>
    idAutorsMesLlibres.includes(autor.id)
  );
  const nomsAutorsAmbMesLlibres = autorsAmbMesLlibres.map((autor) => autor.nom);
  return nomsAutorsAmbMesLlibres;
}

// 6. (2p) **Autor d'un llibre:** Implementa la funció `autorLlibre(titol)` que,
//    donat un títol de llibre, retorni el nom de l'autor d'aquest així com la
//    mitjana de valoració dels llibres d'aquest autor en forma d'objecte.
//    Exemple de retorn:

// ```javascript
// {
//   autor: 'Miguel de Cervantes',
//   valoracioMitjana: 4.5,
// }
// ```

// Primer de tot, busquem el llibre amb el títol que ens han passat per tal de trobar l'id de l'autor
// Un cop tenim l'id de l'autor, busquem tots els llibres d'aquest autor per tal de calcular la valoració mitjana
async function autorLlibre(titol) {
  const llibres = await request('llibres');
  // Busquem el llibre amb el títol que ens han passat
  const llibre = llibres.find((llibre) => llibre.titol === titol);
  // Un cop tenim l'id de l'autor, busquem tots els llibres d'aquest autor

  const autorLlibreId = llibre.autorId;

  // Primer de tot, busquem tots els llibres amb l'id de l'autor que hem trobat
  const llibresAutor = llibres.filter(
    (llibre) => llibre.autorId === autorLlibreId
  );

  //console.log(llibresAutor);

  // Un cop tenim tots els llibres de l'autor, podem calcular la valoració mitjana... moment ideal pel mètode 'reduce'!
  const valoracioMitjana =
    llibresAutor.reduce((acc, llibre) => acc + llibre.nota, 0) /
    llibresAutor.length;

  console.log(valoracioMitjana);

  // Un cop tenim la valoració mitjana, busquem el nom de l'autor
  const autors = await request('autors');

  const autor = autors.find((autor) => autor.id == autorLlibreId);

  // Retornem un objecte amb el nom de l'autor i la valoració mitjana
  return {
    autor: autor.nom,
    valoracioMitjana: valoracioMitjana,
  };
}

// 7. (1p) **Llibres per autor:** Implementa la funció `llibresPerAutor(autor)`
//    que, donat un autor, retorni un array amb els títols dels llibres d'aquest
//    autor.

async function llibresPerAutor(autor) {
  const llibres = await request('llibres');
  const autors = await request('autors');
  // Busquem l'autor amb el nom que ens han passat
  const autorTrobat = autors.find((element) => element.nom === autor);
  // Un cop tenim l'id de l'autor, busquem tots els llibres d'aquest autor
  const llibresAutor = llibres.filter(
    (llibre) => llibre.autorId == autorTrobat.id
  );
  // I retornem els títols d'aquests llibres
  return llibresAutor.map((llibre) => llibre.titol);
}

// 8. (2p) **Llibres per valoració:** Implementa la funció
//    `llibresPerValoracio(valoracio)` que, donada una valoració, retorni un
//    array d'objectes de cada llibre amb aquesta valoració. Aquest objecte ha de
//    tenir el títol del llibre, l'autor i la valoració. Ex:

// ```javascript
// [
//   {
//     titol: 'El Quijote',
//     autor: 'Miguel de Cervantes',
//     valoracio: 5,
//   },
//   {
//     titol: 'El Senyor dels Anells',
//     autor: 'J.R.R. Tolkien',
//     valoracio: 5,
//   },
// ];
// ```

async function llibresPerValoracio(valoracio) {
  const llibres = await request('llibres');
  const autors = await request('autors');
  // Busquem tots els llibres amb la valoració que ens han passat
  const llibresValoracio = llibres.filter(
    (llibre) => llibre.nota === valoracio
  );
  // I retornem un array d'objectes amb el títol, l'autor i la valoració de cada llibre
  return llibresValoracio.map((llibre) => {
    const autor = autors.find((autor) => autor.id == llibre.autorId);
    return {
      titol: llibre.titol,
      autor: autor.nom,
      valoracio: llibre.nota,
    };
  });
}

module.exports = {
  request,
  numeroLlibres,
  llibresPerGenere,
  dataPublicacioLlibre,
  autorAmbMesLlibres,
  autorLlibre,
  llibresPerAutor,
  llibresPerValoracio,
};
