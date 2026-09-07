---
name: antislop-human
description: "Human and accessibility skill for antislop. Contrast, keyboard, focus, and states for real people. Includes the contrast checker."
allowed-tools: Bash(python *) Bash(python3 *) Read Write Edit Glob Grep
---
# antislop-human

> Anti Slop: Aturan untuk Agen Pengodean AI. Skill Human

> Bagian dari sistem antislop. Baca bersama `antislop.md` (file inti). Skill ini mendalami bidang manusia: UI harus tetap dapat digunakan oleh orang dengan mata, tangan, dan pengaturan yang berbeda. Kontras, keyboard, fokus, state, dan rincian seluler yang mengecualikan orang.

## Cara menggunakan skill ini

- Muat bersama `antislop.md` setiap kali tugas membuat atau mengedit UI. Inti memegang mekanismenya (tes tujuan, tiga tier, Delivery Gate); skill ini memegang kedalaman sisi manusia: bagian UI yang mengecualikan orang dengan mata, tangan, dan pengaturan yang berbeda.
- Setiap entri memiliki bentuk yang sama: **Ciri-ciri** (polanya), **Kenapa** (siapa yang dikecualikan, dan mengapa ia terbaca belum selesai), **Perbaikan** (apa yang harus dilakukan sebagai gantinya), dengan aturan inti yang mengaturnya dikutip sebagai R-XX.
- Aksesibilitas bukan daftar periksa tambahan yang dipasang di akhir. Ia bagian dari janji inti bahwa "UI bertahan" (C-4). Delivery Gate di inti tetap menjadi gate; "Human Skill Checklist" di akhir file ini adalah pelengkap yang dijalankan bersamanya.
- Contrast checker (rumus + tabel referensi + skrip) berada di skill ini. Gunakan untuk setiap pasangan warna yang tidak bisa Anda verifikasi dengan mata.
- Skill ini hanya menyimpan rincian seluler yang mengecualikan orang: zoom, dan keyboard di layar.

## Warna & Kontras

### Teks Kontras Rendah

- **Ciri-ciri:** teks abu terang di atas latar putih atau hampir putih, teks tubuh tipis, label redup yang dipilih karena terlihat "elegan" tetapi sulit dibaca.
- **Kenapa:** ia mengecualikan pengguna dengan penglihatan rendah dan semua orang di bawah cahaya terang. Ini adalah pilihan visual yang dibuat tanpa memeriksa standarnya, persis jenis default yang keberadaannya ingin dicegat filter.
- **Perbaikan:** penuhi minimum WCAG AA (R-25): 4.5:1 untuk teks normal, 3:1 untuk teks besar (18px+). Hitung rasionya; jangan menebak dengan mata.

### Teks di Atas Foto atau Gradien

- **Ciri-ciri:** teks putih ditempatkan langsung di atas gambar atau gradien yang terang di beberapa area, yang diperiksa hanya di satu titik terang.
- **Kenapa:** kontras bersifat lokal. Di tempat gambar terang, teks turun di bawah 4.5:1 bahkan jika hero-nya "terlihat" baik-baik saja. R-25 mengharuskan menguji seluruh area yang dilalui teks, bukan satu titik.
- **Perbaikan:** tambahkan scrim atau blok warna solid di belakang teks, lalu verifikasi titik terburuknya, bukan yang terbaik. Jika ada bagian area teks yang gagal, perlakuan itu gagal.

### Halusinasi Abu-diatas-Abu

- **Ciri-ciri:** "abu gelap di atas hitam" atau "abu terang di atas putih" yang diklaim lolos AA tanpa perhitungan.
- **Kenapa:** ini adalah halusinasi aksesibilitas paling umum. Mata melebih-lebihkan kontras pada pasangan abu, dan agen mengulang klaim itu karena terdengar masuk akal. #555555 di atas hitam adalah 2.8:1. Ia gagal.
- **Perbaikan:** jangan pernah menegaskan sebuah pasangan lolos. Jalankan contrast checker (di bawah) atau terapkan rumusnya. Ketika keduanya tidak memungkinkan, gunakan tabel referensi.

### Kontras Non-Teks

- **Ciri-ciri:** komponen interaktif (tombol, ikon, border input, indikator fokus, segmen grafik) yang dibedakan dari latarnya kurang dari 3:1.
- **Kenapa:** UI non-teks membawa informasi melalui bentuk dan tepi. Ketika tepinya hanya sehelai warna, pengguna dengan penglihatan rendah tidak bisa menemukan kontrolnya. Standar yang sama berlaku untuk state seperti hover dan terpilih.
- **Perbaikan:** beri setiap batas komponen dan setiap indikator status rasio 3:1 terhadap warna terdekat (WCAG 1.4.11). Pasangkan ikon dengan label teks yang memenuhi 4.5:1.

### Contrast Checker

Ini adalah rumah contrast checker. Tiga lapisan, dari yang paling nyaman hingga yang paling tidak:

