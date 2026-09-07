---
name: antislop-ui
description: "UI and visual skill for antislop. Use when building or editing any interface: color, layout, components, motion. Load with the core."
allowed-tools: Read Write Edit Glob Grep
---
# antislop-ui

> Anti Slop: Aturan untuk Agen Pengodean AI. Skill UI & Visual

> Bagian dari sistem antislop. Baca bersama `antislop.md` (file inti). Skill ini mendalami bidang UI/visual: warna, tata letak, komponen, dekorasi, alur struktural, dan gerakan. Ia merujuk aturan inti berdasarkan nomor dan tidak pernah menggandakan atau menomor-ulangnya. Muat saat tugas membuat atau mengedit situs web, aplikasi web, atau antarmuka apa pun.

## Cara menggunakan skill ini

- Muat bersama `antislop.md` setiap kali tugas adalah pekerjaan UI atau visual. Inti memegang mekanismenya (tes tujuan, tiga tier, Delivery Gate); skill ini memegang kedalaman khusus UI.
- Setiap entri memiliki bentuk yang sama: **Ciri-ciri** (polanya), **Kenapa** (mengapa terbaca sebagai slop), **Perbaikan** (apa yang harus dilakukan sebagai gantinya), dengan aturan inti yang mengaturnya dikutip sebagai R-XX.
- Delivery Gate di inti tetap menjadi gate. "UI Skill Checklist" di akhir file ini adalah pelengkap khusus UI yang dijalankan bersamanya.

## Visual & Warna

### Gradien Biru-Ungu Generik

- **Ciri-ciri:** gradien biru-ke-ungu, biru-ke-cyan, atau ungu-ke-merah muda yang digunakan sebagai perlakuan warna utama, atau glow berwarna satu halaman penuh.
- **Kenapa:** perlakuan warna yang paling terlalu terwakili dalam data latihan. Ia menandakan "tanpa identitas merek", bukan "palet kami", dan menandai desain sebagai buatan AI dalam sekali lihat.
- **Perbaikan:** ambil palet dari `DESIGN.md` atau identitas produk itu sendiri. Pertahankan gradien hanya sebagai fungsi hierarki dengan alasan yang ditulis (R-01). Gradien yang memisahkan satu level dari level lain adalah keahlian; gradien yang sama di setiap bagian adalah default.

### Glassmorphism Berlebihan

- **Ciri-ciri:** blur/backdrop-filter pada navbar, kartu, modal, dan sidebar secara bersamaan.
- **Kenapa:** blur menghilangkan tekstur dan menempatkan setiap permukaan di lapisan buram yang sama, meratakan hierarki. Ketika setiap permukaan adalah kaca, tidak ada yang menjadi latar depan.
- **Perbaikan:** perlakukan kaca sebagai aksen, bukan ciri karakter. Batas dosis: paling banyak 1-2 elemen (R-10). Permukaan yang membutuhkan perhatianlah yang mendapat kaca; sisanya tetap solid.

### Radius Border Berlebihan

- **Ciri-ciri:** setiap elemen berbentuk pil: tombol, input, kartu, badge, modal.
- **Kenapa:** bentuk pil yang seragam menghapus bahasa visual "ini input, ini kartu". Radius menjadi dekorasi alih-alih alat hierarki.
- **Perbaikan:** tetapkan set radius kecil dalam sistem desain dan terapkan dengan sengaja (R-11). Satu radius yang besar pada CTA utama terbaca disengaja; radius yang sama di setiap elemen terbaca default.

### Bayangan Terlalu Lembut

- **Ciri-ciri:** setiap komponen membawa bayangan besar, sehingga seluruh halaman terasa mengambang.
- **Kenapa:** ketika semuanya terangkat, elevasi tidak mengomunikasikan apa pun. Halaman kehilangan bidang tanahnya dan menjadi kelembutan generik.
- **Perbaikan:** gunakan bayangan hanya sebagai penanda elevasi, dan tulis alasan elevasinya (R-12). Kebanyakan elemen harus rata; satu atau dua yang perlu terangkat di atas halaman yang membawa bayangan.

