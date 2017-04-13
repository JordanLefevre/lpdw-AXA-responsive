var cross = document.getElementById('cross_for_entretien');
var extend = document.getElementById('extend');
var selectAllCheckbox = document.getElementById('selectAllCheckbox');

var inputsChecked = 0;
var subMenu = document.getElementById('subMenu');
var inputs = subMenu.getElementsByTagName('input');
var isChecked = [];

for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('change', function(e) {
        if (this.checked) {
            isChecked.push(this);
        } else {
            isChecked.splice(isChecked.indexOf(this), 1);
        }

        if (isChecked.length == inputs.length) {
            cross.style.visibility = "visible";
            extend.style.visibility = "hidden";
        } else if (isChecked.length == 0) {
            cross.style.visibility = "hidden";
            extend.style.visibility = "hidden";
        } else {
            extend.style.visibility = "visible";
            cross.style.visibility = "hidden";
        }

    });

    function selectAll() {
        if (isChecked.length == 0) {
            for (var i = 0; i < inputs.length; i++) {
                inputs[i].checked = true;
                cross.style.visibility = "visible";
                extend.style.visibility = "hidden";
                isChecked.push(this);
            }
            console.log(isChecked.length);
            console.log(inputs.length);
        } else if (isChecked.length == inputs.length) {
            for (var i = 0; i < inputs.length; i++) {
                inputs[i].checked = false;
                cross.style.visibility = "hidden";
                extend.style.visibility = "hidden";
                isChecked = [];
            }

        }
    }
}

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
