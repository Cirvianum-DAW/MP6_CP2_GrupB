**UF4 - Asincronia a JS**

Tens la següent funció asíncrona que es gestiona mitjançant callbacks:

```javascript
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
```

1. Comenta: Per què aquesta funció és asíncrona? Què és el que fa que ho sigui?
2. Modifica la funció `descarregarDadesPromise` per tal que **retorni una PROMISE** enlloc de gestionar-se mitjançant callbacks. La promesa haurà de resoldre, com en el cas del callback, amb les "dades descarregades" i es farà el `resolve` després de 2 segons tal com ho fa ara el `setTimeout`. Compte! Aqui hauràs de cridar a la teva funció per descarregar dades i **fer servir `then` per gestionar la promesa** i mostrar les dades per consola.
3. Finalment implementa una funció `obtenirDadesAsyn()` que cridi a la funció anterior`descarregarDadesPromise` però gestioni la recepció de dades amb `async` i `await` enlloc de `then`. La funció haurà de mostrar i retornar `dades`

Per tal de provar el teu codi pots fer servir el navegador o Node.js. Si fas servir Node.js, recorda que has d'executar el teu codi amb la comanda `node nomFitxer.js`.
