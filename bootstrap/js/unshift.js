function f(){
for (let i = 0; i < 100000000; i++) {
    console.log(i)
}}
f()
console.log("one")
setTimeout(() => {
    console.log("two")
}, 3000);
console.log("three")
