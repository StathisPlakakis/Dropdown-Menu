import './style.css';

const button = document.querySelector('button');
const content = document.querySelector('.content');

button.addEventListener('click', () => {
  content.style.display = (content.style.display === 'none') ? 'block' : 'none';
});
