class MergeSort {
  constructor() {
    this.name = "Merge sort(Khan Academy)";
    this.comparissons = 0;
    this.pivot = 0;
  }

  //----------------------------------------------------------------------------

  async sort(array) {
    await this.mergeSort(array, 0, array.length - 1);
  }

  //----------------------------------------------------------------------------

  async mergeSort(array, p, r) {
    if (p < r) {
      var q = Math.floor((r + p) / 2);
      await this.mergeSort(array, p, q);
      await this.mergeSort(array, q + 1, r);
      await this.merge(array, p, q, r);
    }
  }

  //----------------------------------------------------------------------------

  async merge(array, p, q, r) {
    //split the array in two
    var lowHalf = [];
    var highHalf = [];

    var k = p;
    var i;
    var j;

    for (i = 0; k <= q; i++, k++) {
      lowHalf[i] = array[k];
    }
    for (j = 0; k <= r; j++, k++) {
      highHalf[j] = array[k];
    }

    k = p;
    i = 0;
    j = 0;

    //sort the splitted arrays
    while (i < q - p + 1 && j < r - q) {
      await this.display(array);
      await sleep(sleepTime / 2);
      if (lowHalf[i].height < highHalf[j].height) {
        array[k] = lowHalf[i];
        i++;
      } else {
        array[k] = highHalf[j];
        j++;
      }

      this.pivot = k;
      this.comparissons++;
      k++;
    }

    //insert the remaining elements at the end
    while (i < q - p + 1) {
      await this.display(array);
      await sleep(sleepTime / 2);
      array[k] = lowHalf[i];
      i++;
      k++;
      this.pivot = k;
    }

    while (j < r - q) {
      await this.display(array);
      await sleep(sleepTime / 2);
      array[k] = highHalf[j];
      j++;
      k++;
      this.pivot = k;
    }
  }

  //----------------------------------------------------------------------------

  async display(array) {
    makeBackground();

    var position = 0;
    for (var i = 0; i < array.length; i++, position += barWidth) {
      array[i].color = "white";

      if (i === this.pivot) {
        array[i].color = "red";
      }

      array[i].display(position);
    }
  }
}
