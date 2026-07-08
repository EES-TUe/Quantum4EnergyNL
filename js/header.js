/* =========================================================================
   Site header / menu bar — EDIT THE MENU HERE (one place, all pages).
   Injected into <div id="site-header"></div>. The active link is detected
   automatically from the current filename, so no per-page editing needed.
   ========================================================================= */
(function () {
  // ---- Edit the menu items here ----
  var LINKS = [
    ['index.html',  'Home'],
    ['about.html',  'About'],
    ['events.html', 'Events']
  ];
  var CTA = { href: '#contact', label: 'Get in touch' };
  // ----------------------------------

  // event detail pages should highlight "Events"
  var EVENT_PAGES = ['events.html','workshop1.html','event-kickoff.html','event-scoping.html'];
  var here = (location.pathname.split('/').pop() || 'index.html');

  var nav = LINKS.map(function (l) {
    var active = (l[0] === here) || (l[0] === 'events.html' && EVENT_PAGES.indexOf(here) > -1);
    return '<a href="' + l[0] + '"' + (active ? ' aria-current="page"' : '') + '>' + l[1] + '</a>';
  }).join('');

  var html =
    '<header class="site-header">' +
      '<div class="wrap nav">' +
        '<a class="brand" href="index.html" aria-label="Quantum4EnergyNL home">' +
          '<img class="mark" src="assets/logo.svg" alt="Quantum4EnergyNL logo">' +
          '<span class="name">Quantum4Energy<b>NL</b></span>' +
        '</a>' +
        '<nav class="nav-links" aria-label="Primary">' + nav + '</nav>' +
        '<a class="nav-cta" href="' + CTA.href + '">' + CTA.label + '</a>' +
        '<button class="menu-btn" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button>' +
      '</div>' +
    '</header>';

  var slot = document.getElementById('site-header');
  if (slot) slot.outerHTML = html;
})();
