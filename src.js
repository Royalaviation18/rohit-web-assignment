// Code by Rohit Priyadarshi 
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

//function for generating random array values
function generateRandomArray(length, minValue, maxValue) {
    const randomArray = [];

    for (let i = 0; i < length; i++) {
        const randomValue = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
        randomArray.push(randomValue);
    }

    return randomArray;
}

let data = generateRandomArray(50, 1, 99);
const labels = Array.from({ length: data.length }, (_, i) => `Label ${i + 1}`);

//function for drawing bars on the canvas
function drawBars(barWidth = 10) {
    console.log(barWidth);
    const spacing = 15;
    let x = 20;
    const labelY = canvas.height + 20; // Adjust the y-coordinate for labels

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < data.length; i++) {
        const barHeight = data[i];
        const y = canvas.height - barHeight;

        ctx.fillStyle = '#A9A9FF';
        ctx.fillRect(x, y - 230, barWidth, barHeight);
        // ctx.strokeRect(x,y,barWidth,barHeight);

        ctx.fillStyle = 'A9A9FF';
        ctx.font = 'bold 10px Arial';
        ctx.fillText(data[i], x + barWidth / 2 - 5, y + barHeight - 220);

        x += spacing;
    }


}

//randomizeArray function
function randomizeArray() {
    data = generateRandomArray(50, 1, 99);
    drawBars();
}

//implementation of insertion sort
function insertionSort() {
    for (let i = 1; i < data.length; i++) {
        let key = data[i];
        let j = i - 1;
        while (j >= 0 && data[j] > key) {
            data[j + 1] = data[j];
            j = j - 1;
        }
        data[j + 1] = key;

        setTimeout(() => {
            drawBars();
        }, i * 200);
    }
}

//implementation of selection sort
function selectionSort() {
    for (let i = 0; i < data.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < data.length; j++) {
            if (data[j] < data[minIndex]) {
                minIndex = j;
            }
        }

        let temp = data[minIndex];
        data[minIndex] = data[i];
        data[i] = temp;

        setTimeout(() => {
            drawBars();
        }, i * 200);
    }
}

//implementation of bubble sort
function bubbleSort() {
    let n = data.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (data[j] > data[j + 1]) {

                let temp = data[j];
                data[j] = data[j + 1];
                data[j + 1] = temp;

                setTimeout(() => {
                    drawBars();
                }, i * n + j * 200);
            }
        }
    }
}

//implementation of quick sort
function quickSort() {
    performQuickSort(data, 0, data.length - 1);
}

function performQuickSort(arr, low, high) {
    if (low < high) {
        let pi = partition(arr, low, high);

        performQuickSort(arr, low, pi - 1);
        performQuickSort(arr, pi + 1, high);
    }
}

function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;

            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    // Swap arr[i+1] and arr[high] (pivot)
    let temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;

    setTimeout(() => {
        drawBars();
    }, 200);

    return i + 1;
}

//implementation of merge sort
function mergeSort() {
    performMergeSort(data, 0, data.length - 1);
}

function performMergeSort(arr, left, right) {
    if (left < right) {
        let mid = Math.floor((left + right) / 2);

        performMergeSort(arr, left, mid);
        performMergeSort(arr, mid + 1, right);

        merge(arr, left, mid, right);
    }
}

function merge(arr, left, mid, right) {
    let n1 = mid - left + 1;
    let n2 = right - mid;

    let L = new Array(n1);
    let R = new Array(n2);

    for (let i = 0; i < n1; i++) {
        L[i] = arr[left + i];
    }
    for (let j = 0; j < n2; j++) {
        R[j] = arr[mid + 1 + j];
    }

    let i = 0;
    let j = 0;
    let k = left;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;

        setTimeout(() => {
            drawBars();
        }, 200);
    }

    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;

        setTimeout(() => {
            drawBars();
        }, 200);
    }

    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;

        setTimeout(() => {
            drawBars();
        }, 200);
    }
}

//implementation of shellsort
function shellSort() {
    let n = data.length;
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < n; i++) {
            let temp = data[i];
            let j;

            for (j = i; j >= gap && data[j - gap] > temp; j -= gap) {
                data[j] = data[j - gap];
            }

            data[j] = temp;

            setTimeout(() => {
                drawBars();
            }, i * gap);
        }
    }
}

//function for shrinking bar size
function changeSize() {
    data = generateRandomArray(50, 1, 99);
    //shriking the bars
    drawBars(5);
}


drawBars();