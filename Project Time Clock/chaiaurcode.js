let clock=document.getElementById('clock');

setInterval(function(){
    const myDate=new Date();
    clock.innerHTML=`${myDate.toLocaleTimeString()}`;
}, 1000)
