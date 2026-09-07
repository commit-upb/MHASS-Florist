# AGENTS.md — Panduan Agen Pengodean MHAS Florist

## Urutan Baca

Sebelum mengubah proyek, baca:

1. `PRD.md`
2. `Architecture.md`
3. `Design.md`
4. `antislop.md`
5. skill yang relevan di `skills/`
6. `QA.md` sebelum pengiriman

## Mode Operasi

Terapkan antislop selama proyek, bukan hanya sebagai pembersihan akhir.

Jangan pernah membuat-buat fakta bisnis, statistik, testimoni, kontak, atau tujuan navigasi.

Gunakan `[REAL DATA]` untuk konten faktual yang belum ada.

## Disiplin Perubahan

Sebelum mengedit, identifikasi:

- kebutuhan yang menghadap pengguna
- file/komponen yang terdampak
- aturan desain yang terdampak
- kondisi penerimaan

Setelah mengedit:

- jalankan/build proyek
- periksa error konsol
- uji interaksi yang diubah
- verifikasi perilaku responsif
- verifikasi perilaku keyboard bila relevan

## Batasan Lingkup

Jangan:

- membuat tombol mati
- menambahkan bagian yang tidak diminta
- menambahkan pola SaaS generik
- memperkenalkan warna baru tanpa alasan Design.md
- menambahkan animasi dekoratif tanpa tujuan UX
- mem-patch source/CSS dengan skrip penggantian string eksternal
- mengganti konten asli dengan konten palsu yang masuk akal

## Aturan Komponen

Jaga komposisi halaman, komponen yang dapat dipakai ulang, data, utilitas, dan gaya di lokasi Architecture.md.

Jangan menaruh dataset produk yang besar di dalam JSX.

## Penunjuk Antislop

<!-- antislop:start -->
## antislop
For UI, copy, people, mobile layout, or code comments work, read `antislop.md` (core) and then the skill for the task:
- UI / visual: `skills/antislop-ui/SKILL.md`
- Copy & text: `skills/antislop-copywriting/SKILL.md`
- People: `skills/antislop-human/SKILL.md`
- Mobile / responsive: `skills/antislop-layoutmobile/SKILL.md`
- Code comments: `skills/antislop-code/SKILL.md`
<!-- antislop:end -->