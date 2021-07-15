import Pregunta from "./Pregunta.js";

let vectorPreguntas = [
    // Ciencias
    new Pregunta("¿Cuánto es 5 + 5 x 5?", "Ciencias", "30", ["50", "30", "10", "25", "100"]),
    new Pregunta("¿Cuántos átomos de hidrógeno hay en una molécula de amoníaco?", "Ciencias", "Todas son incorrectas", ["2", "Todas son incorrectas", "4", "8", "13"]),
    new Pregunta("¿Por qué motivo recibió Albert Einstein el Nobel de Física?", "Ciencias", "Efecto fotoeléctrico", ["Por exceso de facha", "Efecto fotoeléctrico", "Relatividad especial", "Todas son incorrectas", "Relatividad general"]),
    new Pregunta("¿Cuál es la velocidad del sonido?", "Ciencias", "Todas son correctas", ["1235 KM/H", "Todas son correctas", "343.2 M/S", "Mach 1", "34320 CM/S"]),
    new Pregunta("¿Qué es el cambio de estado fusión?", "Ciencias", "Sólido - Líquido", ["Líquido - Sólido", "Sólido - Líquido", "Sólido - Gas", "Gas - Sólido", "Todas son incorrectas"]),
    new Pregunta("¿Qué es el cambio de estado sublimación?", "Ciencias", "Todas son incorrectas", ["Líquido - Sólido", "Todas son incorrectas", "Sólido - Gas", "Gas - Sólido", "Sólido - Líquido"]),
    new Pregunta("¿Para qué sirve la unidad de joules (o julios)?", "Ciencias", "Energía, trabajo y calor", ["Todas son incorrectas", "Energía, trabajo y calor", "Presión", "Temperatura", "Fuerza"]),
    new Pregunta("¿Cómo se llama esta fórmula?", "Ciencias", "Molécula", ["Átomo", "Molécula", "Sustancia", "Compuesto", "Todas son incorrectas"]),
    new Pregunta("¿Cómo se llama la capa exterior de la atmósfera?", "Ciencias", "Todas son incorrectas", ["Estratosfera", "Todas son incorrectas", "Termosfera", "Mesosfera", "Troposfera"]),
    new Pregunta("¿Para qué sirve la unidad de hectopascales?", "Ciencias", "Presión", ["Todas son incorrectas", "Presión", "Energía, trabajo y calor", "Temperatura", "Fuerza"]),
     
    // Historia
    new Pregunta("¿En qué año empezó la Primera Guerra Mundial?", "Historia", "1914", ["1914", "1920", "1910", "1915"]),
    new Pregunta("¿Cuéndo se declaró la Independencia Argentina?", "Historia", "9 de julio de 1816", ["24 de marzo de 1810", "9 de julio de 1816", "12 de septiembre de 1815", "9 de junio de 1816"]),
    new Pregunta("¿Cuántos años duró la guerra entre Francia e Inglaterra conocida como la guerra de los 100 años?", "Historia", "116", ["100", "116", "114", "99"]),
    new Pregunta("¿Con qué apodo se la conoce popularmente a la famosa heroína francesa Juana de Arco?", "Historia", "La doncella de Orleans", ["La salvadora", "La valiente", "La doncella de París", "La doncella de Orleans"]),
    new Pregunta("¿En qué año asume por primera vez Juan Domingo Perón como presidente?", "Historia", "1946", ["1945", "1946", "1960", "1940"]),
    new Pregunta("¿Quién fue el primer presidente de la Union Soviética?", "Historia", "Vladimir Lenin", ["Josef Stalin", "Leon Trotsky", "Vladimir Lenin", "Alexander Kerenski"]),
    new Pregunta("¿A qué país participante de la Segunda Guerra Mundial se le conoce por haber utilizado ataques suicidas con aviones?", "Historia", "Japón", ["Alemania", "Japón", "Italia", "La Unión Soviética"]),
    new Pregunta("¿Con qué nombre se le conoce a la Guerra Civil Estadounidense?", "Historia", "La Guerra de Secesión", ["La guerra de los libres", "La guerra de los esclavos", "La Guerra de Secesión", "Ninguna de las anteriores"]),
    new Pregunta("¿Cuándo comenzó la Guerra de Malvinas?", "Historia", "2 de abril de 1982", ["3 de abril de 1982", "4 de junio de 1982", "2 de abril de 1982", "3 de agosto de 1982"]),


    // Geografía
    new Pregunta("¿Cuál es la capital de Curazao?", "Geografía", "Willemstad", ["Willemstad", "Bonaire", "Solavento", "Roskov"]),
    new Pregunta("¿En qué continente queda Chipre?", "Geografía", "Europa", ["Europa", "América", "Asia", "África"]),
    new Pregunta("¿En qué continente queda Uganda?", "Geografía", "África", ["Europa", "América", "Asia", "África"]),
    new Pregunta("¿Cuál es la capital de Turquía?", "Geografía", "Ankara", ["Estambul", "Ankara", "Antalya", "Bursa"]),
    new Pregunta("¿Cuántos continentes hay en el mundo?", "Geografía", "7", ["7", "9", "5", "4"]),
    new Pregunta("¿En qué isla italiana esta Palermo?", "Geografía", "Sicilia", ["Sicilia", "Capri", "Elba", "Isquia"]),
    new Pregunta("¿Qué pais tuvo de nombre Rhodesia?", "Geografía", "Zimbabue", ["Zimbabue", "Malta", "Serbia", "San Marino"]),
    new Pregunta("¿Dónde se encuentra Cracovia?", "Geografía", "Polonia", ["Polonia", "Irak", "Irán", "Sudan"]),
    new Pregunta("¿Cuál es la capital de Australia?", "Geografía", "Camberra", ["Camberra", "Sídney", "Bratislava", "Managua"]),
    new Pregunta("¿Dónde esta el Taj Mahal?", "Geografía", "India", ["India", "Omán", "Japón", "Brasil"]),

    // Literatura
    new Pregunta("¿Quién fue la escritora de la saga Harry Potter?", "Literatura", "Joanne Rowling​", ["Marie Lu", "Joanne Rowling​", "Juana Antonia Rowling", "Jeannette Rowling", "Sarah J. Maas"]),
    new Pregunta("¿Quién fue el escritor del 'El Matadero?'", "Literatura", "Esteban Echeverría", ["Martín Fierro", "Esteban Echeverría", "Domingo F. Sarmiento", "Juan Bautista Alberdi", "Juan Manuel de Rosas"]),
    new Pregunta("¿Cuáles de estas obras fueron escritas por William Shakespeare?", "Literatura", "Todas son correctas", ["Romeo y Julieta", "Todas son correctas", "El Rey Lear", "Tito Andrónico", "Antonio y Cleopatra"]),
    new Pregunta("¿En qué año fue escrito '1984'?", "Literatura", "1949", ["Todas son incorrectas", "1949", "1984", "1989", "1955"]),
    new Pregunta("¿Qué autor escribió 'Maze Runner'?", "Literatura", "James Dashner", ["Todas son incorrectas", "James Dashner", "J.K. Rowling", "Marie Lu", "Veronica Roth"]),
    new Pregunta("¿Quién escribió el 'Martín Fierro", "Literatura", "Todas son incorrectas", ["Martín Fierro", "Todas son incorrectas", "Domingo F. Sarmiento", "Juan Manuel de Rosas", "María Elena Walsh"]),
    new Pregunta("¿A qué genero pertenece 'Percy Jackson y el ladrón del rayo'?", "Literatura", "Fantasía", ["Romance", "Fantasía", "Ficción histórica", "Todas son incorrectas", "Terror"]),
    new Pregunta("¿Por quién fue escrita la saga 'Los Juegos del Hambre?", "Literatura", "Suzanne Collins", ["James Dashner", "Suzanne Collins", "Veronica Roth", "Todas son incorrectas", "Sarah J. Maas"]),
    new Pregunta("¿En qué año fue terminada la primera Biblia en español?", "Literatura", "1569", ["570", "1569", "1143", "1315", "1680"]),
    new Pregunta("¿De qué nacionalidad es el autor Gabriel García Márquez?", "Literatura", "Colombiano", ["Argentino", "Colombiano", "Mexicano", "Peruano", "Chileno"]),

    // Deportes
    new Pregunta("¿Cuántos mundiales de Fórmula 1 ganó Juan Manuel Fangio?", "Deportes", "5", ["1", "5", "7", "3", "Ninguno"]),
    new Pregunta("¿Cuántos mundiales de Fórmula 1 ganó Ayrton Senna?", "Deportes", "Todas son incorrectas", ["2", "Ninguno", "Todas son incorrectas", "5", "7"]),
    new Pregunta("¿Cuántos torneos Grand Slam ganó Novak Djokovic?'", "Deportes", "20", ["30", "20", "10", "25", "15"]),
    new Pregunta("¿Cuántos goles metió Lionel Messi a lo largo de su carrera?", "Deportes", "672", ["932", "672", "563", "839", "128"]),
    new Pregunta("¿Cuántos mundiales ha ganado la selección de Brasil?", "Deportes", "Todas son incorrectas", ["Ninguno", "Todas son incorrectas", "6", "2", "3"]),
    new Pregunta("¿Cuántos campeonatos ha ganado Carlos Reutemann?", "Deportes", "Ninguno", ["1", "Ninguno", "2", "4", "6"]),
    new Pregunta("¿Cuántos mundiales ha ganado la seleccion de Argentina?", "Deportes", "2", ["1", "Ninguna", "2", "3", "4"]),
    new Pregunta("¿Cuál fue el mejor ranking histórico de Diego Schwartzman en el ATP?", "Deportes", "8", ["10", "8", "12", "16", "14"]),
    new Pregunta("¿Con qué escudería ha ganado por última vez Fernando Alonso?", "Deportes", "Renault", ["Ferrari", "Renault", "McLaren", "Mercedes Benz", "Alpine"]),
    new Pregunta("¿Cuándo fue la última vez que Argentina ha mantenido un Gran Premio de Formula 1?", "Deportes", "1998", ["1995", "1998", "1979", "2003", "1963"]),

    // Cine
    new Pregunta("¿Cuál de estas películas fue dirigida por Robert Rodriguez? ", "Cine", "Todas son correctas", ["Sin City", "Machete", "Machete 2", "Todas son correctas"]),
    new Pregunta("¿Quién interpreta a Dwight McCarthy en Sin City?", "Cine", "Clive Owen", ["John Travolta", "Samuel L Jackson", "Bruce Willis", "Clive Owen"]),
    new Pregunta("¡Quién es el director de the gentlemen?", "Cine", "Guy Ritchie", ["Guy Ritchie", "Quentin Tarantino", "Martin Scorsese", " David Fincher"]),
    new Pregunta("¿Quién es el protagonista en 8mm", "Cine", "Nicolas Cage", ["Nicolas Cage", "Brad Pitt", "Denzel Washington", "Robert de Niro"]),
    new Pregunta("¿Quién interpreta a Tony Montana en Scarface de 1983?", "Cine", "Al Pacino", ["Al Pacino", "Joe Pesci", "Charlie Hunnam", "Vincent Gallo"]),
    new Pregunta("¿En qué año se estreno Cape Fear de Martin Scorsese?", "Cine", "1991", ["1991", "1997", "2001", "1989"]),
    new Pregunta("¿Quién fue el productor más mediático de Hollywood?", "Cine", "Harvey Weinstein", ["Harvey Weinstein", "Bob Weinstein", "Michael Bay", "Steven Spielberg"]),
    new Pregunta("¿Qué exjugador del fútbol inglés se convirtió en actor?", "Cine", "Vinnie Jones", ["Vinnie Jones", "Steven Gerrard", "Frank Lampard", "Steven Caulker "]),
    new Pregunta("¿Quién fue el guionista de seven?", "Cine", "Andrew Kevin Walker", ["Andrew Kevin Walker", "Guy Ritchie", "Eli Roth", " Brian de Palma"]),
    new Pregunta("¿Cuál de estos directores argentinos llego a Estados Unidos?", "Cine", "Damian Szifron", ["Damian Szifron", "Tomas Molezzi", "Ariel Winograd", "Luis Ortega"]),

    // Videojuegos
    new Pregunta("¿Con qué nombre se lo llama al protagonista en el juego Dark Souls 3?", "Videojuegos", "El ser de la ceniza", ["El ser de la ceniza", "El portador de la maldición", "El no muerto elegido", "El oscuro"]),
    new Pregunta("¿Cómo se llama el hermano de Mario?", "Videojuegos", "Luigi", ["Luigi", "Waluigi", "Wario", "Toad"]),
    new Pregunta("¿Cuál de estos juegos no es un juego de disparos?", "Videojuegos", "This war of mine", ["Call of duty: Warzone", "This war of mine", "Battlefield", "Destiny"]),
    new Pregunta("¿Cuál de estos juegos ganó el premio a juego del año en el 2020?", "Videojuegos", "The Last of Us 2", ["God of War", "Doom: Eternal", "Animal Crossing: New Horizons", "The Last of Us 2"]),
    new Pregunta("¿Cómo se llama el protagonista del videojuego Hades?", "Videojuegos", "Zagreus", ["Hades", "Hercules", "Zagreus", "Atila"]),
    new Pregunta("¿Cuál de estos juegos no fue desarrollado por SuperCell?", "Videojuegos", "Clash of Gods", ["Clash of Clans", "Clash Royale", "Clash of Gods", "Boom Beach"]),
    new Pregunta("¿Cuál es el objetivo del protagonista del videojuego Shadow of the Colossus?", "Videojuegos", "Revivir a su amada", ["Venganza", "Salvar al mundo", "Revivir a su amada", "Nunca se explica"]),
    new Pregunta("¿Cómo se les llama a los personajes jugables del videojuego League of Legends?", "Videojuegos", "Campeones", ["Heroes", "Campeones", "Tributos", "No tienen un nombre especifico"]),
    new Pregunta("¿Qué se utiliza como moneda de cambio en la franquicia de videojuegos Fallout?", "Videojuegos", "Tapitas de botella", ["Oro", "Billetes", "Revistas", "Tapitas de botella"]),
    new Pregunta("¿Cómo se llama el protagonista de la franquicia de videojuegos The Legend of zelda?", "Videojuegos", "Link", ["Zelda", "Sora", "Link", "Ninguna de las anteriores"])
];

console.log(vectorPreguntas);
