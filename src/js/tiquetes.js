
// ============================================
// 1. ELEMENTOS DEL HTML
// ============================================

const selectorPelicula = document.getElementById("pelicula");
const selectorSede = document.getElementById("sede");

const imagenPelicula = document.getElementById("imagen-pelicula");
const nombrePelicula = document.getElementById("nombre-pelicula");
const clasificacionPelicula = document.getElementById("clasificacion-pelicula");
const duracionPelicula = document.getElementById("duracion-pelicula");

const resumenSede = document.getElementById("resumen-sede");
const resumenFecha = document.getElementById("resumen-fecha");
const resumenHora = document.getElementById("resumen-hora");
const resumenEspacio = document.getElementById("resumen-espacio");
const resumenTotal = document.getElementById("resumen-total");

const contenedorFechas = document.getElementById("contenedor-fechas");
const seccionFunciones = document.getElementById("seccion-funciones");
const contenedorFunciones = document.getElementById("contenedor-funciones");

const botonElegirEspacio = document.getElementById("btn-elegir-espacio");

const seccionFuncion = document.getElementById("seccion-funcion");
const seccionEspacios = document.getElementById("seccion-espacios");
const contenedorEspacios = document.getElementById("contenedor-espacios");

const botonVolverFuncion = document.getElementById("btn-volver-funcion");
const botonContinuarDatos = document.getElementById("btn-continuar-datos");

// ELEMENTOS DE LA ETAPA 2: CONFIRMACIÓN DEL ESPACIO
const confirmacionEspacio = document.getElementById("confirmacion-espacio");
const confirmacionCodigo = document.getElementById("confirmacion-codigo");
const confirmacionDescripcion = document.getElementById("confirmacion-descripcion");
const botonCambiarSeleccion = document.getElementById("btn-cambiar-seleccion");

// ELEMENTOS DE LA ETAPA 3: DATOS DEL CLIENTE
const seccionDatos = document.getElementById("seccion-datos");
const formularioDatos = document.getElementById("formulario-datos");
const botonVolverEspacios = document.getElementById("btn-volver-espacios");

// ELEMENTOS DE LA ETAPA 4: PAGO
const seccionPago = document.getElementById("seccion-pago");
const botonVolverDatos = document.getElementById("btn-volver-datos");
const botonContinuarConfirmacion = document.getElementById("btn-continuar-confirmacion");

// ============================================
// ELEMENTOS DE LA ETAPA 5: CONFIRMACIÓN
// ============================================

const seccionConfirmacion = document.getElementById("seccion-confirmacion");

const codigoReserva = document.getElementById("codigo-reserva");
const confirmacionPelicula = document.getElementById("confirmacion-pelicula");
const confirmacionSede = document.getElementById("confirmacion-sede");
const confirmacionFecha = document.getElementById("confirmacion-fecha");
const confirmacionHora = document.getElementById("confirmacion-hora");
const confirmacionEspacioFinal = document.getElementById("confirmacion-espacio-final");

const confirmacionCliente = document.getElementById("confirmacion-cliente");
const confirmacionDocumento = document.getElementById("confirmacion-documento");
const confirmacionTelefono = document.getElementById("confirmacion-telefono");
const confirmacionVehiculo = document.getElementById("confirmacion-vehiculo");
const confirmacionPlaca = document.getElementById("confirmacion-placa");
const confirmacionMetodoPago = document.getElementById("confirmacion-metodo-pago");
const confirmacionTotal = document.getElementById("confirmacion-total");

const botonImprimirReserva = document.getElementById("btn-imprimir-reserva");

// ============================================
// ACTUALIZAR INDICADOR DE LOS CINCO PASOS
// ============================================

