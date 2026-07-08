/* =========================================================================
   Get-involved / contact section — EDIT CONTACT DETAILS HERE (one place).
   This block is injected into every page that contains
   <div id="contact-slot"></div>, and it also keeps the footer links in sync.
   ========================================================================= */
(function () {
  // ---- Edit these two lines to update contact info site-wide ----
  var EMAIL = "quantum4energynl@gmail.com";
  var LINKEDIN = "https://www.linkedin.com/company/quantum4energynl/";
  // ---------------------------------------------------------------

  var band =
    '<section class="join" id="contact">' +
      '<div class="wrap">' +
        '<div class="join-inner">' +
          '<div>' +
            '<span class="eyebrow mono">Get in touch</span>' +
            '<h2 class="display">Get involved.</h2>' +
            '<p>We connect researchers and companies working on quantum technologies for power and energy. Get in touch or follow us to stay informed about upcoming activities.</p>' +
          '</div>' +
          '<div class="contact-actions">' +
            '<a class="btn btn-primary" href="mailto:' + EMAIL + '">' +
              '<svg viewBox="0 0 16 16" fill="none"><rect x="2" y="3.5" width="12" height="9" rx="1.5" stroke="#fff" stroke-width="1.5"/><path d="M2.6 4.7 8 8.6 13.4 4.7" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
              'Email the coordinators' +
            '</a>' +
            '<a class="btn btn-ghost" href="' + LINKEDIN + '" target="_blank" rel="noopener">' +
              '<svg viewBox="0 0 16 16" fill="none"><path d="M4 6.4v6.1M4 4.1v.05M7.6 12.5V6.4m0 6.1h0m0-3.4c0-1.5 1-2.6 2.3-2.6s2.1 1.1 2.1 2.7v3.3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
              'Follow us on LinkedIn' +
            '</a>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</section>';

  var slot = document.getElementById('contact-slot');
  if (slot) slot.outerHTML = band;

  // Keep footer links in sync from this same file
  document.querySelectorAll('[data-contact-email]').forEach(function (a) {
    a.href = 'mailto:' + EMAIL;
  });
  document.querySelectorAll('[data-contact-linkedin]').forEach(function (a) {
    a.href = LINKEDIN; a.target = '_blank'; a.rel = 'noopener';
  });
})();
