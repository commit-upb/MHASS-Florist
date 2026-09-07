---
name: antislop-layoutmobile
description: "Mobile layout skill for antislop. Use for layouts that reflow on small screens: grids, overflow, tap targets. Load with the core."
allowed-tools: Read Write Edit Glob Grep
---
# antislop-layoutmobile

> Anti Slop: Aturan untuk Agen Pengodean AI. Skill Tata Letak Seluler

> Bagian dari sistem antislop. Baca bersama `antislop.md` (file inti). Skill ini mendalami bidang tata letak seluler: bagaimana tata letak harus mengalir ulang di layar kecil. Breakpoint, skala, grid, overflow, target sentuhan, dan navigasi. Ia merujuk aturan inti berdasarkan nomor dan tidak pernah menggandakan atau menomor-ulangnya. Muat saat tugas membuat atau mengedit tata letak yang harus bertahan di ponsel.

## Cara menggunakan skill ini

- Muat bersama `antislop.md` setiap kali tugas adalah pekerjaan tata letak seluler atau responsif. Inti memegang mekanismenya (tes tujuan, tiga tier, Delivery Gate); skill ini memegang kedalaman tata letak seluler.
- Setiap entri memiliki bentuk yang sama: **Ciri-ciri** (polanya), **Kenapa** (mengapa terbaca sebagai slop), **Perbaikan** (apa yang harus dilakukan sebagai gantinya), dengan aturan inti yang mengaturnya dikutip sebagai R-XX.
- Prinsip di balik skill ini: **tata letak seluler adalah tata letak yang berbeda, bukan tata letak desktop dalam ukuran lebih kecil.** Ia harus mengalir ulang: menumpuk ulang, menskalakan ulang, dan mengurut ulang dengan sengaja. Setiap pola di bawah adalah cara tata letak gagal mengalir ulang.
- Delivery Gate di inti tetap menjadi gate. "Layoutmobile Skill Checklist" di akhir file ini adalah pelengkap khusus seluler yang dijalankan bersamanya.

## Breakpoint

### Tata Letak Hanya Desktop

- **Ciri-ciri:** satu state tata letak untuk setiap layar; tampilan seluler adalah tata letak desktop yang dipaksa masuk ke ponsel.
- **Kenapa:** R-03 mengharuskan tata letak seluler yang sempurna, bukan pikiran belakangan. Halaman yang hanya mengecil tidak memiliki desain seluler sama sekali: kartu yang bekerja berdampingan saling bertumpang tindih, dan teks yang dimaksud untuk kanvas lebar berdesak ke kanvas sempit.
- **Perbaikan:** tetapkan state seluler yang nyata di breakpoint tempat konten berhenti berfungsi. Tata letak seluler mengalir ulang: kolom menumpuk, ukuran turun, dan urutan berubah di tempat yang dibutuhkan konten. Jika tampilan seluler hanyalah tampilan desktop pada lebar yang lebih kecil, tata letak itu belum selesai.

### Breakpoint Didorong Daftar Perangkat

- **Ciri-ciri:** breakpoint diberi nama sesuai lebar ponsel (375px, 414px, 768px) yang dipilih karena "itu ukuran iPhone", bukan karena kontennya rusak di sana.
- **Kenapa:** lebar perangkat berubah setiap tahun dan setiap model. Breakpoint adalah titik di mana tata letak berhenti bertahan; memaksanya cocok dengan daftar perangkat membuat tata letak mengikuti lembar spesifikasi alih-alih konten (R-03).
- **Perbaikan:** tempatkan breakpoint di mana konten benar-benar rusak: ketika sebuah kolom berhenti terbaca, ketika deretan kartu terlalu sempit. Uji dengan menyempitkan viewport dan amati di mana ia patah, lalu tetapkan breakpoint di sana.

### Seluler Dipoles Paling Akhir

