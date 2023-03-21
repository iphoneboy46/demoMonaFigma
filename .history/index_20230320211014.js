function slider(){
    const items = document.querySelectorAll(".section_top-right");
    const list = document.querySelector(".section_top-right-container");
    const btnNext = document.querySelector(".btn-next")

    btnNext.onclick = () =>{
        list.push(items[0])
    }
    
    console.log(items);
}

slider()