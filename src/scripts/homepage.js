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

        this.deathCount = 0;
        this.bestTime = "--:--"
        this.showControls = false;
        this.levelFills = ['#ffffff','#ffffff','#ffffff','#ffffff','#ffffff']

        this.game =  new Game(this.canvas, this.ctx, 1, 1, this.game, this.render.bind(this), this.music, this.soundMuted, this.toggleMuteSound.bind(this), this.getSoundMuted.bind(this), this.toggleMuteMusic.bind(this));
        this.home = null;

        this.music = new Audio();
        this.music.src = 'dist/audio/world1Music.mp3';
        this.music.volume = 0.6;

        this.worldBGs = [
            'dist/images/mainpage_bg.png',
            'dist/images/world2BG.png',
        ]

        // get current number of levels completed
        this.levelsCompleted = window.localStorage.getItem("levelsCompleted");
        if (this.levelsCompleted == null) {
            this.levelsCompleted = 0;
        }

        this.moveListener = event => {
            let canvasPos = this.canvas.getBoundingClientRect();
            let mouseX = event.x - canvasPos.left;
            let mouseY = event.y - canvasPos.top;

            for (let i = 0; i < 5; i++) {
                let increment = i * 130;
                if (mouseX > 100 + increment && mouseX < 165 + increment && mouseY > 345 && mouseY < 415) {
                    if (this.levelsCompleted >= (this.currentWorld - 1) * 5 + i) {
                        this.deathCount = window.localStorage.getItem(`${this.currentWorld}-${i + 1} death count`) || 0;
                        this.bestTime = window.localStorage.getItem(`${this.currentWorld}-${i + 1} best time`)/100 || "--:--";
                        this.levelFills[i] = 'rgb(255,190,255)'
                    }
                    
                } else {
                    this.levelFills[i] = '#ffffff'
                }
            }

            if (mouseX > 0 && mouseX < 125 && mouseY > 0 && mouseY < 45) {
                this.showControls = true;
            } else {
                this.showControls = false;
            }
        }
        this.canvas.addEventListener('mousemove', this.moveListener);

        this.clickListener = (event) => {
            let canvasPos = this.canvas.getBoundingClientRect();
            let mouseX = event.x - canvasPos.left;
            let mouseY = event.y - canvasPos.top;
            
            for (let i = 0; i < 5; i++) {
                let increment = i * 130;
                if (mouseX > 100 + increment && mouseX < 165 + increment && mouseY > 345 && mouseY < 415) {
                    if (this.levelsCompleted >= (this.currentWorld - 1) * 5 + i) {
                        clearInterval(this.home)
                        this.game.setData(this.currentWorld, i + 1, this.game)
                        this.game.render();
                        // this.canvas.removeEventListener('mousedown', this.clickListener);
                        // this.canvas.removeEventListener('mousemove', this.moveListener);
                    }
                    
                }
            }

            if (mouseX > 730 && mouseX < 770 && mouseY > 30 && mouseY < 60) {
                this.toggleMuteMusic();
            }

            if (mouseX > 660 && mouseX < 700 && mouseY > 30 && mouseY < 60) {
                this.toggleMuteSound();
            }

            if (mouseY < 280 && mouseY > 250) {
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

            // uncomment for dev options
            // if (mouseX > 0 && mouseX < 20 && mouseY > 0 && mouseY < 20) {
            //     window.localStorage.setItem("levelsCompleted", 0);
            //     this.render();
            // }
            // if (mouseX > 0 && mouseX < 20 && mouseY > 450 && mouseY < 500) {
            //     window.localStorage.setItem("levelsCompleted", this.numWorlds * 5);
            //     this.render();
            // }
            // if (mouseX > 750 && mouseX < 800 && mouseY > 450 && mouseY < 500) {
            //     for (let i = 1; i <= this.numWorlds; i++) {
            //         for (let j = 1; j <= 5; j++) {
            //             window.localStorage.setItem(`${i}-${j} best time`, 0);
            //             window.localStorage.setItem(`${i}-${j} death count`, 0);
            //         }
            //     }
            // }
        }
        this.canvas.addEventListener('mousedown', this.clickListener);
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

    addEventListeners() {
        this.canvas.addEventListener('mousedown', this.clickListener);
        this.canvas.addEventListener('mousemove', this.moveListener);
    }

    render() {
        this.game.setInactive();
        this.getLevelsCompleted();
        this.home = setInterval(() => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.canvas.style.backgroundImage = `url(${this.worldBGs[this.currentWorld - 1]})`
    
            //title
            this.ctx.fillStyle = '#ffffff';
            this.ctx.font = "32px 'Press Start 2P'"
            this.ctx.fillText('Otherworlds', 225, 90)

            

    
            // world select      
            // --world name
            this.ctx.font = "28px 'Press Start 2P'"
            this.ctx.fillText(`World ${this.currentWorld}`, 302, 280)

            //-- world cycling arrows
            //---- right arrow
            this.ctx.beginPath();
            this.ctx.moveTo(560, 280);
            this.ctx.lineTo(590, 265);
            this.ctx.lineTo(560, 250);
            this.ctx.closePath();

            this.ctx.lineWidth = 5;
            this.ctx.strokeStyle = '#444444';
            this.ctx.stroke();

            this.ctx.fillStyle = "#ffffff";
            this.ctx.fill();

            //---- left arrow
            this.ctx.beginPath();
            this.ctx.moveTo(240, 280);
            this.ctx.lineTo(210, 265);
            this.ctx.lineTo(240, 250);
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
                    fillColor = this.levelFills[i];
                }
                let increment = i * 130;

                this.ctx.fillStyle = "rgb(80,80,80)"
                this.ctx.fillRect(100 + increment,345,70,70)
                this.ctx.fillStyle = fillColor;
                this.ctx.fillRect(105 + increment,350,60,60)
                this.ctx.fillStyle = "rgb(0,0,0)"
                this.ctx.fillText((i + 1).toString(), 122 + increment, 397)
            }

            // mute sound button
            let soundButton = new Image();
            if (this.soundMuted) {
                soundButton.src = 'dist/images/soundOff.png'
            } else {
                soundButton.src = 'dist/images/soundOn.png'
            }
            this.ctx.drawImage(soundButton, 660, 30, 40, 30);

            // mute music button
            let musicButton = new Image();
            if (this.musicMuted) {
                musicButton.src = 'dist/images/musicOff.png'
            } else {
                musicButton.src = 'dist/images/musicOn.png'
            }
            this.ctx.drawImage(musicButton, 730, 30, 40, 30);


            // stats
            this.ctx.fillStyle = '#ffffff'
            this.ctx.font = "20px 'Press Start 2P'"
            this.ctx.fillText(`Best Time: ${this.bestTime}`, 240, 160)
            this.ctx.fillText(`Death Count: ${this.deathCount}`, 260, 200)

            // show/hide controls
            
            this.ctx.font = "12px 'Press Start 2P'"
            this.ctx.fillText("controls", 20, 30)

            if (this.showControls) {
                this.ctx.fillStyle = 'rgba(0,0,0,0.7)'
                this.ctx.fillRect(0,0,this.canvas.width, this.canvas.height)

                this.ctx.fillStyle = '#ffffff'
                this.ctx.font = "20px 'Press Start 2P'"
                this.ctx.fillText('WASD - Move', 290, 170)
                this.ctx.fillText('Space - Jump', 270, 210)
                this.ctx.fillText('Esc - Pause', 310, 250)
                this.ctx.font = "12px 'Press Start 2P'"
                this.ctx.fillText('Useful Tip: Holding the arrow key in the direction of', 90, 310)
                this.ctx.fillText('a wall while colliding with it will slow your fall', 110, 330)
            }
        },10)
        
    }

    
}

