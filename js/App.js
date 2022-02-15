class App {
    constructor() {
        this.startClickEvent = 0;
        this.collision = false;
        this.teleportation = false;
        this.startAnimation = document.getElementById('start-animation');
    }
    main() {
        const gameSetting = new GameSetting();
        const gameCanvas = new GameCanvas(gameSetting);
        
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
                    // Change background and chicken size, difficultyLevel ++, gameSetting._gameIndex = 0;
                    break;
                default:
                    this.startAnimation.style.zIndex = -5;
                    gameSetting._gameIndex ++;
                    gameCanvas.createBackground();
                    gameCanvas.createChicken();
                    gameCanvas.chickenJump();
                    gameCanvas.jump += gameCanvas.chickenJumpParams[1];
            } 
            window.requestAnimationFrame(render);      
        }

        document.addEventListener('click', () => this.startClickEvent ++);
        document.addEventListener('click', () => gameCanvas.jump = gameCanvas.chickenJumpParams[0]);
        gameSetting.texture.addEventListener('load', render);
    }
}
const app = new App();
app.main();