### Glow di Mana-mana

- **Ciri-ciri:** glow pada kartu, tombol, ikon, badge, latar belakang, dan border secara bersamaan.
- **Kenapa:** glow adalah penguat perhatian. Diterapkan di mana-mana, glow tidak memperkuat apa pun, dan ia adalah salah satu cara tercepat untuk terlihat "dibuat oleh AI".
- **Perbaikan:** sisihkan glow hanya untuk maksimal 1-2 elemen penting sebagai aksen fokus (R-13). Sisanya tetap matte.

### Grid Latar Belakang

- **Ciri-ciri:** kotak grid, garis blueprint, kertas grafik, atau garis tipis berulang di belakang konten.
- **Kenapa:** ini adalah cara default untuk membuat halaman datar terasa "teknis" tanpa melakukan pekerjaan nyata. Ia terbaca sebagai tekstur tanpa maksud.
- **Perbaikan:** gunakan tekstur atau pola hanya ketika benar-benar mendukung identitas produk, dengan alasan yang ditulis (R-07). Motif identitas nyata (inti Bagian 3) selalu mengungguli grid stok.

### Default Dark Mode Tanpa Alasan

- **Ciri-ciri:** seluruh halaman gelap hanya karena terlihat "tech", tanpa pertimbangan branding.
- **Kenapa:** gelap adalah keputusan, bukan default. Memaksakannya terbaca sebagai mengikuti tren, bukan melayani produk.
- **Perbaikan:** pilih tema dari identitas merek, tipe produk, dan audiens (R-21). Alat developer dan kreatif memiliki alasan sah untuk gelap; produk yang mengutamakan konten biasanya tidak. Jika tidak ada alasan kuat untuk tema tetap, bangun toggle terang/gelap yang berfungsi.

### Terlalu Banyak Warna di Palet

- **Ciri-ciri:** 5-7 warna berbeda di satu halaman tanpa sistem desain yang jelas.
- **Kenapa:** palet yang tersebar tidak memiliki hierarki. Ketika setiap elemen bisa berwarna apa saja, tidak ada yang dibedakan.
- **Perbaikan:** batasi palet aktif hingga 2-3 warna inti + 1 aksen (R-29), dan biarkan salah satu warna inti menjadi dasar netral. Pengendalianlah yang membuat aksen terasa menonjol.

### Warna Aksen Berlebihan

- **Ciri-ciri:** satu warna aksen pada tombol, ikon, badge, tautan, garis, latar belakang, dan glow sekaligus.
- **Kenapa:** aksen berhenti menjadi aksen begitu ia ada di mana-mana. Ia menjadi warna lain saja, dan desain kehilangan titik fokusnya.
- **Perbaikan:** aksen hanya milik momen kunci (satu aksen yang disengaja, inti Bagian 3). Nol aksen itu steril; aksen di mana-mana itu slop. Pilih satu atau dua tempat yang penting.

### Default Steril

- **Ciri-ciri:** putih datar atau hampir putih, border abu tipis, radius kecil, tanpa tekstur, font generik, tanpa identitas.
- **Kenapa:** ini adalah hasil "aman" dari pemfilteran berlebihan tanpa arahan. Ia bukan slop, tetapi ia juga bukan desain: ia adalah kekosongan di mana desain seharusnya berada.
- **Perbaikan:** ini masalah arahan, bukan masalah filter. Tambahkan `DESIGN.md` atau selesaikan Design Read (inti Bagian 3), lalu naikkan dial vitalitas. Perbaikannya tidak pernah lebih banyak larangan; melainkan nyatakan tujuannya dan tambahkan energi.

## Tata Letak & Komponen

### Tata Letak Template yang Monoton

