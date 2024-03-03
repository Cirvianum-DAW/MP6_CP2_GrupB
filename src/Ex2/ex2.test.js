// ex2.test.js
const {
  request,
  numeroLlibres,
  llibresPerGenere,
  dataPublicacioLlibre,
  autorAmbMesLlibres,
  autorLlibre,
  llibresPerAutor,
  llibresPerValoracio,
} = require('./ex2');

describe('Tests CP2 Grup B', () => {
  test('EX1: numeroLlibres function', async () => {
    const result = await numeroLlibres();
    expect(result).toBe(10); // Assuming your local db has 10 books
  });

  test('EX2: llibresPerGenere function', async () => {
    const genere = 'Ficció'; // replace with the genre you want to test
    const expectedBooks = [
      // replace with the expected books of the genre you're testing
      'Moby Dick',
      'Don Quixot',
      '1984',
      'La granja dels animals',
      'La Sombra del Viento',
      'El laberinto de los espíritus',
      'La plaça del Diamant',
      'Nada',
    ];

    const result = await llibresPerGenere(genere);
    expect(result).toEqual(expectedBooks);
  });

  test('EX3: dataPublicacioLlibre function', async () => {
    const titol = 'Moby Dick'; // replace with the book title you want to test
    const expectedDate = '18/10/1851'; // replace with the expected publication date

    const result = await dataPublicacioLlibre(titol);
    expect(result).toBe(expectedDate);
  });

  test('EX5: autorAmbMesLlibres function', async () => {
    const result = await autorAmbMesLlibres();
    expect(result).toEqual([
      'George Orwell',
      'Carlos Ruiz Zafón',
      'Joaquim Nadal i Farreras',
      'Mercè Rodoreda',
    ]); // Replace with the expected author with the most books
  });

  test('EX6: autorLlibre function', async () => {
    const titol = '1984'; // Replace with the book title you want to test
    const expectedAuthor = 'George Orwell'; // Replace with the expected author of the book
    const expectedRating = 3.5; // Replace with the expected average rating of the author's books

    const result = await autorLlibre(titol);
    expect(result).toEqual({
      autor: expectedAuthor,
      valoracioMitjana: expectedRating,
    });
  });

  test('EX7: llibresPerAutor function', async () => {
    const autor = 'Joaquim Nadal i Farreras'; // Replace with the author you want to test
    const expectedBooks = [
      // Replace with the expected books of the author you're testing
      "L'ombra de l'eunuc",
      'La rosa dels vents',
    ];

    const result = await llibresPerAutor(autor);
    expect(result).toEqual(expectedBooks);
  });

  test('EX8: llibresPerValoracio function', async () => {
    const valoracio = 2; // Replace with the rating you want to test
    const expectedBooks = [
      // Replace with the expected books with the given rating
      {
        titol: 'La granja dels animals',
        autor: 'George Orwell',
        valoracio: 2,
      },
      {
        titol: 'La plaça del Diamant',
        autor: 'Mercè Rodoreda',
        valoracio: 2,
      },
    ];

    const result = await llibresPerValoracio(valoracio);
    expect(result).toEqual(expectedBooks);
  });
});
