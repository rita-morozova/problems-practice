//

function capitalizeFirst(arr){
    if(arr.length === 1){
        return [arr[0][0].toUpperCase() + arr[0].substr(1)]
    }
    const res = capitalizeFirst(arr.slice(0,-1))
    const string = arr.slice(arr.length - 1)[0][0].toUpperCase() + arr.slice(arr.length - 1)[0].substr(1)
    res.push(string)
    return res
}


////////////////

function capitalizeFirst (arr) {
    var result = [];
    var helperFn = function(arr) {
        if (arr.length === 0) {
            return;
        }
        var str = arr[0];
        result.push(str[0].toUpperCase() + str.slice(1));
        return helperFn(arr.slice(1));
    }
    helperFn(arr);
    return result;
  }
  
  capitalizeFirst(['car','taco','banana']);