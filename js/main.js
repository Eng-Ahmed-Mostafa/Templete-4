let rm = document.querySelector(".form .log-in .input-box.name .input input");
document.onkeydown = function() {
    if(rm.value != "" || rm.value != null) {
        document.querySelector(".form .log-in .input-box.name .input").classList.add("delete");
    }
}
document.querySelector(".form .log-in .input-box.password .input .click").onclick = function() {
    document.querySelector(".form .log-in .input-box.password .input").classList.toggle("no-see");
    if(document.querySelector(".form .log-in .input-box.password .input").classList.contains('no-see')) {
        document.querySelector(".form .log-in .input-box.password .input input").setAttribute('type','text');
    }else {
        document.querySelector(".form .log-in .input-box.password .input input").setAttribute('type','password');

    }
}
document.querySelector(".form .log-in .input-box.name .input .click").onclick = function() {
    rm.value = "";
}
document.querySelector('.form .log-in .check .check-remember .check-box').onclick = function() {
    document.querySelector('.form .log-in .check .check-remember .check-box').classList.toggle('checked')
}
function dele() {
    requestAnimationFrame(dele);
    if(rm.value == "") {
        document.querySelector(".form .log-in .input-box.name .input").classList.remove("delete");
    }
} 
dele();