function slider(){
    const items = document.querySelectorAll(".section_top-right");
    const list = document.querySelector(".section_top-right-container");
    const btnNext = document.querySelector(".btn-next")
    const btnPrev = document.querySelector(".btn-prev")


    btnNext.onclick = () =>{
            list.appendChild(items) 
    }

    btnPrev.onclick = () =>{
        list.prepend(items.length(items-1))
    }
    
    console.log(items);
}

slider()