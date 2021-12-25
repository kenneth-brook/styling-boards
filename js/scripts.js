const root = document.querySelector(':root');

// Control Box 1
const slider1 = document.querySelector('#box-shadow-offset-x');

slider1.addEventListener('input', function(){

  root.style.setProperty("--box-shadow-offset-x", slider1.value + "px");
    
});

const slider2 = document.querySelector('#box-shadow-offset-y');
  
slider2.addEventListener('input', function(){
  
  root.style.setProperty("--box-shadow-offset-y", slider2.value + "px");
      
});

const slider3 = document.querySelector('#box-shadow-blur');
  
slider3.addEventListener('input', function(){
    
  root.style.setProperty("--box-shadow-blur", slider3.value + "px");
        
});

const slider4 = document.querySelector('#box-shadow-spread');
  
slider4.addEventListener('input', function(){
      
  root.style.setProperty("--box-shadow-spread", slider4.value + "px");
          
});

// Control Box 2