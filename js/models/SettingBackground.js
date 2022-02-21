class SettingBackground {
    constructor(setting) {
        this._setting = setting;
        this._decorationSize = [768, 432];
        this._floorSize = [768, 120];
        this._floorResponsiveSize = [this._setting.canvasSize[0], this._setting.canvasSize[1] * .25];
        this._floorMotion;
        this._decorationMotion;
    }
    get context() {
        return this._setting.context;
    }
    get decorationTextureParams() {
        return [this._setting.texture, 0, 0, ...this._decorationSize];
    }
    get decorationCanvasFirstParams() {
        let decorationMotion = (this._setting.gameIndex) % this._setting.canvasSize[0];
        return [-decorationMotion, 0, ...this._setting.canvasSize];
    }
    get decorationCanvasSecondParams() {
        let decorationMotion = (this._setting.gameIndex) % this._setting.canvasSize[0];
        return [-decorationMotion + this._setting.canvasSize[0], 0, ...this._setting.canvasSize];
    }
    get floorTextureParams() {
        return [this._setting.texture, 0, 432, ...this._floorSize]
    }
    get floorCanvasFirstParams() {
        let floorMotion = (this._setting.gameIndex * this._setting.difficultyLevel) % this._setting.canvasSize[0];
        return [-floorMotion, this._setting.canvasSize[1] * .75, ...this._floorResponsiveSize];
    }
    get floorCanvasSecondParams() {
        let floorMotion = (this._setting.gameIndex * this._setting.difficultyLevel) % this._setting.canvasSize[0];
        return [-floorMotion + this._setting.canvasSize[0], this._setting.canvasSize[1] * .75, ...this._floorResponsiveSize];
    }
}