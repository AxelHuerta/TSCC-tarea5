// Declaración de variables
const canvasElement = document.getElementById("canvas");
const canvas = canvasElement.getContext("2d");
const video = document.getElementById("video");

const btnColor = document.getElementById("btn-color");
const colorsOptions = [
  "red",
  "blue",
  "green",
  "purple",
  "orange",
  "white",
  "pink",
  "gray",
];

/*
 * Clase logo
 */
class Logo {
  constructor(color, posicionX, posicionY, rotacion) {
    this.color = color;
    this.posicionX = posicionX;
    this.posicionY = posicionY;
    this.rigacion = rotacion;
  }

  /*
   * Función para crear el logo
   */
  createLogo() {
    canvas.strokeStyle = "#fff"; // Color del borde
    canvas.lineWidth = 5; // Grosor del borde

    // Dibujar el primer triángulo
    canvas.beginPath();
    canvas.moveTo(this.posicionX, this.posicionY);
    canvas.lineTo(this.posicionX + 100, this.posicionY);
    canvas.lineTo(this.posicionX, this.posicionY + 100);
    canvas.closePath();
    canvas.stroke();

    canvas.fillStyle = this.color; // Color de relleno
    canvas.fill();

    // Dibujar el segundo triángulo
    canvas.beginPath();
    canvas.moveTo(this.posicionX + 120, this.posicionY);
    canvas.lineTo(this.posicionX + 120, this.posicionY + 100);
    canvas.lineTo(this.posicionX + 20, this.posicionY + 100);
    canvas.closePath();
    canvas.stroke();

    canvas.fill();
  }
}

/*
 * Función para crear los logos
 */
const createLogos = () => {
  const logo1 = new Logo(randomColor(), 20, 20);
  logo1.createLogo();
  const logo2 = new Logo(randomColor(), 180, 180);
  logo2.createLogo();
  const logo3 = new Logo(randomColor(), 370, 380);
  logo3.createLogo();
};

/*
 * Función para obtener un color aleatorio
 */
const randomColor = () => {
  return colorsOptions[Math.floor(Math.random() * colorsOptions.length)];
};

// Evento para cambiar los colores de los logos
btnColor.addEventListener("click", () => {
  if (video.paused === false) {
    createLogos();
  }
});

// Llamado a la función para crear los logos
createLogos();
