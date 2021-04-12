import Game from './game';
import assetImports from './assetImports'

export default class HomePage {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.currentWorld = 1;
        this.soundMuted = true;
        this.musicMuted = true;
        this.numWorlds = 2;

        this.game =  new Game(this.canvas, this.ctx, 1, 1, this.game, this.render.bind(this), this.music, this.soundMuted, this.toggleMuteSound.bind(this), this.getSoundMuted.bind(this), this.toggleMuteMusic.bind(this));
        this.home = null;

        this.music = new Audio();
        this.music.src = 'dist/audio/world1Music.mp3';
        this.music.volume = 0.6;

        this.worldBGs = [
            'dist/images/mainpage_bg.png',
            'dist/images/world2BG.png',
        ]

        this.levelsCompleted = window.localStorage.getItem("levelsCompleted");
        if (this.levelsCompleted == null) {
            this.levelsCompleted = 0;
        }

        this.canvas.addEventListener('mousedown', (event) => {


            let canvasPos = canvas.getBoundingClientRect();
            let mouseX = event.x - canvasPos.left;
            let mouseY = event.y - canvasPos.top;
            
            for (let i = 0; i < 5; i++) {
                let increment = i * 130;
                if (mouseX > 100 + increment && mouseX < 165 + increment && mouseY > 345 && mouseY < 415) {
                    if (this.levelsCompleted >= (this.currentWorld - 1) * 5 + i) {
                        clearInterval(this.home)
                        this.game.setData(this.currentWorld, i + 1, this.game)
                        this.game.render();
                    }
                    
                }
            }

            if (mouseX > 730 && mouseX < 770 && mouseY > 30 && mouseY < 60) {
                this.toggleMuteMusic();
            }

            if (mouseX > 660 && mouseX < 700 && mouseY > 30 && mouseY < 60) {
                this.toggleMuteSound();
            }

            if (mouseY < 270 && mouseY > 240) {
                if (mouseX < 240 && mouseX > 210) {
                    if (this.currentWorld > 1) {
                        this.currentWorld--;
                    } else {
                        this.currentWorld = this.numWorlds;
                    }
                }
                if (mouseX < 590 && mouseX > 560) {
                    if (this.currentWorld < this.numWorlds) {
                        this.currentWorld++;
                    } else {
                        this.currentWorld = 1;
                    }
                }
            }

            if (mouseX > 0 && mouseX < 20 && mouseY > 0 && mouseY < 20) {
                window.localStorage.setItem("levelsCompleted", 0);
                this.render();
            }
        })
    }

    toggleMuteMusic() {
        this.musicMuted = !this.musicMuted;

        if (this.musicMuted) {
            this.music.pause();
        } else {
            this.music.currentTime = 0;
            this.music.play();
        }
    }

    getSoundMuted() {
        return this.soundMuted;
    }

    toggleMuteSound() {
        
        this.soundMuted = !this.soundMuted;
    }

    getLevelsCompleted() {
        this.levelsCompleted = window.localStorage.getItem("levelsCompleted");
        if (this.levelsCompleted == null) {
            this.levelsCompleted = 0;
        }
    }

    render() {
        this.getLevelsCompleted();
        this.home = setInterval(() => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.canvas.style.backgroundImage = `url(${this.worldBGs[this.currentWorld - 1]})`
    
            //title
            this.ctx.fillStyle = '#ffffff';
            this.ctx.font = "32px 'Press Start 2P'"
            this.ctx.fillText('Otherworlds', 225, 90)

            //controls
            this.ctx.font = "14px 'Press Start 2P'"
            this.ctx.fillText('WASD - Move', 323, 140)
            this.ctx.fillText('Space - Jump', 309, 170)
            this.ctx.fillText('Esc - Pause', 337, 200)

    
            // world select      
            // --world name
            this.ctx.font = "28px 'Press Start 2P'"
            this.ctx.fillText(`World ${this.currentWorld}`, 302, 270)

            //-- world cycling arrows
            //---- right arrow
            this.ctx.beginPath();
            this.ctx.moveTo(560, 270);
            this.ctx.lineTo(590, 255);
            this.ctx.lineTo(560, 240);
            this.ctx.closePath();

            this.ctx.lineWidth = 5;
            this.ctx.strokeStyle = '#444444';
            this.ctx.stroke();

            this.ctx.fillStyle = "#ffffff";
            this.ctx.fill();

            //---- left arrow
            this.ctx.beginPath();
            this.ctx.moveTo(240, 270);
            this.ctx.lineTo(210, 255);
            this.ctx.lineTo(240, 240);
            this.ctx.closePath();

            this.ctx.lineWidth = 5;
            this.ctx.strokeStyle = '#444444';
            this.ctx.stroke();

            this.ctx.fillStyle = "#ffffff";
            this.ctx.fill();
            

            //level select - 130px between level
            for (let i = 0; i < 5; i++) {
                let fillColor = "rgb(120,120,120)";
                if ((this.currentWorld - 1) * 5 + i <= this.levelsCompleted) {
                    fillColor = "rgb(240,240,240)";
                }
                let increment = i * 130;

                this.ctx.fillStyle = "rgb(80,80,80)"
                this.ctx.fillRect(100 + increment,345,70,70)
                this.ctx.fillStyle = fillColor;
                this.ctx.fillRect(105 + increment,350,60,60)
                this.ctx.fillStyle = "rgb(0,0,0)"
                this.ctx.fillText((i + 1).toString(), 120 + increment, 397)
            }

            // mute sound button
            let soundButton = new Image();
            if (this.soundMuted) {
                soundButton.src = 'dist/images/soundOff.png'
            } else {
                soundButton.src = 'dist/images/soundOn.png'
            }
            this.ctx.drawImage(soundButton, 660, 30, 40, 30);

            //mute music button
            let musicButton = new Image();
            if (this.musicMuted) {
                musicButton.src = 'dist/images/musicOff.png'
            } else {
                musicButton.src = 'dist/images/musicOn.png'
            }
            this.ctx.drawImage(musicButton, 730, 30, 40, 30);

        },10)
        
    }

    
}