- **Ciri-ciri:** aturan seluler dipasang sebagai penimpaan di ujung: stylesheet desktop yang panjang dengan media query kecil di akhir yang memperbaiki satu atau dua hal.
- **Kenapa:** patch penimpaan bukan desain seluler. Ia memperbaiki gejala yang dilaporkan dan membiarkan gejala berikutnya, dan style dasar tetap disetel untuk layar lebar (R-03).
- **Perbaikan:** perlakukan seluler sebagai state yang dirancang, bukan penimpaan. Beri viewport sempit ukuran dan penumpukan yang disengaja sendiri, dan verifikasi seluruh tata letak di sana, bukan hanya titik yang di-patch (R-35).

## Skala & Ukuran

### Semuanya Berukuran Desktop

- **Ciri-ciri:** padding, jarak, tinggi hero, dan ukuran kartu dibawa tidak berubah dari desktop ke seluler, sehingga setiap bagian terlihat membesar di ponsel.
- **Kenapa:** elemen yang diukur untuk kanvas 1440px mendominasi kanvas 375px. Yang terbaca percaya diri di desktop menjadi kebesaran di seluler: tidak ada yang muat, tidak ada yang bernapas, dan halaman terasa dirancang untuk layar yang bukan yang ada di tangan (R-03). Jarak dan tipe harus mengikuti ritme desain (R-05), dan ritme itu memiliki register yang lebih kecil di seluler.
- **Perbaikan:** beri seluler langkah ukurannya sendiri: skala tipe lebih kecil, padding bagian lebih rapat, jarak lebih kecil. Pertahankan target sentuhan pada ukuran minimumnya (lihat Target Sentuhan), tetapi kecilkan yang lain dengan sengaja di breakpoint.

### Tipe Piksel Tetap

- **Ciri-ciri:** ukuran font dalam px tetap yang tidak pernah berubah antara desktop dan seluler, sehingga heading dan teks tubuh tetap kebesaran di ponsel.
- **Kenapa:** tipe yang tidak merespons viewport adalah tipe yang diukur untuk satu layar. R-03 menuntut tata letak seluler bertahan, dan R-06 mengharuskan tipografi yang meningkatkan keterbacaan. Headline yang membentang sepanjang lebar ponsel atau ukuran tubuh yang disetel untuk baris lebar melanggar keduanya.
- **Perbaikan:** gunakan tipe fluid (`clamp()`) sehingga ukuran mengikuti viewport, atau tetapkan langkah tipe yang lebih kecil di breakpoint. Verifikasi hasilnya pada lebar sempit (R-35), bukan hanya di pratinjau desktop.

### Bagian 100vh

- **Ciri-ciri:** tinggi hero dan bagian ditetapkan ke `100vh`, sehingga satu bagian mengisi seluruh layar ponsel dan mendorong sisanya ke bawah lipatan.
- **Kenapa:** bagian setinggi viewport penuh yang dirancang untuk monitor desktop menjadi slab raksasa di ponsel, dan `100vh` mencakup chrome browser, jadi ia meluap area terlihat di browser seluler. Ia mendominasi tata letak alih-alih memperkenalkannya (R-03).
- **Perbaikan:** biarkan bagian menyesuaikan ukuran dengan kontennya (`auto`), atau gunakan unit viewport dinamis (`dvh`) di tempat bagian setinggi layar penuh benar-benar dimaksudkan. Tidak ada yang di bawah lipatan boleh menjadi kecelakaan dari unit viewport.

### Padding Kosong Raksasa

- **Ciri-ciri:** padding bagian skala desktop (96px, 128px) dipertahankan di seluler, menciptakan celah kosong yang tinggi antar bagian di ponsel.
- **Kenapa:** padding yang disetel untuk kanvas besar berubah menjadi ruang vertikal terbuang di kanvas kecil. Halaman menggulir melalui kekosongan, dan ritme yang dipanggil R-05 menjadi kekosongan di antara setiap bagian.
- **Perbaikan:** kurangi padding bagian di breakpoint ke register seluler (kira-kira setengah atau kurang), dan periksa bahwa halaman menggulir dengan kepadatan alami alih-alih melalui ruang yang seperti gurun.

## Grid & Penumpukan

