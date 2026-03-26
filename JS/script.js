const textToType = "I'M A DESIGNER";
const typingSpeed = 150; 
let charIndex = 0;

function typeWriter() {
    if (charIndex < textToType.length) {
        document.getElementById("typewriter").innerHTML += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, typingSpeed);
    }
}

// Iniciar la animación cuando cargue la página
window.onload = typeWriter;