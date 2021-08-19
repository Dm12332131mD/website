// Variables
let dropdowns = document.getElementsByClassName("nav-dropdown");
let funni = document
    .getElementById("nav-item-funni")
    .getElementsByTagName("button")[0]
    .getElementsByTagName("a")[0];
let funniMessages = [
    "FUNNI", "YO", "GOOS", "EY", "FAT BOI STINKS",
    "HONK", "GACKER", "HELP", "MMM", "VERY", "MUCH EPIK",
    "WAT UP", "HONKER!", "AM GOOS"
]
let items = document.getElementsByClassName("nav-item");

// Dropdown
Array.from(dropdowns).forEach(dropdown => {
    let button = dropdown.getElementsByTagName("button")[0];
    let ul = dropdown.getElementsByTagName("ul")[0];
    let active = false;
    button.onclick = () => ul.style.display = ul.style.display === "flex" ? "none" : "flex";
    button.onblur = () => {
        if(!active) ul.style.display = "none";
        else button.focus();
    };
    ul.onmouseenter = () => active = true;
    ul.onmouseleave = () => active = false;
});

// Funni
funni.onclick = () => funni.innerText = funniMessages[Math.floor(Math.random() * funniMessages.length)];