const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const image = new Image();
image.src = './textures/wood.png';

let coordinateX = 0;
console.log(10 % canvas.width + canvas.width)

const render = () => {
    coordinateX ++;
    
    // Background
    context.drawImage(image, 0, 0, 768, 432, -(coordinateX % canvas.width) + canvas.width, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, 768, 432, -(coordinateX % canvas.width), 0, canvas.width, canvas.height);
    
    // Chicken
    context.drawImage(image, 0, 496, 65, 65, canvas.width * .04, canvas.height * .8, canvas.width * .07, canvas.width * .07)

    window.requestAnimationFrame(render)
}

image.onload = render();