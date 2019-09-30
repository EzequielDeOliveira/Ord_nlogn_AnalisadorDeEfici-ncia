class QuickSort {
    constructor(arr) {
        this.arr = arr;
        this.swaps = 0;
        this.comparisons = 0;
    }


    partition = (arr, low, high) => {
        let pivot = arr[high]; // pivot  
        let i = (low - 1); // Index of smaller element  

        for (let j = low; j <= high - 1; j++) {
            // If current element is smaller than the pivot  
            if (this.compare(arr[j], pivot)) {
                i++; // increment index of smaller element  
                this.swap(arr[i], arr[j]);
            }
        }
        this.swap(arr[i + 1], arr[high], true);
        return (i + 1);
    }

    quickSort = (arr, low, high) => {
        if (low < high) {
            /* pi is partitioning index, arr[p] is now  
            at right place */
            let pi = this.partition(arr, low, high);

            // Separately sort elements before  
            // partition and after partition  
            this.quickSort(arr, low, pi - 1);
            this.quickSort(arr, pi + 1, high);
        }
    }


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
        this.quickSort(this.arr, 0, this.arr.length - 1);
        return {
            name: 'Quick Sort',
            swaps: this.swaps,
            comparisons: this.comparisons
        }
    }

}

export default QuickSort;