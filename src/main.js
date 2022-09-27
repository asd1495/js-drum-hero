//Popup

window.addEventListener("load", function() {
    setTimeout(
        popup = () => {
            document.querySelector(".popup").style.display = "block";
        },
        0010
    )
});

document.querySelector("#close").addEventListener("click", function() {
    document.querySelector(".popup").style.display = "none";
});

//Drumkit 
function sound(e) {
    const audio = this.document.querySelector(`audio[data-key=${e.code}]`);
    const key = this.document.querySelector(`.key[data-key=${e.code}]`);

    if (!audio) return;

    audio.currentTime = 0;
    key.classList.add("playing");
}

function rmvTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", rmvTransition));

window.addEventListener("keydown", sound);