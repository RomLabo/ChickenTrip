class GameButcher {
    constructor(setting) {
        this.setting = setting;
        this.crash = false;
    }
    createButcher() {
        this.setting.context.drawImage(...this.setting.textureParams, ...this.setting.firstCanvasParams);
        this.setting.context.drawImage(...this.setting.textureParams, ...this.setting.secondCanvasParams);
    }
    crashButcher(chickenPostion) {
        if (this.setting.secondCanvasParams[0] <= chickenPostion[0] && chickenPostion[1] >= this.setting.positionY) {
            this.crash = true;
        }
    }
    renderButcher(chickenPosition) {
        this.createButcher();
        this.crashButcher(chickenPosition);
    }
}