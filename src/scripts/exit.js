import Interactable from "./interactable";


export default class Exit extends Interactable{
    constructor(canvas, ctx, x, y, height, width, levelNum, worldNum) {
        super(canvas, ctx, x, y, height, width);
        this.levelNum = levelNum;
        this.worldNum = worldNum;


        this.exitImage = new Image();
    }

    render(frameNum) {
        if (this.levelNum == 5) {
            let portalFrame = frameNum % 80;
            let currentImageNum = Math.floor(portalFrame/10) + 1;
            this.exitImage.src = `dist/images/PortalFrame${currentImageNum}.png`

            this.ctx.drawImage(this.exitImage, this.x, this.y, this.width, this.height)
        } else {
            this.exitImage.src = `dist/images/World${this.worldNum}Door.png`
            this.ctx.drawImage(this.exitImage, this.x, this.y, this.width, this.height)
        }
        
    }
}