function descarregarDades(callback) {
  setTimeout(() => {
    const dades = 'Dades descarregades';
    callback(null, dades);
  }, 2000);
}

descarregarDades((error, dades) => {
  if (error) {
    console.error('Error descarregant dades:', error);
  } else {
    console.log(dades);
  }
});

// Per provar el codi amb Node, al terminal (si estàs a l'arrel del projecte) executa: node src/UF1/exUF1.js

// Comença a escriure les teves respostes aqui:

// 1. Comenta: Per què aquesta funció és asíncrona? Què és el que fa que ho
//    sigui?

// Aquesta funció és asíncrona bàsicament perquè té una funció `setTimeout` que
// forma part de les web APIs de JavaScript. Aquesta funció `setTimeout` fa que
// el codi que hi ha dins d'ella s'executi després d'un temps determinat, però
// no bloqueja l'execució del codi que hi ha després d'ella. Això fa que el codi
// sigui asíncron.

// 2. Modifica la funció `descarregarDadesPromise` per tal que **retorni una
//    PROMISE** enlloc de gestionar-se mitjançant callbacks. La promesa haurà de
//    resoldre, com en el cas del callback, amb les "dades descarregades" i es
//    farà el `resolve` després de 2 segons tal com ho fa ara el `setTimeout`.
//    Compte! Aqui hauràs de cridar a la teva funció per descarregar dades i
//    **fer servir `then` per gestionar la promesa** i mostrar les dades per
//    consola.

function descarregarDadesPromise() {
  // En el cas de la promesa, podem gesitonar directament el resolve i el reject sense fer-h al callback
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dades = 'Dades descarregades';
      const error = null; // Fem que "error" sigui null per simular que no hi ha hagut cap error
      // const error = 'Error descarregant dades'; // Descomenta aquesta línia per simular un error
      if (error) {
        reject(error);
      } else {
        resolve(dades);
      }
    }, 2000);
  });
}

descarregarDadesPromise()
  .then((dades) => {
    console.log(dades);
  })
  .catch((error) => {
    console.error('Error descarregant dades:', error);
  });

// 3. Finalment implementa una funció `obtenirDadesAsyn()` que cridi a la funció
//    anterior`descarregarDadesPromise` però gestioni la recepció de dades amb
//    `async` i `await` enlloc de `then`. La funció haurà de mostrar i retornar
//    `dades`

async function obtenirDadesAsyn() {
  // La funció que genera la promesa és la mateixa, només canvia com gestionem la recepció de les dades!!!
  try {
    const dades = await descarregarDadesPromise();
    console.log(dades);
    return dades;
  } catch (error) {
    console.error('Error descarregant dades:', error);
  }
}

obtenirDadesAsyn();
