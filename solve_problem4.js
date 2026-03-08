// //problem-1

// function greetUser( name="jony")
// {
//     console.log(`Hello ${name} welcome to javascript lessoin.`);
// }

// greetUser("karim");
// greetUser();


// //problem-2

// function calculateRectangleArea( l, w)
// {
//     if(typeof l!=="number" || typeof w!=="number"||l>=0 ||w>=0)
//     {
//         console.log("Invalid input!");
//     }
 
//         return l*w;
    
// }

// area=calculateRectangleArea(5, 10)
// calculateRectangleArea(3)
// calculateRectangleArea("abc", 5)
// console.log(area);

// //problem-3

// function findMaxNumber(arr)
// {  
//      if(arr.length===0)
//          {
//             console.log("Invalid array");
//             return;
//          }

//      for(let i=0;i<arr.length;i++)
//         {
//             if( typeof arr[i]!=="number")
//             {
//                 console.log("Invalid array");
//                 return;
//             }
//         }
    
    
//     let max_num=arr[0];
//      for(let i=0;i<arr.length;i++)
//           { 
//             if(max_num<arr[i])
//                {
//                   max_num=arr[i]; 
//                } 
               
//           }
//      console.log(`MaxNumber is ${max_num}`);
     
// }


// findMaxNumber([3, 7, 2, 9, 5])
// findMaxNumber([-1, -5, -2])
// findMaxNumber([1, "abc", 3])
// findMaxNumber([])
                       
// //problem-4

// function createMultiplier(m)
// {
//     function double(d)
//     {
//         return d*m;
//     }
//     return double;
// }
// const double = createMultiplier(2);
// console.log(double(5));


// function sayHi()
// {
//     console.log("hi");
// }
// const greet=sayHi;
// greet();


// //problem :5

// function calculateFactorial(n)
// {
//     if(n<0)
//     {
     
//         return "Factorial not defined for negative numbers";
         
//     }
//     else if (n===1 || n===0)
//     {
//         return 1;
//     }

//    else{
//         return n * calculateFactorial(n-1);
//     }
// }


// console.log(calculateFactorial(5));

//problem:6

// const number =[1,2,3,4,5,6];

// number.forEach(
    
//     function(num)
// {
//     console.log(num*2);
// }
// );

// number.forEach(num => console.log(num*2));

//problem:7

// const number= [1,2,3,4,5,6];

// const doubled= number.map(num => console.log(num*2));

// const tripole =number.map(num => console.log(num*3));

// const users=[

//     {name:'Rahim', age:23},
//     {name:'Karim', age:30},
//     {name:'Fahim', age:28}
// ];

// const names=users.map(nam=> nam.name);
// console.log(names);

// const ages=users.map(age => age.age);
// console.log(ages);

//problem:8

// const numbers=[1,2,3,4,5,6,7,8,9,10];

// const evennumber = numbers.filter(num =>  num%2==0);
// console.log(evennumber);

// const oddNumber = numbers.filter(num =>  num%2!==0);
// console.log(oddNumber);


// const users = [
//     { name: 'Rahim', age: 25 },
//     { name: 'Karim', age: 30 },
//     { name: 'Fatema', age: 28 },
//     { name: 'Jony', age: 22 }
// ];

// const adultUser = users.filter(user => user.age >= 25);
// console.log(adultUser);


//problem 9:

// const number = [1,2,3,4,5];

// const sum = number.reduce ((acc,curr) => acc+curr,0);
// console.log(sum);

// const sorts = number.sort((a,b) => b-a);
// console.log(sorts)


// const number = [1,2,3,4,5];

// number.forEach(num => console.log(num*2));

// const double = number.map(num => num*2);
// console.log(double)

// const users=[
//     {name:"Jony" , age:34},
//     {name:"ashik", age:60},
//      {name:"Jon" , age:74},
//     {name:"ashikul", age:70}
// ];

// const user=users.filter(user => user.age>=60);
// console.log(user)
// const names=users.map(nam => nam.name);
// console.log(names)
// const ages=users.map(ag => ag.age);
// console.log(ages)


//problem10:-

// const students=[
//     {name:"Kamal",age:20},
//     {name:"Rahim",age:26},
//     {name:"Karim",age:31},
//     {name:"jon",age:32}
// ];

// const finds = students.find(ag => ag.age>30);
// console.log(finds);

// const Some = students.some(ag => ag.age>30);
// console.log(Some)

// const Every = students.every(ag => ag.age>30);
// console.log(Every);

//Problem11:

// const shopingcart=[
//     { product: 'laptop', price: 50000, quantity: 1 },
//     { product: 'mouse', price: 500, quantity: 2 },
//     { product: 'keyboard', price: 1500, quantity: 1 }
// ];

// const Total_price = shopingcart.reduce((sum ,item) => sum+(item.price*item.quantity),0);
// console.log(Total_price)


//problem12:

const processOrder= [
   { id: 1, status: 'pending', items: [
     { name: 'laptop', price: 50000, quantity: 1 }
   ]},
   { id: 2, status: 'delivered', items: [
    { name: 'mouse', price: 500, quantity: 2 }
  ]},
  { id: 3, status: 'pending', items: [
    { name: 'keyboard', price: 1500, quantity: 1 },
    { name: 'monitor', price: 10000, quantity: 1 }
  ]}
 ];

const pending_order = processOrder.filter(order => order.status === "pending");
const Total_price = pending_order.reduce((sum,order)=>{ return sum + order.items.reduce((insum,items)=>{
    return insum + (items.price*items.quantity);
},0);},0);

console.log(Total_price);