- **Ciri-ciri:** hero, subjudul, 2 CTA, screenshot, grid fitur, testimoni, FAQ, CTA, footer, dalam urutan itu, setiap kali.
- **Kenapa:** urutan itu adalah default data latihan, bukan narasi produk. Bagian muncul karena template memilikinya, bukan karena konten membutuhkannya.
- **Perbaikan:** bangun struktur di sekitar kebutuhan konten yang nyata (R-05, C-3). Jika produk tidak memiliki testimoni, tidak ada bagian testimoni. Urutan bagian mengikuti cerita produk. Cocokkan dial RHYTHM: jika 3, bagian terlihat bervariasi.

### Kartu Fitur Copy-Paste

- **Ciri-ciri:** ukuran, tinggi, ikon, tata letak, dan padding identik di semua kartu fitur.
- **Kenapa:** kartu seragam meratakan konten. Ketika setiap fitur adalah kartu dengan ikon, fitur yang benar-benar berbobot dan yang tidak terlihat sama.
- **Perbaikan:** buat variasi yang mencerminkan hierarki konten, dengan alasan yang ditulis (R-14). Tidak setiap fitur perlu menjadi kartu. Fitur unggulan mungkin layak mendapat perlakuan selebar penuh, yang pendukung cukup berupa daftar.

### Spasi Seragam

- **Ciri-ciri:** padding, margin, dan jarak identik di setiap bagian.
- **Kenapa:** ritme adalah alat, dan satu nilai jarak menghilangkannya. Bagian berhenti saling berhubungan; halaman terbaca sebagai satu strip datar.
- **Perbaikan:** gunakan spasi putih sebagai struktur (inti Bagian 3) dan variasikan dengan dial RHYTHM. Tetapkan skala jarak, lalu gunakan level yang berbeda untuk memisahkan dan menghubungkan. Ritme seragam adalah pilihan yang disengaja hanya ketika dial mengatakannya (R-05).

### "Cara Kerja" Selalu 3 Langkah

- **Ciri-ciri:** ikon bulat + nomor 1, 2, 3 + teks pendek, selalu tiga langkah, selalu bentuk yang sama.
- **Kenapa:** proses nyata produk jarang menjadi daftar tiga langkah yang rapi. Template memaksa proses masuk ke bentuknya, bukan sebaliknya.
- **Perbaikan:** sajikan proses sebagaimana adanya (R-05). Tiga langkah dengan ikon bulat boleh jika itu memang prosesnya; jika tidak, gunakan bentuk apa pun yang diambil alur kerja nyata, termasuk dua langkah atau lima.

### Bilah Logo "Dipercaya oleh"

- **Ciri-ciri:** deretan logo perusahaan generik tepat di bawah hero.
- **Kenapa:** ini adalah klaim kepercayaan tanpa bukti: logo generik, tanpa pelanggan nyata yang disebutkan, tanpa bukti penggunaan.
- **Perbaikan:** hanya tampilkan logo nyata yang dapat diverifikasi (R-18, R-36, C-5). Jika produk belum memiliki pelanggan seperti itu, jangan membuat bilah logo. Bukti sosial nyata selalu mengungguli yang generik.

### Kartu Harga "Paling Populer"

- **Ciri-ciri:** tier harga tengah selalu disorot dengan badge kapsul.
- **Kenapa:** ini pola default, yang berarti bukan keputusan. Ketika setiap bagian harga melakukannya, tier yang disorot berhenti berarti apa pun.
- **Perbaikan:** sorot tier yang benar-benar melayani tujuan produk, dan tulis alasannya (R-31). Jika tidak ada tier yang layak mendapat penekanan, jangan sorot apa pun.

### Footer Template 4 Kolom

- **Ciri-ciri:** kolom Produk / Perusahaan / Sumber Daya / Hukum tanpa variasi.
- **Kenapa:** kolom itu ada karena template memilikinya, bukan karena situs memiliki kelompok tautan sebanyak itu.
- **Perbaikan:** susun footer di sekitar apa yang benar-benar dituju produk (R-05). Satu kolom tautan bisa lebih berguna daripada empat kolom yang setengah kosong.

### Ritme Bagian Seragam

