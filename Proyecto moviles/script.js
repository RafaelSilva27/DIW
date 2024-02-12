const completo = document.querySelector('.completo');
const categoria = document.querySelectorAll('.categoria');
const numImagenes = document.querySelectorAll('.img').length;
let posicionActual = 0;

// Función para centrar el carrusel al cargar la página
function centrarCarrusel() {
  const anchoImagen = 100 / numImagenes;
  const centro = (100 - (anchoImagen * 2)) / 2; 
  const operacion = (posicionActual * -100) + centro;
  completo.style.transform = `translateX(${operacion}%)`;
}

window.onload = function() {
  centrarCarrusel();
};

categoria.forEach((cadaCategoria, i) => {
  categoria[i].addEventListener('click', () => {
    posicionActual = i;
    centrarCarrusel();
    categoria.forEach((cadaCategoria, i) => {
      categoria[i].classList.remove('activo');
    });
    categoria[i].classList.add('activo');
  });
});

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


