const togglePopup = () => {
  const popup = document.querySelector('.popup'),
    popupBtn = document.querySelectorAll('.popup-btn'),
    popupContent = document.querySelector('.popup-content'),
    button = document.querySelector('button.popup-btn'),
    service = document.querySelector('.service'),

    popupData = {
      count: -445,
      speed: 15,
      startPos: -445,
      endPos: 0
    };

  const popupShow = () => {
    if (popupData.startPos > popupData.endPos) {
      popupData.count -= popupData.speed;
    } else {
      popupData.count += popupData.speed;
      popupContent.style.transform = `translateY(${popupData.count}px)`;
    }

    if (popupData.startPos > popupData.endPos &&
      popupData.count > popupData.endPos ||
      popupData.count < popupData.endPos) {
      requestAnimationFrame(popupShow);
    }
    service.removeEventListener('mouseover', () => {});
  };

  popupBtn.forEach((el) => {
    el.addEventListener('click', (e) => {
      popup.style.display = 'block';
      if (screen.width > 768) {
        popupData.count = popupData.startPos;
        requestAnimationFrame(popupShow);
      }
    });
    
  });
  
  service.addEventListener('mouseover', (e) => {
    if (e.target.closest('.service-outer')) {
      button.removeAttribute('disabled');
    }
  });
  
  popup.addEventListener('click', event => {
    let target = event.target;

    if (target.classList.contains('popup-close')) {
      popup.style.display = 'none';
    }
    else {
      target = target.closest('.popup-content');
      if (!target) {
        popup.style.display = 'none';
      }
    }
    
  });
  
};

export default togglePopup;