class GameButcher {
    constructor(setting) {
        this.setting = setting;
        this.context = this.setting.context;
        this.canvasSize = this.setting.canvasSize;
        this.variableGap = 2; // Ne pas descendre en dessous de 1

        this.butcherVariablePositionX = this.canvasSize[0];
        this.butcherSize = [122, 180];
        this.butcherResponsiveSize = [this.canvasSize[0] * .12, this.canvasSize[0] * .15];
        this.butcherPositionY = this.canvasSize[1] * .6;
        this.butcherSpeedRun = this.setting.difficultyLevel * 2; // adatper la vitesse en fonction de la vitesse butcherMotion
    }
    createButcher() {
        let butcherMotion = Math.floor((this.setting.gameIndex % 18) / 6) * this.butcherSize[0];
        let butcherMotionX = (this.setting.gameIndex * this.butcherSpeedRun) % (this.variableGap * this.canvasSize[0]);
        let butcherTextureParams = [this.setting.texture, butcherMotion, 617, ...this.butcherSize];

        let butcherCanvasFirstParams = [- butcherMotionX, this.butcherPositionY, ...this.butcherResponsiveSize];
        let butcherCanvasSecondParams = [- butcherMotionX + (this.variableGap * this.canvasSize[0]), this.butcherPositionY, ...this.butcherResponsiveSize];
        
        this.context.drawImage(...butcherTextureParams, ...butcherCanvasFirstParams);
        this.context.drawImage(...butcherTextureParams, ...butcherCanvasSecondParams);
    }
    accelerateButcher() {
        this.butcherSpeedRun += .2;
    }
    renderButcher() {
        this.createButcher();
    }
}