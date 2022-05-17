class App {
    constructor() {
        this.texture = new Image();
        this.allTexture = ['./textures/bg-wood.png', './textures/bg-moon.png'];
        this.texture.src = this.allTexture[0];
        this.requestAnimation;
        
        this.setupMain = new SetupMain(this.texture);
        this.setupBackground = new SetupBackground(this.setupMain);
        this.setupChicken = new SetupChicken(this.setupMain);
        this.setupButcher = new SetupButcher(this.setupMain);
        this.setupEagle = new SetupEagle(this.setupMain);
        this.setupTempGate = new SetupTempGate(this.setupMain);
    }
    main() {
        const gameMain = new GameMain(this.setupMain);
        const gameBackground = new GameBackgound(this.setupBackground);
        const gameChicken = new GameChicken(this.setupChicken);
        const gameButcher = new GameEnemies(this.setupButcher);
        const gameEagle = new GameEnemies(this.setupEagle);
        const gameTempGate = new GameTempGate(this.setupTempGate);

        const render = () => {
            gameMain.clearContext();
            gameBackground.render();
            gameChicken.render();
            gameButcher.render(gameChicken.allCoordinates);
            gameEagle.render(gameChicken.allCoordinates);
            gameTempGate.render(gameChicken.allCoordinates);
            gameMain.render([gameButcher, gameEagle]);
            this.texture.src = gameTempGate.isTeleportation % 2 !== 0 ? this.allTexture[1]:this.allTexture[0];
            this.requestAnimation = requestAnimationFrame(render);
            if (this.setupMain.gameInProgess === false) {
                cancelAnimationFrame(this.requestAnimation);
                gameTempGate.isTeleportation = 0;
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

const imageIsLoaded = new AbortController();

const interV = setInterval(() => {
    if (window.innerWidth > window.innerHeight) {
        const app = new App();
        app.texture.addEventListener('load', () => app.main(), { signal: imageIsLoaded.signal });
        document.getElementById('screen-msg').style.display = 'none';
        document.getElementById('start-animation').style.animation = 'disappear 4s';
        document.querySelectorAll('span.start__letter').forEach((elm) => elm.style.animation = 'move 1s forwards');
        clearInterval(interV);
    }
}, 2);


