import Interactable from "./interactable";

// weak platform class that is a child of interactable and is a platform that falls after interaction
export default class WeakPlatform extends Interactable{
    constructor(canvas, ctx, x, y, height, width, duration, imgUrl, gravity) {
        super(canvas, ctx, x, y, height, width);
        this.duration = duration;
        this.imgUrl = imgUrl;
        this.gravity = gravity;
        this.img = new Image();
        this.isFalling = false;
        this.fallSpeed = 0; // pixels per second
    }

    fall() {
        this.isFalling = true;
        setTimeout( () => {
            clearInterval(platformFall);
        }, (this.canvas.height - this.y + 100) * 10 + this.duration)
        let count = 0;
        const platformFall = setInterval(() => {
            if (count > this.duration/100) {
                this.fallSpeed += this.gravity;
                this.y -= this.fallSpeed;
            }
            count++;
        }, 10);
    }

    render() {
        this.ctx.fillStyle = "rgba(0,0,0,0)"
        this.ctx.fillRect(this.x, this.y, this.width, this.height)
        this.img.src = this.imgUrl;
        this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }

}