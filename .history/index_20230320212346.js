window.onload = () => {
  function slider() {
    const btnNext = document.querySelector(".btn-next");
    const btnPrev = document.querySelector(".btn-prev");

    btnNext.onclick = () => {
      const items = document.querySelectorAll(".section_top-right");
      let list = document.querySelector(".section_top-right-container");
      list.appendChild(items[0]);
    };

    console.log(items[0]);
    btnPrev.onclick = () => {
      list.prepend(items[length - 1]);
    };

    console.log(items);
  }

  slider();
};
