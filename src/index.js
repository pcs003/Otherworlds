import "./styles/index.scss";
import HomePage from './scripts/homepage'
import Game from "./scripts/game";


document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("canvas-main");
    const ctx = canvas.getContext('2d')
    canvas.width = 800;
    canvas.height = 500;
    let gameFrame = 0;


    new HomePage(canvas, ctx).render();

    


});
