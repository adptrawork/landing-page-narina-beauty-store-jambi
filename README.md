# Narina Beauty Store — Landing Page Jambi

Astro + Tailwind, Full SEO 100%, 1 repo per 1 bisnis.

## Dev
```bash
npm install
npm run dev
npm run build
```

## Deploy (TODO-DEPLOY, belum dieksekusi)
- Framework Preset: Astro
- Build Command: `npm run build`
- Output: `dist/`
- Connect to Git di Cloudflare Pages → pilih repo ini
- Custom domain + SSL otomatis setelah setup domain

## SUMBER GAMBAR & STATUS SCRAPING (2026-10-16)

Prioritas: 1) situs milik target, 2) situs resmi brand disalin lokal ke public/images (<=100KB), 3) picsum fallback HANYA slot terblokir.

### Gambar real per produk

- narina-p1.jpg <- skintific.com/products.json 5X Ceramide Moisture Gel (CDN Shopify)
- narina-p2.jpg <- glad2glow.com/products.json Centella Soothing Gel
- narina-p3.jpg <- facetology.id Store API Triple Care Sunscreen SPF40 40ML
- narina-p6.jpg <- eminacosmetics.com homepage thumb (generik, varian konfirmasi WA)
- narina-hero.jpg <- linktr.ee/narinabeauty_store avatar (foto profil resmi toko)
- narina-p4.jpg (640x748, 29KB) <- Wikimedia Commons "Nivea Creme" oleh Susana22BN (CC BY-SA 4.0) — ilustrasi generik krim pelembap untuk Azarine Hydrasoothe
- narina-p5.jpg (600x800, 86KB) <- Wikimedia Commons "Daylogic Sheer Touch SPF 30" oleh Missvain (CC BY 4.0) — ilustrasi generik sunscreen tube untuk Wardah UV Shield
- narina-p7.jpg (800x664, 89KB) <- Wikimedia Commons "After-Sun-Lotion" oleh Tamina212 (CC BY-SA 4.0) — ilustrasi generik botol losion untuk Scarlett
- narina-p8.jpg (800x536, 69KB) <- Wikimedia Commons "Batons Make B @ SPFW" oleh O Boticário SPFW (CC BY 2.0) — ilustrasi generik lipstik untuk OMG Lip Cream
- Slot picsum: NOL (semua sudah lokal; foto brand official tetap prioritas bila tersedia)

### URL terblokir / tidak bisa di-scrape

- desty.page/istanacosmetics -> fetch kosong (JS-only/proteksi)
- shopee.co.id/4 toko -> cangkang JS + anti-bot, tanpa data produk
- instagram.com 4 akun -> login-walled
- wardahbeauty.com produk -> 404 custom, katalog via JS tanpa API publik
- scarlettwhitening.com -> Next.js JS-only
- youmakeups.com, pixycosmetics.com, lavojoy.id -> DNS tidak resolve
- omgbeauty.com -> respons kosong
- vivacosmetics.com -> me-serve konten implora (parked/shared?) -> tidak dipakai
- azarine.id -> Store API products kosong
- makeoverforall.com -> timeout berulang
- tiktok.com 3 akun -> butuh JS/login; hanya tautan profil
- emina/implora thumbs -> tanpa alt varian; dipakai generik + caption jujur
- facetology.id varian Oat -> tidak ada di katalog API
