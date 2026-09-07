---
name: antislop-code
description: "Code comment hygiene for AI coding agents: remove generic AI-slop comments, keep the valuable ones, never touch the code."
allowed-tools: Read Write Edit Glob Grep
---
# antislop-code

> Anti Slop: Aturan untuk Agen Pengodean AI. Skill Komentar Kode

> Bagian dari sistem antislop. Baca bersama `antislop.md` (file inti). Skill ini menyaring komentar yang terbaca generik AI (dekoratif, mengulang hal yang jelas, kaku, berisik) sambil mempertahankan komentar yang membawa informasi nyata. Ia merujuk aturan inti berdasarkan nomor dan tidak pernah menggandakan atau menomor-ulangnya. Muat saat tugas menulis atau mengedit komentar kode.

## Cara menggunakan skill ini

- Muat bersama `antislop.md` setiap kali tugas menyentuh komentar kode. Inti memegang mekanismenya (tes tujuan, tiga tier, Delivery Gate); skill ini memegang kedalaman khusus komentar.
- Setiap entri memiliki bentuk yang sama: **Ciri-ciri** (polanya), **Kenapa** (mengapa terbaca sebagai slop), **Perbaikan** (apa yang harus dilakukan sebagai gantinya), dengan aturan inti yang mengaturnya dikutip sebagai R-XX.
- **Batasan lingkup:** skill ini hanya memodifikasi komentar. Jangan pernah memodifikasi kode yang dapat dieksekusi, pengidentifikasi, import, pemformatan, indentasi, spasi, alur kontrol, atau logika. Jika ragu, biarkan kode tidak tersentuh.
- Delivery Gate di inti tetap menjadi gate. "Code Comment Checklist" di akhir file ini adalah pelengkap khusus komentar yang dijalankan bersamanya.

## Komentar yang Tidak Menambah Apa Pun

### Pemisah Dekoratif

- **Ciri-ciri:** komentar banner yang dibangun dari karakter berulang, label ALL CAPS, atau gambar kotak di sekitar nama bagian: `// =======================` di sekitar `Authentication`, `// -------- WORKFLOW --------`, atau header `/* ---- ROUTES ---- */`.
- **Kenapa:** dekorasinya itulah pesannya. Label yang dibungkus `=` atau `-` menandakan "AI yang membuat ini" tanpa menambah informasi, dan ALL CAPS terbaca teriak.
- **Perbaikan:** ganti dengan satu baris polos, atau hapus sepenuhnya jika labelnya tidak menambah apa pun (R-31).

### Mengulang Hal yang Jelas

- **Ciri-ciri:** komentar yang mengulang apa yang sudah ditampilkan baris atau deklarasi berikutnya, seperti `// Initialize the variable` di atas `let count = 0`, `// User class` di atas `class User {}`, `// Validate user` di atas `function validateUser()`, atau `const userAge = 25; // User age is 25`.
- **Kenapa:** ia menggandakan beban baca tanpa menambah apa pun. Kode sudah mengatakannya; komentar hanya mengulang.
- **Perbaikan:** hapus dan biarkan baris kode itu tetap apa adanya.

### Narasi Alur Kerja

- **Ciri-ciri:** komentar yang mengisahkan alurnya langkah demi langkah, seperti `// Step 1: Validate input`, `// Step 2: Process request`, `// Step 3: Return response`, atau `// First...`, `// Next...`, `// Finally...`.
- **Kenapa:** alur kontrol sudah terlihat di kode itu sendiri. Menomorinya terbaca sebagai daftar periksa, bukan penjelasan.
- **Perbaikan:** hapus. Jika alurnya memang sulit diikuti, itu masalah struktur, bukan masalah komentar yang hilang.

### Label Kosong

- **Ciri-ciri:** label generik tanpa informasi di belakangnya: `// Main logic`, `// Core logic`, `// Business logic`, `// Helper function`, `// Entry point`, `// Error handling`, atau `// Note: This is important.` / `// Important: Please read.`
- **Kenapa:** label menyebut kategori, bukan fakta. "Main logic" tidak memberi tahu pembaca apa pun yang tidak bisa disimpulkan dari kode.
- **Perbaikan:** hapus kecuali label membawa informasi spesifik. "Note: retries happen only on 5xx" layak bertempat; "Note: this is important" tidak.

### Placeholder yang Samar

- **Ciri-ciri:** komentar yang menjanjikan pekerjaan masa depan tanpa menyebutkan apa: `// TODO: Improve this`, `// Future improvements`, `// Additional optimization can be added here`, `// Add more validation`.
- **Kenapa:** TODO yang samar adalah kebisingan. Ia menyebut perasaan (ini bisa lebih baik) alih-alih tugas (apa, dan mengapa).
- **Perbaikan:** hapus. Pertahankan TODO hanya ketika ia menyebut tugas spesifik dengan cukup konteks untuk ditindaklanjuti.

