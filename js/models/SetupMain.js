class SetupMain {
    constructor(texture) {
        this._texture = texture;
        this._canvas = document.getElementById('canvas');
        this._context = this._canvas.getContext('2d');
        this._canvas.width = window.innerWidth;
        this._canvas.height = window.innerHeight;
        this._gameIndex = 0;
        this._gameState = 'game start';
        this._animation = [document.getElementById('start-animation'), document.getElementById('restart')];
    }
    get texture() {
        return this._texture;
    }
    get gameIndex() {
        return this._gameIndex;
    }
    get difficultyLevel() {
        return Math.round(this._canvas.width * .003);
    }
    get context() {
        return this._context;
    }
    get canvasSize() {
        return [this._canvas.width, this._canvas.height];
    }
    get gameState() {
        return this._gameState;
    }
    get animation() {
        return this._animation;
    }
}