const openModal = document.querySelector(".burger");
const closeModal = document.querySelector(".close-menu");
const modal = document.querySelector(".nav-container");
const header = document.querySelector(".header");
const links = document.querySelectorAll(".nav-link");
const baseItems = document.querySelectorAll(".base-colore");
const imageContainers = document.querySelectorAll(".image-container");

openModal.addEventListener("click", openModalFoo);

function openModalFoo() {
  modal.classList.add("is-open");
}
closeModal.addEventListener("click", closeModalFoo);

function closeModalFoo() {
  modal.classList.remove("is-open");
}

window.addEventListener("scroll", function () {
  if (window.scrollY > 600) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
    if (window.innerWidth <= 375) {
      modal.classList.remove("is-open");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          baseItems.forEach((item, index) => {
            const isFirstOrFourth = index === 0 || index === 3;
            const delay = isFirstOrFourth ? 200 : 800;

            setTimeout(() => {
              item.classList.add("animate");
            }, delay);
          });

          observer.disconnect();
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  const container = document.querySelector(".base-colore-container");
  observer.observe(container);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("show");
        }, index * 200);
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.5,
  }
);

imageContainers.forEach((container) => {
  observer.observe(container);
});