### Gema Tanda Tangan

- **Ciri-ciri:** dokumentasi yang hanya mengulang tanda tangan, seperti blok JSDoc yang mengulang `@param price The price.` dan `@returns Total price.` untuk fungsi yang nama dan parameternya sudah mengatakan semuanya.
- **Kenapa:** dokumen yang menggema tanda tangan menambah panjang, bukan pemahaman. Pembaca tidak belajar apa pun yang baru.
- **Perbaikan:** sederhanakan atau hapus gemanya. Pertahankan dokumentasi yang menjelaskan aturan bisnis, kasus tepi, asumsi, algoritma, keterbatasan, efek samping, perilaku API, atau implikasi keamanan. Jangan pernah menghapus dokumentasi nyata.

### Emoji Dekoratif

- **Ciri-ciri:** emoji yang digunakan sebagai dekorasi di komentar, seperti `// ✅ Validation` atau `// 🚀 Performance`.
- **Kenapa:** emoji adalah kebisingan visual di kode, dan set spesifik (✅, 🚀, 🔒) adalah kosakata default AI.
- **Perbaikan:** ganti dengan bahasa Indonesia polos, atau hapus jika labelnya tidak menambah apa pun.

### Penanda Akhir

- **Ciri-ciri:** komentar yang hanya menandai akhir blok, seperti `} // end if`, `# End of function`, atau `// End processOrder`.
- **Kenapa:** kurung tutup sudah mengakhiri bloknya. Penanda itu ada karena kebiasaan, bukan kebutuhan.
- **Perbaikan:** hapus. Dalam kasus langka ketika penanda akhir benar-benar membantu file panjang, pertahankan hanya di tempat yang mencegah kebingungan, bukan sebagai kebiasaan.

## Bagaimana Seharusnya Terbaca

### Narasi Baris Demi Baris

- **Ciri-ciri:** komentar di setiap pernyataan sepele, mengisahkan setiap baris yang ditulis: `// Initialize count`, lalu `// Loop items`, lalu `// Get item`, lalu `// Increment`, lalu `// Return result`.
- **Kenapa:** ketika setiap baris dikomentari, tidak ada komentar yang berarti. Pembaca harus memeriksa satu per satu untuk menemukan yang membawa makna.
- **Perbaikan:** tulis satu komentar ringkas per blok logis alih-alih satu per baris. Jika bloknya tidak butuh komentar, jangan tulis apa pun.

### Kata Kaku atau Berisik

- **Ciri-ciri:** komentar yang terdengar formal, panjang, atau teriak: "This function is responsible for validating whether the supplied credentials are valid before continuing with the authentication process", atau `// MAIN LOGIC` dengan huruf kapital.
- **Kenapa:** kata formal dan berisik terbaca dihasilkan, bukan sebagai catatan insinyur untuk orang berikutnya.
- **Perbaikan:** tulis baris pendek berhuruf kecil kalimat dengan suara developer yang natural: `// Validate credentials before issuing a token.` Komentar yang baik menjelaskan mengapa, bukan apa, dan tetap pendek.

## Bukan Larangan (pertahankan ini)

Jangan pernah menghapus komentar yang menjelaskan:

- logika bisnis dan maksudnya
- keputusan arsitektur
- pertimbangan keamanan
- trade-off performa
- perilaku konkurensi
- rincian protokol
- kontrak API
- workaround
- kasus tepi dan asumsi
- lisensi dan pemberitahuan hukum

Contoh yang harus tetap:

```js
// Stripe may retry webhook deliveries for up to three days.
// Ignore duplicate events using the event ID.
```

Komentar layak bertempat ketika ia menjelaskan sesuatu yang tidak ditampilkan kode: alasannya, kendalanya, perilakunya yang tidak kentara.

## Code Comment Checklist

Jalankan ini bersama Delivery Gate inti ketika tugas menyentuh komentar. Semua jawaban harus **ya**:

- [ ] Apakah setiap komentar menambah informasi yang tidak ditampilkan kode? (R-31)
- [ ] Apakah komentar menghindari pemisah dekoratif, banner ALL CAPS, dan header yang digambar kotak?
- [ ] Apakah komentar menghindari mengulang baris, deklarasi, atau tanda tangan yang jelas?
- [ ] Apakah komentar menghindari narasi alur kerja langkah demi langkah?
- [ ] Apakah komentar menghindari label kosong dan TODO samar yang tidak menyebut tugas?
- [ ] Apakah komentar menghindari emoji dekoratif dan penanda akhir?
- [ ] Apakah kepadatan komentar satu per blok logis, bukan satu per baris?
- [ ] Apakah komentar yang tersisa terbaca pendek, alami, dan huruf kecil kalimat?
- [ ] Apakah batasan lingkup dipegang: hanya komentar yang diubah, kode tidak tersentuh?