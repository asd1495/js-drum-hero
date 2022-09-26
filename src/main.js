//Popup

window.addEventListener("load", function() {
    setTimeout(
        popup = () => {
            document.querySelector(".popup").style.display = "block";
        },
        0010
    )
});

document.querySelector(".popup").addEventListener("click", function() {
    document.querySelector(".popup").style.display = "none";
});

//Drumkit