class CocktailSort {
  constructor() {
    this.name = "Cocktail Sort";
    this.pivot = 0;
    this.comparissons = 0;
  }

  //--------------------------------------------------------------------------

  async sort(array) {
    var hasChanged = true;
    var start = 0;
    var end = array.length - 1;

    while (hasChanged) {
      hasChanged = false;

      for (var j = start; j < end; j++, this.comparissons++) {
        this.display(array);
        this.pivot = j;

        if (array[j].height > array[j + 1].height) {
          swap(array, j, j + 1);
          this.pivot = j + 1;
          hasChanged = true;
        }
        await sleep(sleepTime);
      }
      end--;

      if (!hasChanged) break;

      hasChanged = false;

      for (var j = end - 1; j >= start; j--, this.comparissons++) {
        this.display(array);
        this.pivot = j;

        if (array[j].height > array[j + 1].height) {
          swap(array, j, j + 1);
          this.pivot = j + 1;
          hasChanged = true;
        }
        await sleep(sleepTime);
      }
      start++;
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
