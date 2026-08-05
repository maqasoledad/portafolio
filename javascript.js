/* =============================================
   PALETA DE COLORES
   #0d0010  negro profundo (fondo principal)
   #1a0030  morado oscuro (fondo nav/footer)
   #3b006e  morado base
   #7b2fff  morado vibrante (acentos)
   #c49fff  morado claro (texto secundario)
   #ffffff  blanco (texto principal)
   ============================================= */
 
@import url('https://fonts.googleapis.com/css2?family=Inknut+Antiqua:wght@400;600;800&display=swap');
 
/* Si Ink Free no está disponible via Google Fonts, se usa como nombre local
   y se cae a Inknut Antiqua como sustituto cercano */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
 
body {
  background-color: #0d0010;
  color: #ffffff;
  font-family: 'Ink Free', 'Inknut Antiqua', 'Palatino Linotype', serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
 
/* ---- HEADER & NAV ---- */
header {
  background: linear-gradient(135deg, #1a0030 0%, #3b006e 100%);
  border-bottom: 2px solid #7b2fff;
  padding: 0 0 20px 0;
}
 
nav {
  background-color: #0d0010;
  padding: 12px 40px;
  border-bottom: 1px solid #3b006e;
}
 
nav ul {
  list-style: none;
  display: flex;
  gap: 30px;
}
 
nav ul li a {
  color: #c49fff;
  text-decoration: none;
  font-size: 1rem;
  letter-spacing: 0.05em;
  transition: color 0.25s;
}
 
nav ul li a:hover {
  color: #7b2fff;
  text-shadow: 0 0 8px #7b2fff88;
}
 
header h1 {
  text-align: center;
  font-size: 2.6rem;
  font-weight: 800;
  color: #ffffff;
  padding: 24px 20px 10px;
  text-shadow: 0 0 16px #7b2fff99;
  letter-spacing: 0.08em;
}
 
/* ---- MAIN ---- */
main {
  flex: 1;
  padding: 40px 5%;
  display: flex;
  flex-direction: column;
  gap: 40px;
}
 
/* ---- HERO: tabla carrusel + sobre mí ---- */
.hero-section {
  background: #1a0030;
  border: 1px solid #3b006e;
  border-radius: 8px;
  padding: 30px;
}
 
.hero-table {
  display: flex;
  align-items: flex-start;
  gap: 40px;
}
 
/* --- Columna izquierda (carrusel) --- */
.hero-left {
  flex: 0 0 auto;
}
 
/* ---- CARRUSEL ---- */
.carousel {
  position: relative;
  width: 378px;   /* ~10 cm a 96dpi */
  height: 378px;
  overflow: hidden;
  border: 3px solid #000000;
  border-radius: 4px;
  background: #0d0010;
  box-shadow: 0 0 20px #7b2fff44;
}
 
.slides {
  display: flex;
  transition: transform 0.5s ease;
  height: 100%;
}
 
.slide {
  min-width: 378px;
  height: 378px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
 
.slide img {
  width: 378px;
  height: 378px;
  object-fit: cover;
  display: block;
}
 
.btn-prev,
.btn-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #3b006ecc;
  color: #ffffff;
  border: 1px solid #7b2fff;
  font-size: 2rem;
  width: 36px;
  height: 48px;
  cursor: pointer;
  z-index: 10;
  border-radius: 3px;
  transition: background 0.2s;
  line-height: 1;
}
 
.btn-prev { left: 6px; }
.btn-next { right: 6px; }
 
.btn-prev:hover,
.btn-next:hover {
  background: #7b2fff;
}
 
/* --- Columna derecha (sobre mí) --- */
.hero-right {
  flex: 1;
  padding-top: 10px;
}
 
.hero-right h2 {
  font-size: 1.8rem;
  color: #7b2fff;
  margin-bottom: 18px;
  border-bottom: 1px solid #3b006e;
  padding-bottom: 8px;
  text-shadow: 0 0 10px #7b2fff66;
}
 
.hero-right p {
  font-size: 1.1rem;
  color: #c49fff;
  margin-bottom: 14px;
  line-height: 1.7;
}
 
.school {
  color: #ffffff;
  font-weight: 600;
}
 
/* ---- SECCIONES DE TARJETAS ---- */
.card-section {
  background: #1a0030;
  border: 1px solid #3b006e;
  border-radius: 8px;
  padding: 28px 32px;
}
 
.card-section h2 {
  font-size: 1.5rem;
  color: #7b2fff;
  margin-bottom: 16px;
  text-shadow: 0 0 8px #7b2fff55;
}
 
.card-section ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
 
.card-section ul li a {
  color: #c49fff;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.2s;
}
 
.card-section ul li a:hover {
  color: #7b2fff;
}
 
.card-section ul li::before {
  content: '◆ ';
  color: #3b006e;
  font-size: 0.7rem;
}
 
.card-section p {
  color: #c49fff;
  margin-bottom: 16px;
  line-height: 1.6;
}
 
/* ---- BOTÓN LINK ---- */
.btn-link {
  display: inline-block;
  background: #3b006e;
  color: #ffffff;
  text-decoration: none;
  padding: 10px 24px;
  border-radius: 4px;
  border: 1px solid #7b2fff;
  font-family: inherit;
  font-size: 0.95rem;
  transition: background 0.25s, box-shadow 0.25s;
}
 
.btn-link:hover {
  background: #7b2fff;
  box-shadow: 0 0 12px #7b2fff88;
}
 
/* ---- FOOTER ---- */
footer {
  background: #1a0030;
  border-top: 2px solid #3b006e;
  text-align: center;
  padding: 18px;
  color: #c49fff;
  font-size: 0.85rem;
  letter-spacing: 0.04em;
}
 
/* ---- RESPONSIVE ---- */
@media (max-width: 820px) {
  .hero-table {
    flex-direction: column;
    align-items: center;
  }
 
  .carousel,
  .slide,
  .slide img {
    width: 300px;
    height: 300px;
  }
 
  .slides .slide {
    min-width: 300px;
  }
 
  header h1 {
    font-size: 1.8rem;
  }
}
 /* =============================================
   PALETA DE COLORES
   #0d0010  negro profundo (fondo principal)
   #1a0030  morado oscuro (fondo nav/footer)
   #3b006e  morado base
   #7b2fff  morado vibrante (acentos)
   #c49fff  morado claro (texto secundario)
   #ffffff  blanco (texto principal)
   ============================================= */
 
@import url('https://fonts.googleapis.com/css2?family=Inknut+Antiqua:wght@400;600;800&display=swap');
 
/* Si Ink Free no está disponible via Google Fonts, se usa como nombre local
   y se cae a Inknut Antiqua como sustituto cercano */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
 
body {
  background-color: #0d0010;
  color: #ffffff;
  font-family: 'Ink Free', 'Inknut Antiqua', 'Palatino Linotype', serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
 
/* ---- HEADER & NAV ---- */
header {
  background: linear-gradient(135deg, #1a0030 0%, #3b006e 100%);
  border-bottom: 2px solid #7b2fff;
  padding: 0 0 20px 0;
}
 
nav {
  background-color: #0d0010;
  padding: 12px 40px;
  border-bottom: 1px solid #3b006e;
}
 
nav ul {
  list-style: none;
  display: flex;
  gap: 30px;
}
 
nav ul li a {
  color: #c49fff;
  text-decoration: none;
  font-size: 1rem;
  letter-spacing: 0.05em;
  transition: color 0.25s;
}
 
nav ul li a:hover {
  color: #7b2fff;
  text-shadow: 0 0 8px #7b2fff88;
}
 
header h1 {
  text-align: center;
  font-size: 2.6rem;
  font-weight: 800;
  color: #ffffff;
  padding: 24px 20px 10px;
  text-shadow: 0 0 16px #7b2fff99;
  letter-spacing: 0.08em;
}
 
/* ---- MAIN ---- */
main {
  flex: 1;
  padding: 40px 5%;
  display: flex;
  flex-direction: column;
  gap: 40px;
}
 
/* ---- HERO: tabla carrusel + sobre mí ---- */
.hero-section {
  background: #1a0030;
  border: 1px solid #3b006e;
  border-radius: 8px;
  padding: 30px;
}
 
.hero-table {
  display: flex;
  align-items: flex-start;
  gap: 40px;
}
 
/* --- Columna izquierda (carrusel) --- */
.hero-left {
  flex: 0 0 auto;
}
 
/* ---- CARRUSEL ---- */
.carousel {
  position: relative;
  width: 378px;   /* ~10 cm a 96dpi */
  height: 378px;
  overflow: hidden;
  border: 3px solid #000000;
  border-radius: 4px;
  background: #0d0010;
  box-shadow: 0 0 20px #7b2fff44;
}
 
.slides {
  display: flex;
  transition: transform 0.5s ease;
  height: 100%;
}
 
.slide {
  min-width: 378px;
  height: 378px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
 
.slide img {
  width: 378px;
  height: 378px;
  object-fit: cover;
  display: block;
}
 
.btn-prev,
.btn-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #3b006ecc;
  color: #ffffff;
  border: 1px solid #7b2fff;
  font-size: 2rem;
  width: 36px;
  height: 48px;
  cursor: pointer;
  z-index: 10;
  border-radius: 3px;
  transition: background 0.2s;
  line-height: 1;
}
 
.btn-prev { left: 6px; }
.btn-next { right: 6px; }
 
.btn-prev:hover,
.btn-next:hover {
  background: #7b2fff;
}
 
/* --- Columna derecha (sobre mí) --- */
.hero-right {
  flex: 1;
  padding-top: 10px;
}
 
.hero-right h2 {
  font-size: 1.8rem;
  color: #7b2fff;
  margin-bottom: 18px;
  border-bottom: 1px solid #3b006e;
  padding-bottom: 8px;
  text-shadow: 0 0 10px #7b2fff66;
}
 
.hero-right p {
  font-size: 1.1rem;
  color: #c49fff;
  margin-bottom: 14px;
  line-height: 1.7;
}
 
.school {
  color: #ffffff;
  font-weight: 600;
}
 
/* ---- SECCIONES DE TARJETAS ---- */
.card-section {
  background: #1a0030;
  border: 1px solid #3b006e;
  border-radius: 8px;
  padding: 28px 32px;
}
 
.card-section h2 {
  font-size: 1.5rem;
  color: #7b2fff;
  margin-bottom: 16px;
  text-shadow: 0 0 8px #7b2fff55;
}
 
.card-section ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
 
.card-section ul li a {
  color: #c49fff;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.2s;
}
 
.card-section ul li a:hover {
  color: #7b2fff;
}
 
.card-section ul li::before {
  content: '◆ ';
  color: #3b006e;
  font-size: 0.7rem;
}
 
.card-section p {
  color: #c49fff;
  margin-bottom: 16px;
  line-height: 1.6;
}
 
/* ---- BOTÓN LINK ---- */
.btn-link {
  display: inline-block;
  background: #3b006e;
  color: #ffffff;
  text-decoration: none;
  padding: 10px 24px;
  border-radius: 4px;
  border: 1px solid #7b2fff;
  font-family: inherit;
  font-size: 0.95rem;
  transition: background 0.25s, box-shadow 0.25s;
}
 
.btn-link:hover {
  background: #7b2fff;
  box-shadow: 0 0 12px #7b2fff88;
}
 
/* ---- FOOTER ---- */
footer {
  background: #1a0030;
  border-top: 2px solid #3b006e;
  text-align: center;
  padding: 18px;
  color: #c49fff;
  font-size: 0.85rem;
  letter-spacing: 0.04em;
}
 
/* ---- RESPONSIVE ---- */
@media (max-width: 820px) {
  .hero-table {
    flex-direction: column;
    align-items: center;
  }
 
  .carousel,
  .slide,
  .slide img {
    width: 300px;
    height: 300px;
  }
 
  .slides .slide {
    min-width: 300px;
  }
 
  header h1 {
    font-size: 1.8rem;
  }
}
 