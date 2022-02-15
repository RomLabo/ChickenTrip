class App {
    constructor() {
        this.image = new Image();
        this.image.src = './textures/wood.png';
        this.startClickEvent = 0;
        this.collision = false;
        this.teleportation = false;
        this.startAnimation = document.getElementById('start-animation');
    }
    main() {
        let coordinateX = 0;
        let jump;
        const gameCanvas = new GameCanvas(this.image, coordinateX);
        
        const render = () => {
            switch (true) {
                case this.startClickEvent === 0:
                    gameCanvas.createBackground();
                    gameCanvas.createChicken();
                    break;
                case this.startClickEvent >= 1 && this.collision === true:
                    console.log('Restart');
                    // Restart game, add currentScore to bestScore
                    break;
                case this.teleportation === true:
                    console.log('Teleportation');
                    // Change background and chicken size, add a multiplier to coordinateX
                    break;
                default:
                    this.startAnimation.style.zIndex = -5;
                    gameCanvas.coordinateX ++;
                    gameCanvas.createBackground();
                    gameCanvas.createChicken();
                    gameCanvas.jumpAction(jump);
                    jump += gameCanvas.chickenJumpParams[1];
            } 
            window.requestAnimationFrame(render);      
        }

        document.addEventListener('click', () => this.startClickEvent ++);
        document.addEventListener('click', () => jump = gameCanvas.chickenJumpParams[0]);
        this.image.addEventListener('load', render);
    }
}
const app = new App();
app.main();