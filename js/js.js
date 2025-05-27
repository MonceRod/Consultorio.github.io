//Menu
// JavaScript para el menú hamburguesa
document.getElementById("menu-btn").addEventListener("click", function () {
  this.classList.toggle("active");
  document.getElementById("nav-menu").classList.toggle("active");
});
//Funcionamiento del carrusel 
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".video-carrusel", {
    loop: true,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // Para móvil
      0: {
        slidesPerView: 1,
        centeredSlides: true,
      },
      // Para tablets
      768: {
        slidesPerView: 2,
        centeredSlides: false,
      },
      // Escritorio
      1024: {
        slidesPerView: 3,
        centeredSlides: false,
      }
    }
  });
});
//Funcionamineto del Formulario
document.getElementById("citaForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;
    const mensaje = document.getElementById("mensaje").value;

    // Verificar que el día sea entre lunes (1) y viernes (5)
    const dia = new Date(fecha).getUTCDay(); // 0 = domingo, 6 = sábado
    if (dia === 0 || dia === 6) {
      alert("Solo se permiten citas de lunes a viernes.");
      return;
    }

    // Formatear fecha legible
    const fechaFormateada = new Date(fecha).toLocaleDateString('es-MX', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const texto = `Hola, soy ${nombre} (Tel: ${telefono}). Quiero verificar la disponibilidad para una cita el día ${fechaFormateada} a las ${hora}. Motivo: ${mensaje}`;
    const url = `https://wa.me/526361149117?text=${encodeURIComponent(texto)}`;
    
    window.open(url, "_blank");
  });

  // Prevenir selección de fines de semana al elegir fecha
  document.getElementById("fecha").addEventListener("input", function () {
    const dia = new Date(this.value).getUTCDay();
    if (dia === 0 || dia === 6) {
      alert("Solo se permiten citas de lunes a viernes.");
      this.value = "";
    }
  });
// Cerrar menú al hacer click en un enlace (opcional)
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("menu-btn").classList.remove("active");
    document.getElementById("nav-menu").classList.remove("active");
  });
});

