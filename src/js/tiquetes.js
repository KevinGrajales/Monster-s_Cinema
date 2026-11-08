// Obtener elementos del HTML
const selectorPelicula = document.getElementById("pelicula");

const imagenPelicula = document.getElementById("imagen-pelicula");
const nombrePelicula = document.getElementById("nombre-pelicula");
const clasificacionPelicula = document.getElementById("clasificacion-pelicula");
const duracionPelicula = document.getElementById("duracion-pelicula");

// Información de las películas
const peliculas = {

    pelicula1: {
        nombre: "Jurassic Park",
        imagen: "../../img/jurassic-park.jpg",
        clasificacion: "Clasificación: +12",
        duracion: "2 h 7 min"
    },

    pelicula2: {
        nombre: "Vaselina (Grease)",
        imagen: "../../img/grease.jpg",
        clasificacion: "Clasificación: +12",
        duracion: "1 h 50 min"
    },

    pelicula3: {
        nombre: "E.T. El extraterrestre",
        imagen: "../../img/et.jpg",
        clasificacion: "Clasificación: +7",
        duracion: "1 h 55 min"
    }

};

// Escuchar cuando el usuario selecciona una película
selectorPelicula.addEventListener("change", function () {

    const peliculaSeleccionada = selectorPelicula.value;

    // Si no seleccionó ninguna película
    if (peliculaSeleccionada === "") {

        imagenPelicula.classList.add("hidden");

        nombrePelicula.textContent = "Aún no has elegido película";
        clasificacionPelicula.textContent = "";
        duracionPelicula.textContent = "";

        return;
    }

    // Obtener información de la película
    const pelicula = peliculas[peliculaSeleccionada];

    // Mostrar información en el resumen
    imagenPelicula.src = pelicula.imagen;
    imagenPelicula.alt = pelicula.nombre;

    imagenPelicula.classList.remove("hidden");

    nombrePelicula.textContent = pelicula.nombre;
    clasificacionPelicula.textContent = pelicula.clasificacion;
    duracionPelicula.textContent = pelicula.duracion;

});