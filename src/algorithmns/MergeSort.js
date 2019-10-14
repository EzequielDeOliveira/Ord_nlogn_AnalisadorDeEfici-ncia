class MergeSort {
    constructor(arr) {
        this.arr = arr;
        this.swaps = 0;
        this.comparisons = 0;
        this.memory = 0;
    }


    mergeSort(arr) {

        if (arr.length <= 1) {
            return arr;
        }

        this.memory += arr.length;

        const middle = Math.floor(arr.length / 2);

        const left = arr.slice(0, middle);
        const right = arr.slice(middle);

        return this.merge(
            this.mergeSort(left), this.mergeSort(right)
        );
    }

    merge(left, right) {
        let resultArray = [], leftIndex = 0, rightIndex = 0;

        while (leftIndex < left.length && rightIndex < right.length) {
            this.comparisons++;
            if (left[leftIndex] < right[rightIndex]) {
                resultArray.push(left[leftIndex]);
                leftIndex++; // move left array cursor
            } else {
                resultArray.push(right[rightIndex]);
                rightIndex++; // move right array cursor
            }
            this.swaps++;
        }

        return resultArray
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
    }


    getResult() {
        this.arr = this.mergeSort(this.arr);
        return {
            name: 'Merge Sort',
            swaps: this.swaps,
            comparisons: this.comparisons,
            memory: this.memory,
        }
    }

}

export default MergeSort;