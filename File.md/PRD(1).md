# PRD.md — MHAS Florist

## 1. Ringkasan Produk

MHAS Florist adalah situs web florist yang berfokus pada pelanggan, berpusat pada penemuan produk dan pemesanan melalui WhatsApp.

Pengalaman utamanya adalah satu halaman pendarat panjang (landing page):

`Navbar → Home → About → Products → Gallery → Reviews → FAQ → Contact → Location → Footer`

Situs ini bukan sistem checkout e-commerce. Keranjang, perubahan jumlah, dan pembuatan pesanan adalah interaksi sisi klien yang tindakan akhirnya adalah penyerahan pesanan ke WhatsApp.

## 2. Tujuan Produk

1. Menjadikan produk florist sebagai fokus visual dan komersial.
2. Menjelaskan merek dan penawaran tanpa perubahan halaman yang tidak perlu.
3. Mengurangi hambatan dari penemuan produk ke pemesanan WhatsApp.
4. Membangun kepercayaan melalui foto asli, ulasan asli, dan informasi bisnis yang berguna.
5. Menjaga antarmuka tetap responsif, dapat diakses, cepat, dan koheren secara visual.

## 3. Bukan Tujuan

Proyek 1 tidak mencakup akun, pembayaran daring, checkout sisi server, database pelanggan, dashboard CMS/admin, manajemen inventaris, ulasan yang dikirim pelanggan, atau pelacakan pesanan.

## 4. Navigasi

Navigasi desktop berisi:

- Logo/nama MHAS Florist
- Home
- About
- Products
- Gallery
- Reviews
- FAQ
- Contact
- Location
- Order via WhatsApp
- Cart

Setiap target navigasi harus memiliki tujuan yang nyata. Navigasi seluler adalah state yang dirancang dengan sengaja, bukan baris desktop yang dikecilkan.

## 5. Home

### Hero

Konten yang diperlukan:

- judul florist
- teks pendukung singkat
- CTA utama: `Shop Our Collection`
- CTA sekunder: `Chat on WhatsApp`
- visual karangan bunga/florist yang kuat

Hero harus menetapkan satu titik fokus yang jelas di sekitar karangan bunga dan aksi pemesanan.

### Why Choose Us

Konsep yang disetujui:

- Fresh Flowers
- Custom Design
- Fast Delivery
- Quality Service

Gunakan ikon yang relevan saja.

### Featured Products

Tampilkan subset produk asli yang dikurasi. Kartu dapat berisi gambar, kategori, nama, harga tetap, View Detail, dan Add to Cart.

### Gallery Preview

Tampilkan citra portofolio asli dan tujuan Gallery yang berfungsi.

### Review Preview

Hanya gunakan ulasan yang disediakan/asli atau placeholder eksplisit. Jangan pernah membuat nama, avatar, peringkat, tanggal, atau jumlah pelanggan.

## 6. About

Jelaskan:

- pengenalan perusahaan
- cerita/sejarah perusahaan
- apa yang ditawarkan MHAS Florist
- visi
- misi
- nilai/keunggulan

Jangan menampilkan statistik bisnis sampai nilai asli disediakan.

## 7. Products

### Categories

- All
- Buket
- Bunga Hias
- Buket Jajan & Uang
- Hampers
- Gift Box
- Papan Akrilik
- Fresh Flowers

### Data produk

Setiap produk membutuhkan:

- id
- name
- category
- description
- harga tetap
- gambar utama
- gambar detail opsional
- bahan/rincian opsional

Tidak ada harga `starting from` (mulai dari).

### Modal Detail Produk

Berisi gambar lebih besar, nama, deskripsi, harga, bahan/rincian bila tersedia, pemilih jumlah, Add to Cart, dan kontrol tutup. Harus dapat diakses dengan keyboard dan dapat ditutup dengan Escape.

## 8. Cart

Perilaku keranjang sisi klien:

- menambahkan produk
- menambah/mengurangi jumlah
- menghapus produk
- menghitung total
- menampilkan state kosong
- terbuka sebagai drawer/modal
- menjaga keranjang selama sesi bila memungkinkan

Alur pesanan:

`Browse → Product Detail → Add to Cart → Cart → Quantity Review → Order Now → WhatsApp`

Teks WhatsApp yang dibuat harus memuat produk terpilih, jumlah, dan total.

## 9. Gallery

Galeri adalah portofolio/inspirasi, bukan katalog kedua.

Persyaratan:

