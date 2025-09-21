// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "La más bella, ella es un ángel que vive en la tierra", time: 5 },
  { text: "Yo lo sé, Y deja huella", time: 9 },
  { text: "vuela muy alto como los cometas", time: 10 },
  { text: "vuela muy alto como los cometas", time: 12 },
  { text: "Enciende el fuego al pasar", time: 16 },
  { text: "¿Qué puedo hacer para atraparla?", time: 17 },
  { text: "No soy el único que quiere conquistarla", time: 22 },
  { text: "No soy el único que quiere conquistarla", time: 24 },
  { text: "La más bella princesa inalcanzable que todos desean", time: 29 },
  { text: "No hay en el mundo, nadie como ella", time: 33 },
  { text: "Me tiene atrapado, no lo puedo evitar", time: 36 },
  { text: "No puedo escapar", time: 38 },
  { text: "La más bella, Desde que te vi no te dejo de pensar", time: 40 },
  { text: "La más bella, Desde que te vi no te dejo de pensar", time: 42 },
  { text: "Y cuando estoy dormido te vuelvo a soñar", time: 47 },
  { text: "Me tienes atrapado, no lo puedo evitar", time: 49 },
  { text: "No puedo escapar", time: 53 },

  { text: "No cambiaría nada de ti porque así me vuelves loco", time: 64 },
  { text: "No sé qué hacer para que pienses en mí", time: 69 },
  { text: "Te daría mi alma si lo deseas, solo mírame (mírame)", time: 73 },
  
  { text: "¿Qué puedo hacer para atraparla?", time: 78 },
  { text: "No soy el único que quiere conquistarla", time: 83 },
  { text: "No soy el único que quiere conquistarla", time: 85 },
  { text: "La más bella princesa inalcanzable que todos desean", time: 88 },
  { text: "No hay en el mundo, nadie como ella", time: 92 },
  { text: "Me tiene atrapado, no lo puedo evitar", time: 95 },
  { text: "No puedo escapar", time: 97 },
  { text: "La más bella, Desde que te vi no te dejo de pensar", time: 99 },
  { text: "La más bella, Desde que te vi no te dejo de pensar", time: 101 },
  { text: "Y cuando estoy dormido te vuelvo a soñar", time: 105 },
  { text: "Me tienes atrapado, no lo puedo evitar", time: 107 },
  { text: "No puedo escapar", time: 113 },

  { text: "La más bella princesa inalcanzable que todos desean", time: 129 },
  { text: "No hay en el mundo, nadie como ella", time: 133 },
  { text: "Me tiene atrapado, no lo puedo evitar", time: 137 },
  { text: "No puedo escapar", time: 139 },
  { text: "La más bella, Desde que te vi no te dejo de pensar", time: 141 },
  { text: "La más bella, Desde que te vi no te dejo de pensar", time: 143 },
  { text: "Y cuando estoy dormido te vuelvo a soñar", time: 148 },
  { text: "Me tienes atrapado, no lo puedo evitar", time: 151 },
  { text: "No puedo escapar", time: 155 },
  { text: "Nadie brilla como ella", time: 161 },
  { text: "Yo le bajo las estrellas", time: 163 },
  { text: "Yo haría lo que tú quieras", time: 166 },
  { text: "La más bella", time: 168 },
  { text: "¡La más bella!", time: 169 },
  { text: "¡La más bella!", time: 170 },
  { text: "LA MAS BELLA ES ROSITA", time: 172 },
  { text: "LA MAS BELLA ES ROSITA", time: 174 },
  { text: "LA MAS BELLA ES ROSITA", time: 176 },
  { text: "LA MAS BELLA ES ROSITA", time: 178 },
];
const progressBar = document.getElementById('progressBar');
const timeDisplay = document.getElementById('timeDisplay');
var audio = document.getElementById('audio');; // Asegúrate de que el archivo esté en la ubicación correcta

var btnRegalo = document.getElementById('btn-regalo');
var reproductor = document.getElementById('reproductor');
reproductor.style.display = 'none';

function regalo(){
  btnRegalo.hidden=true;
  reproductor.style.display = 'flex';
  // Empezar el slideshow
 
  setInterval(changeImage, 12000); // cada 8 segundos
  reproducirAudio();
}
// Actualizar la barra de progreso
audio.addEventListener('timeupdate', () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;

    // Actualizar el tiempo mostrado
    const minutes = Math.floor(audio.currentTime / 60);
    const seconds = Math.floor(audio.currentTime % 60);
    timeDisplay.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
});

// Cambiar la posición de la canción
progressBar.addEventListener('input', () => {
    const value = progressBar.value;
    audio.currentTime = (value / 100) * audio.duration;
});

setInterval(updateLyrics, 1000);
function reproducirAudio(){
  if (audio.paused) {
    audio.play();  // Si está pausado, lo reproducimos
  } else {
    audio.pause();
  }
}
function replay() {
    audio.replay();
}
// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.2; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}



//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);




const images = [
  'Portada/img2.jpg',
  'Portada/img1.jpg',
  'Portada/img3.jpg',
  'Portada/img4.jpg',
  'Portada/img5.jpg',
  'Portada/img6.jpg',
  'Portada/img7.jpg',
  'Portada/img8.jpg',
  'Portada/img9.jpg',
  'Portada/img10.jpg',
  'Portada/img11.jpg',
  'Portada/img12.jpg',
];

let currentIndex = 0;
const img = document.getElementById('album-cover');

function changeImage() {
  // Fade out
  img.style.opacity = 0;

  setTimeout(() => {
    // Cambiar imagen
    currentIndex = (currentIndex + 1) % images.length;
    img.src = images[currentIndex];

    // Fade in
    img.style.opacity = 1;
  }, 1000); // esperar a que termine el fade-out
}
changeImage();
