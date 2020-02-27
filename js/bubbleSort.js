class BubbleSort {
  constructor() {
    this.name = "Bubble Sort";
    this.pivot = 0;
    this.comparissons = 0;
  }

  //--------------------------------------------------------------------------

  async sort(array) {
    for (var i = 0; i < array.length; i++) {
      for (var j = 0; j < array.length - 1 - i; j++, this.comparissons++) {
        this.display(array);
        this.pivot = j;

        if (array[j].height > array[j + 1].height) {
          swap(array, j, j + 1);
          this.pivot = j + 1;
        }
        await sleep(sleepTime);
      }
    }
  }

  //--------------------------------------------------------------------------

  display(array) {
    makeBackground();

    var position = 0;
    for (var i = 0; i < array.length; i++, position += barWidth) {
      array[i].color = "white";

      if (i === this.pivot || i === this.pivot + 1) {
        array[i].color = "red";
      }

      array[i].display(position);
    }
  }
}
