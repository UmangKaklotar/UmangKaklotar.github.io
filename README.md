<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Umang Kaklotar — App Developer</title>
<meta name="description" content="Umang Kaklotar builds simple, fast Android apps. Explore apps, get support, and read our privacy policy.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
  :root{
    --bg:#0B0D10;
    --surface:#14171C;
    --surface-2:#1B1F26;
    --line: rgba(255,255,255,0.09);
    --text:#ECEFF2;
    --muted:#8A93A1;
    --teal:#4FE3C9;
    --amber:#F5A623;
    --radius:10px;
  }
  *{ box-sizing:border-box; margin:0; padding:0; }
  html{ scroll-behavior:smooth; }
  body{
    background:var(--bg);
    color:var(--text);
    font-family:'Inter', sans-serif;
    line-height:1.65;
    overflow-x:hidden;
  }
  ::selection{ background:var(--teal); color:#06110E; }
  a{ color:inherit; text-decoration:none; }
  ul{ list-style:none; }
  img,svg{ display:block; }
  .mono{ font-family:'JetBrains Mono', monospace; }

  .wrap{ max-width:1120px; margin:0 auto; padding:0 28px; }

  /* ---------- reveal animation ---------- */
  .reveal{ opacity:0; transform:translateY(22px); transition:opacity .7s ease, transform .7s ease; }
  .reveal.in{ opacity:1; transform:translateY(0); }
  .reveal.d1{ transition-delay:.08s; }
  .reveal.d2{ transition-delay:.16s; }
  .reveal.d3{ transition-delay:.24s; }

  .underline{
    position:relative;
    display:inline-block;
  }
  .underline::after{
    content:'';
    position:absolute;
    left:0; bottom:-6px;
    height:3px; width:100%;
    background:linear-gradient(90deg, var(--teal), var(--amber));
    border-radius:2px;
    transform:scaleX(0);
    transform-origin:left;
    transition:transform .9s cubic-bezier(.65,0,.35,1);
  }
  .underline.in::after{ transform:scaleX(1); }

  /* ---------- nav ---------- */
  header.nav{
    position:fixed; top:0; left:0; right:0; z-index:100;
    backdrop-filter:blur(12px);
    background:rgba(11,13,16,0.78);
    border-bottom:1px solid var(--line);
  }
  .nav-inner{
    max-width:1120px; margin:0 auto; padding:18px 28px;
    display:flex; align-items:center; justify-content:space-between;
  }
  .logo{
    font-family:'Space Grotesk', sans-serif;
    font-weight:700; font-size:1.05rem;
    display:flex; align-items:center; gap:8px;
  }
  .logo .dot{ width:8px; height:8px; border-radius:2px; background:var(--teal); }
  .nav-links{ display:flex; gap:30px; font-size:0.9rem; color:var(--muted); }
  .nav-links a:hover{ color:var(--text); }
  .nav-cta{
    font-family:'JetBrains Mono', monospace; font-size:0.82rem;
    padding:9px 18px; border:1px solid var(--line); border-radius:6px;
  }
  .nav-cta:hover{ border-color:var(--teal); color:var(--teal); }
  .burger{ display:none; }

  /* ---------- hero ---------- */
  .hero{ padding:180px 0 110px; }
  .eyebrow{
    font-family:'JetBrains Mono', monospace; font-size:0.8rem;
    color:var(--teal); letter-spacing:0.08em;
    display:flex; align-items:center; gap:10px; margin-bottom:26px;
  }
  .eyebrow::before{ content:''; width:22px; height:1px; background:var(--teal); }

  h1{
    font-family:'Space Grotesk', sans-serif; font-weight:700;
    font-size:clamp(2.3rem, 5.6vw, 4rem); line-height:1.08; letter-spacing:-0.01em;
    max-width:820px;
  }
  .tagline{
    max-width:560px; margin-top:24px; color:var(--muted); font-size:1.08rem;
  }
  .hero-actions{ margin-top:38px; display:flex; gap:16px; flex-wrap:wrap; }
  .btn{
    font-family:'JetBrains Mono', monospace; font-size:0.85rem;
    padding:13px 24px; border-radius:6px;
    display:inline-flex; align-items:center; gap:10px;
    border:1px solid var(--line); transition:all .2s ease;
  }
  .btn.primary{ background:var(--teal); color:#06110E; border-color:var(--teal); font-weight:600; }
  .btn.primary:hover{ background:#3fd0b6; }
  .btn.ghost:hover{ border-color:var(--teal); color:var(--teal); }

  .hero-stats{
    margin-top:70px; display:grid; grid-template-columns:repeat(3,1fr);
    border-top:1px solid var(--line); padding-top:30px; max-width:640px; gap:20px;
  }
  .stat b{
    font-family:'Space Grotesk', sans-serif; font-size:1.8rem; display:block; color:var(--text);
  }
  .stat span{ font-family:'JetBrains Mono', monospace; font-size:0.72rem; color:var(--muted); }

  /* ---------- sections ---------- */
  section{ padding:100px 0; border-top:1px solid var(--line); }
  .section-head{ margin-bottom:50px; max-width:640px; }
  .idx{ font-family:'JetBrains Mono', monospace; color:var(--muted); font-size:0.8rem; display:block; margin-bottom:14px; }
  .section-head h2{ font-family:'Space Grotesk', sans-serif; font-size:1.9rem; font-weight:600; }
  .section-head p{ color:var(--muted); margin-top:14px; font-size:1rem; }

  /* ---------- apps ---------- */
  .apps-grid{ display:grid; grid-template-columns:repeat(2,1fr); gap:20px; }
  .app-card{
    background:var(--surface); border:1px solid var(--line); border-radius:var(--radius);
    padding:30px; transition:border-color .2s ease, transform .2s ease;
  }
  .app-card:hover{ border-color:rgba(79,227,201,0.4); transform:translateY(-3px); }
  .app-top{ display:flex; align-items:center; gap:16px; margin-bottom:16px; }
  .app-icon{
    width:56px; height:56px; border-radius:14px; flex-shrink:0;
    background:linear-gradient(150deg, var(--surface-2), #10131700);
    border:1px solid var(--line);
    display:flex; align-items:center; justify-content:center;
  }
  .app-icon svg{ width:26px; height:26px; }
  .app-name{ font-family:'Space Grotesk', sans-serif; font-weight:600; font-size:1.08rem; }
  .app-tag{
    font-family:'JetBrains Mono', monospace; font-size:0.68rem; color:var(--teal);
    border:1px solid rgba(79,227,201,0.35); border-radius:20px; padding:2px 9px;
    display:inline-block; margin-top:5px;
  }
  .app-desc{ color:var(--muted); font-size:0.92rem; margin-bottom:18px; }
  .app-foot{ display:flex; align-items:center; justify-content:space-between; }
  .app-meta{ font-family:'JetBrains Mono', monospace; font-size:0.72rem; color:var(--muted); }
  .app-link{ font-family:'JetBrains Mono', monospace; font-size:0.78rem; color:var(--amber); }
  .app-link:hover{ text-decoration:underline; }

  .app-card.soon{
    display:flex; align-items:center; justify-content:center; text-align:center;
    border-style:dashed; color:var(--muted);
  }
  .app-card.soon .app-name{ color:var(--muted); font-size:0.95rem; }

  /* ---------- features ---------- */
  .features-grid{ display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
  .feature-card{
    background:var(--surface); border:1px solid var(--line); border-radius:var(--radius); padding:28px;
  }
  .feature-icon{
    width:42px; height:42px; border-radius:10px; background:var(--surface-2);
    display:flex; align-items:center; justify-content:center; margin-bottom:18px;
  }
  .feature-icon svg{ width:20px; height:20px; }
  .feature-card h3{ font-family:'Space Grotesk', sans-serif; font-size:1.05rem; font-weight:600; margin-bottom:8px; }
  .feature-card p{ color:var(--muted); font-size:0.9rem; }

  /* ---------- support / faq ---------- */
  .support-layout{ display:grid; grid-template-columns:1.4fr 1fr; gap:50px; }
  .faq-item{ border-bottom:1px solid var(--line); padding:20px 0; }
  .faq-item summary{
    cursor:pointer; font-family:'Space Grotesk', sans-serif; font-weight:600;
    font-size:1.02rem; list-style:none; display:flex; justify-content:space-between; align-items:center;
  }
  .faq-item summary::-webkit-details-marker{ display:none; }
  .faq-item summary::after{
    content:'+'; font-family:'JetBrains Mono', monospace; color:var(--teal); font-size:1.3rem; transition:transform .2s ease;
  }
  .faq-item[open] summary::after{ transform:rotate(45deg); }
  .faq-item p{ color:var(--muted); margin-top:12px; font-size:0.92rem; max-width:520px; }

  .support-card{
    background:var(--surface); border:1px solid var(--line); border-radius:var(--radius); padding:30px;
    height:fit-content;
  }
  .support-card h3{ font-family:'Space Grotesk', sans-serif; font-size:1.1rem; margin-bottom:10px; }
  .support-card p{ color:var(--muted); font-size:0.9rem; margin-bottom:22px; }
  .support-card .btn{ width:100%; justify-content:center; }
  .response-time{
    margin-top:20px; padding-top:20px; border-top:1px solid var(--line);
    font-family:'JetBrains Mono', monospace; font-size:0.75rem; color:var(--muted);
    display:flex; justify-content:space-between;
  }
  .response-time b{ color:var(--text); }

  /* ---------- privacy ---------- */
  .privacy-grid{ display:grid; grid-template-columns:repeat(2,1fr); gap:26px; }
  .policy-block h3{
    font-family:'Space Grotesk', sans-serif; font-size:1rem; margin-bottom:10px;
    display:flex; align-items:center; gap:10px;
  }
  .policy-block h3 .n{ font-family:'JetBrains Mono', monospace; color:var(--teal); font-size:0.85rem; }
  .policy-block p{ color:var(--muted); font-size:0.9rem; }

  /* ---------- contact ---------- */
  .contact-grid{ display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
  .contact-card{
    background:var(--surface); border:1px solid var(--line); padding:26px; border-radius:var(--radius);
    transition:border-color .2s ease, transform .2s ease;
  }
  .contact-card:hover{ border-color:rgba(79,227,201,0.4); transform:translateY(-3px); }
  .contact-label{
    font-family:'JetBrains Mono', monospace; font-size:0.72rem; color:var(--muted);
    text-transform:uppercase; letter-spacing:0.06em; margin-bottom:10px;
  }
  .contact-value{ font-size:1rem; font-weight:500; word-break:break-word; }

  /* ---------- footer ---------- */
  footer{ padding:44px 0 60px; border-top:1px solid var(--line); }
  .footer-grid{ display:flex; justify-content:space-between; flex-wrap:wrap; gap:30px; margin-bottom:36px; }
  .footer-links{ display:flex; gap:26px; flex-wrap:wrap; }
  .footer-links a{ color:var(--muted); font-size:0.88rem; }
  .footer-links a:hover{ color:var(--text); }
  .footer-bottom{
    display:flex; justify-content:space-between; flex-wrap:wrap; gap:10px;
    font-family:'JetBrains Mono', monospace; font-size:0.75rem; color:var(--muted);
    border-top:1px solid var(--line); padding-top:24px;
  }

  /* ---------- responsive ---------- */
  @media (max-width: 860px){
    .apps-grid, .features-grid, .privacy-grid, .contact-grid{ grid-template-columns:1fr; }
    .support-layout{ grid-template-columns:1fr; }
    .hero-stats{ grid-template-columns:repeat(3,1fr); max-width:100%; }
    .nav-links{ display:none; }
  }
  @media (prefers-reduced-motion: reduce){
    .reveal, .underline::after{ transition:none; }
  }
</style>
</head>
<body>

<header class="nav">
  <div class="nav-inner">
    <div class="logo"><span class="dot"></span>Umang<span class="mono" style="color:var(--muted); font-weight:400;">.dev</span></div>
    <nav class="nav-links">
      <a href="#apps">Apps</a>
      <a href="#features">Features</a>
      <a href="#support">Support</a>
      <a href="#privacy">Privacy</a>
      <a href="#contact">Contact</a>
    </nav>
    <a href="#contact" class="nav-cta">Get in touch</a>
  </div>
</header>

<!-- HERO -->
<section class="hero wrap">
  <div class="eyebrow mono">APP DEVELOPER · SURAT, INDIA</div>
  <h1>Apps that get <span class="underline" data-reveal>out of your way</span>.</h1>
  <p class="tagline">I design and build simple, fast Android apps focused on doing one job well. Every app on this page is actively maintained, supported, and built with the same set of principles.</p>
  <div class="hero-actions">
    <a href="#apps" class="btn primary">Explore apps ↓</a>
    <a href="#support" class="btn ghost">Get support</a>
  </div>
  <div class="hero-stats">
    <div class="stat"><b>1+</b><span>APPS PUBLISHED</span></div>
    <div class="stat"><b>Android</b><span>PLATFORM</span></div>
    <div class="stat"><b>24–48h</b><span>SUPPORT REPLY</span></div>
  </div>
</section>

<!-- APPS -->
<section id="apps" class="wrap">
  <div class="section-head">
    <span class="idx">01 · Apps</span>
    <h2 class="reveal">Everything I've <span class="underline" data-reveal>shipped</span></h2>
    <p class="reveal">A growing collection of small, focused Android apps. Each one follows the same principles: minimal permissions, no dark patterns, and real support behind it.</p>
  </div>

  <div class="apps-grid">
    <div class="app-card reveal">
      <div class="app-top">
        <div class="app-icon">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="7" height="7" rx="1" stroke="#4FE3C9" stroke-width="1.6"/>
            <rect x="14" y="3" width="7" height="7" rx="1" stroke="#4FE3C9" stroke-width="1.6"/>
            <rect x="3" y="14" width="7" height="7" rx="1" stroke="#4FE3C9" stroke-width="1.6"/>
            <rect x="15.5" y="15.5" width="2.2" height="2.2" fill="#4FE3C9"/>
            <rect x="19.3" y="15.5" width="1.7" height="1.7" fill="#4FE3C9"/>
            <rect x="15.5" y="19.3" width="1.7" height="1.7" fill="#4FE3C9"/>
            <rect x="19" y="19" width="2" height="2" fill="#4FE3C9"/>
          </svg>
        </div>
        <div>
          <div class="app-name">QR HTML Viewer</div>
          <span class="app-tag">Live on Play Store</span>
        </div>
      </div>
      <p class="app-desc">Scan any QR code and preview linked HTML content instantly, right inside the app.</p>
      <div class="app-foot">
        <span class="app-meta">FREE · UTILITY</span>
        <a href="https://play.google.com/store/apps/details?id=com.qr.html.viewer" class="app-link" target="_blank" rel="noopener">View on Play →</a>
      </div>
    </div>

    <div class="app-card soon reveal d1">
      <div>
        <div class="app-name">More apps coming soon</div>
        <p class="app-desc" style="margin-top:10px;">New utility apps are in active development. Check back here — this page updates as soon as they go live.</p>
      </div>
    </div>
  </div>
</section>

<!-- FEATURES -->
<section id="features" class="wrap">
  <div class="section-head">
    <span class="idx">02 · Features</span>
    <h2 class="reveal">How every app is <span class="underline" data-reveal>built</span></h2>
    <p class="reveal">Regardless of which app you're using, these principles hold across all of them.</p>
  </div>

  <div class="features-grid">
    <div class="feature-card reveal">
      <div class="feature-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" stroke="#4FE3C9" stroke-width="1.6" stroke-linejoin="round"/></svg></div>
      <h3>Privacy-first</h3>
      <p>Only the permissions each app strictly needs to function — nothing collected without a clear reason.</p>
    </div>
    <div class="feature-card reveal d1">
      <div class="feature-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" stroke="#F5A623" stroke-width="1.6" stroke-linejoin="round"/></svg></div>
      <h3>Lightweight & fast</h3>
      <p>Small install size and low resource usage, built to run smoothly even on budget devices.</p>
    </div>
    <div class="feature-card reveal d2">
      <div class="feature-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M4 4v16h16" stroke="#4FE3C9" stroke-width="1.6" stroke-linecap="round"/><path d="M8 15l3-4 3 3 4-6" stroke="#4FE3C9" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
      <h3>Regularly updated</h3>
      <p>Active maintenance with bug fixes, Android-version compatibility, and small improvements over time.</p>
    </div>
    <div class="feature-card reveal">
      <div class="feature-icon"><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#F5A623" stroke-width="1.6"/><path d="M9 9c0-1.5 1.2-2.5 3-2.5s3 1 3 2.3c0 1.6-2 1.7-2.6 3.2M12 17h.01" stroke="#F5A623" stroke-width="1.6" stroke-linecap="round"/></svg></div>
      <h3>No dark patterns</h3>
      <p>No forced subscriptions, no fake buttons, no manipulative prompts. What you see is what you get.</p>
    </div>
    <div class="feature-card reveal d1">
      <div class="feature-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M21 11.5a8.5 8.5 0 1 1-3.8-7.1M21 4v6h-6" stroke="#4FE3C9" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
      <h3>Real support</h3>
      <p>Every app is backed by a real person who replies to emails — not an automated ticket queue.</p>
    </div>
    <div class="feature-card reveal d2">
      <div class="feature-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M4 21V10l8-6 8 6v11h-6v-6H10v6H4z" stroke="#F5A623" stroke-width="1.6" stroke-linejoin="round"/></svg></div>
      <h3>Made in India</h3>
      <p>Designed, built, and supported independently from Surat, Gujarat.</p>
    </div>
  </div>
</section>

<!-- SUPPORT -->
<section id="support" class="wrap">
  <div class="section-head">
    <span class="idx">03 · Support</span>
    <h2 class="reveal">Need <span class="underline" data-reveal>help</span>?</h2>
    <p class="reveal">Common questions across all apps. If yours isn't answered here, reach out directly.</p>
  </div>

  <div class="support-layout">
    <div>
      <details class="faq-item reveal" open>
        <summary>An app is crashing or not working properly</summary>
        <p>Uninstall and reinstall the app first, and make sure it's updated to the latest version from the Play Store. If the issue continues, email support with your device model and Android version.</p>
      </details>
      <details class="faq-item reveal">
        <summary>Why do I see ads in the app?</summary>
        <p>These apps are free to use and supported by non-intrusive ads served through Google AdMob. This keeps every app free with no paywalls.</p>
      </details>
      <details class="faq-item reveal">
        <summary>How do I request a new feature?</summary>
        <p>Send an email describing the feature and which app it's for. Feature requests are reviewed regularly and prioritized based on demand.</p>
      </details>
      <details class="faq-item reveal">
        <summary>How is my data handled?</summary>
        <p>Each app only accesses what it needs to function. See the Privacy section below for details on data collection and ad networks used.</p>
      </details>
      <details class="faq-item reveal">
        <summary>How do I request account or data deletion?</summary>
        <p>Email support with the app name and your request. Deletion requests are processed within 7 business days.</p>
      </details>
    </div>

    <div class="support-card reveal">
      <h3>Still stuck?</h3>
      <p>Email directly and expect a reply within 1–2 business days. Please mention the app name and a short description of the issue.</p>
      <a href="mailto:umangkaklotar01@gmail.com" class="btn primary">Email support</a>
      <div class="response-time">
        <span>Avg. response time</span>
        <b>24–48 hrs</b>
      </div>
    </div>
  </div>
</section>

<!-- PRIVACY -->
<section id="privacy" class="wrap">
  <div class="section-head">
    <span class="idx">04 · Privacy & Terms</span>
    <h2 class="reveal">How your <span class="underline" data-reveal>data</span> is treated</h2>
    <p class="reveal">This policy applies to all apps published under this developer account unless an individual app states otherwise in its Play Store listing.</p>
  </div>

  <div class="privacy-grid">
    <div class="policy-block reveal">
      <h3><span class="n">01</span> Data we collect</h3>
      <p>Apps may collect basic, non-personal usage data (such as app interactions and crash logs) to fix bugs and improve stability. No personal data is sold to third parties.</p>
    </div>
    <div class="policy-block reveal d1">
      <h3><span class="n">02</span> Advertising</h3>
      <p>Free apps display ads served through Google AdMob, which may use advertising identifiers to show relevant ads. You can reset or limit ad personalization in your device settings.</p>
    </div>
    <div class="policy-block reveal d2">
      <h3><span class="n">03</span> Permissions</h3>
      <p>Each app only requests permissions required for its core functionality (for example, camera access for a QR scanner). Permissions are never used beyond their stated purpose.</p>
    </div>
    <div class="policy-block reveal">
      <h3><span class="n">04</span> Data deletion</h3>
      <p>To request deletion of any data associated with your use of an app, email support with the app name — requests are processed within 7 business days.</p>
    </div>
    <div class="policy-block reveal d1">
      <h3><span class="n">05</span> Children's privacy</h3>
      <p>Apps are not directed at children under 13, and no app knowingly collects personal data from children.</p>
    </div>
    <div class="policy-block reveal d2">
      <h3><span class="n">06</span> Policy updates</h3>
      <p>This page may be updated as apps evolve. Continued use of an app after an update means you accept the revised policy.</p>
    </div>
  </div>
</section>

<!-- CONTACT -->
<section id="contact" class="wrap">
  <div class="section-head">
    <span class="idx">05 · Contact</span>
    <h2 class="reveal">Let's <span class="underline" data-reveal>talk</span></h2>
  </div>
  <div class="contact-grid">
    <a class="contact-card reveal" href="mailto:umangkaklotar01@gmail.com">
      <div class="contact-label">Email</div>
      <div class="contact-value">umangkaklotar01@gmail.com</div>
    </a>
    <a class="contact-card reveal d1" href="tel:+918469186173">
      <div class="contact-label">Phone</div>
      <div class="contact-value">+91 84691 86173</div>
    </a>
    <a class="contact-card reveal d2" href="https://github.com/umangkaklotar" target="_blank" rel="noopener">
      <div class="contact-label">GitHub</div>
      <div class="contact-value">github.com/umangkaklotar</div>
    </a>
  </div>
</section>

<footer class="wrap">
  <div class="footer-grid">
    <div class="logo"><span class="dot"></span>Umang<span class="mono" style="color:var(--muted); font-weight:400;">.dev</span></div>
    <div class="footer-links">
      <a href="#apps">Apps</a>
      <a href="#features">Features</a>
      <a href="#support">Support</a>
      <a href="#privacy">Privacy</a>
      <a href="#contact">Contact</a>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2026 Umang Kaklotar. All rights reserved.</span>
    <span>umangkaklotar.github.io</span>
  </div>
</footer>

<script>
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.reveal, .underline[data-reveal]').forEach(el => io.observe(el));
</script>

</body>
</html>
