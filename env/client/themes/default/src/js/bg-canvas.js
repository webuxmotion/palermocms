export default class BgCanvas {
  constructor(offset, size = 500) {
    this.offset = offset;
    this.canvas = document.createElement('canvas');
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.imgSize = size;

    this.drawCoords();
  }

  getCtx() {
    return this.ctx;
  }

  drawCoords() {
    this.ctx.beginPath();
    this.ctx.rect(this.offset, this.offset, this.imgSize, this.imgSize);
    this.ctx.stroke();
  }
}