class GameSetting {
    constructor() {
        this._texture = new Image();
        this._texture.src = './textures/wood.png';
        this._backgroundSize = [768, 432];
        this._chickenSize = [65, 65];

        this._gameIndex = 0;
        this._difficultyLevel = 2;
    }
    get texture() {
        return this._texture;
    }
    get backgroundSize() {
        return this._backgroundSize;
    }
    get chickenSize() {
        return this._chickenSize;
    }
    get gameIndex() {
        return this._gameIndex;
    }
    get difficultyLevel() {
        return this._difficultyLevel;
    }
}