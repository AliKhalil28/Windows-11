let taskbar = document.getElementsByClassName("taskbar")[0];
let startmenu = document.getElementsByClassName("startmenu")[0];


taskbar.addEventListener("click", () => {
    console.log('Click');

    if (startmenu.style.bottom == "48px") {
        startmenu.style.bottom = "-585px"
    } else {
        startmenu.style.bottom = "48px"
    }
})