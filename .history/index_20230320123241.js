let hover1 = document.querySelector(".header_menu--item-1");
let hover2 = document.querySelector(".header_menu--item-2");
let hover3 = document.querySelector(".header_menu--item-3");
let hover4 = document.querySelector(".header_menu--item-4");
console.log(hover4);


let arrowDown = document.querySelector(".arrow-down");
let arrowUp = document.querySelector(".arrow-up");
let arrowRight = document.querySelector(".arrow-right");
let arrowLeft = document.querySelector(".arrow-left");




hover1.onmouseover = () => {
    arrowDown.style.borderTop = "52px solid #E84545";
};

hover1.onmouseleave = () => {
    arrowDown.style.borderTop = "52px solid transparent";
};

hover2.onmouseover = () => {
    arrowUp.style.borderBottom = "52px solid #E84545";
   
};

hover2.onmouseleave = () => {
    arrowUp.style.borderBottom = "52px solid transparent";
   
};

hover4.onmouseover = () => {
    arrowRight.style.borderLeft = "52px solid #E84545";
   
};

hover4.onmouseleave = () => {
    arrowRight.style.borderLeft = "52px solid transparent";
   
};