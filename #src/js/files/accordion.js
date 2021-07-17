const accoButtons = document.querySelectorAll('.accordion__button');
const accoText = document.querySelector('.accordion__text');

document.addEventListener('click', function(e) {
  for (let i = 0; i < accoButtons.length; ++i) {
    if (e.target === accoButtons[i]) {
      e.target.classList.toggle('accordion__button_active');
      e.target.closest('div').lastElementChild.classList.toggle('accordion__text_active');
    }
  }
});