### Kolom yang Tidak Mengerut

- **Ciri-ciri:** grid multi-kolom mempertahankan kolom berdampingannya di seluler, sehingga kolom menyusut, teks membungkus dengan canggung, dan elemen bertabrakan.
- **Kenapa:** grid adalah janji tentang berapa banyak lebar yang tersedia. Ketika viewport menyempit dan grid tidak menumpuk ulang, setiap kolom mendapat sepotong tipis, teks menjadi tidak terbaca, dan kartu saling tumpang tindih (R-03). Ini adalah kegagalan tabrakan: berdampingan di desktop menjadi menumpuk di seluler.
- **Perbaikan:** runtuhkan grid menjadi satu kolom yang mengalir ulang di breakpoint. Berdampingan menjadi menumpuk, dan setiap item mendapat lebar penuh lagi. Verifikasi ulang pada lebar sempit (R-35).

### Grid Lebar Tetap

- **Ciri-ciri:** `grid-template-columns` ditetapkan dalam px tetap, atau area grid yang tidak bisa mengalir ulang, sehingga grid tetap kaku ketika viewport menyusut.
- **Kenapa:** trek px tetap tidak peduli dengan viewport; ia mempertahankan lebarnya dan memaksa overflow atau tabrakan. Tata letak dibangun untuk satu kanvas dan tidak bisa berubah bentuk (R-03).
- **Perbaikan:** ukur trek dengan `minmax()` atau `auto-fit` dan `auto-fill` sehingga kolom menyusut dan membungkus bersama konten, dan tetapkan area grid yang runtuh di breakpoint. Grid harus fluid secara default, kaku hanya di tempat ukuran tetap memang disengaja.

### 12 Kolom yang Dipaksa

- **Ciri-ciri:** grid 12-kolom dipaksakan ke konten seluler yang butuh satu atau dua kolom, sehingga rentang terlihat sewenang-wenang dan matematikanya melawan tata letak.
- **Kenapa:** sistem 12-kolom untuk kanvas lebar dengan banyak kolom konten. Memaksakannya di ponsel membuat setiap elemen menjadi pecahan dari grid tak terlihat yang tidak pernah dilihat pengguna, dan konten disesuaikan ke grid alih-alih grid ke konten (R-03).
- **Perbaikan:** biarkan kolom mengikuti konten. Di seluler konten biasanya ingin satu kolom, atau paling banyak dua; rentang 12-kolom hanya masuk akal ketika tata letak benar-benar memiliki sebanyak itu hal berdampingan.

## Overflow

### Kebocoran Scroll Horizontal

- **Ciri-ciri:** halaman menggulir ke samping karena ada elemen yang lebih lebar dari viewport: tabel, blok kode, gambar, string panjang tanpa putus.
- **Kenapa:** scroll horizontal adalah janji yang ingkar di seluler. Pengguna tidak bisa melihat di mana halaman berakhir, dan tata letak terlihat tumpah keluar layar (R-03). Ini adalah overflow slop paling umum karena si pelanggar berada di luar layar dalam pratinjau desktop dan tidak diperhatikan sampai ponsel membukanya.
- **Perbaikan:** temukan elemen yang lebih lebar dari viewport (tabel yang butuh tata letak reflow atau kontainer scroll, blok kode yang membungkus, gambar dengan `max-width: 100%`), lalu tampung atau reflow ia. Verifikasi seluruh halaman memiliki nol scroll horizontal pada target tersempit (R-35).

### Overflow Hidden yang Memotong

- **Ciri-ciri:** `overflow: hidden` pada kontainer yang memotong konten di lebar sempit, menyembunyikan teks atau kontrol alih-alih membiarkannya muat.
- **Kenapa:** memotong adalah menyembunyikan kegagalan. Ketika kontainer memenggal kontennya karena tata letak tidak bisa memuatnya, pengguna kehilangan informasi dan interaksi (R-03). Sudut zoom dan pengubahan ukuran teksnya ditangani oleh `antislop-human`.
- **Perbaikan:** biarkan konten mengalir ulang alih-alih memotong: izinkan kontainer tumbuh, bungkus kontennya, atau runtuhkan di breakpoint. Potong hanya di tempat pemangkasan adalah maksud desain (seperti thumbnail), tidak pernah di tempat ia menyembunyikan konten.