function actualizarPaso(pasoActual) {

    for (let numero = 1; numero <= 5; numero++) {

        const circulo = document.getElementById(`paso-${numero}`);
        const etiqueta = document.getElementById(`etiqueta-paso-${numero}`);

        // Limpiar estilos anteriores
        circulo.classList.remove(
            "glow-red",
            "border-mustard",
            "bg-vintage-red",
            "text-cream",
            "bg-mustard",
            "text-charcoal",
            "border-white/20",
            "text-white/50"
        );

        etiqueta.classList.remove(
            "text-mustard",
            "text-white/50"
        );

        if (numero < pasoActual) {

            // PASOS COMPLETADOS
            circulo.textContent = "✓";

            circulo.classList.add(
                "border-mustard",
                "bg-mustard",
                "text-charcoal"
            );

            etiqueta.classList.add("text-mustard");

        } else if (numero === pasoActual) {

            // PASO ACTUAL
            circulo.textContent = numero;

            circulo.classList.add(
                "glow-red",
                "border-mustard",
                "bg-vintage-red",
                "text-cream"
            );

            etiqueta.classList.add("text-mustard");

        } else {

            // PASOS PENDIENTES
            circulo.textContent = numero;

            circulo.classList.add(
                "border-white/20",
                "bg-charcoal",
                "text-white/50"
            );

            etiqueta.classList.add("text-white/50");

        }
    }
}

// ============================================
// GENERAR CÓDIGO DE RESERVA
// ============================================

function generarCodigoReserva() {

    const numero = Math.floor(100000 + Math.random() * 900000);

    return "MC-" + numero;

}

// ============================================
// COMPLETAR COMPROBANTE DE RESERVA
// ============================================

function completarComprobante() {

    // OBTENER INFORMACIÓN DE LA PELÍCULA
    const pelicula = peliculas[selectorPelicula.value];

    // OBTENER INFORMACIÓN DE LA SEDE
    const sede = sedes[selectorSede.value];

    // OBTENER INFORMACIÓN DEL CLIENTE
    const nombre = document.getElementById("nombre-cliente").value;
    const tipoDocumento = document.getElementById("tipo-documento").value;
    const documento = document.getElementById("numero-documento").value;
    const telefono = document.getElementById("telefono-cliente").value;

    // OBTENER INFORMACIÓN DEL VEHÍCULO
    const placa = document.getElementById("placa-vehiculo").value;
    const tipoVehiculo = document.getElementById("tipo-vehiculo").value;

    // OBTENER MÉTODO DE PAGO
    const metodoPago = document.querySelector(
        'input[name="metodo-pago"]:checked'
    );

    // GENERAR CÓDIGO DE RESERVA
    codigoReserva.textContent = generarCodigoReserva();

    // INFORMACIÓN DE LA FUNCIÓN
    confirmacionPelicula.textContent = pelicula.nombre;
    confirmacionSede.textContent = "Monster's Cinema " + sede;
    confirmacionFecha.textContent = fechaSeleccionada;
    confirmacionHora.textContent = horaSeleccionada;

    // INFORMACIÓN DEL ESPACIO
    confirmacionEspacioFinal.textContent =
        espacioSeleccionado.codigo + " · " + espacioSeleccionado.zona;

    // INFORMACIÓN DEL CLIENTE
    confirmacionCliente.textContent = nombre;
    confirmacionDocumento.textContent =
        tipoDocumento + " " + documento;
    confirmacionTelefono.textContent = telefono;

    // INFORMACIÓN DEL VEHÍCULO
    confirmacionVehiculo.textContent = tipoVehiculo;
    confirmacionPlaca.textContent = placa;

    // MÉTODO DE PAGO
    confirmacionMetodoPago.textContent = metodoPago.value;

    // PRECIO TOTAL
    confirmacionTotal.textContent =
        "$" + espacioSeleccionado.precio.toLocaleString("es-CO");

}

// ============================================
// 2. INFORMACIÓN DE LAS PELÍCULAS
// ============================================

const peliculas = {
    pelicula1: {
        nombre: "Antes de ti",
        imagen: "../img/Antes-nuevo.jpeg",
        clasificacion: "Clasificación: +12",
        duracion: "2 h 7 min"
    },

    pelicula2: {
        nombre: "Thor",
        imagen: "../img/thor.jpg",
        clasificacion: "Clasificación: +12",
        duracion: "2 h 20 min"
    },

    pelicula3: {
        nombre: "La tierra errante",
        imagen: "../img/movi4.jpeg",
        clasificacion: "Clasificación: +12",
        duracion: "2 h 15 min"
    },
    pelicula4: {
        nombre: "Backrooms",
        imagen: "../img/Backrooms.jpg",
        clasificacion: "Clasificación: +18",
        duracion: "1 h 45 min"
    },
    pelicula5: {
        nombre: "La Monja ",
        imagen: "../img/LaMonja.jpeg",
        clasificacion: "Clasificación: +18",
        duracion: "1 h 30 min"
    },
    pelicula6: {
        nombre: "Stray Kids ",
        imagen: "../img/Stray.jpeg",
        clasificacion: "Clasificación: +12",
        duracion: "2 h 15 min"
    },
    pelicula7: {
        nombre: "APEX: Live event",
        imagen: "../img/apex.webp",
        clasificacion: "Clasificación: +12",
        duracion: "2 h 30 min"
    }
};


