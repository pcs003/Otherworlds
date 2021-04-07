import runRightImage1 from '../assets/runRightFrame1.png'
import runRightImage2 from '../assets/runRightFrame2.png'
import runRightImage3 from '../assets/runRightFrame3.png'
import runLeftImage1 from '../assets/runLeftFrame1.png'
import runLeftImage2 from '../assets/runLeftFrame2.png'
import runLeftImage3 from '../assets/runLeftFrame3.png'

import PortalFrame1 from '../assets/PortalFrame1.png'
import PortalFrame2 from '../assets/PortalFrame2.png'
import PortalFrame3 from '../assets/PortalFrame3.png'
import PortalFrame4 from '../assets/PortalFrame4.png'
import PortalFrame5 from '../assets/PortalFrame5.png'
import PortalFrame6 from '../assets/PortalFrame6.png'
import PortalFrame7 from '../assets/PortalFrame7.png'
import PortalFrame8 from '../assets/PortalFrame8.png'

import World1Door from '../assets/World1Door.png'
import World1Music from '../assets/wordl1Music.mp3'

import largePlatform from '../assets/largePlatform.png'
import mediumPlatform from '../assets/mediumPlatform.png'
import smallPlatform from '../assets/smallPlatform.png'
import tinyPlatform from '../assets/tinyPlatform.png'

import idleFrame from '../assets/idleFrame.png'
import idleFrame2 from '../assets/idleFrame2.png'
import Interactable from './interactable'
import GameMenu from './gamemenu'
import Exit from './exit'

import { LevelData } from './leveldata'
import InteractableImage from './interactableImage'

export default class Game {
    constructor(canvas, ctx, worldNum, levelNum, game, renderHome) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.worldNum = worldNum;
        this.levelNum = levelNum;
        this.game = game;
        this.renderHome = renderHome;

        this.music = new Audio('dist/audio/world1Music.mp3');

        this.frameNum = 0;
        this.levelTime = 6000;
        this.paused = false;
        this.menu = new GameMenu(this.canvas, this.ctx, "failed",this.worldNum, this.levelNum, this.game, this.setData.bind(this), this.togglePause.bind(this), this.render.bind(this), this.renderHome);
        

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // get seed data for current level
        this.levelData = LevelData[this.worldNum - 1][this.levelNum - 1]

        this.VELOCITY_X = 3;
        this.GRAVITY = this.levelData.gravity;
        
        this.Player = {
            velocity: [0,0],
            isJumping: false,
            canJump: false,
            x: this.levelData.playerStartPos[0],
            y: this.levelData.playerStartPos[1],
            width: 34,
            height: 60,
            frameNum: 0,
            faceRight: true,
            moving: false,
            collidingX: false,
            collidingY: false,
            grounded: false,
            collisionsurfaceY: 0
        }

        this.playerSprite = new Image();

        this.portalFrame = 0;
        this.portalSprite = new Image();

        // set exit location
        this.exit = new Exit(this.canvas, this.ctx, this.levelData.finishPos[0],this.levelData.finishPos[1],50,50, this.levelNum, this.worldNum);

        // set interactables for this stage from seed data
        this.interactables = [];
        this.images = [];
        this.levelData.interactables.forEach(interactable => {
            this.interactables.push(new Interactable(this.canvas, this.ctx, interactable.x, interactable.y, interactable.height, interactable.width));
            if (interactable.imgUrl.length > 0) {
                this.images.push(new InteractableImage(this.canvas, this.ctx, interactable.imgUrl,interactable.x,interactable.y - interactable.yOffset,interactable.width,interactable.imgHeight));
            }
        })

