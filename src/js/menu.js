
const botonMenu = document.getElementById("boton-menu");
const menuPrincipal = document.getElementById("menu-principal");

if (botonMenu && menuPrincipal) {

    // Abrir y cerrar el menú hamburguesa
    botonMenu.addEventListener("click", () => {

        const menuAbierto =
            botonMenu.getAttribute("aria-expanded") === "true";

        menuPrincipal.classList.toggle("hidden");

        botonMenu.setAttribute(
            "aria-expanded",
            String(!menuAbierto)
        );

        botonMenu.setAttribute(
            "aria-label",
            menuAbierto ? "Abrir menú" : "Cerrar menú"
        );
    });

    // Cerrar el menú al seleccionar una opción
    menuPrincipal.querySelectorAll("a").forEach(enlace => {

        enlace.addEventListener("click", () => {
            menuPrincipal.classList.add("hidden");
            botonMenu.setAttribute("aria-expanded", "false");
            botonMenu.setAttribute("aria-label", "Abrir menú");
        });

    });

}
