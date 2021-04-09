import BG from '../assets/mainpage_bg.png'
import tabIcon from '../assets/tabIcon.png'

import soundOn from '../assets/soundOn.png'
import soundOff from '../assets/soundOff.png'

import Game from './game';



export default class HomePage {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.currentWorld = 1;
        this.muted = true;

        this.game =  new Game(this.canvas, this.ctx, 1, 1, this.game, this.render.bind(this), this.music, this.muted, this.toggleMute.bind(this));
        this.home = null;

        this.music = new Audio();
        this.music.src = 'dist/audio/world1Music.mp3';
        this.music.volume = 0.6;

        

        this.canvas.addEventListener('mousedown', (event) => {


            let canvasPos = canvas.getBoundingClientRect();
            let mouseX = event.x - canvasPos.left;
            let mouseY = event.y - canvasPos.top;
            
            for (let i = 0; i < 5; i++) {
                let increment = i * 130;
                if (mouseX > 100 + increment && mouseX < 165 + increment && mouseY > 345 && mouseY < 415) {
                    clearInterval(this.home)
                    this.game.setData(this.currentWorld, i + 1, this.game)
                    this.game.render();
                }
            }

            if (mouseX > 730 && mouseX < 770 && mouseY > 30 && mouseY < 60) {
                this.toggleMute();
            }
        })
    }

    toggleMute() {
        this.muted = !this.muted;

        if (this.muted) {
            this.music.pause();
        } else {
            this.music.currentTime = 0;
            this.music.play();
        }
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

            let soundButton = new Image();
            if (this.muted) {
                soundButton.src = 'dist/images/soundOff.png'
            } else {
                soundButton.src = 'dist/images/soundOn.png'
            }
            this.ctx.drawImage(soundButton, 730, 30, 40, 30);

        },10)
        
    }

    
}

