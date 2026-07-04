/* =========================================================================
   APPS DATA
   -------------------------------------------------------------------------
   This is the ONLY file you need to edit to add, remove, or update an app.
   Every page (Home + Apps) reads from this list automatically.

   HOW TO ADD A NEW APP:
   1. Copy one of the objects below (the { ... } block).
   2. Paste it inside the APPS array (before the closing bracket "]").
   3. Update the values (name, description, playLink, category, initials).
   4. Save the file and refresh the page. That's it — no other file changes.
   ========================================================================= */

const APPS = [
  {
    name: "QR HTML Viewer - QR Scanner",
    initials: "QR",                 // shown inside the app icon box
    category: "Utility",
    featured: true,                 // true = also shows on the Home page
    description:
      "Scan any QR code and preview linked HTML content instantly, right inside the app. Fast, lightweight, and free.",
    playLink: "https://play.google.com/store/apps/details?id=com.qr.html.viewer"
  }

  /* -----------------------------------------------------------------------
     Add your next app below by copying this template:

  ,{
    name: "Your App Name",
    initials: "AB",
    category: "Productivity",
    featured: false,
    description: "One or two sentences describing what the app does.",
    playLink: "https://play.google.com/store/apps/details?id=com.your.package"
  }
  ----------------------------------------------------------------------- */
];
