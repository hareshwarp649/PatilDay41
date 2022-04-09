
//Store prime factor of numbers in array
var n=30;
const factors = [];
let divisor = 2;

while (n >= 2) 
{
  if (n % divisor == 0) 
  {
    factors.push(divisor);
    n = n / divisor;
  } 
  else 
  {
    divisor++;
  }
}
factors.forEach(
    function(entry){
        console.log("Pushing:"+entry)
    })
console.log(factors);