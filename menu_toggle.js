// Selecciona el botón de hamburguesa
const btn = document.querySelector(".menu-toggle");

// Selecciona el menú horizontal
const menu = document.querySelector(".Menu-Horizontal");

// Al hacer clic en el botón de hamburguesa
btn.addEventListener("click", () => {
  // Alterna (agrega o quita) la clase "active" en el menú
  menu.classList.toggle("active");

  // Alterna la clase "open" en el botón para cambiar el ícono
  btn.classList.toggle("open");
});

// Cerrar menú al hacer clic fuera de él
document.addEventListener("click", (event) => {
  const isClickInsideMenu = menu.contains(event.target);
  const isClickOnButton = btn.contains(event.target);

  if (
    !isClickInsideMenu &&
    !isClickOnButton &&
    menu.classList.contains("active")
  ) {
    menu.classList.remove("active");
    btn.classList.remove("open");
  }
});

// Cerrar menú al redimensionar la ventana (si se cambia a desktop)
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    menu.classList.remove("active");
    btn.classList.remove("open");
  }
});
