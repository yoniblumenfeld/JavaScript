
console.log(all_possible_combos("dog"))

function current_array_combos(arr)
{
    var combos=[];
    var temp_str="";
    for(var i=0;i<arr.length;i++)
    {
        temp_str += arr[i];
        combos.push(temp_str);
    }
    return combos;
}


function all_possible_combos(x)
{
    var combos=[];
    var tmp_arr=x;
    for(var i=0;i<x.length;i++)
    {
        (function current_index_to_first(){
            var current_first=tmp_arr[0];
            tmp_arr=tmp_arr.split("");
            tmp_arr[0]=tmp_arr[i];
            tmp_arr[i] = current_first;
            tmp_arr = tmp_arr.join("")
        })();
        (current_array_combos(tmp_arr)).forEach((function add_to_combos(x) {
            combos.push(x)
        }));

    }
    return combos;
}