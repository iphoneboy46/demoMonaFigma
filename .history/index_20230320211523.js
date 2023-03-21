function slider(){
    const items = document.querySelectorAll(".section_top-right");
    const list = document.querySelector(".section_top-right-container");
    const btnNext = document.querySelector(".btn-next")
    const btnPrev = document.querySelector(".btn-prev")


    btnNext.onclick = () =>{
        console.log(items[0]);
            list.appendChild(items[0]) 
    }

    btnPrev.onclick = () =>{
        list.prepend(items.length(items-1))
    }
    
    console.log(items);
}

slider()