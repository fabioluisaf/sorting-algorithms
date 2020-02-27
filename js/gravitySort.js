class GravitySort {
  constructor() {
    this.name = "Gravity/Bead Sort";
    this.comparissons = 0;
    this.pivot = 0;
    this.beads;
  }

  //--------------------------------------------------------------------------

  async sort(array) {
    var max = 0;
    this.beads = new Array(array.length);

    //find the greatest value
    for (var i = 0; i < array.length; i++) {
      if (array[i].height > max) {
        max = array[i].height;
      }
    }

    //create a beads array
    for (var i = 0; i < array.length; i++) {
      this.beads[i] = new Array(Math.ceil(max));

      for (var j = 0; j < max; j++) {
        this.beads[i][j] = false;
      }
    }

    //mark the beads
    for (var i = 0; i < array.length; i++) {
      for (var j = 0; j < array[i].height; j++) {
        this.beads[i][j] = true;
      }

      this.pivot = i;
      await this.display(array);
      await sleep(sleepTime / 2);
    }

    for (var j = 0; j < max; j++) {
      var sum = 0;

      //count the ammount of beads per post
      for (var i = 0; i < array.length; i++) {
        if (this.beads[i][j]) sum++;
        this.beads[i][j] = false;
      }

      //move the beads down
      for (var i = array.length - sum; i < array.length; i++) {
        this.beads[i][j] = true;
      }
    }

    //Put the sorted values in the array using the beads
    for (var i = 0; i < array.length; i++) {
      var j;
      for (j = 0; j < max && this.beads[i][j]; j++) {}

      array[i].height = j;
      await this.display(array);
      await sleep(sleepTime / 2);
    }
  }

  //--------------------------------------------------------------------------

  async display(array) {
    makeBackground();

    var position = 0;
    for (var i = 0; i < array.length; i++, position += barWidth) {
      array[i].color = "white";
      if (i === this.pivot) array[i].color = "red";

      array[i].display(position);
    }
  }

  //--------------------------------------------------------------------------
}
