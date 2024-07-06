console.log("Hello")

let price = 100
const discount = 20

console.log("Price " + price)

//Apply discount
price = price * ((100 - discount) /100)

console.log("New Price: " + price)



const response = prompt("Books vs Movies")
if (response === "books" || response === "Books") {
        console.log("📚")
} else {
    console.log("🍿")
}

function add(first, second) {
    return first + second
}

const sum = add (5,6)
console.log(sum)