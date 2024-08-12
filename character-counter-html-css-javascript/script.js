let c = 50
let text = document.getElementById("tc")
let rem = document.getElementById("r")
let inp = document.getElementById("inp")
inp.addEventListener("input", function () {
    let len = this.value.length;
    text.textContent = len
    rem.textContent = c - len
})