console.log("Hello")

let price = 100
const discount = 20

console.log("Price " + price)

//Apply discount
price = price * ((100 - discount) /100)

console.log("New Price: " + price)



const response = prompt("Books vs Movies")
if (response === "books") {
        console.log("Books")
} else {
    console.log("Films")
}