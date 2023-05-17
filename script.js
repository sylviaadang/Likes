
// let likesOne = document.querySelector("first-box")

let num = 9;
let countElement = document.querySelector("#first-box-counter")

function like() {
    num++
    countElement.innerText = num;
}

let number = 12;
let countElementTwo = document.querySelector("#second-box-counter")


function addLike() {
    num++
    countElementTwo.innerText = num;
}

let numbers = 9;
let countElementThree = document.querySelector("#third-box-counter")


function moreLikes() {
    num++
    countElementThree.innerText = num;
}
