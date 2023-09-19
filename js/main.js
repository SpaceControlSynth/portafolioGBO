// JavaScript para generar letras aleatorias y colores en el fondo
const container = document.getElementById("matrix-container");
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const colors = ["#8A2BE2", "#9932CC", "#9400D3", "#4B0082", "#483D8B", "#00FF00"]; // Gama de colores

function createLetter() {
    const letter = document.createElement("span");
    letter.className = "matrix-letter";
    letter.textContent = characters.charAt(Math.floor(Math.random() * characters.length));
    letter.style.color = colors[Math.floor(Math.random() * colors.length)];
    letter.style.left = Math.random() * 100 + "vw"; // Posición horizontal aleatoria
    letter.style.animationDuration = Math.random() * 5 + 2 + "s"; // Duración de la animación aleatoria
    container.appendChild(letter);
    setTimeout(() => {
        letter.remove();
    }, 5000); // Elimina la letra después de 5 segundos
}

setInterval(createLetter, 100); // Genera letras cada 100 milisegundos

// Espera 4 segundos (4000 milisegundos) y luego oculta el loader
setTimeout(function() {
    var loader = document.querySelector('.loader-container');
    loader.style.display = 'none';
}, 4000);

//pagina de inicio inicio//
// Cuando se carga la página, muestra la imagen lentamente
window.onload = function() {
    document.getElementById('neon-image').style.opacity = '1';
};

// Sigue al mouse con un efecto de estela de neon
document.addEventListener('mousemove', function(e) {
    const cursor = document.querySelector('.cursor');
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';
    cursor.style.opacity = '1';
});

// Desvanece la estela de neon cuando el mouse se detiene
document.addEventListener('mouseout', function() {
    const cursor = document.querySelector('.cursor');
    cursor.style.opacity = '0';
});

// Agrega un evento de clic a la imagen
document.getElementById('neon-image').addEventListener('click', function() {
    // Cambia la clase del cuerpo para aplicar el degradado
    document.body.classList.add('image-clicked');
});
/*animaciones scroll*/