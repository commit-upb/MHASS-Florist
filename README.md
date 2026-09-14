# Struktur Folder Project MHAS Florist

Dokumen ini menjelaskan fungsi setiap folder dan file utama pada project
**MHAS Florist** berdasarkan struktur folder project yang digunakan saat
ini.

------------------------------------------------------------------------

## 1. Struktur Utama

``` text
MHAS Florist/
├── assets/
│   ├── icons/
│   ├── images/
│   └── logo/
│
├── css/
│   ├── components.css
│   ├── Referensi css fig...
│   ├── responsive.css
│   └── style.css
│
├── data/
│   └── products.json
│
├── js/
│   ├── cart.js
│   ├── faq.js
│   ├── gallery.js
│   ├── main.js
│   ├── products.js
│   └── reviews.js
│
├── Pages/
│   ├── about.html
│   ├── contact.html
│   ├── faq.html
│   ├── gallery.html
│   ├── products.html
│   └── reviews.html
│
└── index.html
```

------------------------------------------------------------------------

# 2. `index.html`

`index.html` adalah halaman utama (**Home**) dari website MHAS Florist.

Halaman ini menjadi titik awal ketika website dibuka.

Contoh bagian yang dikerjakan di dalamnya:

-   Navbar
-   Home / Hero
-   Features
-   Footer

Saat ini `index.html` juga menggunakan:

``` html
<link rel="stylesheet" href="css/style.css">
```

untuk mengambil CSS dan:

``` html
<script src="js/main.js"></script>
```

untuk menjalankan JavaScript utama.

------------------------------------------------------------------------

# 3. Folder `assets`

Folder `assets` digunakan untuk menyimpan file-file pendukung visual
website.

Di dalamnya terdapat:

``` text
assets/
├── icons/
├── images/
└── logo/
```

## 3.1 `assets/icons/`

Folder ini digunakan untuk menyimpan **icon** yang digunakan pada
website.

Contohnya dari project:

``` text
keranjang.png
menu.png
WhatsApp.png
Bunga Kuning.png
```

Penggunaan contoh:

``` html
<img src="assets/icons/keranjang.png" alt="Cart Icon">
```

Jadi, jika membutuhkan icon seperti menu, keranjang, WhatsApp, atau
dekorasi bunga, file tersebut dapat diletakkan di folder `icons`.

------------------------------------------------------------------------

## 3.2 `assets/images/`

Folder ini digunakan untuk menyimpan **gambar/foto** yang digunakan pada
website.

Contohnya gambar background Home dan foto untuk bagian About.

Contoh:

``` html
<img src="assets/images/te.jpg" alt="MHAS Florist">
```

Background juga dapat mengambil gambar dari folder ini melalui CSS:

``` css
background-image: url("../assets/images/nama-file.jpg");
```

------------------------------------------------------------------------

## 3.3 `assets/logo/`

Folder ini khusus untuk menyimpan **logo website**.

Contoh file:

``` text
MHAS Florist Navbar.png
```

Penggunaan:

``` html
<img src="assets/logo/MHAS Florist Navbar.png" alt="Logo MHAS Florist">
```

Memisahkan logo dari icon dan foto membuat struktur asset lebih mudah
dicari.

------------------------------------------------------------------------

# 4. Folder `css`

Folder `css` digunakan untuk menyimpan file **CSS**, yaitu file yang
mengatur tampilan website.

``` text
css/
├── components.css
├── Referensi css fig...
├── responsive.css
└── style.css
```

## 4.1 `style.css`

`style.css` adalah file CSS utama yang saat ini digunakan oleh
`index.html`.

Contoh pemanggilannya:

``` html
<link rel="stylesheet" href="css/style.css">
```

Di dalamnya terdapat pengaturan seperti:

-   Navbar
-   Home
-   Background Home
-   Tombol
-   Features
-   About
-   dan styling lainnya yang sedang dikerjakan

Untuk saat ini, `style.css` dapat dianggap sebagai **CSS utama
project**.

------------------------------------------------------------------------

## 4.2 `components.css`

`components.css` digunakan untuk menyimpan styling **komponen-komponen
yang dapat digunakan kembali**.

Contohnya dapat berupa:

-   Button
-   Card
-   Navbar
-   Komponen UI lainnya

Tujuannya agar CSS project tidak semuanya menumpuk dalam satu file.

> Pembagian isi `components.css` dapat ditentukan lebih lanjut ketika
> struktur CSS mulai dirapikan.

------------------------------------------------------------------------

## 4.3 `responsive.css`

`responsive.css` digunakan untuk mengatur tampilan website pada berbagai
ukuran layar.

Contohnya:

-   Desktop
-   Tablet
-   Mobile

