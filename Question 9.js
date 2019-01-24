
// Q8. Find the length of the string (entered by the user) without using the built-in function.
//
//     Following is the example of output:
//
//     Input string: javascript
// Output: Length of string: 10

'use strict';
function length(str="aaa"){
    //str +="\n";
    let l = 0;
    let i = 0;
    while(str.slice(i,i+1)){
        l++;
        i++;
    }
    console.log(l + " is the total size of string")
}


 let str = prompt("enter string");
 length(str);