- citra florist asli
- grid responsif
- lightbox klik-untuk-membuka
- teks alt yang bermakna
- lightbox yang bisa ditutup

## 10. Reviews

Ulasan statis untuk Proyek 1. Ulasan dapat memuat peringkat, komentar, nama pelanggan bila disediakan, dan foto bila disediakan.

Tidak ada bukti sosial yang dibuat-buat.

## 11. FAQ

FAQ menggunakan akordeon. Pertanyaan harus mencerminkan kekhawatiran florist yang nyata dan dikonfirmasi terhadap informasi bisnis yang sebenarnya.

## 12. Contact

CTA utama: `Chat on WhatsApp` menuju nomor WhatsApp yang tervalidasi.

- WhatsApp/telepon: 0895-1057-4048 (wa.me/6289510574048)
- Instagram: @mhasflorist_kebumen (https://www.instagram.com/mhasflorist_kebumen)
- Toko Shopee: https://id.shp.ee/eKYm54k
- Threads: https://www.threads.com/@mhasflorist_kebumen
- review video TikTok: https://www.tiktok.com/@kebumenbikinlaper/video/7668212233926708501

Nilai selain itu hanya boleh muncul jika nyata.

## 13. Location

Lokasi fisik MHAS Florist adalah data nyata:

- Alamat: Jl. Ronggowarsito, Legok Kidul, Pejagoan, Kec. Pejagoan, Kabupaten Kebumen, Jawa Tengah 54361
- Google Maps: https://maps.app.goo.gl/CeEmSMFEKCqRWvQY6
- jam buka: Buka · Tutup pukul 21.00
- aksi `Open in Google Maps` mengarah ke tautan Google Maps tersebut
- pratinjau peta (gambar/embed peta) menampilkan lokasi tersebut
- telepon/WhatsApp: 0895-1057-4048

## 14. Footer

Hanya gunakan tautan yang berguna dan informasi kontak/sosial yang terverifikasi. Jangan memaksa footer empat kolom yang generik.

## 15. Persyaratan Responsif

Rancang desktop, lebar menengah, dan seluler sebagai state yang disengaja. Seluler harus mengalir ulang kolom, grid, navigasi, modal, tipografi, jarak, dan target sentuh.

## 16. Aksesibilitas

Harapan minimum:

- HTML semantik
- navigasi keyboard
- state fokus yang terlihat
- perilaku modal dan akordeon yang dapat diakses
- teks alt yang bermakna
- kontras teks WCAG AA
- target sentuh minimum kira-kira 44px
- setiap tombol harus mendefinisikan state pseudo-class yang wajib: `:hover`, `:active`, `:focus` (state fokus yang terlihat), dan `:disabled` bila tombol memang bisa nonaktif
- semua tombol harus memiliki ukuran yang konsisten: tinggi minimum dan padding seragam di seluruh bagian, dengan variasi hanya untuk peran (CTA utama, tautan teks, chip filter) bila hierarki menuntutnya

## 17. Performa

- optimalkan gambar florist
- gunakan ukuran gambar responsif
- hindari animasi yang tidak perlu
- lazy-load citra galeri yang tidak penting bila berguna
- hindari pustaka besar yang tidak terpakai

## 18. Integritas Konten

Sampai dikonfirmasi, perlakukan yang berikut sebagai placeholder:

- statistik
- testimoni
- alamat
- jam operasional
- telepon/WhatsApp
- handle sosial
- deskripsi produk yang belum disediakan

Gunakan `[REAL DATA]`, jangan pernah nilai yang dibuat-buat dan terlihat realistis.

## 19. Kriteria Penerimaan

Rilis dapat diterima ketika:

- tujuan navbar berfungsi
- pemfilteran berfungsi
- modal detail berfungsi
- kalkulasi keranjang berfungsi
- penyerahan WhatsApp berfungsi
- lightbox galeri berfungsi
- akordeon FAQ berfungsi
- navigasi seluler berfungsi
- perilaku keyboard berfungsi
- semua tombol memiliki pseudo-class `:hover`, `:active`, `:focus`, dan `:disabled` (bila berlaku)
- semua tombol memiliki ukuran yang konsisten di seluruh bagian
- bagian lokasi menampilkan alamat nyata, tautan Open in Google Maps, dan pratinjau peta
- tidak ada overflow horizontal
- konten asli atau placeholder eksplisit digunakan
- implementasi visual mengikuti `Design.md`
- `QA.md` dan gerbang pengiriman antislop lulus