(function () {
  "use strict";

  var statuses = [
    "DNS resolves. Users don’t.",
    "Cert valid. Trust broken.",
    "Tunnel up. Traffic missing."
  ];

  var statusEl = document.getElementById("status-rotator");
  if (statusEl) {
    var i = 0;
    setInterval(function () {
      i = (i + 1) % statuses.length;
      statusEl.textContent = statuses[i];
    }, 2400);
  }

  var blocks = document.querySelectorAll("[data-fade]");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    blocks.forEach(function (block) {
      io.observe(block);
    });
  } else {
    blocks.forEach(function (block) {
      block.classList.add("visible");
    });
  }
})();
