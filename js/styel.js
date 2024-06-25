let section = document.querySelector("#skills")
let spans = document.querySelectorAll(".progress-set")

spans.forEach(function (e) {
    e.innerText = `${e.getAttribute("to")}%`
})
window.addEventListener("scroll", function () {
    let scroll =window.scrollY + 400
    // progressSet.forEach(function (e) {
    //   let eleHeight =  e.of
    //   console.le
    //   if (scroll === eleHeight) {
    //     console.log("halo")
    //   }
    // })
    if (scroll + 100 < section.offsetTop) {
        spans.forEach(function (e) {
           e.style.width = `0%`
        })
    }else if (scroll  >= section.offsetTop) {
        spans.forEach(function (e) {
            e.style.width = `${e.getAttribute("to")}%`
        })
    }
})
