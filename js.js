const after = document.querySelector('.after-container');
const befor = document.querySelector('.befor-container');
const silder = document.querySelector('.slider');
const container = document.querySelector('.container');


var drag = (e)=>{
let posX = e.layerX;
after.style.width =  posX+"px";
silder.style.left = posX+"px";
console.log(container.offsetWidth );
if(posX<30){
    silder.style.left = "0px";
    after.style.width =  "0px";
}else if(posX+30>container.offsetWidth){
    silder.style.left =container.offsetWidth +"px";
    after.style.width =  container.offsetWidth +"px";

}
}
container.addEventListener('mousemove',drag);