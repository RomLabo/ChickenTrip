class App {
    constructor() {
        this.texture = new Image();
        this.texture.src = './textures/wood.png';
        
        this.setupMain = new SetupMain(this.texture);
        this.setupBackground = new SetupBackground(this.setupMain);
        this.setupChicken = new SetupChicken(this.setupMain);
        this.setupButcher = new SetupButcher(this.setupMain);
    }
    main() {
        const gameMain = new GameMain(this.setupMain);
        const gameBackground = new GameBackgound(this.setupBackground);
        const gameChicken = new GameChicken(this.setupChicken);
        const gameButcher = new GameButcher(this.setupButcher);
        const allCrash = [gameButcher];
        
        const render = () => {
            switch (this.setupMain.gameState) {
                case 'game start':
                    gameBackground.renderBackground();
                    break;
                case 'game stop':
                    gameMain.displayAnimation();
                    this.setupMain._gameIndex = 0;
                    // add currentScore to bestScore
                    break;
                case 'game in progress':
                    this.setupMain._gameIndex ++;
                    gameBackground.renderBackground();
                    gameChicken.renderChicken();
                    gameButcher.renderButcher(gameChicken.crashPosition); 
                    gameMain.displayAnimation();
                    gameMain.detectCrash(allCrash);
                    break;
                default:
                    console.log('une erreur est survenue'); 
                    // add error content
            } 
            window.requestAnimationFrame(render);      
        }

        document.addEventListener('click', () => {
            this.setupMain._gameState = 'game in progress';
            gameChicken.bringUpChicken();
        })
        this.setupMain.texture.addEventListener('load', render);
    }
}
const app = new App();
app.main();