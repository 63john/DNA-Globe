// Google Analytics 4 — Measurement ID
//
// This site is a single static page (no bundler), so .env is not read at runtime.
// 1. In Google Analytics: Admin → Data collection → Data streams → add/open a Web stream
// 2. Copy the Measurement ID (starts with G-)
// 3. Paste it below, using the same value as GA_MEASUREMENT_ID in .env.example
//
// Leave '' to keep tracking off. Do not invent a fake production ID.
// Realtime: Reports → Realtime. Link clicks are the event `link_click`.
// The on-page visitor number is not read from this ID (the browser cannot
// query GA Realtime). It is stored on Abacus — see the visitor script in index.html.
window.GA_MEASUREMENT_ID = 'G-ZSWCF7RWX6';
