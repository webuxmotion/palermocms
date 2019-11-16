import * as PIXI from 'pixi.js';

export default class Particle {
    constructor(x, y, texture, size) {
        this.x = x;
        this.y = y;

        this.sprite = new PIXI.Sprite(new PIXI.Texture(texture));
        this.sprite.texture.frame = new PIXI.Rectangle(x, y, size, size);

        this.sprite.x = x;
        this.sprite.y = y;

        this.speedX = 0;
        this.speedY = 0;

        this.radius = 100;

        this.friction = 0.9;

        this.dirX = Math.random() - 0.5;
        this.dirY = Math.random() - 0.5;
    }

    update(mouse) {
        let distanceX = mouse.x - this.sprite.x;
        let distanceY = mouse.y - this.sprite.y;

        let distance = Math.sqrt(distanceX**2 + distanceY**2);

        let normalX = distanceX/distance;
        let normalY = distanceY/distance;

        if (distance < this.radius) {
            this.speedX += normalX;
            this.speedY += normalY;


        }

        this.sprite.x -= this.speedX;
        this.sprite.y -= this.speedY;

    }
}