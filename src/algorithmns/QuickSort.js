class QuickSort {
    constructor(arr) {
        this.arr = arr;
        this.swaps = 0;
        this.comparisons = 0;
        this.memory = 0;
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

        let sortedArray = [...unsortedArray];
        this.memory += unsortedArray.length;

        let recursiveSort = (start, end) => {

            if (end - start < 1) {
                return;
            }

            let pivotValue = sortedArray[end];
            let splitIndex = start;
            for (let i = start; i < end; i++) {
                let sort = comparator(sortedArray[i], pivotValue);

                if (sort === -1) {

                    if (splitIndex !== i) {
                        this.swaps++;
                        let temp = sortedArray[splitIndex];
                        sortedArray[splitIndex] = sortedArray[i];
                        sortedArray[i] = temp;
                    }

                    splitIndex++;
                }

            }

            this.swaps++;
            sortedArray[end] = sortedArray[splitIndex];
            sortedArray[splitIndex] = pivotValue;

            recursiveSort(start, splitIndex - 1);
            recursiveSort(splitIndex + 1, end);
        };

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
            comparisons: this.comparisons,
            memory: this.memory,
        }
    }

}

export default QuickSort;