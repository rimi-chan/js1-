

  let timer = document.getElementById('timer');
  let start = document.getElementById('start');
  let stop = document.getElementById('stop');
  let reset = document.getElementById('reset');

  let hours = 0;
  let minutes = 0;
  let second = 0;
  let millisecond = 0;
  let interval;
  

  function stopWatch(){
    
  millisecond++;
  if(millisecond / 10 ==1){
    second++;
    millisecond = 0;
    if(second / 60 == 1){
      minutes++;
      second = 0;
      if(minutes / 60 ==1){
        hours++;
        minutes = 0;
      }
    }
     
  }
    
  timer.innerHTML = hours + ":" + minutes + ":" + second + ":"+ millisecond
    
  
  }

  

start.addEventListener("click", function() {
    interval=setInterval(stopWatch, 100);
    start.disabled = true;
    stop.disabled =false;
    reset.disabled=false;
    
    
});

stop.addEventListener("click",function(){
    clearInterval(interval);
    start.disabled = false;
    stop.disabled =true;
    
});


reset.addEventListener("click",function() {
    clearInterval(interval);
    timer.innerHTML="0:0:0:0";
    hours = 0;
    minutes = 0;
    second= 0;
    millisecond= 0;
    reset.disabled =true;
});

