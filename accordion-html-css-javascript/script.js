function display(element) {
    let item = document.getElementById(element);
    if (item.style.display == "none") {
        item.style.display = "block"
    } else {
        item.style.display = "none"
    }

}