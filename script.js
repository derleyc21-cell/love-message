function abrirCarta(){
document.getElementById("carta").style.display="block";
}

function criarCoracao(){

const heart=document.createElement("div");
heart.innerHTML="❤️";
heart.classList.add("heart");

heart.style.left=Math.random()*100+"vw";
heart.style.fontSize=(Math.random()*20+10)+"px";
heart.style.position="fixed";
heart.style.top="-10px";
heart.style.animation="fall 5s linear";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},5000);

}

setInterval(criarCoracao,300);
