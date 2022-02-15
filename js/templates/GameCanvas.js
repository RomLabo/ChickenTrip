class GameCanvas {
    constructor(setting) {
        this.setting = setting;

        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext('2d');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.canvasSize = [this.canvas.width, this.canvas.height];
        
        this.chickenResponsiveSize = [this.canvasSize[0] * .07, this.canvasSize[0] * .07];
        this.chickenPosition = [this.canvasSize[0] * .04, this.canvasSize[1] * .8];
        
        this.chickenVariablePositionY = this.chickenPosition[1];
        this.chickenJumpParams = [-this.canvasSize[1] * .04, this.canvasSize[1] * .002];
        this.jump;
    }
    createBackground() {
        let backgroundMotion = (this.setting.gameIndex * this.setting.difficultyLevel) % this.canvasSize[0];
        this.context.drawImage(this.setting.texture, 0, 0, ...this.setting.backgroundSize, - backgroundMotion, 0, ...this.canvasSize);
        this.context.drawImage(this.setting.texture, 0, 0, ...this.setting.backgroundSize, - backgroundMotion + this.canvasSize[0], 0, ...this.canvasSize);
    }
    createChicken() {
        let chickenMotion = Math.floor((this.setting.gameIndex % 18) / 6) * this.setting.chickenSize[1];
        this.context.drawImage(this.setting.texture, 0, 432 + chickenMotion, ...this.setting.chickenSize, this.chickenPosition[0], this.chickenVariablePositionY, ...this.chickenResponsiveSize);                  
    }
    createEnemies() {
        console.log('Ennemis')
        // add enemies on canvas
    }
    chickenJump() {
        let chickenJumpPosition = this.chickenVariablePositionY + this.jump;
        this.chickenVariablePositionY = chickenJumpPosition > this.chickenPosition[1] ? this.chickenPosition[1] : chickenJumpPosition;
    }

}