let counter = document.querySelector(".counter");
// console.log(counter);
let button = document.querySelectorAll("button");
// console.log(button);
// console.log(typeof counter.textContent);
button[0].addEventListener("click", () => {
    //   // class appreach
    let res = Number(counter.textContent) - 1;
    counter.textContent = res;
    //   //   console.log(res);
    //   // my approach
    //   num--;
    //   counter.textContent = num;
    if (res < 0) {
        document.body.style.backgroundColor = "red";
        text.textContent = "YOU GOT RED";
    }
});
// assignment
// ========
let reset = document.querySelector(".counter1");
let btnn = document.querySelectorAll("button");
let newKey = document.querySelector(".counter1");
let num = 0;
btnn[1].addEventListener("click", () => {
    num == 0;
    counter.textContent = num;
    if (num == 0) {
        document.body.style.backgroundColor = "green";
        newKey.textContent = "YOU GOT GREEN";
    }
});
let counter2 = document.querySelector(".counter1");
let btn = document.querySelectorAll("button");
let text = document.querySelector(".counter1");
let num1 = 0;
btn[2].addEventListener("click", () => {
    num1 > 0;
    num1++;
    counter.textContent = num1;
    if (num1 > 0) {
        document.body.style.backgroundColor = "blue";
        text.textContent = "YOU GOT BLUE";
    }
});