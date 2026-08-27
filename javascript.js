// ============================================
// CARRUSEL DE FOTOS (index.html)
// Requiere en el HTML:
//   <div class="carousel">
//     <div class="slides" id="slides"> ...slides... </div>
//     <button class="btn-prev" onclick="move(-1)">&#8249;</button>
//     <button class="btn-next" onclick="move(1)">&#8250;</button>
//   </div>
// ============================================
 
let current = 0;
 
function move(dir) {
  const slides = document.querySelectorAll('.slide');
  if (!slides.length) return;
 
  current = (current + dir + slides.length) % slides.length;
  document.getElementById('slides').style.transform = `translateX(-${current * 100}%)`;
}
 
// Autoplay cada 5 segundos
let autoTimer = setInterval(() => move(1), 5000);
 
const mainCarousel = document.querySelector('.carousel');
if (mainCarousel) {
  mainCarousel.addEventListener('mouseenter', () => clearInterval(autoTimer));
  mainCarousel.addEventListener('mouseleave', () => {
    autoTimer = setInterval(() => move(1), 5000);
  });
}
 
