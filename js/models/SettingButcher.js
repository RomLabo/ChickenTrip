class SettingButcher {
    constructor(setting) {
        this._setting = setting;
        this._size = [122, 180];
        this._responsiveSize = [this._setting.canvasSize[0] * .12, this._setting.canvasSize[0] * .15];
        this._positionY = this._setting.canvasSize[1] * .6;
        this._speedRun = this._setting.difficultyLevel * 2;
        this._variableGap = 2;
        this._motion;
        this._variableX;
    }
    get context() {
        return this._setting.context;
    }
    get textureParams() {
        let motion = Math.floor((this._setting._gameIndex % 15) / 5) * this._size[0];
        return [this._setting.texture, motion, 617, ...this._size];
    }
    get positionY() {
        return this._positionY;
    }
    get firstCanvasParams() {
        let variableX = (this._setting._gameIndex * this._speedRun) % (this._variableGap * this._setting.canvasSize[0]);
        return [-variableX, this._positionY, ...this._responsiveSize];
    }
    get secondCanvasParams() {
        let variableX = (this._setting._gameIndex * this._speedRun) % (this._variableGap * this._setting.canvasSize[0]);
        return [-variableX + (this._variableGap * this._setting.canvasSize[0]), this._positionY, ...this._responsiveSize];
    }
}