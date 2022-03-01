class SetupMain {
    constructor(texture) {
        this._texture = texture;
        this._canvas = document.getElementById('canvas');
        this._context = this._canvas.getContext('2d');
        this._canvas.width = window.innerWidth;
        this._canvas.height = window.innerHeight;
        this._difficultyLevel = Math.round(this._canvas.width * .003);
        this._gameIndex = 0;
        this._gameInProgess = false;
        this._animation = document.getElementById('start-animation');
    }
    get texture() {
        return this._texture;
    }
    get gameIndex() {
        return this._gameIndex;
    }
    get difficultyLevel() {
        return this._difficultyLevel;
    }
    get context() {
        return this._context;
    }
    get canvasSize() {
        return [this._canvas.width, this._canvas.height];
    }
    get gameInProgess() {
        return this._gameInProgess;
    }
}