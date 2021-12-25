const root = document.querySelector(':root');

// Control Box 1
const slider1 = document.querySelector('#box-shadow-offset-x');
const output1 = document.getElementById("output1");

slider1.addEventListener('input', function(){

  root.style.setProperty("--box-shadow-offset-x", slider1.value + "px");
  output1.innerHTML = this.value;
    
});

const slider2 = document.querySelector('#box-shadow-offset-y');
const output2 = document.getElementById("output2");

slider2.addEventListener('input', function(){
  
  root.style.setProperty("--box-shadow-offset-y", slider2.value + "px");
  output2.innerHTML = this.value;
      
});

const slider3 = document.querySelector('#box-shadow-blur');
const output3 = document.getElementById("output3");

slider3.addEventListener('input', function(){
    
  root.style.setProperty("--box-shadow-blur", slider3.value + "px");
  output3.innerHTML = this.value;
        
});

const slider4 = document.querySelector('#box-shadow-spread');
const output4 = document.getElementById("output4");

slider4.addEventListener('input', function(){
      
  root.style.setProperty("--box-shadow-spread", slider4.value + "px");
  output4.innerHTML = this.value;
          
});

// Control Box 2
const slider21 = document.querySelector('#text-shadow-offset-x');
const output21 = document.getElementById("output21");

slider21.addEventListener('input', function(){

  root.style.setProperty("--text-shadow-offset-x", slider21.value + "px");
  output21.innerHTML = this.value;
    
});

const slider22 = document.querySelector('#text-shadow-offset-y');
const output22 = document.getElementById("output22");

slider22.addEventListener('input', function(){
  
  root.style.setProperty("--text-shadow-offset-y", slider22.value + "px");
  output22.innerHTML = this.value;
      
});

const slider23 = document.querySelector('#text-shadow-blur');
const output23 = document.getElementById("output23");

slider23.addEventListener('input', function(){
    
  root.style.setProperty("--text-shadow-blur", slider23.value + "px");
  output23.innerHTML = this.value;
        
});
