export const business = {
  name: 'Narina Beauty Store',
  slug: 'narina-beauty-store',
  category: 'Skincare & Kosmetik',
  city: 'Kota Jambi',
  rating: 4.3,
  reviewCount: 120,
  phone: '6281367797782',
  phoneDisplay: '0813-6779-7782',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Narina+Beauty+Store+Thehok+Jambi',
  mapsQuery: 'Narina Beauty Store Thehok Jambi',
  address: 'Jl Jend Sudirman, Thehok (deretan Transmart Jambi), Kota Jambi',
  addressStatus: 'Terverifikasi',
  hours: 'Setiap hari 09.00–22.00',
  hoursStatus: 'Estimasi',
  instagram: 'https://www.instagram.com/narinabeauty_store',
  instagramLabel: '@narinabeauty_store • 21.7K pengikut',
  title: 'Narina Beauty Store Jambi — Skincare Original & Grosir',
  description: 'Narina Beauty Store Jambi di Jl Jend Sudirman Thehok: skincare original ecer, grosir & reseller. Cek stok via WA, harga estimasi.',
  canonicalPath: '/',
  ogImage: '/images/narina-hero.jpg',
};

export const socials: Array<{ label: string; url: string; note: string }> = [
  { label: 'Instagram', url: 'https://www.instagram.com/narinabeauty_store', note: '@narinabeauty_store • 21.7K — Terverifikasi' },
  { label: 'TikTok', url: 'https://www.tiktok.com/@narinabeauty_store', note: '@narinabeauty_store — Terverifikasi' },
  { label: 'Shopee', url: 'https://shopee.co.id/distributorbenings__skincare', note: 'Shopee Narina Beauty — Terverifikasi' },
];

export const storeNotes: string[] = [
  'Layanan: ecer, grosir & reseller — Terverifikasi',
  'Harga di web ini estimasi, konfirmasi via WA toko.',
];

export const waLink = (message: string) =>
  `https://wa.me/${business.phone}?text=${encodeURIComponent(message)}`;

export const products = [
  { name: 'Skintific 5X Ceramide Series', price: 'Rp 130–155rb', badge: 'Teruji', stock: 'Tanya Stok', image: '/images/narina-p1.jpg', alt: 'Skintific 5X Ceramide Barrier Repair Moisture Gel — foto resmi brand', w: 800, h: 800, source: 'Sumber: skintific.com (official)' },
  { name: 'Glad2Glow Centella Series', price: 'Rp 55–75rb', badge: 'Teruji', stock: 'Tanya Stok', image: '/images/narina-p2.jpg', alt: 'Glad2Glow Centella Allantoin Soothing Gel Moisturizer — foto resmi brand', w: 800, h: 800, source: 'Sumber: glad2glow.com (official)' },
  { name: 'Facetology Sunscreen Series', price: 'Rp 65–85rb', badge: 'Teruji', stock: 'Tanya Stok', image: '/images/narina-p3.jpg', alt: 'Facetology Triple Care Sunscreen SPF 40 — foto resmi brand', w: 800, h: 800, source: 'Sumber: facetology.id (official)' },
  { name: 'Azarine Hydrasoothe Series', price: 'Rp 60–75rb', badge: 'Estimasi', stock: 'Tanya Stok', image: 'https://picsum.photos/seed/narina-4/800/600', alt: 'Ilustrasi placeholder Azarine Hydrasoothe — ganti foto asli', w: 800, h: 600, source: 'Foto placeholder — ganti foto asli' },
  { name: 'Wardah UV Shield Series', price: 'Rp 35–50rb', badge: 'Estimasi', stock: 'Tanya Stok', image: 'https://picsum.photos/seed/narina-5/800/600', alt: 'Ilustrasi placeholder Wardah UV Shield — ganti foto asli', w: 800, h: 600, source: 'Foto placeholder — ganti foto asli' },
  { name: 'Emina Face Wash Series', price: 'Rp 25–35rb', badge: 'Teruji', stock: 'Tanya Stok', image: '/images/narina-p6.jpg', alt: 'Produk Emina — foto resmi eminacosmetics.com, varian pasti konfirmasi via WA', w: 230, h: 230, source: 'Sumber: eminacosmetics.com (official)' },
  { name: 'Scarlett Lotion Series', price: 'Rp 55–70rb', badge: 'Estimasi', stock: 'Tanya Stok', image: 'https://picsum.photos/seed/narina-7/800/600', alt: 'Ilustrasi placeholder Scarlett body lotion — ganti foto asli', w: 800, h: 600, source: 'Foto placeholder — ganti foto asli' },
  { name: 'OMG Lip Cream Series', price: 'Rp 20–30rb', badge: 'Estimasi', stock: 'Tanya Stok', image: 'https://picsum.photos/seed/narina-8/800/600', alt: 'Ilustrasi placeholder OMG lip cream — ganti foto asli', w: 800, h: 600, source: 'Foto placeholder — ganti foto asli' },
];

export const promos = [
  { title: 'Bundling Skincare Routine', desc: 'Hemat 10–15% untuk pembelian paket 3 produk (cleanser + serum + sunscreen).', status: 'Estimasi — tanya stok & harga final via WA.' },
  { title: 'Grosir & Reseller Welcome', desc: 'Harga khusus grosir dan reseller untuk pembelian lusinan. Syarat mudah via WA.', status: 'Terverifikasi — program grosir/reseller tersedia.' },
  { title: 'Promo Bulanan Toko', desc: 'Cek promo terbaru tiap bulan lewat status WA dan Instagram toko.', status: 'Estimasi — mengikuti info toko.' },
];