- **Ciri-ciri:** setiap bagian adalah judul tengah + subjudul + grid kartu identik, tanpa variasi.
- **Kenapa:** komposisi identik membuat bagian menyatu, dan halaman terasa repetitif dan datar.
- **Perbaikan:** variasikan komposisi dengan dial RHYTHM (R-05). Selang-seling bagian yang berat teks dan yang visual, yang asimetris dan yang simetris. Halaman di mana setiap bagian mengikuti template yang sama adalah halaman yang dirancang oleh template.

## Elemen Dekoratif

### Ikon AI Generik

- **Ciri-ciri:** sparkle, star, magic, lightning, diamond, cube, robot, atau AI orb sebagai ikon fitur.
- **Kenapa:** glif ini adalah kosakata generik dari "produk AI". Mereka tidak mengomunikasikan apa pun tentang fitur spesifik.
- **Perbaikan:** gunakan ikon yang benar-benar relevan dengan konten, dengan relevansi yang ditulis ketika glifnya generik (R-04). Jika tidak ada ikon yang sesuai, jangan gunakan apa pun. Label fitur yang melakukan pekerjaannya.

### Emoji sebagai Dekorasi

- **Ciri-ciri:** emoji literal yang tersebar di copy, judul, badge, dan tombol: 🚀 di headline, ✅ di samping setiap bullet fitur, 🔥 di CTA, 📈 di atas judul grafik.
- **Kenapa:** emoji adalah singkatan paling berisik untuk "ini dihasilkan, bukan ditulis". Di UI, emoji bersaing dengan konten untuk mendapatkan perhatian dan meratakan suara produk menjadi default ceria yang sama seperti situs AI lainnya.
- **Perbaikan:** hapus emoji dari teks UI. Jika sebuah konsep butuh penanda, gunakan ikon nyata yang relevan dengan alasan yang ditulis (R-04), atau tanpa penanda sama sekali. Copy yang membawa makna; emoji tidak menambah apa pun.

### Panah Kecil di Setiap Tombol

- **Ciri-ciri:** `→` atau `↗` ditempatkan di hampir setiap tombol murni sebagai dekorasi.
- **Kenapa:** panah menjadi pola, bukan sinyal. Ketika setiap CTA memilikinya, tidak ada yang menunjuk ke tempat tertentu.
- **Perbaikan:** panah bukanlah identitas default untuk tombol (R-08). Simpan untuk aksi yang benar-benar diuntungkan oleh isyarat arah, dengan ukuran proporsional dan tujuan yang ditulis.

### Badge Kapsul AI

- **Ciri-ciri:** bentuk pil, border tipis, glow, titik kecil, huruf kapital, berisi "AI Powered", "Beta", "New".
- **Kenapa:** kombinasi kapsul-plus-glow-plus-titik adalah badge yang merujuk pada dirinya sendiri, yang menyatakan "dibuat oleh AI, tentang dibuat oleh AI". Ia menambah kebisingan, bukan informasi.
- **Perbaikan:** badge hanya ketika diperlukan secara fungsional, dengan kebutuhan yang ditulis, dan jangan pernah kombinasi lengkapnya (R-09). Label status nyata boleh; pil "AI Powered" dekoratif tidak.

### Tipografi AI Generik

- **Ciri-ciri:** heading monospace besar, atau label huruf kapital dengan letter-spacing ekstrem ("HOW IT WORKS", "FEATURES").
- **Kenapa:** monospace-sebagai-estetika dan kapital dengan tracking lebar adalah singkatan dari "teknis dan modern" tanpa melakukan pekerjaan tipografi nyata.
- **Perbaikan:** pilih wajah huruf dari karakter merek, bukan pilihan default model, dan tulis alasannya (R-06). Tipografi harus meningkatkan keterbacaan dan mencerminkan produk. Pilihan tipe dengan alasan selalu mengungguli tren.

### Ilustrasi Tanpa Kaitan

