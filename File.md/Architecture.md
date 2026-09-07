# Architecture.md — MHAS Florist

## 1. Maksud Arsitektur

Gunakan frontend berbasis komponen yang kecil dengan batas yang jelas antara komposisi halaman, UI yang dapat dipakai ulang, data, utilitas domain, dan styling.

Struktur harus tetap dapat dipahami oleh tim mahasiswa kecil dan aman untuk pengembangan yang dibantu AI.

## 2. Stack yang Disarankan

- React
- Vite
- TypeScript
- CSS Modules atau strategi CSS terstruktur lain yang jelas
- data TypeScript statis untuk Proyek 1

Backend dapat diperkenalkan nanti tanpa mengubah arsitektur informasi publik.

## 3. Struktur

```text
src/
├── app/
│   ├── App.tsx
│   └── routes.ts
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── FeaturedProducts.tsx
│   │   ├── GalleryPreview.tsx
│   │   └── ReviewPreview.tsx
│   ├── products/
│   │   ├── CategoryFilter.tsx
│   │   ├── ProductGrid.tsx
│   │   ├── ProductCard.tsx
│   │   └── ProductDetailModal.tsx
│   ├── gallery/
│   │   └── GalleryLightbox.tsx
│   ├── reviews/
│   │   ├── RatingSummary.tsx
│   │   └── ReviewCard.tsx
│   ├── faq/
│   │   └── FAQAccordion.tsx
│   └── cart/
│       ├── CartIcon.tsx
│       ├── CartDrawer.tsx
│       └── CartItem.tsx
├── sections/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Products.tsx
│   ├── Gallery.tsx
│   ├── Reviews.tsx
│   ├── FAQ.tsx
│   ├── Contact.tsx
│   └── Location.tsx
├── data/
│   ├── products.ts
│   ├── reviews.ts
│   ├── faq.ts
│   └── gallery.ts
├── lib/
│   ├── cart.ts
│   ├── whatsapp.ts
│   └── formatCurrency.ts
├── styles/
│   ├── tokens.css
│   ├── globals.css
│   └── utilities.css
└── assets/
    ├── branding/
    ├── products/
    └── gallery/
```

Pada implementasi HTML/CSS/JavaScript saat ini, halaman gallery penuh berada
di root proyek dan memakai modul lightbox khusus:

```text
gallery.html
js/
└── gallery.js
```

Homepage hanya menampilkan preview gallery bergerak. Halaman `gallery.html`
menampilkan koleksi lengkap dalam grid dan menggunakan lightbox yang sama.

Halaman pengenalan perusahaan juga berada di root proyek:

```text
mhas.html
```

CTA `Kenali MHAS Florist` mengarah ke halaman ini agar informasi perusahaan
tidak memenuhi halaman utama. Data sejarah, visi, misi, dan nilai tetap berasal
dari `File.md/CONTENT.md`.

Untuk implementasi HTML/CSS/JavaScript saat ini, struktur aset lokal berada di
root proyek:

```text
images/
├── branding/
├── products/
└── gallery/
```

URL gambar eksternal yang masih ada di `index.html` dan `js/data.js` adalah
aset sementara. Ganti dengan path lokal setelah foto resmi tersedia, misalnya
`images/products/buket-pilihan-01.webp`.

## 4. Batas

`sections/` memiliki komposisi halaman.

`components/` memiliki potongan visual/interaksi yang dapat dipakai ulang.

`data/` memiliki kumpulan data konten statis.

`lib/` memiliki utilitas murni dan perilaku domain.

`styles/` memiliki token dan primitif global.

Jangan menaruh kumpulan data besar langsung di JSX.

## 5. Kepemilikan State

Pemfilteran produk milik pengalaman Products.

State detail produk milik pengalaman Products.

Keranjang memiliki satu sumber kebenaran.

State FAQ dapat tetap lokal pada komponen FAQ.

## 6. Model Domain

```ts
interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  price: number;
  image: string;
  details?: string[];
}

type CartItem = {
  productId: string;
  quantity: number;
};
```

## 7. Batas WhatsApp

Simpan pembuatan pesan di `lib/whatsapp.ts`.

UI harus meneruskan data keranjang terstruktur ke formatter murni seperti:

```ts
generateWhatsAppOrderMessage(cartItems, total)
```

## 8. Strategi Data

Proyek 1 menggunakan data TypeScript lokal.

Jaga batas tetap bersih untuk migrasi masa depan:

`data/products.ts → adapter API/database`

Jangan pura-pura berperilaku dinamis dengan fragmen JSX yang dikode keras.

## 9. Strategi Styling

Nilai kunci harus berasal dari token `Design.md`:

- warna
- jarak
- radius
- bayangan
- tipografi
- lebar kontainer
- breakpoint responsif

Hindari nilai satu kali yang tidak dijelaskan.

## 10. Strategi Responsif

Jangan memperlakukan CSS seluler sebagai patch di atas CSS desktop.

Rancang state seluler di sekitar titik ketika konten berhenti berfungsi. Gunakan grid fluid dan penumpukan yang disengaja.

## 11. Arsitektur Aksesibilitas

Primitif interaktif harus mengekspos perilaku semantik, operasi keyboard, fokus yang terlihat, label, dan state yang benar.

Modal memerlukan perilaku Escape dan penanganan fokus yang benar.

## 12. State UI

Tampilan berbasis data harus memiliki state kosong, loading, dan error yang eksplisit bila berlaku, bahkan jika Proyek 1 dimulai dengan data lokal.

Setidaknya, Cart membutuhkan state kosong.

## 13. Urutan Pengodean AI

Agen membaca:

1. `PRD.md` untuk lingkup
2. `Architecture.md` untuk batas implementasi
3. `Design.md` untuk arah visual
4. `antislop.md` dan skill yang relevan
5. `QA.md` sebelum pengiriman

Jangan pernah membuat-buat fakta bisnis yang hilang. Jangan pernah menambahkan kontrol mati. Jangan pernah mem-patch source/CSS dengan skrip penggantian string eksternal.

## 14. Definisi Selesai

Sebuah fitur selesai hanya ketika cocok dengan lingkup PRD, menghormati Architecture dan Design, berfungsi di aplikasi yang sebenarnya, bertahan dari pemeriksaan responsif dan keyboard, serta lulus QA.