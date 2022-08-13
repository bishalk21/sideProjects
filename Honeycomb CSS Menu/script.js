var j = 0;
let i = document.getElementById("menu").childNodes;
// console.log(i);
let expan = document.querySelector(".container");
// console.log(expan);

expan.addEventListener("click", expand) // click event

function expand() {
    if (j === 0) {
        document.getElementById("add").style.transform = "rotate(45deg)";
        document.getElementById("menu").style.transform = "scale(1)";

        i[1].style.transform = "translateY(-80px)";
        i[3].style.transform = "translate(70px, -40px)";
        i[5].style.transform = "translate(70px, 40px)";
        i[7].style.transform = "translateY(75px)";
        i[9].style.transform = "translate(-70px, 40px)";
        i[11].style.transform = "translate(-70px, -40px)";
        j = 1;
    } else {
        document.getElementById("add").style.transform = "rotate(0deg)";
        document.getElementById("menu").style.transform = "scale(0.9)";

        i[1].style.transform = "translateY(0)";
        i[3].style.transform = "translate(0 )";
        i[5].style.transform = "translate(0)";
        i[7].style.transform = "translateY(0)";
        i[9].style.transform = "translate(0)";
        i[11].style.transform = "translate(0)";
        j = 0;
    }
}


let a = [];
let b = [];
console.log(a == b); // false
console.log(a === b); // false

// here arrays are passed by reference. we are not comparing the contents of the arrays. we are comparing the references of the arrays. Arrays and Objects are reference types so each new empty array iss created and stored in a new memory location and hence both comparisons are false.

var c = 3;
(function () {
    console.log(c);
    c = 4;
    console.log(c);
})();