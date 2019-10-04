class RadixSort {
    constructor(arr) {
        this.arr = arr;
        this.swaps = 0;
        this.comparisons = 0;
    }

    getPosition(num, place) {
        return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10
    }   // gives back bucket index  


    getMax(arr) {
        let max = 0;
        for (let num of arr) {
            this.comparisons++;
            if (max < num.toString().length) {
                max = num.toString().length
            }
        }
        return max
    }

    radixSort(arr) {
        const max = this.getMax(arr);

        for (let i = 0; i < max; i++) {
            let buckets = Array.from({ length: 10 }, () => []) // creating 10 empty arrays

            for (let j = 0; j < arr.length; j++) {
                this.comparisons++;
                buckets[this.getPosition(arr[j], i)].push(arr[j]); //push the number into desired
                                                             // bucket
            }
            arr = [].concat(...buckets);
        }
        console.log(arr, "radix sorted");
    }

    getResult() {
        this.radixSort(this.arr);
        return {
            name: 'Radix Sort',
            swaps: this.swaps,
            comparisons: this.comparisons
        }
    }
}

export default RadixSort;