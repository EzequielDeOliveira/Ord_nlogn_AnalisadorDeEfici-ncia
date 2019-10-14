class BucketSort {
    constructor(arr) {
        this.arr = arr;
        this.swaps = 0;
        this.comparisons = 0;
        this.memory = 0;
    }

    // InsertionSort to be used within bucket sort
    insertionSort(array) {
        var length = array.length;

        for (var i = 1; i < length; i++) {
            var temp = array[i];
            for (var j = i - 1; j >= 0 && array[j] > temp; j--) {
                this.swaps++;
                this.comparisons++;
                array[j + 1] = array[j];
            }
            this.swaps++;
            this.comparisons++;
            array[j + 1] = temp;
        }

        return array;
    }

    // Implement bucket sort
    bucketSort(array, bucketSize) {
        if (array.length === 0) {
            return array;
        }

        // Declaring vars
        var i,
            minValue = array[0],
            maxValue = array[0];
        
        bucketSize = bucketSize || 5;

        // Setting min and max values
        array.forEach(function (currentVal) {
            this.comparisons++;
            if (currentVal < minValue) {
                minValue = currentVal;
            } else if (currentVal > maxValue) {
                maxValue = currentVal;
            }
        }, this)

        // Initializing buckets
        var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
        var allBuckets = new Array(bucketCount);
        this.memory += bucketCount;

        for (i = 0; i < allBuckets.length; i++) {
            allBuckets[i] = [];
        }

        // Pushing values to buckets
        array.forEach(function (currentVal) {
            allBuckets[Math.floor((currentVal - minValue) / bucketSize)].push(currentVal);
            this.memory++;
        }, this);

        // Sorting buckets
        array.length = 0;

        allBuckets.forEach(function (bucket) {
            this.insertionSort(bucket);
            bucket.forEach(function (element) {
                array.push(element)
            });
        }, this);

        console.log(array, 'bucket sorted');
    }

    getResult() {
        this.bucketSort(this.arr);
        return {
            name: 'Bucket Sort',
            swaps: this.swaps,
            comparisons: this.comparisons,
            memory: this.memory,
        }
    }
}

export default BucketSort;