import "./styles/index.scss";
import HomePage from './scripts/homepage'


document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("canvas-main");
    const ctx = canvas.getContext('2d')
    canvas.width = 800;
    canvas.height = 500;
    let gameFrame = 0;

    let game = "";
    new HomePage(canvas, ctx, game).render();

    


});
