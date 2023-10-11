
setInterval(()=>{

as=new Date();
let date=as.toLocaleDateString();
let time =as.getHours()+':'+as.getMinutes()+':'+as.getSeconds();

document.getElementById('time').innerHTML= time;
document.getElementById('date').innerHTML= date;

},1000);






