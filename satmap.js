const arr = [20,35,45,50]

console.log(arr);


const result = new Map()
result.set("watch", 200)
result.set("phone", 500)


const res = result.get("watch")

console.log(res);

console.log(result);

result.forEach(element => {
    console.log(element);
});


const product = new Set()

product.add("cricket")
product.add("car")
product.add("cover")


console.log(product);


product.forEach((e) => {
    console.log(e);
})
