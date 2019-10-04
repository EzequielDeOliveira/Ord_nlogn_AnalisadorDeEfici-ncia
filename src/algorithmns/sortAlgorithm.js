class SortAlgorithm {
    constructor (arr) {
        this.arr = arr;
        this.swaps = 0;
        this.comparisons = 0;
        this.memory = 0;
    }

    returnResult(name) {
        return {
            name: name,
            swaps: this.swaps,
            comparisons: this.comparisons,
            memory: this.memory
        }
    }
}

export default SortAlgorithm;