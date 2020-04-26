const boxes = document.querySelectorAll('.box');

const styles = (el, e) => {
  el.style.left = e.offsetX + 'px';
  el.style.top = e.offsetY + 'px';  
  el.style.background = `hsl(255, 100%, ${Math.floor(Math.random() * 51) + 15}%)`;
}


boxes.forEach(box => {
  const fill = box.querySelector(".fill");
  const boxTitle = box.querySelector('h3');

  function ioCallback(payload) {
    if(payload[0].isIntersecting) {
      box.classList.add('show-box')
    }  else {
      box.classList.remove('show-box')
    }
  }

  const io = new IntersectionObserver(ioCallback);
  
  io.observe(box)

  box.addEventListener('mouseenter', (e) => {
    boxTitle.classList.add('green')
    styles(fill, e);
    fill.classList.add('grow');

});
  box.addEventListener('mouseleave', (e) => {
    boxTitle.classList.remove('green')
    styles(fill, e);
    fill.classList.remove('grow');
})
})

