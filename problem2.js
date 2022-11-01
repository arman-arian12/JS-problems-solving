//inpute: linearsearch(["a","b","c","d","c"],"c")
//output: 2 or 'not found'
//problem: linearsearch() function টি implement করে দেখান

function linearsearch(arr,value){
    const lenth = arr.length;

    for(let i = 0; i < lenth; i++){
        if(arr[i]===value){
            return i;
        }
        
    }
    return 'not found!';
}

console.dir(linearsearch(['a','b','c','d','c'],"c"));