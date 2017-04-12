let notifCookies = document.querySelector(".cookies");
let closeCookies = document.querySelector("button[name='close-cookies']");
let main = document.querySelector("main[role='main']");

window.setTimeout(function() {
    notifCookies.classList.add("active");
    main.style.height = "calc(100% - (50px + " + notifCookies.offsetHeight + "px)";
}, 1500);

closeCookies.onclick = function() {
    notifCookies.classList.remove("active");
    main.style.height = "calc(100% - 50px)";
}
