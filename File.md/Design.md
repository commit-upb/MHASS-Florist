# Design.md — MHAS Florist

## 1. Design Read

Membaca ini sebagai: halaman pendarat florist yang menghadap pelanggan untuk orang yang memilih bunga dan hadiah untuk momen bermakna, dengan bahasa florist editorial yang segar, dial ENERGY 2 / RHYTHM 2 / MOTION 1.

## 2. Identitas

MHAS Florist harus terasa:

- segar
- hangat
- halus
- personal
- dapat dipercaya
- floral, bukan korporat

Identitas berasal dari branding florist yang mengarah ke biru, aksen kuning hangat, fotografi karangan bunga asli, judul serif editorial, dan geometri antarmuka yang terkendali.

## 3. Palet

Inti:

- Docker Blue: warna merek utama
- Bright Yellow: aksen
- Putih / putih hangat kekuningan: permukaan netral

Gunakan skala netral yang kecil untuk teks dan border.

Jangan menambahkan corak mencolok lain tanpa alasan yang terdokumentasi.

## 4. Tujuan Warna

Biru menetapkan identitas merek dan hierarki.

Kuning memfokuskan perhatian pada aksi prioritas tinggi, terutama pemesanan.

Putih dan netral lembut melindungi fotografi dan menjaga halaman tetap lapang.

Hindari gradien biru-ungu atau biru-cyan yang generik.

## 5. Tipografi

### Display

Gunakan wajah huruf serif yang halus untuk judul utama.

Alasan: serif menciptakan karakter editorial dan perayaan yang sesuai untuk bunga dan acara khusus.

### UI dan Body

Gunakan sans-serif yang terbaca untuk navigasi, teks tubuh, kontrol, metadata produk, dan harga.

Alasan: konten praktis harus tetap mudah dipindai sementara serif memberikan kepribadian merek.

Jangan gunakan monospace berukuran besar atau huruf kapital dengan tracking ekstrem.

## 6. Komposisi

- Hero: komposisi fokus dua sisi asimetris
- Why Choose Us: baris nilai horizontal yang ringkas
- Featured Products: grid yang mengutamakan produk
- Gallery Preview: pita yang dipimpin gambar
- Review Preview: komposisi bukti sosial yang ringkas
- About: tata letak split editorial
- Products: filter + grid produk
- Pratinjau galeri: jalur bergerak horizontal sebelum halaman galeri penuh
- Halaman galeri: grid yang dipimpin gambar untuk portofolio lengkap
- FAQ: daftar akordeon yang fokus
- Contact/Location: komposisi praktis yang berorientasi aksi

Halaman harus bervariasi secara internal, bukan mengulang judul tengah + subjudul + kartu identik.

## 7. Dial Liveliness

ENERGY 2: hidup tetapi tidak eksperimental.

RHYTHM 2: bagian terlihat bervariasi sambil berbagi bahasa desain yang sama.

MOTION 1: umpan balik hover, jalur pratinjau galeri yang lambat, transisi modal, pergerakan akordeon, dan transisi menu seluler saja.

Jalur galeri berhenti saat hover dan fokus keyboard. Nonaktifkan ketika pengguna mengaktifkan `prefers-reduced-motion`.

Hindari mengambang dekoratif, bounce, parallax, dan koreografi reveal yang berulang.

## 8. Spacing

Gunakan skala jarak yang terdokumentasi:

`xs → sm → md → lg → xl → 2xl`

Spasi putih besar memisahkan bagian naratif. Spasi lebih rapat mengelompokkan kontrol dan metadata.

## 9. Radius

Gunakan tingkat radius yang disengaja:

- tombol: sedang
- kartu produk: sedang-ke-besar
- modal/drawer: besar bila sesuai
- badge: ringkas, bukan pil universal

Jangan pernah membuat semua elemen berbentuk pil.

## 10. Shadows

Jaga kebanyakan permukaan tetap berpijak di tanah.