Misalnya tampilan navbar pada layar kecil membutuhkan hamburger menu.

CSS seperti:

``` css
@media (max-width: 768px) {
    ...
}
```

berhubungan dengan kebutuhan responsive website.

> Saat ini sebagian aturan responsive masih berada di `style.css`.
> Nantinya dapat dipisahkan ke `responsive.css` agar struktur CSS lebih
> rapi.

------------------------------------------------------------------------

## 4.4 `Referensi css fig...`

File ini merupakan file CSS yang digunakan sebagai **referensi dari
desain Figma**.

Fungsinya dapat digunakan untuk melihat:

-   Ukuran
-   Jarak
-   Posisi
-   Warna
-   Styling

File ini sebaiknya dianggap sebagai **referensi**, bukan tempat utama
untuk menulis CSS website yang sudah final, kecuali tim project memang
menentukan sebaliknya.

------------------------------------------------------------------------

# 5. Folder `data`

Folder `data` digunakan untuk menyimpan data yang digunakan oleh
website.

Saat ini terdapat:

``` text
data/
└── products.json
```

## `products.json`

File JSON ini digunakan untuk menyimpan **data produk**.

Contohnya secara konsep:

``` json
{
    "name": "Nama Bunga",
    "price": 100000
}
```

Data produk nantinya dapat dibaca menggunakan JavaScript sehingga
informasi produk tidak harus ditulis satu per satu langsung di HTML.

------------------------------------------------------------------------

# 6. Folder `js`

Folder `js` digunakan untuk menyimpan file **JavaScript**.

JavaScript digunakan ketika website membutuhkan interaksi atau fungsi
tertentu.

Strukturnya:

``` text
js/
├── cart.js
├── faq.js
├── gallery.js
├── main.js
├── products.js
└── reviews.js
```

------------------------------------------------------------------------

## 6.1 `main.js`

`main.js` digunakan untuk fungsi JavaScript utama website.

Saat ini file ini menangani **mobile menu / hamburger menu**.

Kode yang digunakan:

``` js
const menuToggle = document.querySelector('.menu-toggle');

const mobileMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});
```

Jadi ketika tombol hamburger diklik, menu navigasi akan ditampilkan atau
disembunyikan.

------------------------------------------------------------------------

## 6.2 `cart.js`

`cart.js` digunakan untuk fungsi yang berhubungan dengan **keranjang
belanja (cart)**.

Contohnya dapat mencakup:

-   Menambahkan produk ke keranjang
-   Menghapus produk
-   Mengubah jumlah produk
-   Menghitung isi keranjang

------------------------------------------------------------------------

## 6.3 `products.js`

`products.js` digunakan untuk fungsi yang berhubungan dengan **produk**.

File ini dapat digunakan bersama:

``` text
data/products.json
```

untuk menampilkan data produk ke halaman Products.

------------------------------------------------------------------------

## 6.4 `gallery.js`

`gallery.js` digunakan untuk fungsi yang berhubungan dengan **Gallery**.

Contohnya dapat mencakup interaksi pada gambar gallery.

------------------------------------------------------------------------

## 6.5 `reviews.js`

`reviews.js` digunakan untuk fungsi yang berhubungan dengan **Review**.

Contohnya dapat digunakan untuk mengatur tampilan atau interaksi data
review.

------------------------------------------------------------------------

## 6.6 `faq.js`

`faq.js` digunakan untuk fungsi pada bagian **FAQ (Frequently Asked
Questions)**.

Contohnya:

``` text
Pertanyaan
    ↓
Klik
    ↓
Jawaban muncul
```

------------------------------------------------------------------------

# 7. Folder `Pages`

Folder `Pages` digunakan untuk menyimpan halaman website selain halaman
utama.

``` text
Pages/
├── about.html
├── contact.html
├── faq.html
├── gallery.html
├── products.html
└── reviews.html
```

Konsep project saat ini adalah **beberapa halaman terpisah**, bukan
seluruh website berada dalam satu halaman.

Tujuannya salah satunya agar setiap bagian dapat dikerjakan oleh anggota
tim yang berbeda.

------------------------------------------------------------------------

## 7.1 `about.html`

Halaman **About Us**.

Berisi informasi mengenai:

-   MHAS Florist
-   Cerita/penjelasan florist
-   Foto atau gallery pendukung
-   Tombol menuju bagian lain

------------------------------------------------------------------------

## 7.2 `products.html`

Halaman **Products**.

Berisi koleksi produk atau rangkaian bunga yang tersedia.

Data produk dapat menggunakan:

``` text
data/products.json
```

dan JavaScript:

``` text
js/products.js
```

------------------------------------------------------------------------

## 7.3 `gallery.html`

Halaman **Gallery**.

Berisi kumpulan foto atau dokumentasi MHAS Florist.

