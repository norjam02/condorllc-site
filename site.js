(function () {
  var nav = document.getElementById('site-nav');
  var toggle = nav && nav.querySelector('.nav-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
})();

function copyEmail() {
  var email = 'condor@condorllc.org';
  var btn = document.getElementById('copy-btn');
  try {
    navigator.clipboard.writeText(email).then(function () {
      btn.textContent = 'Copied!';
      setTimeout(function () { btn.textContent = 'Copy'; }, 2000);
    }).catch(function () { fallbackCopy(btn); });
  } catch (e) {
    fallbackCopy(btn);
  }
}

function fallbackCopy(btn) {
  var el = document.getElementById('email-text');
  var range = document.createRange();
  range.selectNode(el);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  btn.textContent = 'Selected';
  setTimeout(function () {
    window.getSelection().removeAllRanges();
    btn.textContent = 'Copy';
  }, 2000);
}
