
console.log(bubbleSort([-4,0,-2,3,6,4,-3]));

function bubbleSort(arr) {
    let min;
    let original_length = arr.length;
    let new_arr = [];
    while (new_arr.length != original_length) {
        let min_index = 0;
        min=arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < min) {
                min_index = i;
                min = arr[i];
            }

        }
        new_arr.push(min);
        arr=arr.slice(0,min_index).concat(arr.slice(min_index+1,arr.length));

    }
    return new_arr;

}
