class GameSetting {
    constructor(texture) {
        this._texture = texture;
        
        this._canvas = document.getElementById('canvas');
        this._context = this._canvas.getContext('2d');
        this._canvas.width = window.innerWidth;
        this._canvas.height = window.innerHeight;

        this._gameIndex = 0;
        this._difficultyLevel = 2;
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
    get context(){
        return this._context
    }
    get canvasSize() {
        return [this._canvas.width, this._canvas.height]
    }
}