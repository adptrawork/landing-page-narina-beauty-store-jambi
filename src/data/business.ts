export const business = {
  name: 'Narina Beauty Store',
  slug: 'narina-beauty-store',
  category: 'Skincare & Kosmetik Lokal',
  city: 'Kota Jambi',
  rating: 4.3,
  reviewCount: 120,
  phone: '6281234567890', // TODO-GANTI: nomor WA aktif pemilik
  mapsUrl: 'https://maps.google.com/?q=Narina+Beauty+Store+Jambi',
  address: 'Kota Jambi, Provinsi Jambi',
  hours: 'Senin–Sabtu 09.00–21.00, Minggu 10.00–20.00',
  title: 'Narina Beauty Store Jambi — Kosmetik Original & Promo',
  description:
    'Narina Beauty Store Jambi: katalog skincare & kosmetik original, cek stok & promo bundling bulanan, pesan via WhatsApp cepat.',
  canonicalPath: '/',
  ogImage: '/og-narina.jpg',
};

export const waLink = (message: string) =>
  `https://wa.me/${business.phone}?text=${encodeURIComponent(message)}`;

export const products = [
  { name: 'Paket Brightening Basic', price: 'Rp 149.000', badge: 'BPOM', stock: 'Ready' },
  { name: 'Paket Acne Care', price: 'Rp 169.000', badge: 'Original', stock: 'Ready' },
  { name: 'Bundling Serum + Moisturizer', price: 'Rp 199.000', badge: 'Promo Bundling', stock: 'Ready' },
  { name: 'Sunscreen Daily SPF50', price: 'Rp 89.000', badge: 'BPOM', stock: 'Ready' },
  { name: 'Lip Tint Lokal Best Seller', price: 'Rp 45.000', badge: 'Original', stock: 'Ready' },
  { name: 'Masker Wajah Mingguan', price: 'Rp 35.000', badge: 'BPOM', stock: 'Ready' },
];
