
class CountSort {
    constructor(arr) {
        this.arr = arr;
        this.swaps = 0;
        this.comparisons = 0;
    }

    countingSort = (arr, min, max) => {
        let i = min,
            j = 0,
            len = arr.length,
            count = [];
        for (i; i <= max; i++) {
            count[i] = 0;
        }
        for (i = 0; i < len; i++) {
            count[arr[i]] += 1;
        }
        for (i = min; i <= max; i++) {
            while (count[i] > 0) {
                arr[j] = i;
                j++;
                count[i]--;
            }
        }
    };

    swap(i, j) {
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
        this.countingSort(this.arr, 0, this.arr.length);
        return {
            name: 'Count Sort',
            swaps: this.swaps,
            comparisons: this.comparisons
        }
    }

}

export default CountSort;