const {
  mitjanaEdat,
  estudiantsMatriculats,
  estudiantsGenere,
  dataInscripcio,
  notaMitjana,
  notesFinals,
  mitjanaCurs,
  estudiantsAprovatsCurs,
  estudiantTop,
  ufPendents,
} = require('../src/UF2/exUF2');

describe("Tests per a les funcions de gestió d'estudiants", () => {
  test("1. Calcula la mitjana d'edat dels estudiants", () => {
    expect(mitjanaEdat()).toBe('19.3');
  });

  test("2. Retorna el nombre d'estudiants matriculats", () => {
    expect(estudiantsMatriculats()).toBe(9);
  });

  test('3. Retorna els estudiants del gènere Dona', () => {
    const resultat = estudiantsGenere('Dona');
    const esperat = [
      { nom: 'Laura', cognoms: 'Fernández Torres' },
      { nom: 'Carla', cognoms: 'Gómez Martí' },
      { nom: 'Clara', cognoms: 'Sánchez López' },
      { nom: 'Marta', cognoms: 'Gómez Serra' },
      { nom: 'Elena', cognoms: 'López Fernández' },
    ];
    expect(resultat).toEqual(esperat);
  });

  test("4. Retorna la data d'inscripció de l'estudiant Joan Martinez Perez", () => {
    expect(dataInscripcio('Marc', 'García López')).toBe('17/9/2023');
  });

  test("5. Calcula la nota mitjana de l'estudiant Joan Martinez Perez", () => {
    expect(notaMitjana('Sánchez López', 'DAW-MP6')).toBe('7.3');
  });

  test('6. Calcula la nota mitjana del curs MP6', () => {
    expect(mitjanaCurs('DAW-MP6')).toBe('7.3');
  });

  test("7. Retorna l'array de notes finals", () => {
    const notesDAW = [
      {
        estudiant: 'Pau García Pérez',
        notesFinals: [
          { curs: 'DAW-MP6', notaFinal: '8.2' },
          { curs: 'DAW-MP7', notaFinal: '6.5' },
        ],
      },
      {
        estudiant: 'Marc García López',
        notesFinals: [
          { curs: 'DAW-MP6', notaFinal: '4.4' },
          { curs: 'DAW-MP7', notaFinal: '5.7' },
        ],
      },
      {
        estudiant: 'Laura Fernández Torres',
        notesFinals: [
          { curs: 'DAW-MP6', notaFinal: '8.7' },
          { curs: 'DAW-MP7', notaFinal: '5.6' },
        ],
      },
      {
        estudiant: 'Alex Rodríguez Pérez',
        notesFinals: [
          { curs: 'DAW-MP6', notaFinal: '6.5' },
          { curs: 'DAW-MP7', notaFinal: '6.7' },
        ],
      },
      {
        estudiant: 'Carla Gómez Martí',
        notesFinals: [
          { curs: 'DAW-MP6', notaFinal: '6.4' },
          { curs: 'DAW-MP7', notaFinal: '7.9' },
        ],
      },
      {
        estudiant: 'Eduard Fernández Serra',
        notesFinals: [
          { curs: 'DAW-MP6', notaFinal: '9.3' },
          { curs: 'DAW-MP7', notaFinal: '8.4' },
        ],
      },
      {
        estudiant: 'Clara Sánchez López',
        notesFinals: [
          { curs: 'DAW-MP6', notaFinal: '7.3' },
          { curs: 'DAW-MP7', notaFinal: '6.7' },
        ],
      },
      {
        estudiant: 'Marta Gómez Serra',
        notesFinals: [
          { curs: 'DAW-MP6', notaFinal: '8.1' },
          { curs: 'DAW-MP7', notaFinal: '7.7' },
        ],
      },
      {
        estudiant: 'Elena López Fernández',
        notesFinals: [
          { curs: 'DAW-MP6', notaFinal: '7.1' },
          { curs: 'DAW-MP7', notaFinal: '6.8' },
        ],
      },
    ];
    expect(notesFinals()).toEqual(notesDAW);
  });

  test('8. Retorna els estudiants aprovats al curs MP6', () => {
    const estudiantsAprovatsMP6 = [
      { nom: 'Pau', cognoms: 'García Pérez' },
      { nom: 'Laura', cognoms: 'Fernández Torres' },
      { nom: 'Eduard', cognoms: 'Fernández Serra' },
      { nom: 'Clara', cognoms: 'Sánchez López' },
      { nom: 'Marta', cognoms: 'Gómez Serra' },
      { nom: 'Elena', cognoms: 'López Fernández' },
    ];
    expect(estudiantsAprovatsCurs('DAW-MP6')).toEqual(estudiantsAprovatsMP6);
  });

  test("9. Troba l'estudiant amb la nota més alta per un curs determinat", () => {
    const estudiant = {
      cognoms: 'Fernández Serra',
      nom: 'Eduard',
      nota: '9.3',
    };
    expect(estudiantTop('DAW-MP6')).toEqual(estudiant);
  });

  test('10. Filtra i mostra els estudiants que han aprovat tots els cursos', () => {
    const pendents = [
      {
        nom: 'Marc',
        cognoms: 'García López',
        UFs_Pendents: [
          ['UF1', 4.2],
          ['UF2', 3.5],
          ['UF4', 2.1],
        ],
      },
      {
        nom: 'Alex',
        cognoms: 'Rodríguez Pérez',
        UFs_Pendents: [['UF2', 4.5]],
      },
      {
        nom: 'Carla',
        cognoms: 'Gómez Martí',
        UFs_Pendents: [['UF1', 4.8]],
      },
    ];
    expect(ufPendents('DAW-MP6')).toEqual(pendents);
  });
});