- **Ciri-ciri:** Undraw, Storyset, atau karakter blob 3D generik tanpa kaitan nyata dengan produk.
- **Kenapa:** ilustrasi dekoratif mengatakan desain itu dihias, bukan dirancang. Mereka mengisi ruang tanpa melayani konten.
- **Perbaikan:** ilustrasi harus memiliki kaitan langsung dengan produk, dengan kaitan tersebut ditulis (R-22). Jika tidak ada, gunakan screenshot nyata atau tanpa ilustrasi.

## Struktural & Alur

### Navigasi Mati

- **Ciri-ciri:** tautan navbar ke halaman atau bagian yang tidak ada.
- **Kenapa:** tautan mati adalah janji yang ingkar. Ia menghancurkan kepercayaan begitu pengguna mengkliknya.
- **Perbaikan:** setiap item navigasi harus memiliki tujuan nyata (R-24). Jika fitur belum dibangun, keluarkan, atau beri label "Coming soon" dengan jelas. Navbar mencerminkan konten yang benar-benar ada.

### Kontrol Tidak Fungsional

- **Ciri-ciri:** tombol tidak melakukan apa pun, dropdown tidak terbuka, form tidak bisa dikirim.
- **Kenapa:** visualnya selesai tetapi perilakunya tidak. Ini adalah perbedaan antara mockup dan produk.
- **Perbaikan:** setiap elemen interaktif memiliki perilaku nyata, atau ia dihapus (R-26). Jika sebuah elemen benar-benar tidak bisa memiliki tujuan, kirim `// TODO` yang jelas plus label "Coming soon" yang terlihat, atau jangan kirim sama sekali.

### Bagian yang Mengisi Template

- **Ciri-ciri:** sebuah bagian ada karena "setiap landing page AI memilikinya", bukan karena konten membutuhkannya.
- **Kenapa:** bagian template adalah konten tanpa tujuan. Mereka menambah panjang dan menghilangkan fokus.
- **Perbaikan:** setiap bagian memperoleh tempatnya dari konten produk (C-3). Hapus bagian yang hanya mengisi template. Halaman dengan lebih sedikit bagian yang bertujuan lebih kuat daripada halaman dengan semua default.

## Aplikasi & Dashboard

Pola-pola di atas adalah bentuk landing page. Ini adalah padanan sisi aplikasi: default yang digunakan agen ketika layarnya adalah dashboard, panel admin, atau tampilan yang sudah masuk log. Aturan yang mereka langgar sama; hanya bentuknya yang baru.

### Shell Dashboard Default

- **Ciri-ciri:** sidebar kiri, bar atas, empat kartu statistik, grafik, tabel. Dipilih sebelum siapa pun bertanya untuk apa layar itu, dan identik baik ia mengelola invoice, pasien, atau server.
- **Kenapa:** ini adalah masalah template landing page di aplikasi: tata letak yang dipilih dari ingatan alih-alih dari pekerjaan yang didukung layar. Tukar labelnya dan ia milik produk apa pun.
- **Perbaikan:** sebutkan pekerjaan layar dan satu keputusan yang dibuat pengguna di sana, lalu bangun hierarki di sekitarnya (C-3, R-20). Jika pekerjaannya "temukan pekerjaan yang gagal dan coba lagi", maka pekerjaan yang gagal adalah halamannya dan baris statistik adalah catatan kaki. Bagian yang bertahan hanya karena dashboard biasanya memilikinya dipotong (C-3).

### Kartu Statistik dengan Angka yang Dikarang

- **Ciri-ciri:** deretan empat kartu bertuliskan 12,483 / 94.2% / $48.2K / 1,204, masing-masing dengan selisih hijau "+12% minggu ini".
- **Kenapa:** angka itu dekorasi, dan selisihnya lebih buruk: klaim tren tanpa deret data di belakangnya. Dashboard nyata memiliki metrik yang penting dan yang tidak, jadi empat kartu yang sama besar sudah merupakan kegagalan hierarki.
- **Perbaikan:** tampilkan angka nyata atau tidak sama sekali (R-17, R-38). Hubungkan kartu ke data nyata, atau kirim satu metrik yang nyata. Selisih muncul hanya ketika periode pembandingnya nyata dan disebutkan. Jika layarnya prototipe, beri label nilai sebagai placeholder di tempat yang terlihat oleh pengguna (R-38).