Gunakan bayangan terutama untuk kartu produk bila itu meningkatkan pemindaian, ditambah drawer/modal keranjang dan modal detail produk.

Hindari membuat semua komponen mengambang.

## 11. Fotografi

Fotografi adalah bahan visual utama.

Utamakan foto karangan bunga asli, pemotongan yang konsisten, detail alami, resolusi memadai, dan pengiriman yang dioptimalkan.

Jangan membuat avatar pelanggan atau citra bisnis palsu.

Galeri beranda hanya pratinjau. Aksi `View all` mengarah ke `gallery.html`, tempat portofolio lengkap ditampilkan dalam grid responsif. Gambar utama produk harus tetap jelas; blur hanya boleh digunakan sebagai aksen editorial terbatas dan tidak boleh pernah menyembunyikan detail produk penting.

## 12. Ikonografi

Gunakan ikon garis sederhana yang langsung cocok dengan labelnya:

- bunga untuk fresh flowers
- palet/gunting untuk custom design
- truk untuk pengiriman
- tangan/hati untuk layanan
- keranjang untuk belanja

Hindari ikon sparkle, magic, diamond, robot, atau orb yang generik.

## 13. Bahasa CTA

CTA produk utama: `Shop Our Collection`

CTA kontak/pemesanan utama: `Chat on WhatsApp`

Aksi produk: `Add to Cart`

Aksi pesanan: `Order via WhatsApp`

CTA harus menyebutkan aksi yang sebenarnya.

## 14. Aturan Komponen

Kartu produk mengutamakan:

1. gambar
2. nama
3. harga
4. aksi

Modal detail produk mengutamakan:

1. gambar
2. nama
3. harga
4. deskripsi/rincian
5. jumlah
6. Add to Cart

Keranjang mengutamakan:

1. produk terpilih
2. kontrol jumlah
3. total
4. aksi pesanan WhatsApp

## 15. State Responsif

Seluler adalah state desain yang terpisah.

Pada lebar yang lebih sempit:

- navigasi mengecil menjadi menu seluler
- kolom hero menumpuk
- grid produk mengurangi jumlah kolom
- galeri tetap ramah sentuhan
- keranjang menjadi drawer/modal yang sesuai
- tipografi diskalakan dengan sengaja
- jarak antar bagian berkurang tanpa menjadi sesak

Jangan sekadar mengecilkan koordinat desktop.

## 16. Aksesibilitas

Teks normal harus menargetkan kontras 4.5:1 dan teks besar 3:1.

Indikator fokus tetap terlihat.

Target interaktif harus memiliki area sentuh minimum kira-kira 44px.

Gambar membutuhkan teks alt yang bermakna kecuali dekoratif.

## 17. Integritas Konten

Jangan pernah membuat-buat:

- jumlah pelanggan
- tahun pengalaman
- peringkat
- testimoni
- alamat
- jam buka
- informasi kontak
- pencapaian bisnis

Gunakan `[REAL DATA]` bila diperlukan.

## 18. Kebijakan Referensi Screenshot

Screenshot beranda dan About yang disediakan adalah referensi visual untuk arah yang diinginkan MHAS Florist.

Screenshot itu bukan izin untuk mempertahankan statistik, testimoni, atau konten lain yang dibuat-buat yang ditampilkan dalam mockup.

Pertahankan bahasa visualnya, ganti data yang tidak didukung dengan informasi nyata atau placeholder eksplisit.

## 19. Aturan Tujuan Satu Baris

- Palet utama biru: menetapkan identitas dan hierarki MHAS Florist.
- Aksen kuning: memfokuskan perhatian pada pemesanan.
- Tipe display serif: memberi merek kepribadian floral/editorial.
- Tipe UI sans-serif: menjaga konten praktis tetap terbaca.
- Fotografi karangan bunga asli: membuat produk terasa nyata.
- Komposisi bervariasi: menghindari ritme landing page AI yang generik.
- Gerakan minimal: mempertahankan nuansa florist yang tenang sambil mengonfirmasi interaksi.