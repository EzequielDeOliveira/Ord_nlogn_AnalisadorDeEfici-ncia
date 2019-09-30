
class CountSort {
    constructor(arr) {
        this.arr = arr;
        this.swaps = 0;
        this.comparisons = 0;
    }

    countSort(arr) {
        let RANGE = 255;

        let output = [];


        let count = [];
        let i;

        for (i = 0; arr[i]; ++i)
            ++count[arr[i]];

        for (i = 1; i <= RANGE; ++i)
            count[i] += count[i - 1];

        for (i = 0; arr[i]; ++i) {
            output[count[arr[i]] - 1] = arr[i];
            --count[arr[i]];
        }
 
        for (i = 0; arr[i]; ++i)
            arr[i] = output[i];

        console.log(arr, 'sorted count');
    }


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
        this.countSort(this.arr);
        return {
            name: 'Count Sort',
            swaps: this.swaps,
            comparisons: this.comparisons
        }
    }

}

export default CountSort;