### Anak Lebar Tetap

- **Ciri-ciri:** anak flex atau grid dengan lebar px tetap atau `min-width` yang membentang keluar dari induknya di layar sempit.
- **Kenapa:** anak yang diukur dalam px absolut tidak peduli seberapa banyak ruang yang dimiliki induknya. Di seluler induk menyusut dan anak tetap lebar, sehingga ia meluap kontainer dan halaman (R-03).
- **Perbaikan:** ukur anak dengan unit relatif dan biarkan membungkus (`flex-wrap`, lebar fluid, `min-width: 0` pada anak grid). Anak harus diizinkan menyusut bersama kontainernya, bukan mempertahankan ukuran desktop.

## Target Sentuhan

### Target Berukuran Kecil

- **Ciri-ciri:** tombol, tautan, dan kontrol yang lebih kecil dari sekitar 44 x 44 px, mudah dipukul di desktop dengan kursor tetapi sulit dipukul dengan ibu jari.
- **Kenapa:** kursor desktop memiliki akurasi piksel; ibu jari tidak. Target yang baik di 16px menjadi latihan frustrasi di ponsel, dan ia gagal pada janji bahwa UI dapat digunakan di seluler (R-03).
- **Perbaikan:** beri target interaktif area sentuh minimum 44 x 44 px, menggunakan padding atau hit box yang lebih besar bahkan ketika visualnya lebih kecil. Verifikasi seluruh set kontrol pada lebar ponsel (R-35).

### Target Terlalu Berdekatan

- **Ciri-ciri:** target 44px yang berdesakan tanpa celah, sehingga ketukan ibu jari mengenai yang salah.
- **Kenapa:** ukuran target hanya berarti bersama jarak target. Dua kontrol besar yang saling bersentuhan berperilaku seperti satu kontrol besar: pengguna tidak bisa memilih salah satunya dengan andal (R-03).
- **Perbaikan:** sisakan celah yang jelas di antara target interaktif yang berdekatan, setidaknya beberapa px dan idealnya cukup agar area tekanan jari tidak tumpang tindih. Jarak adalah separuh lain dari kelayakan diketuk.

### Interaksi Hanya Hover

- **Ciri-ciri:** menu, reveal, dan tooltip yang hanya ada saat hover, sehingga pengguna sentuh tidak pernah bisa membukanya.
- **Kenapa:** tidak ada hover di layar sentuh. Interaksi yang hanya merespons hover tidak ada bagi pengguna seluler, dan kontrol apa pun yang bergantung padanya adalah jalan buntu (R-03).
- **Perbaikan:** beri setiap interaksi hanya-hover padanan ketukan: menu yang terbuka saat hover juga terbuka saat ketukan, reveal juga muncul saat klik, dan elemen interaktif menunjukkan umpan balik `:active` yang terlihat sehingga ketukan tercatat. Uji dengan menggunakan UI hanya dengan sentuhan (R-35).

## Navigasi Seluler

### Nav yang Tetap Desktop

- **Ciri-ciri:** bar atas desktop dengan deretan tautannya dipertahankan berdampingan di seluler, sehingga tautan berdesak, membungkus menjadi dua baris, atau meluap melewati viewport.
- **Kenapa:** nav desktop diukur untuk kanvas lebar. Dipertahankan sebagai deretan di ponsel ia menjadi kekacauan tautan yang sesak, dan ia hal pertama yang ditemui pengguna seluler (R-03). Navigasi adalah tempat reflow paling penting: pengguna harus menemukan ke mana harus pergi sebelum mereka bisa pergi ke mana pun.
- **Perbaikan:** runtuhkan nav menjadi pola seluler di breakpoint: bottom nav untuk segelintir tujuan utama, atau menu untuk sisanya. Tautan mengalir keluar dari deretan, dan tujuan utama tetap satu ketukan ibu jari. Verifikasi ia bertahan di lebar sempit (R-35).