// ============================================
// 3. INFORMACIÓN DE LAS SEDES
// ============================================

const sedes = {
    norte: "Norte",
    centro: "Centro",
    sur: "Sur"
};


// ============================================
// 4. FECHAS DISPONIBLES
// ============================================

const fechasDisponibles = [
    "Vie, 6 de Nov",
    "Sáb, 7 de Nov",
    "Dom, 8 de Nov",
    "Lun, 9 de Nov",
    "Mar, 10 de Nov",
    "Mié, 11 de Nov",
    "Jue, 12 de Nov",
    "Vie, 13 de Nov",
    "Sáb, 14 de Nov",
    "Dom, 15 de Nov"
];


// ============================================
// 5. FUNCIONES DISPONIBLES
// ============================================

const funcionesDisponibles = [
    {
        hora: "6:30 P. M.",
        espaciosLibres: 35
    },
    {
        hora: "9:15 P. M.",
        espaciosLibres: 47
    }
];

let fechaSeleccionada = "";
let horaSeleccionada = "";
let espacioSeleccionado = null;


// ============================================
// 6. DISTRIBUCIÓN DE ESPACIOS
// ============================================

// Los números representan los espacios disponibles
// y no disponibles según las capturas de Lovable.

const zonas = [
    {
        nombre: "VIP",
        prefijo: "V",
        cantidad: 16,
        columnas: 8,
        precio: 45000,
        ocupados: [3, 7, 8, 9, 10, 12, 14, 15, 16],
        noDisponibles: [2, 5]
    },
    {
        nombre: "PREFERENCIAL",
        prefijo: "P",
        cantidad: 24,
        columnas: 8,
        precio: 35000,
        ocupados: [3, 4, 5, 6, 8, 10, 11, 12, 16, 17, 19, 20, 21],
        noDisponibles: [1, 9]
    },
    {
        nombre: "GENERAL",
        prefijo: "G",
        cantidad: 40,
        columnas: 10,
        precio: 25000,
        ocupados: [
            5, 9, 12, 13, 15, 16, 17, 21, 22,
            23, 24, 25, 28, 30, 31, 35, 36, 37
        ],
        noDisponibles: [8]
    }
];


// ============================================
// 7. VALIDAR SELECCIÓN DE FUNCIÓN
// ============================================

function validarSeleccion() {

    const seleccionCompleta =
        selectorPelicula.value !== "" &&
        selectorSede.value !== "" &&
        fechaSeleccionada !== "" &&
        horaSeleccionada !== "";

    botonElegirEspacio.disabled = !seleccionCompleta;

    if (seleccionCompleta) {
        botonElegirEspacio.classList.remove("opacity-50");

        botonElegirEspacio.classList.add(
            "cursor-pointer",
            "hover:border-mustard",
            "hover:shadow-[0_0_20px_rgba(255,193,7,0.65)]",
            "transition-all",
            "duration-300"
        );
    } else {
        botonElegirEspacio.classList.add("opacity-50");

        botonElegirEspacio.classList.remove(
            "cursor-pointer",
            "hover:border-mustard",
            "hover:shadow-[0_0_20px_rgba(255,193,7,0.65)]"
        );
    }
}


// ============================================
// 8. MOSTRAR FUNCIONES DISPONIBLES
// ============================================

