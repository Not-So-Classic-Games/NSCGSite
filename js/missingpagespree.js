let upCount = 0;
let resetTimer;
let isPlaying = false;

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp" && !isPlaying) {
    upCount++;

    // reset counter if user pauses >2s
    clearTimeout(resetTimer);
    resetTimer = setTimeout(() => { upCount = 0; }, 2000);

    // check for 4x "ArrowUp"
    if (upCount === 4) {
      const audio = document.getElementById("secret-sound");
      const title = document.querySelector(".error-container h1");

      if (!audio || !title) return;

      const originalText = title.textContent;
      title.textContent = "KITTY SPREE";
      isPlaying = true;

      audio.currentTime = 0;
      audio.volume = 0.5;
      audio.play();

      audio.onended = () => {
        title.textContent = originalText;
        isPlaying = false;
      };

      upCount = 0;
    }
  } else if (e.key !== "ArrowUp") {
    upCount = 0;
  }
});