//                           Array Assignment
/* 
Part 1: Basic Arrays - Product Inventory
Challenge:
 You are taskd with Creating a Inventory System.Implement functions and logic to manage object manupulation effectively.

 1.Define a type alias named product to represent a product with the following properties:
 . name(string): The name of the product.
 . price(number): The price of producr.
 . inventory(Object): An object containing invemtory details including:
 . stock(number):The number of products is available.
 . colorOptions(string[]):An array listing available color
*/
// 2. Create an array named products containing at least three product objects. Each
// product object should include a name, price, and inventory details.
// 3. Implement a function named changeColor that takes a product object and a new
// color as input. This function should update the color property of the product and
// adjust the price based on the new color (implement your own logic, e.g., increase by
// 10% for red, decrease by 5% for blue).
// 4. Display each product's name, price, stock, and available colors. Iterate through the
// products array and print each product's details.

//===========Step1=======================//
type Product ={
    name:string,
    price:number,
    inventory:{
        stock:number,
        colorOptions:string[],
    }
   
}

//====================Step 2=====================//
const products:Product[]=[{
    name:"cricket bat",
    price:3000,
    inventory:{
        stock:10,
        colorOptions:["white","offwhite","brown",]
    },
  
},
{
    name:"Polo Shirt",
    price:1500,
   
    inventory:{
        stock:19,
        colorOptions:['red','blue','white']
    }
},
 {
    name:"Ideas shirt",
    price:2000,
  
    inventory:{
        stock:20,
        colorOptions:['red','blue',]
    }
}
]

//==============step 3==============//
function changeColor(products:Product,newcolor:string){
products.inventory.colorOptions.push(newcolor)

if(newcolor==="white"){
    products.price+=products.price*0.10
}
else if ( newcolor==="red"){
    products.price+=products.price*0.20
}
else if(newcolor==='blue'){
    products.price-=products.price*0.10 
}
else {`Sorry this ${newcolor} is not available`}

}

function displayProductDetails(product:Product[],):void{
    products.forEach(products=>{
        console.log(`Name :${products.name}`);
        console.log(`price:${products.price}`);
        console.log(`Stock"${products.inventory.stock}`);
        console.log(`Available colors: ${products.inventory.colorOptions}`);
        
        
        
    });

}
changeColor(products[0],"white")
changeColor(products[1],"red")
changeColor(products[2],"blue")

displayProductDetails(products)