let hover1 = document.querySelector(".header_menu--item-1");
let arrowDown = document.querySelector(".arrow-down");

hover1.onmouseover = () => {
    console.log("asdasdsa");
    arrowDown.style.borderTop = "52px solid #E84545";
};


hover1.onmouseleave = () => {
    console.log("asdasdsa");
    arrowDown.style.borderTop = "52px solid transparent";
};