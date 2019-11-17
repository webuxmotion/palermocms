import BgCanvas from './bg-canvas';

const offset = 40;
const size = 600;

const bg = new BgCanvas(offset, size);

const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


function animate({timing, draw, duration}) {
    let start = performance.now();

    requestAnimationFrame(function anim(time) {
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;

        let progress = timing(timeFraction);

        draw(progress, timeFraction);

        if (timeFraction < 1) {
            requestAnimationFrame(anim);
        }
    });
}

animate({
    duration: 300,
    timing(timeFraction) {
        return timeFraction**3;
    },
    draw(progress, timeFraction) {
        console.log(timeFraction);
        timeFraction = timeFraction < 0 ? 0 : timeFraction;
        ctx.beginPath();
        ctx.rect(offset + size * timeFraction, size + offset - progress * size, 1, 1);
        ctx.stroke();
    }
});