        window.addEventListener('keydown', event => {
            if (event.key == 'd') {
                this.Player.velocity[0] = this.VELOCITY_X;
                this.Player.moving = true;
                this.Player.faceRight = true;
            } else if (event.key == 'a') {
                this.Player.velocity[0] = -this.VELOCITY_X;
                this.Player.moving = true;
                this.Player.faceRight = false;
            } else if (event.key == ' ' && this.Player.grounded && !this.Player.isJumping ) {
                this.Player.velocity[1] -= 5;
                this.Player.isJumping = true;
                this.Player.grounded = false;
                setTimeout(() => {
                    this.Player.isJumping = false
                }, 60)
            } else if (event.key == "Escape") {
                this.togglePause();
            }
        })
        window.addEventListener('keyup', event => {
            if (event.key == 'd') {
                this.Player.velocity[0] = 0;
                this.Player.moving = false;
            } else if (event.key == 'a') {
                this.Player.velocity[0] = 0;
                this.Player.moving = false;
            } else if (event.key == ' ') {
                this.Player.isJumping = false
            }
        })

    }

    setGame(newGame) {
        this.game = newGame;
    }

    setData(worldNum, levelNum, game) {
        this.worldNum = worldNum;
        this.levelNum = levelNum;
        this.game = game;

        this.frameNum = 0;
        this.levelTime = 6000;
        this.paused = false;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // get seed data for current level
        this.levelData = LevelData[this.worldNum - 1][this.levelNum - 1]

        this.VELOCITY_X = 3;
        this.GRAVITY = this.levelData.gravity;
        
        this.Player = {
            velocity: [0,0],
            isJumping: false,
            canJump: false,
            x: this.levelData.playerStartPos[0],
            y: this.levelData.playerStartPos[1],
            width: 34,
            height: 60,
            frameNum: 0,
            faceRight: true,
            moving: false,
            collidingX: false,
            collidingY: false,
            grounded: false,
            collisionsurfaceY: 0
        }

        this.portalFrame = 0;

        // set exit location
        this.exit = new Exit(this.canvas, this.ctx, this.levelData.finishPos[0],this.levelData.finishPos[1],50,50, this.levelNum, this.worldNum);

        // set interactables for this stage from seed data
        this.interactables = [];
        this.images = [];
        this.levelData.interactables.forEach(interactable => {
            this.interactables.push(new Interactable(this.canvas, this.ctx, interactable.x, interactable.y, interactable.height, interactable.width));
            if (interactable.imgUrl.length > 0) {
                this.images.push(new InteractableImage(this.canvas, this.ctx, interactable.imgUrl,interactable.x,interactable.y - interactable.yOffset,interactable.width,interactable.imgHeight));
            }
        })
    }

    
    togglePause(){
        this.paused = !this.paused;

        if (this.paused == false) {
            this.render();
        }
    }

    drawPlayer(img, x, y, width, height) {
        this.ctx.drawImage(img, x, y, width, height)
    }

    gameOver(gameLoop) {
        this.interactables = [];
        clearInterval(gameLoop);
        this.menu.setMenuData("failed",this.worldNum, this.levelNum);
        this.menu.open();
    }

    levelComplete(gameLoop) {
        this.interactables = [];
        clearInterval(gameLoop);
        this.menu.setMenuData("complete",this.worldNum, this.levelNum);
        this.menu.open();
    }

    pauseGame(gameLoop) {
        console.log(this.menu)
        clearInterval(gameLoop)
        this.menu.setMenuData("pause",this.worldNum, this.levelNum);
        this.menu.open();
    }
    
    render(){
        const gameLoop = setInterval(() => {
            if (this.paused) {
                this.pauseGame(gameLoop);
            }
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.fillStyle = "rgb(0,0,0)"

            if (this.Player.y > 500 || this.levelTime <= 110) {
                this.gameOver(gameLoop)
            }
    
            // draw exit
            this.exit.render(this.frameNum);

            // draw images
            this.images.forEach(image => {
                image.render();
            })

            // draw player
            this.drawPlayer(this.playerSprite, this.Player.x, this.Player.y, this.Player.width, this.Player.height)


            // handle player frame image
            if (this.Player.moving) {
                if (this.Player.grounded) {
                    
                    var currFrame = Math.floor(this.Player.frameNum / 10)
                    if (this.Player.faceRight) { 
                        if (currFrame == 0 || currFrame == 2) {
                            this.playerSprite.src = "dist/images/runRightFrame1.png"
                        } else if (currFrame == 1) {
                            this.playerSprite.src = "dist/images/runRightFrame2.png"
                        } else if (currFrame == 3) {
                            this.playerSprite.src = "dist/images/runRightFrame3.png"
                        }
                    } else {
                        if (currFrame == 0 || currFrame == 2) {
                            this.playerSprite.src = "dist/images/runLeftFrame1.png"
                        } else if (currFrame == 1) {
                            this.playerSprite.src = "dist/images/runLeftFrame2.png"
                        } else if (currFrame == 3) {
                            this.playerSprite.src = "dist/images/runLeftFrame3.png"
                        }
                    }  
                } else {
                    if (this.Player.faceRight) {
                        this.playerSprite.src = "dist/images/runRightFrame2.png"
                    } else {
                        this.playerSprite.src = "dist/images/runLeftFrame2.png"
                    }
                }
            } else {
                if (this.frameNum % 40 > 20) {
                    this.playerSprite.src = "dist/images/idleFrame.png"
                } else {
                    this.playerSprite.src = "dist/images/idleFrame2.png"
                }
                
            }
    

    
            // handle player obstacle collision
            this.Player.collidingX = false;
            this.Player.collidingY = false;
            this.Player.grounded = false;
            this.interactables.forEach(interactable => {
                interactable.render();
    
                if (interactable.isCollidingX(this.Player.x + this.Player.width/2 + this.Player.velocity[0], this.Player.y + this.Player.height/2 + this.Player.velocity[1])) {
                    this.Player.collidingX = true;
                }
    
                if (interactable.isCollidingY(this.Player.x + this.Player.width/2 + this.Player.velocity[0], this.Player.y + this.Player.height/2 + this.Player.velocity[1])) {
                    this.Player.collidingY = true;
                    this.Player.grounded = true;
                    this.Player.collisionsurfaceY = interactable.y;
                }
            })

            // handle player level finish 
            if (this.exit.isCollidingX(this.Player.x + this.Player.width/2 + this.Player.velocity[0], this.Player.y + this.Player.height/2 + this.Player.velocity[1]) ||
                this.exit.isCollidingY(this.Player.x + this.Player.width/2 + this.Player.velocity[0], this.Player.y + this.Player.height/2 + this.Player.velocity[1])) {

                    this.levelComplete(gameLoop);
            }
    
            // handle player movement base on player collision
            if (!this.Player.collidingX) {
                this.Player.x += this.Player.velocity[0];
            } else {
                this.Player.velocity[1] = 0;
            }
            if (!this.Player.collidingY) {
                this.Player.velocity[1] -= this.GRAVITY;
                this.Player.y += this.Player.velocity[1];    
            } else {
                this.Player.y = this.Player.collisionsurfaceY - 59;
                this.Player.velocity[1] = 0;
            }
    
            if (this.Player.isJumping) {
                this.Player.velocity[1] -= this.GRAVITY;
                this.Player.y += this.Player.velocity[1];
            }

            
    
            this.ctx.fillStyle = '#ffffff';
            this.ctx.font = "24px 'Press Start 2P'"

            //level info 
            this.ctx.fillText(`${this.worldNum}-${this.levelNum}`, 364, 50);

            // timer
            this.levelTime--;
            this.ctx.fillText(Math.floor(this.levelTime/100).toString(), 700, 50);
    
            
    
            this.Player.frameNum = (this.Player.frameNum + 1) % 40
            this.portalFrame = (this.portalFrame + 1) % 80;

            this.frameNum++;
            
        }, 10)
        
    
        
    }
    
}