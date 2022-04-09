
var num;
const repeted=[];
for(var i=1;i<=100;i++)
{
    num=i%11;
    if(num==0)
    {
        repeted[i]=i;
        console.log(repeted[i]);
    }
}