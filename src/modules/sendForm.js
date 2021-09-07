const sendForm = () => {
  const errorMessage = 'Что-то пошло не так...',
    loadMessage = 'Загрузка...',
    successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

  const postData = body => fetch('./server.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body),
    credentials: 'include'
  });

  const clearInput = (idForm) => {
    const form = document.getElementById(idForm);
    [...form.elements]
    .filter(item =>
        item.tagName.toLowerCase() !== 'button' &&
        item.type !== 'button')
      .forEach(item =>
        item.value = '');
  };

  const removeStatusMessage = () => {
    const status = document.querySelector('.status-message'),
      popup = document.querySelector('.popup');
    if (!status) return;
    setTimeout(() => {
      status.remove();

      popup.style.display = 'none';
    }, 3000);
  };

  const processingForm = (idForm) => {
    const form = document.getElementById(idForm);
    const statusMessage = document.createElement('div');
    const emails = document.querySelectorAll('.form-email');
    const inputs = document.querySelectorAll('input');
    const formBtns = document.querySelectorAll('.form-btn');
    
    statusMessage.classList.add('status-message');
    statusMessage.style.cssText = 'font-size: 2rem; color: #fff';

    emails.forEach((el) => {
      el.setAttribute('required', '');
    });

    const btnSetAttribute = () => {
      formBtns.forEach((el) => {
        el.setAttribute('disabled', true);
      });
    };

    const btnRemoveAttribute = () => {
      formBtns.forEach((el) => {
        el.removeAttribute('disabled');
        
      });
    };

    inputs.forEach((el) => {
      el.addEventListener('input', (e) => {
        const target = e.target;
        if (target.closest('.error')) {
          btnSetAttribute();
        } else {
          btnRemoveAttribute();
        }
      });
      
      el.addEventListener('blur', e => {
        if (e.target.closest('input[placeholder="Ваше имя"]')) {
          let text = e.target.value;
          text = text[0].toUpperCase() + text.substring(1);
          e.target.value = text;
        }
      }, true);
    
    });
    
    form.addEventListener('submit', e => {
    e.preventDefault();
    statusMessage.textContent = loadMessage;
    form.appendChild(statusMessage);

    postData(Object.fromEntries(new FormData(form)))
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('status network not 200');
        }
        statusMessage.style.cssText = `font-size: 2rem;
            color: green; `;
        removeStatusMessage();
        statusMessage.textContent = successMessage;
        clearInput(idForm);
      })
      .catch((error) => {
        statusMessage.style.cssText = `font-size: 2rem;
            color: red; `;
        removeStatusMessage();
        statusMessage.textContent = errorMessage;
        console.error(error);
      });

  });

};
processingForm('form1');
processingForm('form2');
processingForm('form3');

};

export default sendForm;