### Umpan Aktivitas Pengisi

- **Ciri-ciri:** "Sarah Chen memperbarui dokumen, 2 jam lalu", diulang dengan nama dan avatar yang berganti-ganti.
- **Kenapa:** orang yang dikarang, peristiwa yang dikarang. Ini adalah bagian testimoni dengan tata letak yang berbeda, dan itu membuat produk kosong terlihat sibuk.
- **Perbaikan:** umpan menampilkan peristiwa nyata atau tidak dikirim (R-18, R-38). State kosong yang jujur lebih baik daripada umpan yang dibuat-buat, dan ia memberi tahu pengguna apa yang harus dilakukan pertama kali (R-27).

### Grafik Tanpa Pertanyaan

- **Ciri-ciri:** grafik garis atau donat ditempatkan karena ruangnya terlihat kosong, dengan judul generik ("Overview", "Performance") dan tanpa sumbu yang dapat ditindaklanjuti pembaca.
- **Kenapa:** grafik adalah jawaban. Tanpa pertanyaan, ia tekstur, dan ia memakan lebih banyak perhatian daripada sebuah kalimat.
- **Perbaikan:** tulis pertanyaan yang dijawab grafik sebelum menggambarnya, dan taruh pertanyaan itu di judul ("Pekerjaan gagal per jam, 24 jam terakhir"). Jika sebuah kalimat menjawabnya lebih baik, tulis kalimatnya (C-3). Segmen grafik masih perlu kontras 3:1 terhadap tetangganya (R-25).

### Kolom Tabel Generik

- **Ciri-ciri:** Nama, Status, Tanggal, Aksi, apa pun isi barisnya, dengan menu tiga titik di setiap baris.
- **Kenapa:** kolom berasal dari komponen tabel, bukan dari data. Pengguna memindai untuk bidang yang menentukan langkah berikutnya dan bidang itu tidak ada.
- **Perbaikan:** pilih kolom dari keputusan yang dibuat pengguna di tabel ini, dan tempatkan bidang penentu di awal. Menu baris memegang aksi yang ada; apa pun yang tidak melakukan apa pun dikeluarkan (R-26).

### Data Pengisi di Bidang dan Kolom

- **Ciri-ciri:** bidang form dan kolom tabel kosong diisi dengan data palsu yang masuk akal: `John Doe`, `johndoe@example.com`, `"Let's build something"`, nomor telepon dan tanggal yang tidak milik siapa pun.
- **Kenapa:** konten yang dibuat-buat yang menyamar sebagai nyata. Terbaca baik di mockup dan hancur begitu pengguna nyata melihatnya: namanya bukan pelanggan, emailnya bukan prospek, dan pesannya adalah tagline. Ini adalah tanda terkuat bahwa layar itu dihasilkan, bukan dibangun.
- **Perbaikan:** biarkan sel kosong tetap kosong, atau gunakan placeholder yang jelas menyebutkan isinya: `Your Name`, `email@example.com`, `Drop your message here...`, atau `[REAL DATA]` ketika nilai memang diharapkan (R-23, R-38). Data nyata masuk ketika sudah ada. Copy pengisi generik seperti "Let's build something" adalah slop kata kunci dan tidak pantas di kolom data (R-16).

### State Kosong dan Loading yang Placeholder

- **Ciri-ciri:** "Tidak ada data" dengan ilustrasi, spinner polos, atau skeleton satu halaman penuh yang meniru tata letak yang tidak pernah diisi data nyata.
- **Kenapa:** R-27 mewajibkan state, dan yang ini secara teknis memilikinya. Mereka tetap tidak memberi tahu pengguna apa pun: tanpa penyebab, tanpa aksi berikutnya, tanpa gambaran apakah ini normal.
- **Perbaikan:** state kosong menyebutkan mengapa ia kosong dan memberi satu aksi yang mengisinya ("Belum ada pekerjaan. Jalankan sinkronisasi untuk melihat hasil di sini"). State loading menyebutkan apa yang sedang dimuat. State error menyebutkan apa yang gagal dan apa yang harus dilakukan selanjutnya (R-27). Pertama kali dijalankan, terfilter habis, dan izin ditolak adalah layar yang berbeda dan terbaca berbeda.

