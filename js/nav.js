(function() {
  const BASE = "";
  const target = document.getElementById("site-nav");

  if (!target) return; // don't run if #site-nav is missing

  fetch(BASE + "/nav.html", { cache: "no-cache" })
    .then(res => res.text())
    .then(html => {
      target.innerHTML = html;
    })
    .catch(err => {
      console.error("Nav failed to load", err);
      target.innerHTML = "<!-- nav failed to load -->";
    });
})();