JavaScript yang berhubungan dengan halaman ini:

``` text
js/gallery.js
```

------------------------------------------------------------------------

## 7.4 `reviews.html`

Halaman **Review**.

Berisi ulasan atau review dari pelanggan.

JavaScript yang berhubungan dengan halaman ini:

``` text
js/reviews.js
```

------------------------------------------------------------------------

## 7.5 `faq.html`

Halaman **FAQ**.

Berisi pertanyaan dan jawaban yang sering ditanyakan.

JavaScript yang berhubungan:

``` text
js/faq.js
```

------------------------------------------------------------------------

## 7.6 `contact.html`

Halaman **Contact**.

Digunakan untuk informasi atau cara menghubungi MHAS Florist.

------------------------------------------------------------------------

# 8. Hubungan Antar Folder

Secara sederhana, hubungan folder project dapat dipahami seperti ini:

``` text
HTML
 │
 ├── CSS
 │    └── Mengatur tampilan
 │
 ├── JavaScript
 │    └── Mengatur interaksi/fungsi
 │
 ├── Assets
 │    └── Menyimpan gambar, icon, dan logo
 │
 └── Data
      └── Menyimpan data website
```

Contohnya pada Home:

``` text
index.html
    │
    ├── css/style.css
    │
    ├── assets/logo/...
    │
    ├── assets/icons/...
    │
    ├── assets/images/...
    │
    └── js/main.js
```

------------------------------------------------------------------------

# 9. Aturan Sederhana Saat Menambahkan File

Agar project tetap rapi, gunakan aturan berikut.

### Gambar/foto

Masukkan ke:

``` text
assets/images/
```

### Icon

Masukkan ke:

``` text
assets/icons/
```

### Logo

Masukkan ke:

``` text
assets/logo/
```

### HTML halaman baru

Masukkan ke:

``` text
Pages/
```

kecuali halaman utama yang tetap:

``` text
index.html
```

### CSS

Masukkan ke:

``` text
css/
```

### JavaScript

Masukkan ke:

``` text
js/
```

### Data JSON

Masukkan ke:

``` text
data/
```

------------------------------------------------------------------------

# 10. Konsep Pembagian Pekerjaan Tim

Karena website dibuat dalam beberapa halaman, pembagian pekerjaan dapat
dilakukan berdasarkan halaman.

Contoh:

``` text
index.html
└── Home + Features + Footer

Pages/about.html
└── About

Pages/products.html
└── Products

Pages/gallery.html
└── Gallery

Pages/reviews.html
└── Reviews

Pages/faq.html
└── FAQ

Pages/contact.html
└── Contact
```

File JavaScript juga dapat dipisahkan berdasarkan fungsi:

``` text
main.js
└── Fungsi umum / navbar

products.js
└── Fungsi Products

gallery.js
└── Fungsi Gallery

reviews.js
└── Fungsi Reviews

faq.js
└── Fungsi FAQ

cart.js
└── Fungsi Cart
```

------------------------------------------------------------------------

# 11. Catatan Penting tentang Path

Karena `index.html` berada di folder utama sedangkan halaman lain berada
di dalam `Pages`, path asset-nya berbeda.

Dari `index.html`:

``` html
<img src="assets/images/contoh.jpg">
```

Dari `Pages/about.html`:

``` html
<img src="../assets/images/contoh.jpg">
```

Begitu juga CSS.

Dari `index.html`:

``` html
<link rel="stylesheet" href="css/style.css">
```

Dari `Pages/about.html`:

``` html
<link rel="stylesheet" href="../css/style.css">
```

JavaScript dari halaman `Pages`:

``` html
<script src="../js/main.js"></script>
```

`../` berarti **naik satu folder** dari folder `Pages` ke folder utama
project.

------------------------------------------------------------------------

# 12. Kesimpulan

Struktur project MHAS Florist dapat dibagi menjadi beberapa fungsi
utama:

  Folder/File        Fungsi
  ------------------ -------------------------
  `index.html`       Halaman Home
  `Pages/`           Halaman website lainnya
  `assets/`          File visual
  `assets/icons/`    Icon
  `assets/images/`   Foto/gambar
  `assets/logo/`     Logo
  `css/`             Styling/tampilan
  `js/`              Interaksi dan fungsi
  `data/`            Data website
  `main.js`          Fungsi JavaScript utama
  `products.js`      Fungsi Products
  `gallery.js`       Fungsi Gallery
  `reviews.js`       Fungsi Reviews
  `faq.js`           Fungsi FAQ
  `cart.js`          Fungsi Cart

Dengan struktur ini, setiap bagian website dapat dikembangkan secara
terpisah tetapi tetap berada dalam satu project **MHAS Florist**.
