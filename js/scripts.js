const root = document.querySelector(':root');
const slider = document.querySelector('#box-shadow-up-down');

slider.addEventListener('input', function(){

    root.style.setProperty("--box-shadow-offset-x", slider.value + "px");
    
  });