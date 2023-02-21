SumOfMultiple=0;
function SumOfMultipleNumber(num)
{
    for(i=0;i<num;i++)
    {
        if(i%3===0 ||i%5===0){
           SumOfMultiple+=i;
        }
    }
    return SumOfMultiple;
}
console.log(SumOfMultipleNumber(9))