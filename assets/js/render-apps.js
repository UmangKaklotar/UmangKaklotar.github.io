/* =========================================================================
   RENDER APPS
   -------------------------------------------------------------------------
   Reads the APPS array from apps-data.js and builds the HTML cards.
   You should NOT need to edit this file to add a new app — edit
   apps-data.js instead.
   ========================================================================= */

function appCardHTML(app) {
  return `
    <article class="app-card reveal">
      <div class="app-top">
        <div class="app-icon" aria-hidden="true">${app.initials}</div>
        <div>
          <h3 class="app-name">${app.name}</h3>
          <span class="app-tag">${app.category}</span>
        </div>
      </div>
      <p class="app-desc">${app.description}</p>
      <a class="play-badge" href="${app.playLink}" target="_blank" rel="noopener"
         aria-label="Get ${app.name} on Google Play">
        <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
             alt="Get it on Google Play" loading="lazy">
      </a>
    </article>
  `;
}

function renderApps(containerId, { featuredOnly = false, limit = null } = {}) {
  const el = document.getElementById(containerId);
  if (!el) return;

  let list = featuredOnly ? APPS.filter(a => a.featured) : APPS.slice();
  if (limit) list = list.slice(0, limit);

  el.innerHTML = list.length
    ? list.map(appCardHTML).join("")
    : `<p class="muted">No apps published yet. Check back soon.</p>`;

  // Re-run reveal-on-scroll for newly injected cards
  if (typeof observeReveals === "function") observeReveals();
}
