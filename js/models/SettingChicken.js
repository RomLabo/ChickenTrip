class SettingChicken {
    constructor(setting) {
        this._setting = setting;
        this._size = [65, 65];
        this._responsiveSize = [this._setting.canvasSize[0] * .07, this._setting.canvasSize[0] * .07];
        this._position = [this._setting.canvasSize[0] * .04, this._setting.canvasSize[1] * .77];
    }
    get context() {
        return this._setting.context;
    }
    get textureParams() {
        let motion = Math.floor((this._setting._gameIndex % 12) / 4) * this._size[1];
        return [this._setting.texture, motion, 553, ...this._size];
    }
    get responsiveSize() {
        return this._responsiveSize;
    }
    get position() {
        return this._position;
    }
    get jumpParams() {
        return [-this._setting.canvasSize[1] * .03, this._setting.canvasSize[1] * .001];
    }
    get crashParams() {
        return [this._position[0] + this._responsiveSize[0], this._responsiveSize[1]];
    }
}