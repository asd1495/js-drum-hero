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
function rmvTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  function sound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', rmvTransition));
  window.addEventListener('keydown', sound);