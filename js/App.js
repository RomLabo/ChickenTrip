class App {
    constructor() {
        this.texture = new Image();
        this.texture.src = './textures/wood.png';
        
        this.setupMain = new SetupMain(this.texture);
        this.setupBackground = new SetupBackground(this.setupMain);
        this.setupChicken = new SetupChicken(this.setupMain);
        this.setupButcher = new SetupButcher(this.setupMain);

        this.gameMain = new GameMain(this.setupMain);
        this.gameBackground = new GameBackgound(this.setupBackground);
        this.gameChicken = new GameChicken(this.setupChicken);
        this.gameButcher = new GameButcher(this.setupButcher);

        this.renderingInProgress = false;
        this.currentScore = document.getElementById('current-score');
        this.requestAnimation;
    }
    main() {
        const allCrash = [this.gameButcher];
        this.gameBackground.renderBackground();
        this.currentScore.textContent = 0;

        const render = () => {
            this.renderingInProgress = false;
            this.gameMain.render();
            this.gameBackground.renderBackground();
            this.gameChicken.renderChicken();
            this.gameButcher.renderButcher(this.gameChicken.position); 
            this.gameMain.detectCrash(allCrash);
            this.currentScore.textContent = this.gameButcher.count;
            if (!this.renderingInProgress) {
                this.renderingInProgress = true;
                this.requestAnimation = requestAnimationFrame(render);
            } 
            if (this.setupMain.gameState === 'stop') {
                this.gameMain.render();
                cancelAnimationFrame(this.requestAnimation);
            }   
        }
        
        document.addEventListener('click', () => {
            if (this.setupMain.gameState === 'stop') {
                this.requestAnimation = requestAnimationFrame(render);
            }
            this.gameMain.changeState();
            this.gameChicken.bringUpChicken();
        })
        imageIsLoaded.abort();
    }
}

const app = new App();
const imageIsLoaded = new AbortController();
app.texture.addEventListener('load', () => app.main(), { signal: imageIsLoaded.signal });
