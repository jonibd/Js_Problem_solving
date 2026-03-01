const number=prompt("Enter the value of number :");

if(isNaN(number)||number===null||number==="")
{ 
   console.log("Please Enter any number!");
}
else
 {
    for( let i=0;i<=number;i++)
{
   if(i%2===0)
    {
        console.log(`${i} Even`);
    }
    else{
        console.log(`${i} Odd`);
    }
} 
 
}



