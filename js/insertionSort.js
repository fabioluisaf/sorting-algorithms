class InsertionSort {
  constructor() {
    this.name = "Insertion sort (Linear)";
    this.comparissons = 0;
    this.pivot = 0;
    this.currentlyAnalyzing = 0;
  }

  //----------------------------------------------------------------------------

  async sort(array) {
    for (var i = 1; i < array.length; i++) {
      this.pivot = i;
      await this.insert(array, i - 1, array[i]);
    }
  }

  //----------------------------------------------------------------------------

  async insert(array, currentIndex, bar) {
    var j;
    for (
      j = currentIndex;
      j >= 0 && array[j].height > bar.height;
      j--, this.comparissons++
    ) {
      array[j + 1] = array[j];
      this.currentlyAnalyzing = j + 1;
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

      if (i === this.pivot) {
        array[i].color = "blue";
      } else if (i === this.currentlyAnalyzing) {
        array[i].color = "red";
      }

      array[i].display(position);
    }
  }
}
