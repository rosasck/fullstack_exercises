// Enter your code here
//prompt user for 8 digit number, validate that u have gotten 8 numbers
//reverses digits
//print output in alert box

function reverse_fun(){
let arr2=[];
let arr1= parseInt(document.getElementById("input").value);
if(arr1<99999999 && arr1>9999999)  {
arr2=rev(arr1);
alert("input: "+ arr1 +"\n"+ "output: " + arr2 + "\n");
}
else{
    alert("8 digits required");
}
}

function rev(arr){
    arr= arr + "";
    return arr.split("").reverse().join("");
}
