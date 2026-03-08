let numbers1 = [10,30,80,20,40];
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
let sum1=0;
for(let i=0;i<numbers.length;i++)
{
  sum+=numbers[i];
}
console.log(sum);

numbers.push("jony");
console.log(numbers);
numbers.pop();
console.log(numbers);
let numbers = [10,30,80,20,40];
let result = numbers.map(n => n*2);
console.log(result )

let price=[34.90,33.9,90.3,78.9];
let new_price=price.map(p => p*5);
console.log(new_price)

let employe=[90,37,87,99,98];
let sort_list=employe.filter(e => e>=90);
console.log(sort_list);

let product1 = {
    name:"iphone",
    model:"16 pro max",
    price:1000000,
    discount:.1
}


console.log(product.price * product.discount);

let student =[
    {name:"A",marks:80},
    {name:"B",marks:60},
    {name:"c",marks:70}
];

let sum=0;
for(let i=0;i<student.length;i++)
{
    sum=sum+student[i].marks;
}
console.log(sum);
let avg = sum / student.length;
console.log(avg);


let product = {
    name:"iphone",
    model:"16 pro max",
    price:1000000,
    discount:.1
};

for(kye in product)
{
   console.log(kye); 
}
