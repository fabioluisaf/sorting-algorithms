class BinaryInsertionSort {
  constructor() {
    this.name = "Insertion sort (Binary)";
    this.comparissons = 0;
    this.pivot = 0;
    this.currentlyAnalyzing = 0;
    this.finalIndex = 0;
  }

  //----------------------------------------------------------------------------

  async sort(array) {
    for (var i = 1; i < array.length; i++) {
      this.pivot = i;
      var insertIndex = await this.findInsertIndex(array[i], array, i - 1);
      await this.insert(array[i], array, i - 1, insertIndex);
    }
  }

  //----------------------------------------------------------------------------

  async findInsertIndex(bar, array, currentIndex) {
    var min = 0;
    var max = currentIndex;
    var guess;

    while (min <= max) {
      guess = Math.floor((min + max) / 2);
      this.comparissons++;

      if (array[guess].height === bar.height) {
        return guess;
      }
      if (array[guess].height > bar.height) {
        max = guess - 1;
      } else if (array[guess].height < bar.height) {
        min = guess + 1;
      }
    }

    this.finalIndex = min;
    return min;
  }

  //----------------------------------------------------------------------------

  async insert(bar, array, rightIndex, insertIndex) {
    var j;
    for (j = rightIndex; j >= insertIndex; j--) {
      this.currentlyAnalyzing = j + 1;
      array[j + 1] = array[j];
      await this.display(array);
      await sleep(sleepTime);
    }

    array[j + 1] = bar;
  }

  //----------------------------------------------------------------------------

  async display(array) {
    makeBackground();

    var position = 0;
    for (var i = 0; i < array.length; i++, position += barWidth) {
      array[i].color = "white";

      if (i === this.pivot) array[i].color = "blue";
      if (i === this.currentlyAnalyzing) array[i].color = "red";
      if (i === this.finalIndex) array[i].color = "green";

      array[i].display(position);
    }
  }
}
