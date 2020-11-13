import './styles.scss';

const title = document.querySelectorAll('.title');
const info = document.querySelectorAll('.desplegable p:nth-child(2)');
const Arrow = document.querySelectorAll('.container-title svg');
const containerDesplegable = document.querySelector(
  'div[class*="container-desplegable"]'
);
containerDesplegable.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.className === 'title') {
    info.forEach((elem, i) => {
      title[i].style.fontWeight = '500';
      Arrow[i].style.transform = 'rotate(0deg)';
      if (document.querySelector('.desplegable p.active')) {
        document.querySelector('.desplegable p.active').className = '';
      }
    });

    e.target.parentElement.nextElementSibling.classList.toggle('active');
    e.target.nextElementSibling.style.transform = 'rotate(180deg)';
    if (e.target.style.fontWeight !== '700') e.target.style.fontWeight = '700';
    else e.target.style.fontWeight = '500'; //.style.display = 'block';
  }
});
