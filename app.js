window.addEventListener("scroll", fadeEffect);
window.addEventListener("load", fadeEffect);

function fadeEffect(e) {
    console.log(document.querySelector(".project").getBoundingClientRect().top);
    console.log(window.innerHeight);
    var num = document.querySelectorAll(".project");
    var fadePoint = window.innerHeight / 1.4;
    var num2 = 0;

    for (let i = 0; i < num.length; i++) {
        if (num[i].getBoundingClientRect().top <=fadePoint ) {
            // var x = document.querySelectorAll(".project");
            // for (var i = 0; i < x.length; i++) {
            //     x[i].classList.add("apear");
            // }
            num[i].classList.add("apear");
            num2++;
            console.log("done");
            // this.removeEventListener("scroll", run);
        }

    }
    if (num2 === num.length) {
        window.removeEventListener("scroll", run);
        console.log("donee");
    }
}