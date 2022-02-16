class App {
    constructor() {
        this.texture = new Image();
        this.texture.src = './textures/wood.png';

        this.startClickEvent = 0;
        this.collision = false;
        this.teleportation = false;
        this.startAnimation = document.getElementById('start-animation');
    }
    main() {
        const gameSetting = new GameSetting(this.texture);
        const gameBackground = new GameBackgound(gameSetting);
        const gameChicken = new GameChicken(gameSetting);
        
        const render = () => {
            switch (true) {
                case this.startClickEvent === 0:
                    gameBackground.renderBackground();
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
                    gameBackground.renderBackground();
                    gameChicken.renderChicken();
                    gameChicken.jump += gameChicken.chickenJumpParams[1];
            } 
            window.requestAnimationFrame(render);      
        }

        document.addEventListener('click', () => this.startClickEvent ++);
        document.addEventListener('click', () => gameChicken.jump = gameChicken.chickenJumpParams[0]);
        window.addEventListener('resize', () => {
            console.log(window.innerWidth)
            console.log(window.innerHeight)
            console.log(screen.width)
            console.log(screen.height)
        })
        gameSetting.texture.addEventListener('load', render);
    }
}
const app = new App();
app.main();