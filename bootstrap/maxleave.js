function setup(id) {
    // Write your code here.
    var div = document.getElementById("parent");
    // div.removeChild(div.firstChild);
    var child = document.getElementById(id);
    div.removeChild(child);
}