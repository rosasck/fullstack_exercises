// Enter your code here
/*function fizzbuzz(){*/
let num=1;
while( num <= 100)
{
    if(( num%3 == 0 ) && (num%5 ==0))
    {
        document.write('fizzbuzz\n');
    }
    else if( (num % 3) == 0 )
    {
       document.write('fizz\n');
    }
    else if((num % 5) ==0)
    {
        document.write('buzz\n');        
    }
    else{
        document.write(num+ '\n');
    }

    num+=1;
}
/*}*/

