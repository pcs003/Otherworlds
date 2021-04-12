import Interactable from "./interactable";


export default class WeakPlatform extends Interactable{
    constructor(canvas, ctx, x, y, height, width, duration, imgUrl, gravity) {
        super(canvas, ctx, x, y, height, width);
        this.duration = duration;
        this.imgUrl = imgUrl;
        this.gravity = gravity;
        this.img = new Image();

        this.fallSpeed = 0; // pixels per second
    }

    fall() {
        setTimeout( () => {
            clearInterval(platformFall);
        }, (this.canvas.height - this.y) * 10 + this.duration)
        let count = 0;
        const platformFall = setInterval(() => {
            if (count > this.duration / 10) {
                this.fallSpeed += this.gravity;
                this.y -= this.fallSpeed / 1000;
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