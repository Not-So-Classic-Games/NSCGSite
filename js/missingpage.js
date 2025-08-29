window.addEventListener("load", () => {
  const messages = [
    "This page doesn’t exist... or it’s falling Down The Hole.",
    "The page has despawned.",
    "Object reference not set to an instance of an object.",
    "This page doesn’t exist... whoops.",
    "The cat stole this page... Sorry!",
    "You found page 404, Nice!",
    "You should check out Cat Warfare!",
    "Oh hello! I think you took a wrong turn.",
    "Sorry, cats scratched the page up.",
    "Whoops, not the page you wanted.",
    "The JunkRats scrapped this page.",
    "OwO Something has gon wwong, pwease twy again watew."
  ];

  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  const msgEl = document.getElementById("message");

  if (msgEl) {
    msgEl.textContent = randomMessage;
  }
});