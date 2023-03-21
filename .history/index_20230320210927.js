function slider(){
    const items = document.querySelectorAll(".section_top-right");
    const list = document.querySelector(".section_top-right-container")
    list.push(items[0])
    console.log(items);
}

slider()