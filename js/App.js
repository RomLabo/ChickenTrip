class App {
    constructor() {
        this.bgWood = document.getElementById('main-texture');
        this.textureIndex = 1;
        this.requestAnimation;
        
        this.bgMoon = new Image();
        this.bgMoon.decoding = 'sync';
        this.bgMoon.src = './textures/bg-moon.png';
        this.bgPreHist = new Image();
        this.bgPreHist.decoding = 'sync';
        this.bgPreHist.src = './textures/bg-prehist.png';
        this.bgWestern = new Image();
        this.bgWestern.decoding = 'sync';
        this.bgWestern.src = './textures/bg-western.png';
        this.allTextures = [this.bgWood, this.bgMoon, this.bgPreHist, this.bgWestern];
    }
    main() {
        const setupMain = new SetupMain(this.allTextures[0]);
        const setupBackground = new SetupBackground(setupMain);
        const setupChicken = new SetupChicken(setupMain);
        const setupButcher = new SetupButcher(setupMain);
        const setupEagle = new SetupEagle(setupMain);
        const setupTempGate = new SetupTempGate(setupMain);
        const setupBonus = new SetupBonus(setupMain);

        const gameMain = new GameMain(setupMain);
        const gameBackground = new GameBackground(setupBackground);
        const gameChicken = new GameChicken(setupChicken);
        const gameButcher = new GameEnemies(setupButcher);
        const gameEagle = new GameEnemies(setupEagle);
        const gameTempGate = new GameTempGate(setupTempGate);
        const gameBonus = new GameBonus(setupBonus);

        const render = () => {
            gameMain.clearContext();
            gameBackground.render();
            gameChicken.render();
            gameButcher.render(gameChicken.allCoordinates);
            gameEagle.render(gameChicken.allCoordinates);
            gameTempGate.render(gameChicken.allCoordinates);
            gameBonus.render(gameChicken.allCoordinates);
            gameMain.render([gameButcher, gameEagle], gameBonus);
            
            if (gameTempGate.isTeleported) {
                if (gameTempGate.isTeleportation % 2 !== 0) {
                    setupMain._texture = this.allTextures[this.textureIndex];
                    this.textureIndex === 3 ? this.textureIndex = 1 : this.textureIndex ++;
                } else {
                    setupMain._texture = this.allTextures[0];
                }
            }

            this.requestAnimation = requestAnimationFrame(render);
            if (setupMain.gameInProgess === false) {
                cancelAnimationFrame(this.requestAnimation);
                gameTempGate.isTeleportation = 0;
                setupMain._texture = this.allTextures[0];
            }   
        }
        
        document.addEventListener('click', () => {
            if (setupMain.gameInProgess === false) {
                this.requestAnimation = requestAnimationFrame(render);
                setupMain._gameInProgess = true;
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


