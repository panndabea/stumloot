(function () {
  "use strict";

  var typedLine = document.getElementById("typed-line");
  var fullLine = "Everything is green. Nothing works.";

  if (typedLine) {
    typedLine.textContent = "";
    var index = 0;
    var timer = setInterval(function () {
      typedLine.textContent += fullLine.charAt(index);
      index += 1;
      if (index >= fullLine.length) {
        clearInterval(timer);
      }
    }, 38);
  }

  var statuses = [
    "DNS resolves. Users don’t.",
    "Cert valid. Trust broken.",
    "Tunnel up. Traffic missing."
  ];

  var statusEl = document.getElementById("status-rotator");
  if (statusEl) {
    var statusIndex = 0;
    setInterval(function () {
      statusIndex = (statusIndex + 1) % statuses.length;
      statusEl.textContent = statuses[statusIndex];
    }, 2400);
  }

  var copyBtn = document.getElementById("copy-definition");
  var definitionEl = document.getElementById("definition-text");
  var copyState = document.getElementById("copy-state");

  function setCopyState(msg) {
    if (copyState) {
      copyState.textContent = msg;
      setTimeout(function () {
        copyState.textContent = "";
      }, 1500);
    }
  }

  function fallbackCopy(text) {
    var area = document.createElement("textarea");
    area.value = text;
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.focus();
    area.select();
    try {
      document.execCommand("copy");
      setCopyState("copied.");
    } catch (_) {
      setCopyState("copy failed.");
    }
    document.body.removeChild(area);
  }

  if (copyBtn && definitionEl) {
    copyBtn.addEventListener("click", function () {
      var text = definitionEl.textContent.replace(/\s+/g, " ").trim();

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard
          .writeText(text)
          .then(function () {
            setCopyState("copied.");
          })
          .catch(function () {
            fallbackCopy(text);
          });
      } else {
        fallbackCopy(text);
      }
    });
  }
})();
