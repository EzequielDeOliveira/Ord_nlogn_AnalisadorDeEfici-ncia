class MergeSort {
    constructor(arr) {
        this.arr = arr;
        this.swaps = 0;
        this.comparisons = 0;
    }


    merge(arr, l, m, r) {
        let i, j, k;
        let n1 = m - l + 1;
        let n2 = r - m;

        let L = [];
        let R = [];

        for (i = 0; i < n1; i++)
            L[i] = arr[l + i];
        for (j = 0; j < n2; j++)
            R[j] = arr[m + 1 + j];

        i = 0;
        j = 0;
        k = l;
        while (i < n1 && j < n2) {

            this.comparisons++;

            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            }
            else {
                arr[k] = R[j];
                j++;
                this.swaps++;
            }
            k++;
        }


        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }


        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }


    mergeSort(arr, l, r) {
        if (l < r) {

            let m = l + (r - l) / 2;

            this.mergeSort(arr, l, m);
            this.mergeSort(arr, m + 1, r);

            this.merge(arr, l, m, r);
        }
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
        this.mergeSort(this.arr, 0, this.arr.length - 1);
        return {
            name: 'Merge Sort',
            swaps: this.swaps,
            comparisons: this.comparisons
        }
    }

}

export default MergeSort;