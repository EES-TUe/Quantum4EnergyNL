// Mobile navigation toggle
(function () {
  var header = document.querySelector('.site-header');
  var btn = document.querySelector('.menu-btn');
  if (!header || !btn) return;
  btn.addEventListener('click', function () {
    var open = header.classList.toggle('nav-open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  // close the menu after tapping a link
  header.querySelectorAll('.nav-links a').forEach(function (a) {
    a.addEventListener('click', function () {
      header.classList.remove('nav-open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
})();
