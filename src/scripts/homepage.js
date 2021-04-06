import BG from '../assets/mainpage_bg.png'
import Game from './game';



export default class HomePage {
    constructor(canvas, ctx, game) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.game = game;
        this.home = null;

        this.currentWorld = 1;

        this.canvas.addEventListener('mousedown', (event) => {
            let canvasPos = canvas.getBoundingClientRect();
            let mouseX = event.x - canvasPos.left;
            let mouseY = event.y - canvasPos.top;
            
            for (let i = 0; i < 5; i++) {
                let increment = i * 130;
                if (mouseX > 100 + increment && mouseX < 165 + increment && mouseY > 345 && mouseY < 415) {
                    clearInterval(this.home)
                    this.game = new Game(this.canvas, this.ctx, this.currentWorld, i + 1, this.game)
                    this.game.render();
                }
            }
            // if (mouseX > 100 && mouseX < 170 && mouseY > 345 && mouseY < 415) {
                
            // }
        })
    }
    
    render() {
        this.home = setInterval(() => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.canvas.style.backgroundImage = "url('dist/images/mainpage_bg.png')"
    
            //title
            this.ctx.fillStyle = '#ffffff';
            this.ctx.font = "32px 'Press Start 2P'"
            this.ctx.fillText('Otherworlds', 225, 90)
    
            //level select - 120px between level

            for (let i = 0; i < 5; i++) {
                let increment = i * 130;

                this.ctx.fillStyle = "rgb(100,100,100)"
                this.ctx.fillRect(100 + increment,345,70,70)
                this.ctx.fillStyle = "rgb(240,240,240)"
                this.ctx.fillRect(105 + increment,350,60,60)
                this.ctx.fillStyle = "rgb(0,0,0)"
                this.ctx.fillText((i + 1).toString(), 120 + increment, 397)
            }

        },10)
        
    }

    
}

