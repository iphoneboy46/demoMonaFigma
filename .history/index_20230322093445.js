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

  function clickSearch() {
    let btnSearch = document.querySelector(".header_menu--item-2");

    let inputSearch = document.querySelector(".arrow-left input");
    console.log(inputSearch);


    btnSearch.onclick = () => {
      inputSearch.classList.toggle("active");
      console.log("asdasd");
    };
  }

  clickSearch();

  function clickNav() {
    let btnNav = document.querySelector(".header_menu--item-4");
    let listNav = document.querySelector(".header_menu--links");

    console.log(btnNav);

    btnNav.onclick = () => {
      listNav.classList.toggle("active2");
    };
  }

  clickNav();

  function handleMenu() {
    let btnNavbar = document.querySelector(".header_menu--item-3");
    let btnExits = document.querySelector(".header_menu--exits");
    let menu = document.querySelector(".menu");
    let modal = document.querySelector(".modal");


    btnNavbar.onclick = () => {
      btnExits.style.visibility = "visible";
      btnNavbar.style.display = "none";
      menu.style.left = "0%";
    };

    btnExits.onclick = () => {
      btnExits.style.visibility = "hidden";
      menu.style.left = "-100%";
      btnNavbar.style.display = "block";
    };
  }

  handleMenu();

  function handleMenuMobile() {
    let btnNavMobi = document.querySelector(".menu-mobi-icon");
    let btnExitsMobi = document.querySelector(".menu-mobi-icon-exits");
    let menuMB = document.querySelector(".menu-mobile");

    btnNavMobi.onclick = () => {
      menuMB.style.left = "0%";
      btnExitsMobi.style.display = "block";
      btnNavMobi.style.display = "none";
      document.body.style.overflow = "hidden";
    };

    btnExitsMobi.onclick = () => {
      menuMB.style.left = "-100%";
      btnExitsMobi.style.display = "none";
      btnNavMobi.style.display = "block";
      document.body.style.overflow = "auto";
    };
  }

  handleMenuMobile();
};


