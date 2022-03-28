let attendance = [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0]
var abs = 0
let days = attendance.length;
for (var i = days - 1; i >= 20; i--) {
    if (attendance[i] == 0) {
        abs += 1
    }
}
let per = days - abs
document.write("Total number of Present is = " + per + "<br>")
document.write("Total number of Absent is = " + abs + "<br>")
document.write("Total number of Days is = " + attendance.length + "<br>")
console.log("Total number of Present is = " + per)
console.log("Total number of Absent is = " + abs)
console.log("Total number of Days is = " + attendance.length)
