fetch("/footer.html")
  .then(res => res.text())
  .then(html => {
    const footer = document.getElementById("footer");
    if (footer) {
      footer.innerHTML = html;
    }
  })
  .catch(err => console.error("Footer load failed:", err));