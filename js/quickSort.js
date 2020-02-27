class QuickSort {
  constructor() {
    this.name = "Quick sort (Khan Academy)";
    this.comparissons = 0;
    this.currentElement = 0;
    this.pivot = 0;
  }

  //----------------------------------------------------------------------------

  async sort(array) {
    await this.quickSort(array, 0, array.length - 1);
  }

  //----------------------------------------------------------------------------

  async quickSort(array, p, r) {
    if (p < r) {
      var pivotIndex = await this.partition(array, p, r);
      this.currentElement = pivotIndex;

      await this.quickSort(array, p, pivotIndex - 1);
      await this.quickSort(array, pivotIndex + 1, r);
    }
  }

  //----------------------------------------------------------------------------

  async partition(array, p, r) {
    this.pivot = r;

    var q = p;
    for (var j = p; j < r; j++, this.comparissons++) {
      await this.display(array);
      await sleep(sleepTime / 2);

      this.currentElement = j;

      if (array[j].height <= array[r].height) {
        swap(array, j, q);
        q++;
      }
    }

    swap(array, q, r);

    return q;
  }

  //----------------------------------------------------------------------------

  async display(array) {
    makeBackground();

    var position = 0;
    for (var i = 0; i < array.length; i++, position += barWidth) {
      array[i].color = "white";

      if (i === this.currentElement) {
        array[i].color = "red";
      } else if (i === this.pivot) {
        array[i].color = "green";
      }

      array[i].display(position);
    }
  }
}
