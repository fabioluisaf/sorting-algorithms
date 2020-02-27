class Bar {
  constructor(barWidth, barHeight) {
    this.thickness = barWidth;
    this.height = barHeight;
    this.color = "white";
  }

  //--------------------------------------------------------------------------

  display(position) {
    ctx.fillStyle = this.color;
    ctx.fillRect(
      position,
      canvas.height - this.height,
      this.thickness - 1,
      this.height
    );
  }
}
