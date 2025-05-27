const openModal = document.querySelector('.burger');
const closeModal = document.querySelector('.close-menu');
const modal = document.querySelector('.nav-container');

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
