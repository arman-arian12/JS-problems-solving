//কোনো array থেকে কিভাবে সব থেকে বড় string খুজে বের করবেন এবং index নাম্বার দেখাবেন?

function longeststring(namees){
let longersword = "";

for( name of namees){
    if(name.length > longersword.length){
        longersword=name;
    } 
}
    return [longersword,namees.indexOf(longersword)];
}

console.log(longeststring(['arman','arman hssen','samin','alif']));