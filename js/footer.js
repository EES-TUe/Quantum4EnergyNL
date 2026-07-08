/* =========================================================================
   Site footer — EDIT THE FOOTER HERE (one place, all pages).
   Injected into <div id="site-footer"></div>.
   Email / LinkedIn links carry data-contact-* and are filled by contact.js,
   so contact details stay in that single file.
   ========================================================================= */
(function () {
  var html =
    '<footer class="site-footer">' +
      '<div class="wrap">' +
        '<div class="footer-top">' +
          '<div class="footer-brand">' +
            '<div class="name">Quantum4EnergyNL</div>' +
            '<p>The Dutch community at the intersection of quantum technologies and power &amp; energy systems. Supported by the 4TU.</p>' +
          '</div>' +
          '<div class="footer-col">' +
            '<h5>Navigate</h5>' +
            '<a href="about.html">About</a>' +
            '<a href="events.html">Events</a>' +
            '<a href="#contact">Get in touch</a>' +
          '</div>' +
          '<div class="footer-col">' +
            '<h5>Connect</h5>' +
            '<a href="#" data-contact-linkedin>LinkedIn</a>' +
            '<a href="#" data-contact-email>Email us</a>' +
            '<a href="https://www.4tu.nl/nirict/">4TU.NIRICT</a>' +
            '<a href="https://www.4tu.nl/energy/">4TU.Energy</a>' +
          '</div>' +
        '</div>' +
        '<div class="footer-bottom">' +
          '<span>&copy; 2025-2026 Quantum4EnergyNL</span>' +
        '</div>' +
      '</div>' +
    '</footer>';
  var slot = document.getElementById('site-footer');
  if (slot) slot.outerHTML = html;
})();