**Skripnya.** Ketika runtime skrip tersedia dan filenya ada, jalankan alih-alih menghitung dengan tangan. Skrip dikirim dalam folder skill ini (`contrast-check.py`, di sebelah `SKILL.md` ini). Jalankan dengan `python3` di macOS dan Linux, `python` di Windows:

```bash
python3 "${CLAUDE_SKILL_DIR}/contrast-check.py" "#FFFFFF" "#777777"
# normal text: FAIL (4.48 < 4.5)
# large text:  PASS (4.48 >= 3.0)
```

Jika variabel `${CLAUDE_SKILL_DIR}` tidak tersedia di agen ini, arahkan path skrip langsung ke folder skill ini. Skrip ada agar agen berhenti menghalusinasi AA. Ia menerima dua warna hex dan mencetak rasio serta vonis untuk kedua ukuran teks. Jika file hilang, rumus dan tabel di bawah sudah lengkap sendiri. Jangan pernah menghambat diri pada skrip.

**Rumusnya (WCAG 2.x).**

1. Rasio kontras = (L1 + 0.05) / (L2 + 0.05), dengan L1 adalah relative luminance yang lebih terang dan L2 yang lebih gelap.
2. Relative luminance L dari satu warna: konversi setiap kanal ke 0-1 (`c = hex / 255`), lalu linierkan: jika `c <= 0.03928`, `c_lin = c / 12.92`; selain itu `c_lin = ((c + 0.055) / 1.055)^2.4`.
3. `L = 0.2126*R + 0.7152*G + 0.0722*B`.
4. Bulatkan rasio ke dua desimal dan bandingkan: 4.5:1 untuk teks normal, 3:1 untuk teks besar (18px+, sesuai R-25). Rasio maksimum adalah 21.0 (hitam di atas putih).

**Tabel referensinya** (pasangan umum, dihitung dengan rumus):

| Pasangan (teks di atas latar) | Rasio | Teks normal (4.5) | Teks besar (3.0) |
|------------------------------|-------|-------------------|------------------|
| Black on white | 21.00 | Lulus | Lulus |
| White on black | 21.00 | Lulus | Lulus |
| White on #333333 | 12.63 | Lulus | Lulus |
| White on #666666 | 5.74 | Lulus | Lulus |
| #777777 on white | 4.48 | Gagal | Lulus |
| White on #888888 | 3.54 | Gagal | Lulus |
| White on #999999 | 2.85 | Gagal | Gagal |
| #555555 on black | 2.82 | Gagal | Gagal |

Baca tabel sebagai pemeriksaan kewarasan, bukan pengganti. Pasangan apa pun yang tidak tercantum, atau apa pun yang mendekati ambang batas, diproses melalui rumus atau skrip.

## Keyboard

### Outline Fokus yang Dihapus

- **Ciri-ciri:** `outline: none` atau `outline: 0` tanpa style fokus pengganti.
- **Kenapa:** pengguna keyboard tidak bisa melihat posisi mereka. Ini cara tercepat membuat UI tidak dapat digunakan tanpa mouse, dan R-32 melarangnya mentah-mentah.
- **Perbaikan:** pertahankan atau ganti outline dengan style `:focus-visible` yang terlihat dan memenuhi standar kontras yang sama (3:1 terhadap tetangganya). Jangan pernah menetapkan `outline: none` tanpa pengganti.

### Pola Hanya Mouse

- **Ciri-ciri:** menu yang terbuka hanya saat hover, dropdown yang terbuka dengan klik tetapi tidak dengan keyboard, drag-and-drop tanpa fallback keyboard.
- **Kenapa:** masing-masing mengecualikan pengguna keyboard dan teknologi bantu (R-32). Jika kontrol tidak bisa dijangkau dan dioperasikan dengan Tab, Enter, atau Space, kontrol itu tidak ada bagi seluruh kelompok orang.
- **Perbaikan:** setiap elemen interaktif dapat dijangkau dan dioperasikan dengan keyboard (R-32): urutan tab logis mengikuti urutan visual, aktivasi dengan Enter atau Space, dan dialog dapat ditutup dengan Escape (R-26).

### Urutan Tab Rusak

- **Ciri-ciri:** fokus melompat-lompat di halaman, melewati konten, atau mendarat di elemen tersembunyi karena urutan DOM tidak cocok dengan urutan visual.
- **Kenapa:** urutan tab yang membaca urutan kode alih-alih urutan visual membuat navigasi tidak dapat diprediksi (R-32). Pengguna kehilangan posisi mereka dan halaman terasa rusak.
- **Perbaikan:** jaga urutan source mengikuti urutan visual, tambahkan skip link untuk halaman panjang, dan jangan pernah memberi konten nyata `tabindex="-1"` kecuali itu bagian dari perangkap fokus yang terkontrol seperti dialog.

## Fokus & State

