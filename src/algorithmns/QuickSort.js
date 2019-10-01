class QuickSort {
    constructor(arr) {
        this.arr = arr;
        this.swaps = 0;
        this.comparisons = 0;
    }

    defaultComparator = (a, b) => {
        this.comparisons++;
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    };


    quickSort = (
        unsortedArray,
        comparator = this.defaultComparator
    ) => {

        // Create a sortable array to return.
        let sortedArray = [...unsortedArray];

        // Recursively sort sub-arrays.
        let recursiveSort = (start, end) => {

            // If this sub-array is empty, it's sorted.
            if (end - start < 1) {
                return;
            }

            let pivotValue = sortedArray[end];
            let splitIndex = start;
            for (let i = start; i < end; i++) {
                let sort = comparator(sortedArray[i], pivotValue);

                // This value is less than the pivot value.
                if (sort === -1) {

                    // If the element just to the right of the split index,
                    //   isn't this element, swap them.
                    if (splitIndex !== i) {
                        this.swaps++;
                        let temp = sortedArray[splitIndex];
                        sortedArray[splitIndex] = sortedArray[i];
                        sortedArray[i] = temp;
                    }

                    // Move the split index to the right by one,
                    //   denoting an increase in the less-than sub-array size.
                    splitIndex++;
                }

                // Leave values that are greater than or equal to
                //   the pivot value where they are.
            }

            // Move the pivot value to between the split.
            this.swaps++;
            sortedArray[end] = sortedArray[splitIndex];
            sortedArray[splitIndex] = pivotValue;

            // Recursively sort the less-than and greater-than arrays.
            recursiveSort(start, splitIndex - 1);
            recursiveSort(splitIndex + 1, end);
        };

        // Sort the entire array.
        recursiveSort(0, unsortedArray.length - 1);
        return sortedArray;
    };

    swap(i, j, equal) {
        let aux = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = aux;
        this.swaps++;
    }

    compare(i, j) {

        this.comparisons++;

        return i < j;
    }

    getResult() {
        this.arr = this.quickSort(this.arr);
        console.log('QUick', this.arr);
        return {
            name: 'Quick Sort',
            swaps: this.swaps,
            comparisons: this.comparisons
        }
    }

}

export default QuickSort;