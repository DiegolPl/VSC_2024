const slider = document.querySelector('.slider');
const radioButtons = document.querySelectorAll('.controls input[type="radio"]');

// radioButtons.forEach((radioButton, index) => {
//     radioButton.addEventListener('change', () => {
//         slider.style.transform = `translateX(-${index * 100}%)`;
//     });
// });

// const slider = document.querySelector('.slider');
// const radioButtons = document.querySelectorAll('.controls input[type="radio"]');
let currentIndex = 0;
const intervalTime = 5000; // Cambiar imagen cada 5 segundos

// Función para cambiar la imagen del slider
function changeSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
    radioButtons[currentIndex].checked = true;
}

// Función para avanzar al siguiente slide
function nextSlide() {
    currentIndex++;
    if (currentIndex === radioButtons.length) {
        currentIndex = 0; // Volver a la primera imagen cuando se llegue al final
    }
    changeSlide(currentIndex);
}

// Iniciar el slider automático
let interval = setInterval(nextSlide, intervalTime);

// Detener el slider automático cuando el usuario interactúa con los controles
radioButtons.forEach((radioButton, index) => {
    radioButton.addEventListener('change', () => {
        clearInterval(interval); // Detener el temporizador
        currentIndex = index;
        changeSlide(currentIndex)
        interval = setInterval(nextSlide, intervalTime); // Reiniciar el temporizador
    });
});