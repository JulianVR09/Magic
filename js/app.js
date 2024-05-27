const cometario = document.getElementById('comentarios');

function seccion() {
  const container = document.getElementById('apartado');
  const img = document.getElementsByClassName('rotate')[0];

  if (container.style.display == 'none') {
    container.style.display = 'block';
    img.style.transform = `rotate(180deg)`;
  } else {
    container.style.display = 'none';
    img.style.transform = `rotate(0deg)`;
  }
}

function foro() {
  const img = document.getElementsByClassName('rotate')[1];
  const mostrar = document.getElementsByClassName('mostrar')[0];
  const ocultar = document.getElementsByClassName('ocultar')[0];

  if (cometario.style.display == 'none') {
    cometario.style.display = 'block';
    img.style.transform = `rotate(180deg)`;
    mostrar.style.display = 'none';
    ocultar.style.display = 'block';
  } else {
    cometario.style.display = 'none';
    img.style.transform = `rotate(0deg)`;
    mostrar.style.display = 'block';
    ocultar.style.display = 'none';
  }
}

const botones = document.querySelectorAll('.botones-fs');
const secciones = document.querySelectorAll('.secciones');

botones.forEach((boton) => {
  boton.addEventListener('click', function () {
    botones.forEach((e) => e.classList.remove('activo'));
    this.classList.add('activo');
    const id = this.getAttribute('data-id');
    seccionForo(id);
  });
});

function seccionForo(id) {
  const sections = document.querySelectorAll('.seccion-foro');
  sections.forEach((section) => {
    if (section.id === id) {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  });
}

secciones.forEach((e) => {
  e.addEventListener('click', function () {
    secciones.forEach((e) => e.classList.toggle('activo'));
  });
});
