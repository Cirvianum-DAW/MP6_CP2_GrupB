# Llibres a dojo!

Ens han demant que gestionem una base de dades per un club de lectura. Es vol mirar de dur un registre d'alguna de les informacions més rellevants com ho son el títol del llibre, l'autor i informació sobre aquest, el gènere, el nombre de pàgines i la valoració del llibre...

Tenim la base de dades disponible per poder-la provar a través de JSON Server. Aquest ja s'hauria d'haver instal·lat quan has fet Per això, pots executar la comanda `npm run start` per aixecar el servidor i poder fer les peticions corresponents.

Pots consultar tu mateix l'arxius JSON per veure les dades disponibles. Els endpoints que es generen sota la url local **http://localhost:3000/** son els següents. Ens limitarem a fer peticions GET per aquest exercici:

### Llibres

- GET /llibres: Obté una llista de tots els llibres.
- GET /llibres/{id}: Obté un llibre específic per ID.

### Autors

- GET /autors: Obté una llista de tots els autors.
- GET /autors/{id}: Obté un autor específic per ID.

Implementa les següents funcions per a poder gestionar la base de dades del club de lectura:

0. La qualitat dels comentaris així com el codi (no únicament la funcionalitat) es valoraran de cara a obtenir el màxim de puntuació.

1. (1p) Mira d'implementar una funció `request()` genèrica per fer peticions a la base de dades. Aquesta únicament ha de gestionar peticions GET i se li ha de passar la part d'endpoint que es necessiti (llibres, autors...). Aquesta funció ha de retornar una promesa amb les dades corresponents i és la que hauries de fer servir al llarg de tots els exercicis. A cada exercici, enviaràs únicament la part de la URL que manqui per completar la petició.

2. (1p) **Nombre de llibres:** Implementa la funció `numeroLlibres()` que retorni el nombre de llibres disponibles a la base de dades.

3. (1p) **LLibres per gènere:** Implementa la funció `llibresPerGenere(genere)` que, donat un gènere, retorni un array amb els títols dels llibres d'aquest gènere.

4. (1p) **Data de publicació:** Implementa la funció `dataPublicacioLlibre(titol)` que, donat un títol de llibre, retorni la data de publicació en format `dd/mm/aaaa`.

5. (1p) **Autor amb més llibres:** Implementa la funció `autorAmbMesLlibres()` que retorni el nom de l'autor amb més llibres publicats.

6. (2p) **Autor d'un llibre:** Implementa la funció `autorLlibre(titol)` que, donat un títol de llibre, retorni el nom de l'autor d'aquest així com la mitjana de valoració dels llibres d'aquest autor en forma d'objecte. Exemple de retorn:

```javascript
{
  autor: 'Miguel de Cervantes',
  valoracioMitjana: 4.5,
}
```

7. (1p) **Llibres per autor:** Implementa la funció `llibresPerAutor(autor)` que, donat un autor, retorni un array amb els títols dels llibres d'aquest autor.

8. (2p) **Llibres per valoració:** Implementa la funció `llibresPerValoracio(valoracio)` que, donada una valoració, retorni un array d'objectes cada llibre amb aquesta valoració. Aquest objecte ha de tenir el títol del llibre, l'autor i la valoració. Ex:

```javascript
[
  {
    titol: 'El Quijote',
    autor: 'Miguel de Cervantes',
    valoracio: 5,
  },
  {
    titol: 'El Senyor dels Anells',
    autor: 'J.R.R. Tolkien',
    valoracio: 5,
  },
];
```
