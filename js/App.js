class App {
    constructor() {
        this.texture = new Image();
        this.texture.src = './textures/bg-wood.png';
        this.requestAnimation;
        
        this.setupMain = new SetupMain(this.texture);
        this.setupBackground = new SetupBackground(this.setupMain);
        this.setupChicken = new SetupChicken(this.setupMain);
        this.setupButcher = new SetupButcher(this.setupMain);
        this.setupEagle = new SetupEagle(this.setupMain);
    }
    main() {
        const gameMain = new GameMain(this.setupMain);
        const gameBackground = new GameBackgound(this.setupBackground);
        const gameChicken = new GameChicken(this.setupChicken);
        const gameButcher = new GameEnemies(this.setupButcher);
        const gameEagle = new GameEnemies(this.setupEagle);

        const render = () => {
            gameMain.clearContext();
            gameBackground.render();
            gameChicken.render();
            gameButcher.render(gameChicken.allCoordinates);
            gameEagle.render(gameChicken.allCoordinates);
            gameMain.render([gameButcher, gameEagle]);
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
