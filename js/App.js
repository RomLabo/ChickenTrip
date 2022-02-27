class App {
    constructor() {
        this.texture = new Image();
        this.texture.src = './textures/wood.png';
        
        this.setupMain = new SetupMain(this.texture);
        this.setupBackground = new SetupBackground(this.setupMain);
        this.setupChicken = new SetupChicken(this.setupMain);
        this.setupButcher = new SetupButcher(this.setupMain);

        this.renderingInProgress = false;
        this.currentScore = document.getElementById('current-score');
        this.currentScore.textContent = 0;
        this.requestAnimation;
    }
    main() {
        const gameMain = new GameMain(this.setupMain);
        const gameBackground = new GameBackgound(this.setupBackground);
        const gameChicken = new GameChicken(this.setupChicken);
        const gameButcher = new GameButcher(this.setupButcher);

        const allCrash = [gameButcher];
        gameBackground.render();

        const render = () => {
            gameMain.clearContext();
            gameBackground.render();
            gameChicken.render();
            gameButcher.render(gameChicken.position); 
            gameMain.render(allCrash);
            this.currentScore.textContent = gameButcher.count;
            this.renderingInProgress = false;

            if (!this.renderingInProgress) {
                this.renderingInProgress = true;
                this.requestAnimation = requestAnimationFrame(render);
            }
            if (this.setupMain.gameState === 'stop') {
                cancelAnimationFrame(this.requestAnimation);
            }   
        }
        
        document.addEventListener('click', () => {
            if (this.setupMain.gameState === 'stop') {
                this.requestAnimation = requestAnimationFrame(render);
                gameMain.changeState();
            }
            gameChicken.bringUp();
        })
        imageIsLoaded.abort();
    }
}

const app = new App();
const imageIsLoaded = new AbortController();
app.texture.addEventListener('load', () => app.main(), { signal: imageIsLoaded.signal });