### Hamburger Telanjang

- **Ciri-ciri:** semuanya disembunyikan di balik ikon hamburger tanpa label dan tanpa petunjuk, sehingga pengguna tidak pernah menyadari menu itu ada atau tidak bisa tahu apa yang ia buka.
- **Kenapa:** hamburger telanjang mengasumsikan pengguna sudah tahu apa arti ikon itu dan bahwa menu bersembunyi di baliknya. Itu adalah pengetahuan yang mungkin tidak dimiliki pengguna seluler, dan di seluler menu tersembunyi bisa memegang satu-satunya cara berkeliling aplikasi (R-03).
- **Perbaikan:** jaga menu tetap mudah ditemukan: labeli hamburger ("Menu"), atau pertahankan tujuan utama terlihat dan sembunyikan hanya yang sekunder. Jika menu adalah satu-satunya cara mencapai sesuatu yang penting, keterjangkauan itu harus jelas.

### Bottom Nav yang Memakan Konten

- **Ciri-ciri:** bar bottom nav tetap yang duduk di atas konten, menutupi item daftar terakhir, tombol terakhir, atau form yang sedang dicoba diselesaikan pengguna.
- **Kenapa:** bar tetap mengambil ruang nyata di layar kecil. Jika tidak ada yang menyisakan ruang itu, konten menggulir ke bawahnya dan pengguna tidak bisa menjangkau yang tersembunyi, terutama di bagian paling bawah halaman (R-03).
- **Perbaikan:** sisihkan tinggi bar untuk konten: scroll padding di halaman dan safe-area inset di tempat perangkat membutuhkannya, sehingga tidak ada yang penting pernah tersembunyi di belakangnya. Verifikasi di lebar sempit bahwa item terakhir dapat dijangkau (R-35).

### Sticky Nav Mencuri Layar

- **Ciri-ciri:** header sticky atau bar bawah tinggi yang memegang tinggi tetap besar, sehingga sepotong besar layar ponsel selalu diambil navigasi.
- **Kenapa:** di viewport kecil setiap piksel chrome yang tetap adalah piksel konten yang hilang. Header sticky yang tinggi mengubah area terlihat menjadi kotak surat dan konten menjadi sepotong tipis (R-03).
- **Perbaikan:** jaga nav tetap ringkas: cukup kecil sehingga konten tetap dominan, dan runtuhkan atau kecilkan saat menggulir bila sesuai. Navigasi harus hadir, bukan penghuni utama layar.

## Layoutmobile Skill Checklist

Jalankan ini bersama Delivery Gate inti ketika tugas adalah pekerjaan tata letak seluler atau responsif. Semua jawaban harus **ya**:

- [ ] Apakah tata letak mengalir ulang menjadi state seluler yang berbeda alih-alih desktop yang dipencet? (R-03)
- [ ] Apakah ukuran (tipe, padding, jarak, tinggi bagian) menggunakan skala seluler, bukan ukuran desktop yang tidak berubah? (R-03, R-05)
- [ ] Apakah grid multi-kolom runtuh dan menumpuk alih-alih bertabrakan? (R-03)
- [ ] Apakah tidak ada overflow horizontal dan tidak ada yang terpotong? (R-03)
- [ ] Apakah target interaktif setidaknya 44 x 44 px dengan jarak di antaranya? (R-03)
- [ ] Apakah interaksi hanya-hover memiliki padanan ketukan dengan umpan balik yang terlihat? (R-03)
- [ ] Apakah navigasi mengalir ulang menjadi pola seluler (bottom nav atau menu) alih-alih deretan desktop yang dipencet? (R-03)
- [ ] Apakah bar nav tetap (bottom nav, header sticky) tidak pernah menutupi konten dan menghormati safe area? (R-03)
- [ ] Apakah tata letak diverifikasi di breakpoint seluler? (R-35)