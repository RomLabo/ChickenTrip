class App {
    constructor() {
        this.texture = document.getElementById('main-texture');
        this.requestAnimation;
        
        this.setupMain = new SetupMain(this.texture);
        this.setupBackground = new SetupBackground(this.setupMain);
        this.setupChicken = new SetupChicken(this.setupMain);
        this.setupButcher = new SetupButcher(this.setupMain);
        this.setupEagle = new SetupEagle(this.setupMain);
        this.setupTempGate = new SetupTempGate(this.setupMain);
        
        this.bgMoon = new Image();
        this.bgMoon.src = './textures/bg-moon.png';
        this.bgWood = new Image();
        this.bgWood.src = './textures/bg-wood.png';
        this.bgPreHist = new Image();
        this.bgPreHist.src = './textures/bg-prehist.png';
        this.bgWestern = new Image();
        this.bgWestern.src = '/textures/bg-western.png';
        this.allTextures = [this.bgMoon.src, this.bgPreHist.src, this.bgWestern.src];
    }
    main() {
        const gameMain = new GameMain(this.setupMain);
        const gameBackground = new GameBackground(this.setupBackground);
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
            
            // Change background and characters textures
            if (gameTempGate.isTeleported) {
                if (gameTempGate.isTeleportation % 2 !== 0) {
                    this.texture.src = this.allTextures[0];
                    this.allTextures.push(this.allTextures[0]);
                    this.allTextures.splice(0, 1);
                } else {
                    this.texture.src = this.bgWood.src;
                }
            }

            this.requestAnimation = requestAnimationFrame(render);
            if (this.setupMain.gameInProgess === false) {
                cancelAnimationFrame(this.requestAnimation);
                gameTempGate.isTeleportation = 0;
                this.texture.src = this.bgWood.src;
            }   
        }
        
        // Start game
        document.addEventListener('click', () => {
            if (this.setupMain.gameInProgess === false) {
                this.requestAnimation = requestAnimationFrame(render);
                this.setupMain._gameInProgess = true;
            }
            gameChicken.bringUp();
        })

        gameBackground.render();
    }
}

const screenOrientationIsLandscape = setInterval(() => {
    if (window.innerWidth > window.innerHeight && document.readyState === "complete") {
        const app = new App();
        app.main();
        clearInterval(screenOrientationIsLandscape);
    }
}, 1);


