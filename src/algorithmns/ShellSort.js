class ShellSort {
    constructor (arr) {
        this.arr = arr;
        this.swaps = 0;
        this.comparisons = 0;
    }

    shellSort(arr) {
        var increment = arr.length / 2;
        while (increment > 0) {
            var i;
            for (i = increment; i < arr.length; i++) {
                var j = i;
                var temp = arr[i];
                
                this.comparisons++;
                while (j >= increment && arr[j-increment] > temp) {
                    arr[j] = arr[j-increment];
                    j = j - increment;
                    this.swaps++;
                    this.comparisons++;
                }
        
                arr[j] = temp;
            }
        
            if (increment === 2) {
                increment = 1;
            } else {
                increment = parseInt(increment*5 / 11);
            }
        }
        // console.log(arr, "sorted")
    }

    getArr() {
        console.log(this.arr, 'getArr');
        return {
            name: 'Shell Sort',
            swaps: this.swaps,
            comparisons: this.comparisons,
        }
    }

    getResult() {
        // console.log(this.arr, 'shell')
        this.shellSort(this.arr);
        return {
            name: 'Shell Sort',
            swaps: this.swaps,
            comparisons: this.comparisons,
        }
    }
}

export default ShellSort;