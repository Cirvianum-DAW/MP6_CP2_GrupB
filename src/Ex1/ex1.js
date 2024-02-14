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