function mostrarFunciones() {

    contenedorFunciones.innerHTML = "";
    seccionFunciones.classList.remove("hidden");

    funcionesDisponibles.forEach(function(funcion) {

        const tarjeta = document.createElement("button");

        tarjeta.type = "button";

        tarjeta.className =
            "w-full max-w-[260px] rounded-2xl border-2 border-white/15 bg-charcoal p-3 text-left transition-all duration-300 hover:border-mustard hover:shadow-[0_0_15px_rgba(255,193,7,0.35)] md:w-[260px]";

        tarjeta.innerHTML = `
            <span class="block font-display text-lg text-cream">
                ${funcion.hora}
            </span>

            <span class="mt-2 block text-xs text-cream/60">
                ${funcion.espaciosLibres} de 80 espacios libres
            </span>
        `;

        tarjeta.addEventListener("click", function() {

            horaSeleccionada = funcion.hora;

            contenedorFunciones.querySelectorAll("button").forEach(function(item) {
                item.classList.remove(
                    "border-mustard",
                    "bg-mustard/10",
                    "shadow-[0_0_20px_rgba(255,193,7,0.35)]"
                );

                item.classList.add("border-white/15");
            });

            tarjeta.classList.remove("border-white/15");

            tarjeta.classList.add(
                "border-mustard",
                "bg-mustard/10",
                "shadow-[0_0_20px_rgba(255,193,7,0.35)]"
            );

            resumenHora.textContent = horaSeleccionada;
            resumenHora.classList.remove("text-cream/50");

            validarSeleccion();
        });

        contenedorFunciones.appendChild(tarjeta);
    });
}


// ============================================
// 9. MOSTRAR FECHAS DISPONIBLES
// ============================================

function mostrarFechas() {

    contenedorFechas.innerHTML = "";

    fechasDisponibles.forEach(function(fecha) {

        const boton = document.createElement("button");

        boton.type = "button";
        boton.textContent = fecha;

        boton.className =
            "rounded-xl border-2 border-white/15 bg-charcoal px-3 py-2 text-sm font-semibold text-cream transition hover:border-mustard hover:text-mustard";

        boton.addEventListener("click", function() {

            fechaSeleccionada = fecha;
            horaSeleccionada = "";

            contenedorFechas.querySelectorAll("button").forEach(function(item) {
                item.classList.remove(
                    "border-mustard",
                    "bg-vintage-red",
                    "text-mustard"
                );

                item.classList.add("border-white/15");
            });

            boton.classList.remove("border-white/15");

            boton.classList.add(
                "border-mustard",
                "bg-vintage-red",
                "text-mustard"
            );

            resumenFecha.textContent = fecha;
            resumenFecha.classList.remove("text-cream/50");

            resumenHora.textContent = "Pendiente";
            resumenHora.classList.add("text-cream/50");

            mostrarFunciones();
            validarSeleccion();
        });

        contenedorFechas.appendChild(boton);
    });
}


// ============================================
// 10. GENERAR UN ESPACIO DE ESTACIONAMIENTO
// ============================================

function crearEspacio(zona, numero) {

    const codigo = zona.prefijo + String(numero).padStart(2, "0");

    let estado = "disponible";

    if (zona.noDisponibles.includes(numero)) {
        estado = "no-disponible";
    } else if (zona.ocupados.includes(numero)) {
        estado = "ocupado";
    }

    const boton = document.createElement("button");

    boton.type = "button";
    boton.dataset.codigo = codigo;
    boton.dataset.estado = estado;

    boton.className =
        "group relative flex aspect-[0.7] min-w-0 flex-col items-center justify-center gap-1 rounded-xl border-2 p-1 transition-all duration-200";

    if (estado === "disponible") {

        boton.classList.add(
            "border-green-500",
            "bg-green-600",
            "text-black",
            "cursor-pointer",
            "hover:-translate-y-1",
            "hover:scale-105",
            "hover:shadow-[0_0_18px_rgba(34,197,94,0.55)]",
            "hover:border-green-300"
        );

    } else if (estado === "ocupado") {

        boton.classList.add(
            "border-red-600",
            "bg-red-700/90",
            "text-white",
            "cursor-not-allowed"
        );

    } else {

        boton.classList.add(
            "border-gray-500",
            "bg-[repeating-linear-gradient(45deg,#444_0px,#444_5px,#292929_5px,#292929_10px)]",
            "text-gray-400",
            "cursor-not-allowed"
        );
    }

    // Icono del vehículo: aparece al seleccionar
    const icono = document.createElement("span");

    icono.textContent = "🚘";

    icono.className = "hidden text-base leading-none";

    // Código del espacio
    const texto = document.createElement("span");

    texto.textContent = codigo;
    texto.className = "text-xs font-bold";

    // Mensaje flotante
    const mensaje = document.createElement("span");

    mensaje.className =
        "pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 hidden -translate-x-1/2 whitespace-nowrap rounded-sm border border-gray-500 bg-white px-2 py-1 text-xs font-medium text-gray-800 shadow-lg group-hover:block";

    if (estado === "disponible") {
        mensaje.textContent = codigo + " · Disponible";
    } else if (estado === "ocupado") {
        mensaje.textContent = "🚫 " + codigo + " · Ocupado";
    } else {
        mensaje.textContent = "🚫 " + codigo + " · No disponible";
    }

    boton.appendChild(icono);
    boton.appendChild(texto);
    boton.appendChild(mensaje);

    // Seleccionar únicamente espacios disponibles
    boton.addEventListener("click", function() {

        if (estado !== "disponible") {
            return;
        }

        seleccionarEspacio(codigo, zona, boton);

    });

    return boton;
}


