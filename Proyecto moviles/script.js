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


//------------------------Funcion para hacer el hover del header-------------------------

const carritoIcon = document.getElementById('carrito_icon');
const userIcon = document.getElementById('user_icon');
const lupaIcon = document.getElementById('lupa_icon');
const menuHamburguesa = document.getElementById('menu_icon');

carritoIcon.addEventListener('mouseenter', () => {
  carritoIcon.style.transform = 'scale(1.2)';
});

carritoIcon.addEventListener('mouseleave', () => {
  carritoIcon.style.transform = 'scale(1)'; 
});

userIcon.addEventListener('mouseenter', () => {
  userIcon.style.opacity = '0.7';
});

userIcon.addEventListener('mouseleave', () => {
  userIcon.style.opacity = '1';
});

userIcon.addEventListener('mouseenter', () => {
  userIcon.style.transform = 'scale(1.2)';
});

userIcon.addEventListener('mouseleave', () => {
  userIcon.style.transform = 'scale(1)';
});

lupaIcon.addEventListener('mouseenter', () => {
  busquedaInput.style.border = '2px solid blue';
});

lupaIcon.addEventListener('mouseleave', () => {
  busquedaInput.style.border = '';
});

menuHamburguesa.addEventListener('mouseenter', () => {
  menuHamburguesa.style.transform = 'scale(1.2)';
});

menuHamburguesa.addEventListener('mouseleave', () => {
  menuHamburguesa.style.transform = 'scale(1)';
});

//----------------------- Funcion para sticky del header -----------------------



// ----------------------- Scroll de las categorías -----------------------

function scrollToSection(sectionClass) {
  document.querySelector(sectionClass).scrollIntoView({
    behavior: 'smooth'
  });
}

function scrollToIphone() {
  scrollToSection('.categoria');
}

function scrollToSamsung() {
  scrollToSection('.Samsung');
}

// -------------------------------

const btnOpenMenu = document.getElementById('menu_icon');
const btnCloseMenu = document.getElementById('btn-close-menu');
const modalMenu = document.getElementById('modal-menu');
const overlayMenu = document.getElementById('overlay-menu');

function openMenu() {
  modalMenu.classList.remove('hidden');
  overlayMenu.classList.add('active');
}

function closeMenu() {
  modalMenu.classList.add('hidden');
  overlayMenu.classList.remove('active');
}

btnOpenMenu.addEventListener('click', openMenu);

const listaItems = document.querySelectorAll('.clickLista');
listaItems.forEach(item => {
  item.addEventListener('click', () => {
    closeMenu();
  });
});

btnCloseMenu.addEventListener('click', closeMenu);

overlayMenu.addEventListener('click', closeMenu);
