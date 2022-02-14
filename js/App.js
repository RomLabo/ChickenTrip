class App {
    constructor() {
        this.image = new Image();
        this.image.src = './textures/wood.png';
    }
    main() {
        let coordinateX = 0;
        const gameCanvas = new GameCanvas(this.image, coordinateX);
        const render = () => {
            gameCanvas.coordinateX ++;
            gameCanvas.createBackground();
            gameCanvas.createChicken();
            window.requestAnimationFrame(render);
        }
        this.image.onload = render();
    }
}
const app = new App();
app.main();