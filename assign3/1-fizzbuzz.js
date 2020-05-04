// Enter your code here
function fizzbuzz(){
let num=1;
while( num <= 100)
{

    if(( num%3 == 0 ) && (num%5 ==0))
    {
        document.getElementById("results").insertAdjacentHTML("beforebegin",'fizzbuzz\n');
    }
    else if( (num % 3) == 0 )
    {
       document.getElementById("results").insertAdjacentHTML("beforebegin",'fizz\n');
    }
    else if((num % 5) ==0)
    {
        document.getElementById("results").insertAdjacentHTML("beforebegin",'buzz\n');
    }
    else{
       document.getElementById("results").insertAdjacentHTML("beforebegin",num+'\n');
    }

    num+=1;
}
}
