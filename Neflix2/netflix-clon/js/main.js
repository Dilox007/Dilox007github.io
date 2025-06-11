// main.js

// Este archivo está listo para futuras funciones personalizadas.
// Por ejemplo, podrías usar esto para cargar dinámicamente detalles en el modal.

document.addEventListener('DOMContentLoaded', () => {
  console.log('Página cargada y lista.');

  // Si quieres cambiar el contenido del modal dinámicamente, puedes hacerlo así:
  const infoModal = document.getElementById('infoModal');
  const modalTitle = infoModal.querySelector('.modal-title');
  const modalBody = infoModal.querySelector('.modal-body');

  // Ejemplo básico de cómo cambiar el contenido si lo necesitas:
  /*
  modalTitle.textContent = 'Nuevo título de película';
  modalBody.innerHTML = '<p>Descripción actualizada desde JavaScript.</p>';
  */
});
// En tu archivo main.js o dentro de <script>
document.getElementById('infoModal').addEventListener('shown.bs.modal', function() {
  // Asegura que el modal ocupe el 100% de altura
  const modalContent = this.querySelector('.modal-content');
  modalContent.style.minHeight = window.innerHeight + 'px';
});

window.addEventListener('resize', function() {
  const modal = document.getElementById('infoModal');
  if (modal.classList.contains('show')) {
    const modalContent = modal.querySelector('.modal-content');
    modalContent.style.minHeight = window.innerHeight + 'px';
  }
});