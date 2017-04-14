var selectAllCheckbox = document.getElementById('selectAllCheckbox');

var inputsChecked = 0;
var subMenu = document.querySelectorAll('.subMenu');

var size = document.querySelectorAll(".each_doc input");
var displaySize = document.querySelector(".button_link");
var totalSize = 0;

for (var i = 0; i < size.length; i++) {
    size[i].addEventListener('change', function() {
        if (this.checked) {
            totalSize += parseInt(this.nextElementSibling.querySelector('p').dataset.size);
        } else {
            totalSize -= parseInt(this.nextElementSibling.querySelector('p').dataset.size);
        }
        displaySize.value = "Télécharger " + totalSize/1000 + "Mo";
    });
}

if (subMenu) {
    for (var i = 0; i < subMenu.length; i++) {

        for (var j = 0; j < subMenu[i].getElementsByTagName('input').length; j++) {
            subMenu[i].getElementsByTagName('input')[j].addEventListener('change', function () {
                if (this.closest('.subMenu').querySelectorAll('input:checked').length == this.closest('.subMenu').getElementsByTagName('input').length) {
                    this.closest('.each_doc').querySelector('.cross').style.visibility = "visible";
                    this.closest('.each_doc').querySelector('.extend').style.visibility = "hidden";
                    this.closest('.each_doc').querySelector('.globalState').classList.toggle('checked');
                    this.closest('.each_doc').querySelector('.globalState').classList.toggle('unchecked');
                } else if (this.closest('.subMenu').querySelectorAll('input:checked').length == 0) {
                    this.closest('.each_doc').querySelector('.cross').style.visibility = "hidden";
                    this.closest('.each_doc').querySelector('.extend').style.visibility = "hidden";
                    this.closest('.each_doc').querySelector('.globalState').classList.toggle('checked');
                    this.closest('.each_doc').querySelector('.globalState').classList.toggle('unchecked');
                } else {
                    this.closest('.each_doc').querySelector('.extend').style.visibility = "visible";
                    this.closest('.each_doc').querySelector('.cross').style.visibility = "hidden";
                }

            });

            function selectAll(e) {
                let spanState = e.target.closest('.globalState')
                spanState.classList.toggle('checked');
                spanState.classList.toggle('unchecked');

                inputs = spanState.closest('.each_doc').querySelectorAll('.subMenu input');

                if(spanState.classList.contains('checked')) {
                    spanState.closest('.each_doc').querySelector('.cross').style.visibility = "visible";
                } else {
                    spanState.closest('.each_doc').querySelector('.cross').style.visibility = "hidden";
                }

                spanState.closest('.each_doc').querySelector('.extend').style.visibility = "hidden";

                for(var i = 0; i < inputs.length; i++) {
                    if(spanState.classList.contains('checked')) {
                        inputs[i].checked = true;
                    } else {
                        inputs[i].checked = false;
                    }
                }

                /*if (subMenu[i].querySelectorAll('input:checked').length == 0) {
                    for (var j = 0; j < subMenu[i].getElementsByTagName('input').length; j++) {
                        let input = subMenu[i].getElementsByTagName('input')[j];

                        input.checked = true;
                        input.closest('.each_doc').querySelector('.cross').style.visibility = "visible";
                        input.closest('.each_doc').querySelector('.extend').style.visibility = "hidden";
                    }
                } else if (subMenu[i].querySelectorAll('input:checked').length == subMenu[i].getElementsByTagName('input').length) {
                    for (var j = 0; j < subMenu[i].getElementsByTagName('input').length; j++) {
                        let input = subMenu[i].getElementsByTagName('input')[j];

                        input.checked = false;
                        input.closest('.each_doc').querySelector('.cross').style.visibility = "hidden";
                        input.closest('.each_doc').querySelector('.extend').style.visibility = "hidden";
                    }

                }*/
            }
        }
    }
}

let notifCookies = document.querySelector(".cookies");
let closeCookies = document.querySelector("button[name='close-cookies']");
let main = document.querySelector("main[role='main']");

if(main) {
    window.setTimeout(function() {
        notifCookies.classList.add("active");
        main.style.height = "calc(100% - (50px + " + notifCookies.offsetHeight + "px)";
    }, 1500);

    closeCookies.onclick = function() {
        notifCookies.classList.remove("active");
        main.style.height = "calc(100% - 50px)";
    }
}