### Indikator Fokus Lemah atau Tak Terlihat

- **Ciri-ciri:** ring fokus berwarna sama dengan latar, ring yang hanya muncul saat hover, atau indikator lebih tipis dari border 1px.
- **Kenapa:** indikator fokus adalah cara pengguna keyboard mengetahui posisi mereka. Jika ia gagal standar kontras atau hanya muncul saat hover, penggunaan hanya keyboard rusak (R-32, R-34).
- **Perbaikan:** indikator fokus terlihat pada setiap elemen interaktif, 3:1 terhadap warna terdekat, di setiap tema yang Anda kirim. Periksa di mode gelap dan terang.

### Umpan Balik Hanya Warna

- **Ciri-ciri:** sukses, error, dan status yang dikomunikasikan hanya melalui warna: teks error merah, border sukses hijau, chip berwarna, tanpa ikon, label, atau teks.
- **Kenapa:** ia mengecualikan pengguna buta warna dan penglihatan rendah, dan ia hilang sepenuhnya dalam mode forced-colors. Status yang bergantung pada melihat corak bukanlah status (C-4).
- **Perbaikan:** pasangkan setiap sinyal warna dengan teks, ikon, atau pola. State error adalah teks dulu: "Password harus minimal 8 karakter", bukan hanya border merah.

### State UI yang Hilang

- **Ciri-ciri:** tampilan data tanpa state kosong, loading, atau error, atau state yang ada tetapi tidak terlihat: spinner tanpa teks, layar kosong tanpa penjelasan.
- **Kenapa:** R-27 mewajibkan tiga state; sudut pandang aksesibilitasnya adalah bahwa masing-masing harus dapat dirasakan dan informatif, bukan dekoratif. Spinner loading tanpa konteks terbaca sebagai halaman beku bagi pengguna screen reader.
- **Perbaikan:** setiap tampilan data memiliki ketiga state (R-27), masing-masing diumumkan atau terlihat: pesan kosong yang eksplisit, state loading dengan teks, dan state error yang menyebutkan apa yang terjadi dan bagaimana melanjutkan.

## Zoom & Penggunaan Seluler

Mekanika tata letak di balik seluler (breakpoint, skala, grid, overflow, target sentuhan) adalah bidang perhatian `antislop-layoutmobile`. Bagian ini hanya menyimpan rincian seluler yang mengecualikan orang: zoom, dan keyboard di layar.

### Teks yang Tidak Bisa Di-Zoom

- **Ciri-ciri:** ukuran font piksel tetap, atau kontainer dengan `overflow: hidden` yang memotong teks pada zoom 200%.
- **Kenapa:** pengguna harus bisa mengubah ukuran teks (WCAG 1.4.4). Jika zoom ke 200% memotong konten atau memaksa scroll horizontal, teks itu tidak dapat diubah ukurannya dalam praktik.
- **Perbaikan:** tipe fluid yang mengalir ulang dengan zoom, tanpa kontainer pemotong pada teks, dan verifikasi tata letaknya bertahan pada zoom 200% di viewport sempit (R-35).

### Keyboard Seluler Menutupi Form

- **Ciri-ciri:** input di bagian bawah viewport tersembunyi di belakang keyboard di layar, tanpa scroll-into-view dan tanpa ruang untuk inputnya.
- **Kenapa:** form yang tidak bisa dilihat atau dijangkau pengguna adalah form yang tidak bisa mereka selesaikan. Ini adalah pengecualian khusus seluler (R-03).
- **Perbaikan:** ketika input difokus, ia menggulir ke tampak di atas keyboard, dengan padding bawah cukup sehingga bidang yang difokus tidak pernah tertutup. Uji dengan perangkat nyata atau keyboard emulasi.

## Human Skill Checklist

Jalankan ini bersama Delivery Gate inti ketika tugas melibatkan UI. Semua jawaban harus **ya**:

- [ ] Apakah setiap pasangan teks dan latar diverifikasi terhadap contrast checker (rumus, tabel, atau skrip), termasuk teks di atas gambar dan gradien? (R-25)
- [ ] Apakah setiap batas komponen interaktif dan indikator status memenuhi 3:1 terhadap latarnya? (kontras non-teks)
- [ ] Apakah indikator fokus terlihat, kontras tinggi, dan hadir di setiap elemen interaktif di setiap tema? (R-32, R-34)
- [ ] Apakah setiap elemen interaktif dapat dijangkau dan dioperasikan dengan keyboard, dengan dialog dapat ditutup via Escape dan tanpa `outline: none` tanpa pengganti? (R-32, R-26)
- [ ] Apakah state kosong, loading, dan error dari setiap tampilan data hadir dan dapat dirasakan, bukan hanya warna? (R-27, C-4)
- [ ] Dapatkah teks diubah ukurannya hingga 200% tanpa terpotong, dan apakah keyboard seluler tidak pernah menutupi input yang difokus? (R-35)