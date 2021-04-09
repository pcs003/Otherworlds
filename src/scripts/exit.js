import Interactable from "./interactable";


export default class Exit extends Interactable{
    constructor(canvas, ctx, x, y, height, width, levelNum, worldNum) {
        super(canvas, ctx, x, y, height, width);
        this.levelNum = levelNum;
        this.worldNum = worldNum;


        this.exitImage = new Image();
    }

    render(frameNum, xPos = this.x, yPos = this.y, width = 60, height = 80) {
        if (this.levelNum == 5) {
            let portalFrame = frameNum % 120;
            let currentImageNum = Math.floor(portalFrame/15) + 1;
            this.exitImage.src = `dist/images/PortalFrame${currentImageNum}.png`
            
            this.ctx.drawImage(this.exitImage, xPos, yPos, width, height)
        } else {
            this.exitImage.src = `dist/images/World${this.worldNum}Door.png`
            this.ctx.drawImage(this.exitImage, this.x, this.y, this.width, this.height)
        }
        
    }
}