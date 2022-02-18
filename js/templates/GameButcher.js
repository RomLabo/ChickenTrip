class GameButcher {
    constructor(setting) {
        this.setting = setting;
        this.context = this.setting.context;
        this.canvasSize = this.setting.canvasSize;

        this.butcherVariablePositionX = this.canvasSize[0];
        this.butcherSize = [154, 180];
        this.butcherResponsiveSize = [this.canvasSize[0] * .12, this.canvasSize[0] * .15];
        this.butcherPosition = [0, this.canvasSize[1] * .6];
        this.butcherSpeedRun = this.setting.difficultyLevel;

        this.variablePosY = this.butcherPosition[1];
        this.count = 0;
    }
    createButcher() {
        let butcherMotion = Math.floor((this.setting.gameIndex % 18) / 6) * this.butcherSize[0];
        let butcherMotionX = (this.setting.gameIndex * this.butcherSpeedRun) % this.canvasSize[0];
        let butcherTextureParams = [this.setting.texture, butcherMotion, 617, ...this.butcherSize];

        let butcherCanvasFirstParams = [- butcherMotionX, this.butcherPosition[1], ...this.butcherResponsiveSize];
        let butcherCanvasSecondParams = [- butcherMotionX + this.canvasSize[0], this.butcherPosition[1], ...this.butcherResponsiveSize];
        
        this.context.drawImage(...butcherTextureParams, ...butcherCanvasFirstParams);
        this.context.drawImage(...butcherTextureParams, ...butcherCanvasSecondParams);
    }
    butcherRun() {
        let variablePos = Math.floor(this.setting.gameIndex % (this.canvasSize[0] * 2));
        if (variablePos === this.canvasSize[0] && this.count === 0) {
            this.butcherSpeedRun = this.butcherSpeedRun * 2;
            this.count ++;
        } else if (variablePos === this.canvasSize[0] && this.count >= 1){
            this.butcherSpeedRun = this.butcherSpeedRun / 2;
            this.count = 0;
        }
    }
    renderButcher() {
        this.butcherRun();
        this.createButcher();
    }
}