// ============================================
// 11. GENERAR LAS TRES ZONAS
// ============================================

function mostrarEspacios() {

    contenedorEspacios.innerHTML = "";

    zonas.forEach(function(zona) {

        // Contenedor de la zona
        const seccion = document.createElement("div");

        seccion.className =
            "rounded-2xl border border-dashed border-white/20 p-4";

        // Encabezado de zona
        const encabezado = document.createElement("div");

        encabezado.className =
            "mb-4 flex flex-wrap items-center justify-between gap-2";

        encabezado.innerHTML = `
            <h3 class="font-display text-sm">
                <span class="text-mustard">ZONA ${zona.nombre}</span>
                <span class="text-cream/50">
                    · ${zona.cantidad} ESPACIOS
                </span>
            </h3>

            <span class="text-sm font-semibold text-cream">
                ${zona.precio.toLocaleString("es-CO")} por vehículo
            </span>
        `;

        // Cuadrícula de espacios
        const cuadricula = document.createElement("div");

        cuadricula.className = "grid gap-2";

        cuadricula.style.gridTemplateColumns =
            `repeat(${zona.columnas}, minmax(0, 1fr))`;

        for (let numero = 1; numero <= zona.cantidad; numero++) {

            const espacio = crearEspacio(zona, numero);

            cuadricula.appendChild(espacio);
        }

        seccion.appendChild(encabezado);
        seccion.appendChild(cuadricula);

        contenedorEspacios.appendChild(seccion);
    });

    // Indicación de orientación
    const orientacion = document.createElement("p");

    orientacion.className =
        "mt-6 text-center text-xs tracking-[0.25em] text-cream/50";

    orientacion.textContent =
        "↑ FRENTE A LA PANTALLA · ENTRADA DEL AUTOCINE ↓";

    contenedorEspacios.appendChild(orientacion);
}


// ============================================
// 12. SELECCIONAR UN ESPACIO
// ============================================


function seleccionarEspacio(codigo, zona, boton) {

    // RESTABLECER EL ESPACIO ANTERIORMENTE SELECCIONADO
    if (espacioSeleccionado) {

        const anterior = contenedorEspacios.querySelector(
            `[data-codigo="${espacioSeleccionado.codigo}"]`
        );

        if (anterior) {
            anterior.classList.remove(
                "border-white",
                "bg-mustard",
                "shadow-[0_0_20px_rgba(255,193,7,0.7)]",
                "scale-105",
                "text-black"
            );

            anterior.classList.add("border-green-500", "bg-green-600");

            anterior.children[0].classList.add("hidden");
            anterior.dataset.seleccionado = "false";

            anterior.children[2].textContent =
                anterior.dataset.codigo + " · Disponible";
        }
    }

    // GUARDAR EL NUEVO ESPACIO
    espacioSeleccionado = {
        codigo: codigo,
        zona: zona.nombre,
        precio: zona.precio
    };

    // CAMBIAR APARIENCIA DEL ESPACIO SELECCIONADO
    boton.classList.remove(
        "border-green-500",
        "bg-green-600",
        "hover:-translate-y-1",
        "hover:scale-105",
        "hover:shadow-[0_0_18px_rgba(34,197,94,0.55)]",
        "hover:border-green-300"
    );

    boton.classList.add(
        "border-white",
        "bg-mustard",
        "text-black",
        "shadow-[0_0_20px_rgba(255,193,7,0.7)]",
        "scale-105"
    );

    boton.children[0].classList.remove("hidden");
    boton.dataset.seleccionado = "true";

    boton.children[2].textContent = codigo + " · Seleccionado";

    // ACTUALIZAR RESUMEN DEL TIQUETE
    resumenEspacio.textContent = codigo;
    resumenEspacio.classList.remove("text-cream/50");

    resumenTotal.textContent =
        "$" + zona.precio.toLocaleString("es-CO");

    // ACTUALIZAR TARJETA DE CONFIRMACIÓN
    confirmacionCodigo.textContent =
        codigo + " · ZONA " + zona.nombre;

    let descripcion = "";

    if (zona.nombre === "VIP") {
        descripcion = "Primeras filas, frente a la pantalla.";
    } else if (zona.nombre === "PREFERENCIAL") {
        descripcion = "Zona intermedia del autocinema.";
    } else {
        descripcion = "Zona general del autocinema.";
    }

    confirmacionDescripcion.textContent =
        "$" + zona.precio.toLocaleString("es-CO") +
        " por vehículo · " + descripcion;

    confirmacionEspacio.classList.remove("hidden");

    // HABILITAR CONTINUAR
    botonContinuarDatos.disabled = false;
    botonContinuarDatos.classList.remove("opacity-50");
}


