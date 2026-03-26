/* =========================================================
   stumloot — script.js
   Smooth scroll · Copy-to-clipboard · Rotating ticker
   ========================================================= */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     Smooth scroll for anchor links and CTA buttons
  ---------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* ----------------------------------------------------------
     Copy-to-clipboard for the formal definition
  ---------------------------------------------------------- */
  var copyBtn = document.getElementById('copy-def-btn');
  var defText = document.getElementById('formal-def-text');

  if (copyBtn && defText) {
    copyBtn.addEventListener('click', function () {
      var text = defText.textContent.trim();
      navigator.clipboard.writeText(text).then(function () {
        copyBtn.textContent = '✓ Copied';
        copyBtn.classList.add('copied');

        /* Flash the definition highlight */
        var highlight = document.getElementById('def-highlight');
        if (highlight) {
          highlight.classList.add('flash');
          setTimeout(function () { highlight.classList.remove('flash'); }, 800);
        }

        setTimeout(function () {
          copyBtn.textContent = 'Copy definition';
          copyBtn.classList.remove('copied');
        }, 2200);
      }).catch(function () {
        /* Fallback for browsers without clipboard API */
        var ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        try { document.execCommand('copy'); } catch (_) {}
        document.body.removeChild(ta);
        copyBtn.textContent = '✓ Copied';
        copyBtn.classList.add('copied');
        setTimeout(function () {
          copyBtn.textContent = 'Copy definition';
          copyBtn.classList.remove('copied');
        }, 2200);
      });
    });
  }

  /* ----------------------------------------------------------
     Rotating status ticker
  ---------------------------------------------------------- */
  var phrases = [
    'Tunnel connected. Outcome: stumloot.',
    'Cert valid. Trust path broken.',
    'DNS resolves. Users don\'t.',
    'Green dashboard. Dead user path.',
    'Pods ready. Requests: nowhere.',
    'Health check: passing. Service: absent.',
    'Deployment successful. Traffic: theoretical.',
    'All systems nominal. Functionality: optional.',
    'Ingress configured. Routing: hypothetical.',
    'TLS handshake complete. Response: void.',
    'Service mesh operational. Outcome: stumloot.',
    'Config valid. Reality: unmoved.',
  ];

  var tickerEl = document.getElementById('ticker-text');
  if (tickerEl) {
    var idx = 0;
    tickerEl.textContent = phrases[idx];

    setInterval(function () {
      tickerEl.style.opacity = '0';
      tickerEl.style.transition = 'opacity 0.3s';

      setTimeout(function () {
        idx = (idx + 1) % phrases.length;
        tickerEl.textContent = phrases[idx];
        tickerEl.style.opacity = '1';
      }, 320);
    }, 3400);
  }

  /* ----------------------------------------------------------
     Highlight "stumloot" text on page load (subtle pulse on hero word)
  ---------------------------------------------------------- */
  var heroWord = document.querySelector('.hero-word');
  if (heroWord) {
    heroWord.style.transition = 'filter 0.6s';
    setTimeout(function () {
      heroWord.style.filter = 'brightness(1.25)';
      setTimeout(function () {
        heroWord.style.filter = 'brightness(1)';
      }, 800);
    }, 600);
  }

})();
