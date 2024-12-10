// Nombre que queremos formar
const name = "Hellen";
const flowerContainer = document.getElementById("flowerContainer");

// Crear las letras y asignarles posiciones iniciales aleatorias
function createLetters() {
    for (let i = 0; i < name.length; i++) {
        const letter = document.createElement("div");
        letter.classList.add("letter");
        letter.textContent = name[i];

        // Asignar una posición aleatoria inicial
        letter.style.left = `${Math.random() * window.innerWidth}px`; 
        letter.style.top = `${Math.random() * window.innerHeight}px`; 
        flowerContainer.appendChild(letter);

        // Animar la letra para que se desplace hasta su posición final
        setTimeout(() => {
            letter.style.left = `${i * 100 + 50}px`; // Espaciado entre letras
            letter.style.top = '0px'; // Alinearlas en la parte superior
            letter.style.opacity = 1; // Hacer visible la letra
        }, i * 300); // Cada letra tiene un retraso en la animación
    }
}

// Crear los pétalos lilas cayendo por toda la pantalla
function createPetals() {
    const numPetals = 200; // Número de pétalos a generar

    for (let i = 0; i < numPetals; i++) {
        const petal = document.createElement("div");
        petal.classList.add("petal");
        petal.style.left = `${Math.random() * window.innerWidth}px`; // Posición aleatoria horizontal
        petal.style.animationDelay = `${Math.random() * 5}s`; // Retraso aleatorio para la caída
        document.body.appendChild(petal); // Los pétalos se agregan al <body> y no al contenedor del nombre
    }
}

// Inicialización
createLetters(); // Crear letras del nombre
createPetals();  // Crear pétalos cayendo



