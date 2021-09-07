import scrollMenu from './scrollMenu';

const toggleMenu = () => {
  const menu = document.querySelector('menu'),
    btnMenu = document.querySelector('.menu'),
    main = document.querySelector('main');

  let count = -100;
  const animate = () => {
    if (document.documentElement.clientWidth < 768) {
      menu.style.transform = `translate(0)`;
      return;
    }
    let requestId = requestAnimationFrame(animate);
    count += 10;
    menu.style.transform = `translate(${count}%)`;
    if (count === 0) {
      cancelAnimationFrame(requestId);
    }
  };

  const handlerMenu = (e) => {
    e.preventDefault();
    const target = e.target;

    if (target.closest('.menu')) {
      menu.classList.toggle('active-menu');
    } else if (target !== menu && target.closest('[href^="#"]')) {

      menu.classList.toggle('active-menu');
    }
    if (!target.classList.contains('close-btn')) {
      menu.style.display = 'flex';
    }

    if (target.closest('.menu') === null && target.closest('menu') === null) {
      menu.style.transform = `translate(-100%)`;
      return;
    }

    if (target.tagName === 'A' && target.className !== 'close-btn') {
      scrolling(target);
    }

    if (!menu.style.transform || menu.style.transform === `translate(-100%)`) {
      count = -100;
      animate();
    } else if (target.tagName === 'A' || target.closest('.menu')) {
      menu.style.transform = `translate(-100%)`;
    }

    target.removeEventListener('click', (e) => {
      handlerMenu(e);
    });

  };

  btnMenu.addEventListener('click', (e) => {
    handlerMenu(e);
  });

  menu.addEventListener('click', (e) => {
    handlerMenu(e);
  });

  main.addEventListener('click', (e) => {
    const target = e.target;
    if (!target.closest('.form-btn')) {
      handlerMenu(e);
    }

  });

};

const scrolling = (el) => {
  if (el.href === undefined) return;
  let link = el.href.split('#')[1];
  document.querySelector('#' + link).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
};

const scrolHead = () => {
  const btnScrolling = document.querySelector('a[href="#service-block"]');
  btnScrolling.addEventListener('click', (e) => {
    e.preventDefault();
    scrolling(btnScrolling);
  });
};
scrolHead();

export default toggleMenu;