// ============================================
// 13. SELECCIONAR PELÍCULA
// ============================================

selectorPelicula.addEventListener("change", function() {

    const peliculaSeleccionada = selectorPelicula.value;

    fechaSeleccionada = "";
    horaSeleccionada = "";
    espacioSeleccionado = null;

    resumenFecha.textContent = "Pendiente";
    resumenHora.textContent = "Pendiente";
    resumenEspacio.textContent = "Pendiente";
    resumenTotal.textContent = "—";

    resumenFecha.classList.add("text-cream/50");
    resumenHora.classList.add("text-cream/50");
    resumenEspacio.classList.add("text-cream/50");

    contenedorFechas.innerHTML = `
        <p class="text-sm text-cream/50">
            Selecciona una sede para ver las fechas.
        </p>
    `;

    seccionFunciones.classList.add("hidden");

    if (peliculaSeleccionada === "") {

        imagenPelicula.classList.add("hidden");

        nombrePelicula.textContent = "Aún no has elegido película";
        clasificacionPelicula.textContent = "";
        duracionPelicula.textContent = "";

        selectorSede.disabled = true;

        selectorSede.innerHTML = `
            <option value="">Primero elige la película</option>
        `;

        resumenSede.textContent = "Pendiente";

        validarSeleccion();

        return;
    }

    const pelicula = peliculas[peliculaSeleccionada];

    imagenPelicula.src = pelicula.imagen;
    imagenPelicula.alt = pelicula.nombre;
    imagenPelicula.classList.remove("hidden");

    nombrePelicula.textContent = pelicula.nombre;
    clasificacionPelicula.textContent = pelicula.clasificacion;
    duracionPelicula.textContent = pelicula.duracion;

    selectorSede.disabled = false;

    selectorSede.innerHTML = `
        <option value="">Elige una sede...</option>
        <option value="norte">Monster's Cinema Norte</option>
        <option value="centro">Monster's Cinema Centro</option>
        <option value="sur">Monster's Cinema Sur</option>
    `;

    resumenSede.textContent = "Pendiente";

    validarSeleccion();
});


// ============================================
// 14. SELECCIONAR SEDE
// ============================================

selectorSede.addEventListener("change", function() {

    const sedeSeleccionada = selectorSede.value;

    fechaSeleccionada = "";
    horaSeleccionada = "";
    espacioSeleccionado = null;

    resumenFecha.textContent = "Pendiente";
    resumenHora.textContent = "Pendiente";
    resumenEspacio.textContent = "Pendiente";
    resumenTotal.textContent = "—";

    resumenFecha.classList.add("text-cream/50");
    resumenHora.classList.add("text-cream/50");
    resumenEspacio.classList.add("text-cream/50");

    if (sedeSeleccionada === "") {

        resumenSede.textContent = "Pendiente";

        contenedorFechas.innerHTML = `
            <p class="text-sm text-cream/50">
                Selecciona una sede para ver las fechas.
            </p>
        `;

        seccionFunciones.classList.add("hidden");

        validarSeleccion();

        return;
    }

    resumenSede.textContent = sedes[sedeSeleccionada];

    mostrarFechas();

    seccionFunciones.classList.add("hidden");

    validarSeleccion();
});



