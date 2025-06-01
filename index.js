const openModal = document.querySelector('.burger');
const closeModal = document.querySelector('.close-menu');
const modal = document.querySelector('.nav-container');
const header = document.querySelector('.header');

openModal.addEventListener('click', openModalFoo);

function openModalFoo() {
  modal.classList.add('is-open');
  document.body.classList.add('no-scroll');
}
closeModal.addEventListener('click', closeModalFoo);

function closeModalFoo() {
  modal.classList.remove('is-open');
  document.body.classList.remove('no-scroll');
}

  window.addEventListener('scroll', function () {
    if (window.scrollY > 600) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });