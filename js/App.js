class App {
    constructor() {
        this.texture = new Image();
        this.texture.src = './textures/wood.png';
        this.startClickEvent = 0;
        this.teleportation = false;
        this.startAnimation = document.getElementById('start-animation');
        this.lostAnimation;
    }
    main() {
        const settingGame = new SettingGame(this.texture);
        const settingBackground = new SettingBackground(settingGame);
        const settingChicken = new SettingChicken(settingGame);
        const settingButcher = new SettingButcher(settingGame);
        const gameBackground = new GameBackgound(settingBackground);
        const gameChicken = new GameChicken(settingChicken);
        const gameButcher = new GameButcher(settingButcher);
        
        const render = () => {
            let allCrash = [gameButcher.crash, false, false];
            let thereIsACrash = allCrash.some((element) => element === true);
            let indexOfCrash = allCrash.indexOf(true);

            switch (true) {
                case this.startClickEvent === 0:
                    gameBackground.renderBackground();
                    break;
                case this.startClickEvent >= 1 && thereIsACrash === true:
                    this.startAnimation.style.zIndex = 2;
                    settingGame._gameIndex = 0;
                    this.startClickEvent = 0;
                    gameButcher.crash = false;
                    // Restart game, add currentScore to bestScore
                    break;
                case this.teleportation === true:
                    console.log('Teleportation');
                    // Change background and chicken size, difficultyLevel ++, settingGame._gameIndex = 0;
                    break;
                default:
                    this.startAnimation.style.zIndex = -5;
                    settingGame._gameIndex ++;
                    gameBackground.renderBackground();
                    gameChicken.renderChicken();
                    gameButcher.renderButcher(gameChicken.crashPosition);   
            } 
            window.requestAnimationFrame(render);      
        }

        document.addEventListener('click', () => this.startClickEvent ++);
        document.addEventListener('click', () => gameChicken.bringUpChicken());
        settingGame.texture.addEventListener('load', render);
    }
}
const app = new App();
app.main();