// ============================================
// 15. AVANZAR A LA SELECCIÓN DE ESPACIOS
// ============================================

botonElegirEspacio.addEventListener("click", function() {

    if (botonElegirEspacio.disabled) return;

    seccionFuncion.classList.add("hidden");
    seccionDatos.classList.add("hidden");
    seccionEspacios.classList.remove("hidden");

    mostrarEspacios();

    espacioSeleccionado = null;

    confirmacionEspacio.classList.add("hidden");

    resumenEspacio.textContent = "Pendiente";
    resumenTotal.textContent = "—";

    botonContinuarDatos.disabled = true;
    botonContinuarDatos.classList.add("opacity-50");

    actualizarPaso(2);

    window.scrollTo({ top: 0, behavior: "smooth" });
});


// ============================================
// 16. CAMBIAR SELECCIÓN DE ESPACIO
// ============================================

botonCambiarSeleccion.addEventListener("click", function() {

    confirmacionEspacio.classList.add("hidden");

});


// ============================================
// 17. VOLVER A LA PRIMERA ETAPA
// ============================================

botonVolverFuncion.addEventListener("click", function() {

    seccionEspacios.classList.add("hidden");
    seccionDatos.classList.add("hidden");
    seccionFuncion.classList.remove("hidden");

    actualizarPaso(1);

    window.scrollTo({ top: 0, behavior: "smooth" });
});


// ============================================
// 18. CONTINUAR A DATOS DEL CLIENTE
// ============================================

botonContinuarDatos.addEventListener("click", function() {

    if (!espacioSeleccionado) return;

    seccionEspacios.classList.add("hidden");
    seccionFuncion.classList.add("hidden");
    seccionDatos.classList.remove("hidden");

    actualizarPaso(3);

    window.scrollTo({ top: 0, behavior: "smooth" });
});


// ============================================
// 19. VOLVER DE DATOS A ESPACIOS
// ============================================

botonVolverEspacios.addEventListener("click", function() {

    seccionDatos.classList.add("hidden");
    seccionFuncion.classList.add("hidden");
    seccionEspacios.classList.remove("hidden");

    actualizarPaso(2);

    window.scrollTo({ top: 0, behavior: "smooth" });
});


// ============================================
// 20. VALIDAR DATOS Y AVANZAR AL PAGO
// ============================================

formularioDatos.addEventListener("submit", function(event) {

    event.preventDefault();

    if (!formularioDatos.reportValidity()) return;

    // Ocultar etapa 3
    seccionDatos.classList.add("hidden");

    // Mostrar etapa 4
    seccionPago.classList.remove("hidden");

    // Actualizar indicador
    actualizarPaso(4);

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ============================================
// 21. SELECCIONAR MÉTODO DE PAGO
// ============================================

const opcionesPago = document.querySelectorAll(
    'input[name="metodo-pago"]'
);

opcionesPago.forEach(function(opcion) {

    opcion.addEventListener("change", function() {

        botonContinuarConfirmacion.disabled = false;

        botonContinuarConfirmacion.classList.remove("opacity-50");

    });

});

// ============================================
// 22. VOLVER DE PAGO A DATOS
// ============================================

botonVolverDatos.addEventListener("click", function() {

    seccionPago.classList.add("hidden");

    seccionDatos.classList.remove("hidden");

    actualizarPaso(3);

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}); 

// ============================================
// 23. CONFIRMAR RESERVA Y MOSTRAR COMPROBANTE
// ============================================

botonContinuarConfirmacion.addEventListener("click", function() {

    // Verificar que exista un método de pago seleccionado
    const metodoPagoSeleccionado = document.querySelector(
        'input[name="metodo-pago"]:checked'
    );

    if (!metodoPagoSeleccionado) {
        alert("Por favor, selecciona un método de pago.");
        return;
    }

    // Generar y completar el comprobante
    completarComprobante();

    // Ocultar etapa 4
    seccionPago.classList.add("hidden");

    // Mostrar etapa 5
    seccionConfirmacion.classList.remove("hidden");

    // Actualizar indicador
    actualizarPaso(5);

    // Subir al inicio
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ============================================
// 24. IMPRIMIR COMPROBANTE
// ============================================

botonImprimirReserva.addEventListener("click", function() {

    window.print();

});