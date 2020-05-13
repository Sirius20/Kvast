let upButton = document.querySelector('.up-button');

window.onscroll = function () {
  if (window.pageYOffset > 400) {
    upButton.classList.add('up-button_show');
  } else {
    upButton.classList.remove('up-button_show');  
  }
}

upButton.onclick = function () {
  window.scrollTo(0, 0);
}