## Gerakan

### Pulsasi dan Loop Tanpa Akhir

- **Ciri-ciri:** elemen yang berdenyut, memantul, atau mengambang selamanya tanpa pemicu pengguna.
- **Kenapa:** gerakan abadi adalah kebisingan. Ia bersaing dengan konten untuk perhatian dan tidak pernah berhenti untuk membiarkan pengguna beristirahat.
- **Perbaikan:** gerakan harus memiliki tujuan UX yang jelas, yang ditulis (R-19). Animasi memandu perhatian ke sebuah momen; ia tidak berjalan dalam loop. Jika dial MOTION adalah 1 (hanya state hover), loop tanpa akhir adalah FAIL terhadap dial yang dinyatakan.

### Animasi Template yang Ditumpuk

- **Ciri-ciri:** setiap elemen menggunakan Fade Up + Fade In + Floating + Scale + Bounce secara bersamaan.
- **Kenapa:** halaman di mana semuanya beranimasi tidak memiliki titik fokus. Gerakan menjadi wallpaper.
- **Perbaikan:** koreografikan gerakan untuk tujuan dan untuk dial MOTION (R-19). Tidak semuanya bergerak. Hero berbicara, elemen pendukung tetap tenang. Halaman yang diklaim "sinematik" harus benar-benar bergerak; yang diklaim "statis" tidak boleh.

## UI Skill Checklist

Jalankan ini bersama Delivery Gate inti ketika tugas adalah pekerjaan UI. Semua jawaban harus **ya**:

- [ ] Apakah palet berasal dari `DESIGN.md` atau identitas merek tertulis, bukan dari set gradien default? (R-01, R-29)
- [ ] Apakah aksen hanya digunakan di momen kunci, tidak tersebar di setiap elemen? (inti Bagian 3, satu aksen yang disengaja)
- [ ] Apakah copy bebas dari emoji dekoratif yang tersebar di judul, bullet, dan tombol? (R-04)
- [ ] Apakah komposisi bagian bervariasi sesuai dial RHYTHM yang dinyatakan alih-alih mengulang satu template? (R-05)
- [ ] Apakah setiap item navigasi dan elemen interaktif memiliki tujuan atau perilaku nyata, atau label "Coming soon" yang terlihat? (R-24, R-26)
- [ ] Apakah gerakan mengikuti dial MOTION yang dinyatakan dan melayani tujuan tertulis, tanpa loop tanpa akhir? (R-19)
- [ ] Apakah glass, glow, shadow, dan radius digunakan dalam batas dosisnya, bukan sebagai default seluruh halaman? (R-10, R-11, R-12, R-13)
- [ ] Pada layar aplikasi, apakah tata letak dibangun di sekitar keputusan yang dibuat pengguna di sana, bukan default sidebar + baris statistik + grafik + tabel? (C-3, R-20)
- [ ] Apakah setiap angka, selisih, entri umpan, dan baris tabel nyata atau placeholder berlabel, tanpa metrik yang dikarang? (R-17, R-18, R-38)
- [ ] Apakah bidang form dan sel tabel yang kosong tetap kosong atau membawa placeholder yang jujur (Your Name, email@example.com) alih-alih data yang terlihat palsu (John Doe, johndoe@example.com)? (R-23, R-38)
- [ ] Apakah state kosong, loading, dan error menyebutkan penyebab dan aksi berikutnya alih-alih berkata "Tidak ada data"? (R-27)
- [ ] Apakah halaman bertahan di setiap breakpoint, tema, dan state, serta lulus penggunaan hanya keyboard? (R-03, R-34, C-4)