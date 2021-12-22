  //MODAL
  'use strict';
  window.addEventListener("DOMContentLoaded", () => {
      const modalTrigger = document.querySelectorAll("[data-modal]"),
          modal = document.querySelector('.modal'),
          modalClose = document.querySelector("[data-close]");

      modalTrigger.forEach(item => {
          item.addEventListener('click', (e) => {
              e.preventDefault();
              modal.classList.add('show');
              modal.classList.remove('hide');
              document.body.style.overflow = 'hidden';
          });
      });

      function hideModal(modalWindow) {
          modalWindow.classList.add('hide');
          modalWindow.classList.remove('show');
          document.body.style.overflow = 'visible';
      }

      modalClose.addEventListener('click', () => {
          hideModal(modal);
      });


      modal.addEventListener('click', (e) => {
          if (e.target === modal) {
              hideModal(modal);
          }
      });

      document.addEventListener('keydown', (e) => {
          if (e.code === 'Escape' && modal.classList.contains('show')) {
              hideModal(modal);
          }
      });
  });