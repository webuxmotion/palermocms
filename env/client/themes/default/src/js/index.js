import * as PIXI from 'pixi.js';
import Particle from './Particle';

class ParticleText {
    constructor() {
        this.mouse = null;
        this.particleSize = 10;
        this.particles = [];

        this.app = new PIXI.Application({ resizeTo: window });
        document.body.appendChild(this.app.view);



        this.addObjects();
    }

    addObjects() {
        this.app.loader.add('bg', '/client/bg.jpg').load((loader, resources) => {

            for (let i = 0; i < 50; i++) {
                for (let j = 0; j < 50; j++) {
                    // i, j, size
                    let p = new Particle(i*this.particleSize, j*this.particleSize, resources.bg.texture, this.particleSize);
                    this.particles.push(p);
                    this.app.stage.addChild(p.sprite);
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
}

let PT = new ParticleText();
