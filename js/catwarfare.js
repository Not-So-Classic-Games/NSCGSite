const secret = "catwarfare";
let input = "";

window.addEventListener("keydown", (e) => {
  if (/^[a-zA-Z]$/.test(e.key)) {
    input += e.key.toLowerCase();
    if (input.length > secret.length) {
      input = input.slice(-secret.length);
    }
    if (input === secret) {
      triggerEasterEgg();
      input = "";
    }
  }
});

function triggerEasterEgg() {
  const sound = document.getElementById("cwsound");
  if (sound) {
	sound.volume = .5;
    sound.currentTime = 0;
    sound.play();
  }

  const msg = document.createElement("div");
  msg.style.position = "fixed";
  msg.style.top = "50%";
  msg.style.left = "50%";
  msg.style.transform = "translate(-50%, -50%)";
  msg.style.background = "rgba(0,0,0,.8)";
  msg.style.color = "#ff7f00";
  msg.style.padding = "1rem 2rem";
  msg.style.borderRadius = "12px";
  msg.style.fontSize = "2rem";
  msg.style.fontFamily = "'Chakra Petch', sans-serif";
  msg.style.zIndex = "9999";
  msg.style.textAlign = "center";
  msg.style.whiteSpace = "pre-line";
  document.body.appendChild(msg);

  let countdown = 3;
  msg.textContent = `CAT WARFARE ACTIVATED!\nRedirecting in ${countdown}...`;

  const timer = setInterval(() => {
    countdown--;
    if (countdown > 0) {
      msg.textContent = `CAT WARFARE ACTIVATED!\nRedirecting in ${countdown}...`;
    } else {
      clearInterval(timer);
      msg.remove();
      window.location.href = "/games/archive/";
    }
  }, 1000);
}
