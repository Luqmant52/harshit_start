let arr1 = ["item1", "item2", "item3", "item4"];
// let arr2 = [].concat(arr1);
let arr2 = [...arr1]
arr1.push("item5")

console.log(arr1 === arr2)
console.log(arr1)
console.log(arr2)

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) { document.write(j +"\t") }
    document.write("<br>")
}
console.log('12'-10)

var str = "That was apple,but apple was sweet"
var index = (str.indexOf('was'));
console.log(index)
var str1 = (str.substring(index + 1))
var index2 = str1.indexOf("was")
console.log(index2 + 1+index)
var index2 = "hello"
var str = "This was apple,but apple was sweet"
var index = (str.indexOf('was'));
console.log(index)
var index2 = str.indexOf("was",index+1)
console.log(`Index of is = ${index2}`)

