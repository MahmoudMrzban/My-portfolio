  document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('menu');
    const navbar = document.querySelector('.navbar');

    menu.addEventListener('click', () => {
      navbar.classList.toggle('nav-toggle');
    });
  });