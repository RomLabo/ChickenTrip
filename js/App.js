class App {
    constructor() {
        this.texture = new Image();
        this.texture.src = './textures/wood.png';
        
        this.setupMain = new SetupMain(this.texture);
        this.setupBackground = new SetupBackground(this.setupMain);
        this.setupChicken = new SetupChicken(this.setupMain);
        this.setupEnemies = new SetupEnemies(this.setupMain);

        this.currentScore = document.getElementById('current-score');
        this.currentScore.textContent = 0;
        this.requestAnimation;
    }
    main() {
        const gameMain = new GameMain(this.setupMain);
        const gameBackground = new GameBackgound(this.setupBackground);
        const gameChicken = new GameChicken(this.setupChicken);
        const gameEnemies = new GameEnemies(this.setupEnemies);

        const render = () => {
            gameMain.clearContext();
            gameBackground.render();
            gameChicken.render();
            gameEnemies.render(gameChicken.positions); 
            gameMain.render(gameEnemies);
            this.currentScore.textContent = gameEnemies.scorePoints;
            this.requestAnimation = requestAnimationFrame(render);

            if (this.setupMain.gameInProgess === false) {
                cancelAnimationFrame(this.requestAnimation);
            }   
        }
        
        document.addEventListener('click', () => {
            if (this.setupMain.gameInProgess === false) {
                this.requestAnimation = requestAnimationFrame(render);
                this.setupMain._gameInProgess = true;
            }
            gameChicken.bringUp();
        })

        gameBackground.render();
        imageIsLoaded.abort();
    }
}

const app = new App();
const imageIsLoaded = new AbortController();
app.texture.addEventListener('load', () => app.main(), { signal: imageIsLoaded.signal });
