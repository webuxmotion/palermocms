import * as PIXI from 'pixi.js';
import Particle from './Particle';

class ParticleText {
    constructor() {
        this.mouse = null;
        this.particleSize = 2;
        this.rows = 200;
        this.cols = 500;


        this.particles = [];

        this.app = new PIXI.Application({ resizeTo: window });
        document.body.appendChild(this.app.view);

        this.container = new PIXI.ParticleContainer(100000);
        this.app.stage.addChild(this.container);


        this.addObjects();
    }

    addObjects() {
        this.app.loader.add('bg', '/client/perever-group.png').load((loader, resources) => {

            const ctx = this.getContext(resources);

            for (let i = 0; i < this.cols; i++) {
                for (let j = 0; j < this.rows; j++) {
                    if (this.hasFill(i*this.particleSize, j*this.particleSize, ctx)) {
                        let p = new Particle(i*this.particleSize, j*this.particleSize, resources.bg.texture, this.particleSize);
                        this.particles.push(p);
                        this.container.addChild(p.sprite);
                    }
                }
            }

            this.animate();
        });
    }

    animate() {
        this.app.ticker.add(() => {

            this.mouse = this.app.renderer.plugins.interaction.mouse.global;

            this.particles.forEach(p => {
                p.update(this.mouse);
            })
        });
    }

    getContext(resources) {
        const canvas = document.createElement('canvas');
        document.body.appendChild(canvas);
        const ctx = canvas.getContext('2d');
        canvas.width = this.cols * this.particleSize;
        canvas.height = this.rows * this.particleSize;
        canvas.style.display = 'none';
        ctx.drawImage(resources.bg.data, 0, 0);

        return ctx;
    }

    hasFill(x, y, ctx) {
        for (let i = 0; i < this.particleSize; i++) {
            for (let j = 0; j < this.particleSize; j++) {
                if (ctx.getImageData(x + i, y + i, 1, 1).data[0] > 0) return true;
            }
        }
        return false;
    }
}

let PT = new ParticleText();
