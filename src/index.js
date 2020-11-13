import './styles.scss';

const title = document.querySelectorAll('.title');
const info = document.querySelectorAll('.desplegable p:nth-child(2)');
const Arrow = document.querySelectorAll('.container-title svg');
const containerDesplegable = document.querySelector(
  'div[class*="container-desplegable"]'
);
containerDesplegable.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.className === 'title') {
    info.forEach((elem, i) => {
      title[i].style.fontWeight = '500';
      Arrow[i].style.transform = 'rotate(0deg)';
      if (document.querySelector('.desplegable p.active')) {
        document.querySelector('.desplegable p.active').className = '';
      }
    });

    event.target.parentElement.nextElementSibling.classList.toggle('active');
    event.target.nextElementSibling.style.transform = 'rotate(180deg)';
    if (event.target.style.fontWeight !== '700')
      event.target.style.fontWeight = '700';
    else event.target.style.fontWeight = '500'; //.style.display = 'block';
  }
});
