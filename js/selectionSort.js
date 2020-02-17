class SelectionSort {
    constructor() {
        this.name = "Selection sort (Khan Academy)";
        this.comparissons = 0;
        this.currentlyAnalyzing = 0;
        this.currentSmallest = 0;
    }

    //--------------------------------------------------------------------------

    async sort(array) {
        for (var i = 0; i < array.length; i++) {
            var smallest = await this.indexOfMinimum(array, i);

            if (smallest !== i) {
                swap(array, smallest, i);
            }
        }
    }

    //--------------------------------------------------------------------------

    async indexOfMinimum(array, startPosition) {
        var smallest = array[startPosition].height;
        var indexOfSmallest = startPosition;

        this.currentSmallest = indexOfSmallest;

        for (var i = startPosition; i < array.length; i++, this.comparissons++) {
            this.currentlyAnalyzing = i;
            await this.display(array);

            if (array[i].height < smallest) {
                smallest = array[i].height;
                indexOfSmallest = i;

                this.currentSmallest = i;
            }

            await sleep(sleepTime);
        }

        return indexOfSmallest;
    }

    //--------------------------------------------------------------------------

    async display(array) {
        makeBackground();

        var position = 0;
        for (var i = 0; i < array.length; i++, position += barWidth) {
            array[i].color = "white";

            if (i === this.currentSmallest) {
                array[i].color = "red";
            } else if (i === this.currentlyAnalyzing) {
                array[i].color = "blue";
            }

            array[i].display(position);
        }
    }
}