
console.log(second_low_and_high([1,2,3,4,5,0]))

function second_low_and_high(arr){

    var seconds=[arr[0],arr[0]]; //array which will contain the second low and second high members respectively
    var firsts=[arr[1],arr[1]]; //array which will contain the lowest and highest members respectively
    for(var i=0;i<arr.length;i++) {
        if (arr[i] < firsts[0]) {
            seconds[0] = firsts[0];
            firsts[0] = arr[i];
        }
        if(arr[i]>firsts[1]){
            seconds[1] = firsts[1];
            firsts[1] = arr[i];
        }
    }
    return seconds;
}