import './style.css';

const button = document.querySelector('button');
const content = document.querySelector('.hidden');

button.addEventListener('click', () => {
  if (content.classList.contains('visible')) {
    content.classList.remove('visible');
  } else {
    content.classList.add('visible');
  }
});
