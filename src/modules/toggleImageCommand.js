const toggleImageCommand = () => {
  const command = document.querySelectorAll('#command .row img');

  let url;

  command.forEach(el => {

    el.addEventListener('mouseenter', (e) => {
      let target = e.target;
      url = e.target.src;
      target.src = target.getAttribute('data-img');
    });

    el.addEventListener('mouseout', (e) => {
      let target = e.target;
      target.src = url;
    });

  });

};

export default toggleImageCommand;