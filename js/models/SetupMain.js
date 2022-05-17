class SetupMain {
    constructor(texture) {
        this._texture = texture;
        this._canvas = document.getElementById('canvas');
        this._context = this._canvas.getContext('2d');
        this._canvas.width = window.innerWidth;
        this._canvas.height = window.innerHeight;
        this._gameIndex = 0;
        this._gameInProgess = false;
        this._animation = document.getElementById('start-msg-animation');
    }
    get context() {
        return this._context;
    }
    get texture() {
        return this._texture;
    }
    get canvasSize() {
        return [this._canvas.width, this._canvas.height];
    }
    get gameIndex() {
        return this._gameIndex;
    }
    get gameInProgess() {
        return this._gameInProgess;
    }
}