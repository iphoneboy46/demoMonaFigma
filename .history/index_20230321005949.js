window.onload = () => {
  function slider() {
    const btnNext = document.querySelector(".btn-next");
    const btnPrev = document.querySelector(".btn-prev");

    btnNext.onclick = () => {
      let items = document.querySelectorAll(".section_top-right");
      let list = document.querySelector(".section_top-right-container");
      list.appendChild(items[0]);
    };

    btnPrev.onclick = () => {
      let items = document.querySelectorAll(".section_top-right");
      let list = document.querySelector(".section_top-right-container");
      list.prepend(items[items.length - 1]);
    };

    
  }

  slider();

  function clickSearch(){
    let btnSearch = document.querySelector(".header_menu--item-2");
    let inputSearch = document.querySelector(".arrow-right input")

    btnSearch.onclick = () => {
        inputSearch.classList.toggle("active");
    }
  }

  clickSearch()


  function clickNav(){
    let btnNav = document.querySelector(".arrow-up");
    let listNav = document.querySelector(".header_menu--links");

    console.log(btnNav);

    btnNav.onclick = () => {
        listNav.classList.toggle("active2");
       
    }
  }

  clickNav()
};
