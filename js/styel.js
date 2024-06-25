let section = document.querySelector("#skills");
let spans = document.querySelectorAll(".progress-set");
let tecCard = document.querySelector(".tec-card");
let listLine = document.querySelector(".list-line");
let listItem = document.querySelectorAll(".know-item");

spans.forEach(function (e) {
  e.innerText = `${e.getAttribute("to")}%`;
});
window.addEventListener("scroll", function () {
  if (window.innerWidth > 992) {
    let scroll = window.scrollY + 500;

    if (scroll < section.offsetTop) {
      spans.forEach(function (e) {
        e.style.width = `0%`;
      });
      tecCard.style.cssText = "transform :translateX(50%); opacity:0;";
      listItem.forEach(function (e) {
        e.style.cssText =
          "transform :translateX(-100%); opacity:0; transition : all 0s 0s; ";
      });
      listLine.style.cssText = "height : 0; transition : all 0s 0s;";
    } else if (scroll >= section.offsetTop) {
      spans.forEach(function (e) {
        e.style.width = `${e.getAttribute("to")}%`;
      });

      tecCard.style.cssText = "transform :translateX(0%); opacity:1;";

      listItem.forEach(function (e) {
        e.style.cssText = "transform :translateX(0%); opacity:1;";
      });
      listLine.style.cssText =
        "height : calc(100% - 5px); transition : all 2s 0.5s;";
    }
  } else if (window.innerWidth <= 992) {
    let scroll = window.scrollY + 400;

    if (scroll < section.offsetTop) {
      spans.forEach(function (e) {
        e.style.width = `0%`;
      });
      tecCard.style.cssText = "transform :translateX(50%); opacity:0;";
    } else if (scroll >= section.offsetTop) {
      spans.forEach(function (e) {
        e.style.width = `${e.getAttribute("to")}%`;
      });

      tecCard.style.cssText = "transform :translateX(0%); opacity:1;";
      if (scroll - 800 >= section.offsetTop) {
        listItem.forEach(function (e) {
          e.style.cssText = "transform :translateX(0%); opacity:1;";
        });

        listLine.style.cssText =
          "height : calc(100% - 5px); transition : all 2s 0.5s;";
      } else if (scroll - 750 <= section.offsetTop) {
        listItem.forEach(function (e) {
          e.style.cssText =
            "transform :translateX(-100%); opacity:0; transition : all 0s 0s; ";
        });
        listLine.style.cssText = "height : 0; transition : all 0s 0s;";
      }
    }
  }
});
