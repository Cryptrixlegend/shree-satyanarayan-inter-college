
// =========================
// 🔥 LOADER FIX (100% SAFE)
// =========================

window.addEventListener("load", () => {

  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.opacity = "0";

    setTimeout(() => {
      loader.style.display = "none";
    }, 500);

  }, 3000);

});


// =========================
// 🌙 DARK MODE
// =========================
function toggleDark(){
document.body.classList.toggle("dark");
}


// =========================
// 🔥 SMOOTH SCROLL
// =========================
function scrollDown(){
document.querySelector(".section").scrollIntoView({
behavior:"smooth"
});
}


// =========================
// 🎯 PARTICLES FIXED ENGINE
// =========================

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<50;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2,
dx:(Math.random()-0.5)*0.5,
dy:(Math.random()-0.5)*0.5
});
}

function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{
p.x += p.dx;
p.y += p.dy;

if(p.x<0||p.x>canvas.width) p.dx *= -1;
if(p.y<0||p.y>canvas.height) p.dy *= -1;

ctx.beginPath();
ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
ctx.fillStyle="rgba(56,189,248,0.5)";
ctx.fill();
});

requestAnimationFrame(animate);
}

animate();
