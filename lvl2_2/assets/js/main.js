document.querySelector("body").addEventListener("keypress", (event)=> {
    let code = event.code
    let keyCode = event.keyCode
    let key = event.key
    console.log(keyCode);
    document.getElementById("key").innerHTML = key
    document.getElementById("code").innerHTML = code
    document.getElementsByClassName("keycode")[0].innerHTML = keyCode
    document.getElementById("keycode").innerHTML = keyCode
})