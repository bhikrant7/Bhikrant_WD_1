// Select The Elements
var toggle_btn;
var big_wrapper;

//hamburgermenu
var hamburger_menu

function declare() {
    toggle_btn = document.querySelector(".toggle-btn");
    big_wrapper = document.querySelector(".Wrapper");
    hamburger_menu= document.querySelector(".hamburger-menu");
}

const body = document.querySelector(".big-wrapper");

declare();

let dark = false;
big_wrapper.querySelector('.personII').style.display = 'none';

function toggleAnimation() {
    if (!big_wrapper) {
        console.error("Wrapper not found");
        return; // Exit function if big_wrapper is not found
    }
    // Clone the wrapper
    dark = !dark;
    let clone = big_wrapper.cloneNode(true);
    if (dark) {
        clone.classList.remove("light");
        clone.classList.add("dark");
        clone.querySelector('.person').style.display = 'none';
        clone.querySelector('.personII').style.display = 'block';
    } else {
        clone.classList.remove("dark");
        clone.classList.add("light");
        clone.querySelector('.personII').style.display = 'none';
        clone.querySelector('.person').style.display = 'block';
    }
    clone.classList.add("copy"); //classList 
    body.appendChild(clone);

    document.body.classList.add("stop-scrolling");

    clone.addEventListener("animationend", () => {
        document.body.classList.remove("stop-scrolling");
        big_wrapper.remove();
        clone.classList.remove("copy");
        // Reset Variables
        declare();
        events();
    });
}

function events() {
    toggle_btn.addEventListener("click", toggleAnimation);
    hamburger_menu.addEventListener("click", () => {
        big_wrapper.classList.toggle("active");
    })
}

events();