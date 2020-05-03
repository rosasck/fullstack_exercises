// Enter your code here
//prompt user for 8 digit number, validate that u have gotten 8 numbers
//reverses digits
//print output in alert box

function reverse_fun(){
let arr2=[];
let arr1= parseInt(document.getElementById("input").value);
arr2=rev(arr1);
alert("input: "+ arr1 +"\n"+ "output: " + arr2 + "\n");
}

function rev(arr){
    arr= arr + "";
    return arr.split("").reverse().join("");
}
