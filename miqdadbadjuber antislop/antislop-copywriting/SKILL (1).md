---
name: antislop-copywriting
description: "Copy and text skill for antislop. Use when writing or editing prose: headlines, tone, CTAs, and anti-AI-writing patterns. Load with the core."
allowed-tools: Read Write Edit Glob Grep
---
# antislop-copywriting

> Anti Slop: Aturan untuk Agen Pengodean AI. Skill Copy & Teks

> Bagian dari sistem antislop. Baca bersama dengan `antislop.md` (inti). Skill ini memperdalam perhatian copy dan teks: judul, CTA, nada, proposisi nilai, dan pola yang membuat prosa tulisan AI mudah dikenali. Ia merujuk aturan inti dengan nomornya dan tidak pernah menduplikasi atau menomori ulang. Muat skill ini saat tugas menulis atau mengedit copy pemasaran, copy produk, teks landing page, atau prosa apa pun yang dimaksudkan untuk dibaca orang.

## Cara menggunakan skill ini

- Muat bersama dengan `antislop.md` setiap kali tugasnya adalah pekerjaan copy atau teks. Inti memegang mekanismenya (tes tujuan, tiga tier, Delivery Gate) dan larangan kerasnya (R-02, R-15, R-16, R-17, R-18, R-36, R-38). Skill ini memegang kedalaman khusus copy yang tidak dimiliki inti.
- Setiap pola memiliki bentuk yang sama: **Pola**, **Mengapa terbaca sebagai AI**, **Sebelum** (slop), **Sesudah** (perbaikan), dengan aturan inti yang mengaturnya dikutip sebagai R-XX.
- Dua aturan berlaku untuk semua yang di bawah:
  - **Jangan pernah mengarang fakta** (R-17, R-36, R-38). Sebuah penulisan ulang tidak menambah fakta, nama, angka, tanggal, kutipan, atau sitasi apa pun yang tidak ada di teks sumber atau tidak diberikan oleh pengguna. Kekhususan datang dari sumber atau pengguna, bukan dari penulisan ulang. Jika sebuah kalimat butuh rincian nyata agar berfungsi, minta rincian itu atau tulis versi polosnya tanpa rincian itu.
  - **Jangan terlalu mensterilkan.** Menghindari pola AI hanyalah setengah pekerjaan. Copy tanpa suara sama jelasnya buatan mesin dengan copy yang penuh penanda AI (R-37). Ketika pengguna memberi suara, pertahankan.
- Delivery Gate di inti tetap menjadi gate. "Daftar Periksa Skill Copywriting" di akhir file ini adalah pelengkap khusus copy yang dijalankan bersamanya.

## Nada & Suara

### Kosakata AI yang Kosong

- **Pola:** kata kerja dan kata benda abstrak ditumpuk agar terdengar mengesankan tanpa menyampaikan apa pun: *unlock, elevate, empower, delve, showcase, testament, landscape (abstrak), journey, robust, game-changer, next-level, seamless, cutting-edge, revolutionary*.
- **Mengapa terbaca sebagai AI:** kata-kata ini muncul jauh lebih sering dalam teks buatan mesin. Mereka memberi sinyal maksud untuk memengaruhi, bukan maksud untuk menginformasikan, dan mereka adalah cara tercepat untuk menandai sebuah halaman sebagai hasil AI.
- **Sebelum:**
  > Unlock the power of seamless collaboration to elevate your team's journey to the next level.
- **Sesudah:**
  > Work with your team in one shared space.
- **Aturan:** R-16 (kata populer kosong), R-36 (tanpa klaim yang dikarang).

### Inflasi Makna

- **Pola:** "masa depan X", "menandai momen penting", "sebuah bukti dari", "merevolusi", "era baru dari".
- **Mengapa terbaca sebagai AI:** klaimnya tidak didukung bukti apa pun, dan kalimatnya terbaca sama apa pun yang dilakukan produk. Ini upacara di tempat yang seharusnya berisi konten.
- **Sebelum:**
  > Our platform is marking a pivotal moment in the evolution of team productivity, ushering in a new era of work.
- **Sesudah:**
  > Our platform cuts the time your team spends on status meetings.
- **Aturan:** R-36 (tanpa klaim yang dikarang), C-5 (bukti daripada klaim).

### Klaim Kosong dan Bukti Sosial Tanpa Bukti

- **Pola:** "Dipercaya ribuan tim", "industri terdepan", "kelas dunia", "dicintai pelanggan di mana-mana", tanpa ada yang disebutkan atau dapat diverifikasi.
- **Mengapa terbaca sebagai AI:** klaim kepercayaan tanpa bukti adalah pengakuan. Ia mengisi ruang yang semestinya diisi oleh nama pelanggan nyata, angka nyata, atau studi kasus nyata.
- **Sebelum:**
  > Trusted by thousands of teams worldwide. Industry-leading technology loved by customers everywhere.
- **Sesudah:**
  > Used by the support teams at [customer names, only if real]. If there are no real customers to name, cut the claim entirely.
- **Aturan:** R-17 (data dan angka), R-18 (testimoni), R-36 (tanpa klaim yang dikarang), C-5.

### Atribusi Licin

- **Pola:** "Para ahli mengatakan", "pengamat industri", "orang-orang melaporkan", "analis terkemuka percaya", tanpa ada yang disebutkan namanya.
- **Mengapa terbaca sebagai AI:** atribusi itu ada untuk membuat klaim tanpa sumber terasa berwenang. Jika otoritasnya nyata, sebutkan; jika tidak, klaimnya tidak mendapat kostum.
- **Sebelum:**
  > Experts say this approach dramatically improves conversion.
- **Sesudah:**
  > [Name the source or cut the sentence. Example with a real source: "In a 2024 study by [named firm], this approach improved conversion by [real figure]."]
- **Aturan:** R-36, C-5.

### Kiasan Otoritas Persuasif

- **Pola:** "pada intinya", "pertanyaan sebenarnya adalah", "yang benar-benar penting", "secara fundamental", "masalah yang lebih dalam", "inti permasalahannya".
- **Mengapa terbaca sebagai AI:** frasa ini berpura-pura menembus kebisingan menuju kebenaran yang lebih dalam, lalu menyatakan ulang poin biasa dengan upacara tambahan.
- **Sebelum:**
  > At its core, what really matters is whether your team can move faster.
- **Sesudah:**
  > Whether your team can move faster depends on how quickly you can merge changes.
- **Aturan:** R-36.

### Penutup Chatbot

- **Pola:** "Semoga ini membantu!", "Beri tahu saya jika Anda punya pertanyaan", "Apakah Anda ingin saya perluas ini?", "Sama-sama!".
- **Mengapa terbaca sebagai AI:** ini artefak percakapan, bukan copy. Mereka muncul ketika output chat model ditempel langsung ke sebuah deliverable.
- **Sebelum:**
  > Here is an overview of our pricing. I hope this helps! Let me know if you'd like me to break down any tier.
- **Sesudah:**
  > Here is our pricing. The Starter tier includes three seats and community support.
- **Aturan:** R-36.

### Pembuka Sok Jujur

- **Pola:** "Jujur?", "Mari jujur", "Begini soalnya", "Bicara jujur", sebagai jeda teatrikal sebelum sebuah poin biasa.
- **Mengapa terbaca sebagai AI:** orang yang jujur biasanya langsung mengatakan apa adanya. Jeda-dan-mengungkap adalah keintiman yang dibuat-buat.
- **Sebelum:**
  > Is it worth the price? Honestly? It depends on how often you'll use it.
- **Sesudah:**
  > Whether it is worth the price depends on how often you'll use it.
- **Aturan:** R-36.

### Pengumuman Penunjuk Arah

- **Pola:** "Mari kita mulai", "Inilah yang perlu Anda ketahui", "Dalam artikel ini kami akan membahas", "Tanpa basa-basi lagi".
- **Mengapa terbaca sebagai AI:** mengumumkan apa yang akan Anda lakukan alih-alih melakukannya adalah meta-komentar. Ia memperlambat pembaca dan memberi teks nuansa skrip tutorial.
- **Sebelum:**
  > Let's dive into how caching works in Next.js. Here's what you need to know.
- **Sesudah:**
  > Next.js caches data at multiple layers, including request memoization, the data cache, and the router cache.
- **Aturan:** R-36.

### Penekanan Huruf Kapital Semua

- **Pola:** satu kalimat, klausa, atau frasa utuh dalam HURUF KAPITAL di dalam paragraf untuk berteriak menekankan: "The launch is ready and WE NEED TO MOVE NOW before the window closes."
- **Mengapa terbaca sebagai AI:** huruf kapital sebagai penekanan adalah alat kasar yang diambil model untuk membuat urgensi buatan alih-alih menuliskan penekanan ke dalam kalimat. Dalam teks panjang ia terbaca sebagai teriakan, dan ia meratakan puncak yang sebenarnya dengan membuat semuanya keras.
- **Sebelum:**
  > This is our last chance to win this customer, and WE MUST ACT IMMEDIATELY before they choose a competitor.
- **Sesudah:**
  > This is our last chance to win this customer. If we do not respond today, they will choose a competitor.
- **Aturan:** R-36. (R-06 mencakup label huruf kapital dengan tracking lebar sebagai pilihan desain; pola ini adalah kasus prosa: huruf kapital di dalam paragraf yang melakukan kerja penekanan.)
- **Bukan larangan:** judul yang sungguh-sungguh, baris yang sengaja diteriakkan dalam suara yang suka berteriak, atau satu kata huruf kapital yang dipakai sekali sebagai aksen boleh tetap ditulis kapital. Penandanya adalah huruf kapital yang dipakai kalimat demi kalimat untuk melakukan penekanan yang semestinya dilakukan kata-kata. Minimalkan, jangan cabut setiap huruf kapital.

### Kalimat Pasif Tanpa Pelaku

- **Pola:** kalimat pasif dengan pelaku dihilangkan: "the decision was made to sunset the free tier", "the pricing page has been updated", "mistakes were made".
- **Mengapa terbaca sebagai AI:** model tidak tahu siapa yang bertindak, jadi ia menulis mengelilinginya. Tim yang mengirim produk tahu, dan menyatakannya. Menghapus pelaku juga diam-diam menghilangkan akuntabilitas dari kalimat, sebab itu bentuk ini bertahan di copy korporat dan tidak di tempat lain.
- **Sebelum:**
  > The pricing page was updated to reflect the new tiers.
- **Sesudah:**
  > We rewrote the pricing page to show the new tiers.
- **Aturan:** R-02 (teks harus terasa alami dan manusiawi).
- **Bukan larangan:** pasif adalah pilihan yang tepat ketika pelakunya tidak diketahui, tidak relevan, atau sengaja ditahan ("the server was restarted at 03:00"), dan ketika objeknya adalah subjek sesungguhnya dari paragraf. Penandanya adalah pasif yang dipilih sebagai default, halaman demi halaman, dengan pelaku yang tersedia sepanjang waktu.

### Subjek Tak Bernyawa, Kata Kerja Manusiawi

- **Pola:** abstraksi yang diberi daya tindak: "data memberi tahu kita", "desain memutuskan", "keluhan menjadi perbaikan", "roadmap ingin fokus pada retensi".
- **Mengapa terbaca sebagai AI:** ia terdengar aktif sambil tidak menyebut siapa pun, jadi ia lolos cek kalimat pasif dan tetap menyembunyikan pelaku. Ia juga menjilat produk, karena dashboard yang "memahami" melakukan hal yang tidak dilakukan dashboard mana pun.
- **Sebelum:**
  > The dashboard understands what your team needs and surfaces the right numbers.
- **Sesudah:**
  > The dashboard opens on the three metrics your team checks every morning.
- **Aturan:** R-02, R-16 (bahasa spesifik di atas klaim).
- **Bukan larangan:** kata kerja produk biasa itu baik, begitu juga idiom yang mapan. "The report shows", "the form submits", "the filter narrows the list" menggambarkan apa yang dilakukan benda itu. Penandanya adalah kata kerja yang butuh pikiran di belakangnya: understands, knows, decides, wants, believes, cares.

## Ritme & Struktur

### Penggunaan Aturan Tiga yang Berlebihan

- **Pola:** setiap ide dipaksa masuk kelompok tiga agar terdengar lengkap: "innovation, inspiration, and insights".
- **Mengapa terbaca sebagai AI:** daftar nyata memiliki jumlah item yang dibutuhkan konten. Tiga serangkai yang dipaksa adalah penanda ritme, dan ia muncul di setiap bagian sekaligus.
- **Sebelum:**
  > Attendees can expect keynote sessions, panel discussions, and networking opportunities. They'll leave with innovation, inspiration, and industry insights.
- **Sesudah:**
  > The event includes talks, panels, and time for informal networking between sessions.
- **Aturan:** R-05 (struktur halaman), R-36.

### Paralelisme Negatif dan Negasi Ekor

- **Pola:** "Ini bukan hanya X, ini Y", "Tidak hanya X, tetapi juga Y", dan fragmen terpenggal yang diserempetkan sebagai penekanan: "no guessing", "no wasted motion".
- **Mengapa terbaca sebagai AI:** konstruksinya adalah rumus yang diambil model agar terdengar tegas, apakah penekanannya memang layak atau tidak.
- **Sebelum:**
  > It's not just a dashboard, it's a command center. The options come from the selected item, no guessing.
- **Sesudah:**
  > The dashboard shows the data you select. The options come from the selected item without forcing you to guess.
- **Aturan:** R-36.

### Rumus Aforisme

- **Pola:** "X adalah bahasa dari Y", "X adalah mata uang dari Z", "X bukan alat melainkan cermin", "Efisiensi menjadi jebakan ketika".
- **Mengapa terbaca sebagai AI:** rumus yang bisa dipakai ulang, terdengar dalam tanpa menambah presisi. Ia memberi isyarat ke sebuah poin alih-alih menyatakannya.
- **Sebelum:**
  > Symmetry is the language of trust. Efficiency becomes a trap when teams forget the human layer.
- **Sesudah:**
  > Symmetric layouts feel more predictable to users. Teams can over-optimize workflows and miss how people actually work.
- **Aturan:** R-36.

### Drama Staccato

- **Pola:** rentetan fragmen deklaratif pendek untuk mengarang sebuah pukulan pamungkas: "It had no preference. No prior. No nostalgia."
- **Mengapa terbaca sebagai AI:** satu kalimat pendek untuk penekanan itu baik; rentetan dari mereka terdengar hasil teknik. Ritmenya rata, efeknya teatrikal.
- **Sebelum:**
  > Then the old rules were gone. No templates. No defaults. No safety.
- **Sesudah:**
  > The old rules no longer applied, and every page had to be designed from scratch.
- **Aturan:** R-36.

### Siklus Sinonim

- **Pola:** menukar sinonim agar tidak mengulang kata: "the protagonist faces a challenge, the main character must adapt, the central figure persists".
- **Mengapa terbaca sebagai AI:** model menulis ulang untuk menghindari penalti pengulangan. Penulis manusia mengulang kata yang paling jelas ketika kata itu paling jelas.
- **Sebelum:**
  > The checkout is fast. The process is quick. The flow is speedy.
- **Sesudah:**
  > The checkout is fast. Everything happens in three clicks.
- **Aturan:** R-36.

### Rentang Palsu

- **Pola:** "dari X ke Y" di mana X dan Y tidak berada pada skala yang bermakna: "dari onboarding hingga skala", "dari klik pertama hingga invoice final, dan semua yang di antaranya".
- **Mengapa terbaca sebagai AI:** rentangnya adalah bingkai yang terdengar mengesankan tetapi tidak mencakup apa pun yang spesifik.
- **Sebelum:**
  > From first touch to final invoice, and everything in between.
- **Sesudah:**
  > Handles quotes, invoices, and payment reminders.
- **Aturan:** R-36.

## Kejujuran & Bukti

### Rincian yang Dikarang

- **Pola:** angka, testimoni, nama, tanggal, atau fitur yang diciptakan, tampak realistis tetapi tidak nyata.
- **Mengapa terbaca sebagai AI:** fabrikasi yang tampak spesifik lebih buruk daripada klaim samar, karena ia terbaca jujur sambil menipu. Ini satu-satunya pola yang merupakan cacat bahkan ketika ia terdengar lebih manusiawi.
- **Sebelum:**
  > Trusted by 10,000+ teams. "Antislop cut our review time in half." - Sarah Chen, VP Engineering at [fictional company].
- **Sesudah:**
  > If no real customer exists, write no number and no quote. Say what the product does instead. Any real statistic needs a real source (R-17, R-36).
- **Aturan:** R-17, R-18, R-36, R-38, C-5.

### Mengisi Celah Secara Spekulatif

- **Pola:** ketika penulis tidak tahu sebuah fakta, ia menulis kalimat tentang tidak mengetahuinya, lalu mengarang pengisi yang masuk akal: "the company was likely founded in the 1990s", "she maintains a low profile".
- **Mengapa terbaca sebagai AI:** tebakan yang berdandan sebagai fakta. Model tidak bisa menemukan sumber, jadi ia menutupi celahnya.
- **Sebelum:**
  > While specific details are limited, the founder likely started small and grew through word of mouth.
- **Sesudah:**
  > The founding details are not documented in our sources. (Or omit the sentence entirely. State a date only if a source provides one.)
- **Aturan:** R-17, R-36.

### Kesimpulan Positif Generik

- **Pola:** "Masa depannya tampak cerah", "Waktu-waktu yang menarik ada di depan", "Ini langkah besar ke arah yang benar".
- **Mengapa terbaca sebagai AI:** pamitan yang ceria, tidak menyatakan ulang apa pun dan tidak menjanjikan apa pun. Ia menggenjot akhir dengan optimisme alih-alih informasi.
- **Sebelum:**
  > The future looks bright for our customers as we continue our journey toward excellence.
- **Sesudah:**
  > (Cut the sentence. End on the last concrete fact, or state real plans if they exist.)
- **Aturan:** R-36.

## Higiene & Markdown

### Em Dash

- **Pola:** karakter em dash (`—`) yang dipakai sebagai sisipan atau penyambung: *"institutions — not the people — continue"*.
- **Mengapa terbaca sebagai AI:** ia salah satu penanda AI paling andal, dan inti melarangnya mentah-mentah.
- **Aturan:** R-02 melarang em dash dalam teks apa pun. Ganti setiap em dash, dengan urutan preferensi kasar: titik (mulai kalimat baru), koma (sisipan rapat), titik dua (perkenalkan penjelasan), tanda kurung (sisipan sungguhan), atau susun ulang kalimatnya. Juga tangkap em dash dengan spasi (` — `) dan tanda hubung ganda (` -- `) yang dipakai dengan cara yang sama.
- **Sebelum:**
  > The policy — announced without warning — affects thousands of workers.
- **Sesudah:**
  > The policy, announced without warning, affects thousands of workers.
- **Sebelum:**
  > You don't say "Netherlands, Europe" as an address — yet this mislabeling continues.
- **Sesudah:**
  > You don't say "Netherlands, Europe" as an address, yet this mislabeling continues.
- **Positif palsu:** banyak editor dan jurnalis memakai em dash dengan sengaja. Em dash saja bukan bukti AI. Ia berarti ketika ia duduk dalam kelompok bersama penanda lain (R-02 tetap melarangnya di output, tetapi jangan menulis ulang gaya disengaja pengguna tanpa menyatakannya).
- **Penggantian suara:** jika pengguna memberi contoh tulisan yang memakai em dash pada frekuensi tertentu, cocokkan frekuensi contoh itu alih-alih memotong semuanya (lihat kalibrasi suara).

### Penggunaan Huruf Tebal Berlebihan

- **Pola:** setiap istilah kunci ditebalkan secara mekanis: **"OKRs**, **KPIs**, **BMC**".
- **Mengapa terbaca sebagai AI:** penekanan di mana-mana berarti penekanan di mana-mana juga tidak ada. Halaman itu berteriak ke pembaca.
- **Sebelum:**
  > It blends **OKRs**, **KPIs**, and **visual strategy tools** for planning.
- **Sesudah:**
  > It blends OKRs, KPIs, and visual strategy tools for planning.
- **Aturan:** R-36.
- **Pengecualian:** label struktural di dalam aturan antislop itu sendiri (penanda **`**FORBIDDEN**`** / **`**REQUIRED**`** di `antislop.md`) adalah konvensi dokumentasi, bukan pola tebalkan-setiap-istilah di atas, dan dikecualikan.

### Tanda Kutip Berlebihan

- **Pola:** teks panjang yang penuh tanda kutip: mengutip kata yang tidak perlu dikutip, scare quotes di sekitar istilah biasa, dan kutip yang dipakai sebagai default untuk penekanan atau penyanggaan. Halaman itu terbaca dikutip alih-alih ditulis.
- **Mengapa terbaca sebagai AI:** model meraih tanda kutip sebagai cara default untuk menambah jarak, ironi, atau penekanan tanpa menuliskannya ke dalam kalimat. Kutip yang rapat adalah penanda mesin yang andal dalam teks yang lebih panjang.
- **Sebelum:**
  > The "solution" "streamlines" your "workflow" so you can "focus" on "what matters."
- **Sesudah:**
  > The solution streamlines your workflow so you can focus on what matters.
- **Aturan:** R-36.
- **Bukan larangan:** dialog, cerita pendek, sumber nyata yang dikutip, dan judul karya tetap memakai kutipnya. Penandanya adalah kutip yang melakukan kerja yang semestinya dilakukan kalimat. Satu scare quote yang dipakai sekali untuk alasan nyata itu baik; kelompok dari mereka tidak. Minimalkan, jangan cabut kutip yang membawa makna.

### Daftar dengan Judul Berbaris

- **Pola:** item daftar yang diawali judul ditebalkan lalu titik dua: "- **User Experience:** The UX has been improved".
- **Mengapa terbaca sebagai AI:** judulnya menyatakan ulang apa yang sudah dikatakan item. Ini kebiasaan format, bukan struktur.
- **Sebelum:**
  > - **User Experience:** The interface is easier to use.
  > - **Performance:** Load times are faster.
  > - **Security:** Data is encrypted.
- **Sesudah:**
  > The update improves the interface, speeds up load times, and encrypts data in transit.
- **Aturan:** R-36.
- **Pengecualian:** header `- **Tell:**` / `- **Why:**` / `- **Fix:**` yang menyusun setiap entri skill antislop adalah konvensi dokumentasi, bukan kebiasaan judul-menyatakan-ulang-item di atas, dan dikecualikan.

### Emoji di Judul

- **Pola:** emoji dekorasi yang mengepal judul atau poin: 🚀 Launch, 💡 Key insight, ✅ Next steps.
- **Mengapa terbaca sebagai AI:** emoji tidak membawa informasi apa pun. Ia menghias alih-alih berkomunikasi.
- **Sebelum:**
  > 🚀 **Launch Phase:** The product ships in Q3
  > 💡 **Key Insight:** Users prefer simple pricing
- **Sesudah:**
  > The product ships in Q3. User research showed a preference for simple pricing.
- **Aturan:** R-36.

### Frasa Pengisi

- **Pola:** "In order to" untuk "to", "Due to the fact that" untuk "because", "At this point in time" untuk "now", "It is important to note that" untuk tidak apa-apa.
- **Mengapa terbaca sebagai AI:** pengisi menggembungkan kalimat tanpa menambah makna. Ia bantalan yang ditambahkan model agar terdengar formal.
- **Sebelum:**
  > In order to achieve this goal, it is important to note that we need more data.
- **Sesudah:**
  > To reach this goal, we need more data.
- **Aturan:** R-36.

### Penyanggaan Berlebihan

- **Pola:** banyak kata kualifikasi ditumpuk pada satu klaim: "could potentially possibly", "may perhaps".
- **Mengapa terbaca sebagai AI:** penyanggaan di mana-mana membuat teks terdengar mengelak. Satu kualifikasi sudah cukup berfungsi.
- **Sebelum:**
  > This could potentially possibly be the reason the feature went unused.
- **Sesudah:**
  > This may be why the feature went unused.
- **Aturan:** R-36.

## Yang TIDAK untuk Ditandai

Penulis manusia yang bersih bisa menyentuh beberapa pola di atas tanpa keterlibatan AI apa pun. Sebelum mengedit, periksa kesehatan bahwa Anda tidak sedang membuang prosa yang sah. Ini **bukan** indikator yang andal dengan sendirinya:

- **Tata bahasa sempurna dan gaya konsisten.** Banyak penulis adalah profesional atau telah disunting. Kerapian tidak sama dengan AI.
- **Register santai dan formal yang bercampur.** Ini sering memberi sinyal orang sungguhan, bukan chatbot.
- **Prosa "hambar" atau "robotik".** Prosa AI memiliki penanda khusus. Kekeringan generik tanpa penanda itu hanyalah tulisan yang kering.
- **Kosakata formal.** AI memakai berlebihan kata-kata *tertentu* (lihat Kosakata AI yang Kosong), bukan semua kata menengah. Jangan meratakan kata yang presisi hanya karena terdengar cerdas.
- **Kata transisi umum secara terpisah.** Satu "however" atau "additionally" bukan penanda. Mereka berarti hanya ketika ditumpuk.
- **Kutip melengkung saja.** macOS, Word, dan kebanyakan CMS melengkungkan otomatis secara default. Kutip melengkung berarti hanya ketika ditumpuk dengan penanda lain.
- **Em dash saja.** Editor dan jurnalis memakainya. Em dash adalah bukti hanya di dalam kelompok.
- **Satu kalimat tegas pendek.** Manusia memakai kalimat terpenggal untuk menamatkan poin. Tandai drama staccato hanya ketika beberapa fragmen muncul berurutan.
- **Klaim tanpa sumber.** Sebagian besar web tanpa sumber. Tidak adanya sitasi tidak membuktikan apa pun.
- **Teks tangan kedua.** Jangan menulis ulang frasa di dalam kutipan, judul, nama diri, atau contoh di mana frasa itu sedang dibahas, bukan dipakai.

**Carilah kelompok, bukan penanda yang terisolasi.** Satu em dash tidak berarti apa-apa. Em dash ditambah aturan tiga ditambah "vibrant tapestry" ditambah kesimpulan generik adalah pengakuan. Ini cocok dengan panduan inti sendiri: Bagian 1 adalah pemindaian diagnostik, bukan daftar larangan.

## Tanda tulisan manusia (pertahankan ini)

Cenderung membiarkan prosa tetap apa adanya ketika Anda melihat hal-hal ini. Mereka adalah bukti orang sungguhan, dan pengeditan berlebihan menghancurkan apa yang membuat copy terdengar manusiawi:

- **Rincian yang spesifik, tidak biasa, dan sulit dikarang.** Alamat nyata. Kutipan yang aneh. LLM membulatkan hal yang spesifik; manusia menimbunnya.
- **Perasaan campur dan ketegangan yang tak terselesaikan.** "I think this is mostly good, but it bothers me." LLM default ke kesimpulan yang bersih.
- **Referensi yang terikat tanggal dan zaman.** Bahasa gaul, meme, atau lelucon dalam yang memetakan ke tahun dan subkultur tertentu.
- **Variasi panjang kalimat.** Tulisan nyata menyelang-selingkan pendek dan panjang. Tulisan AI cenderung ke irama sedang yang rata.
- **Sisipan dan koreksi diri yang tulus.** "(I keep wanting to say 'almost' here, but it really was certain.)"

## Kalibrasi suara (opsional)

Jika pengguna memberi contoh tulisan mereka sendiri, cocokkan sebelum menulis ulang:

1. Baca contohnya dulu. Catat panjang kalimatnya, kosakatanya, pembukaan paragrafnya, tanda bacanya, dan frasa yang berulang.
2. Cocokkan kebiasaan itu alih-alih sekadar menghapus pola AI. Jangan menaikkan tingkat kata santai atau meratakan keunikan yang disengaja.
3. Contoh itu mengalahkan aturan gaya skill ini. Jika contoh memakai em dash, pertahankan pada frekuensi kira-kira seperti contoh (R-02 tetap berlaku untuk copy apa pun yang tidak diizinkan pengguna; ketika suara pengguna sendiri memakainya, suara itu menang).

Tanpa contoh, gunakan default di atas. Mencocokkan penulis lebih baik daripada menggosok penandanya.

## Draf, audit, final

Jalankan putaran ini sebelum menyerahkan copy:

1. **Draf.** Tulis ulang teks dengan menerapkan pola di atas. Periksa bahwa ia terbaca alami dengan keras, memvariasikan panjang kalimat, lebih menyukai rincian spesifik dan konstruksi sederhana, dan mempertahankan register yang sesuai.
2. **Audit.** Ajukan dua pertanyaan dan jawab singkat: "Apa yang membuat ini terang-terangan hasil AI?" dan "Apakah ia menyatakan fakta, nama, angka, tanggal, atau sitasi yang tidak ada di sumber?" Fabrikasi adalah cacat bahkan ketika ia terdengar lebih manusiawi daripada versi asli yang samar.
3. **Final.** Revisi untuk menangani kedua jawaban. Periksa em dash dan en dash satu kali terakhir (R-02). Ada yang ketemu berarti drafnya belum selesai.

## Daftar Periksa Skill Copywriting

Jalankan ini bersama Delivery Gate inti ketika tugasnya adalah pekerjaan copy. Setiap baris di bawah harus benar:

- [ ] Tidak ada angka, testimoni, nama, tanggal, atau klaim yang dikarang; semua nyata atau placeholder yang diberi label (R-17, R-18, R-36, R-38)
- [ ] Kata populer kosong dari R-16 dan daftar Kosakata AI yang Kosong diganti dengan bahasa yang spesifik dan berdasarkan bukti
- [ ] Tidak ada em dash di output (R-02), kecuali suara contoh punya pengguna memakainya
- [ ] Tidak ada tanda kutip berlebihan: kutip hanya di tempat yang membawa makna (dialog, sitasi nyata, judul), bukan sebagai penekanan default (R-36)
- [ ] Tidak ada klausa penekanan huruf kapital semua: penekanan ditulis ke dalam kalimat, bukan diteriakan dengan huruf kapital (R-36)
- [ ] Setiap kalimat menyebut pelakunya: tanpa kalimat pasif tanpa pelaku, tanpa abstraksi yang diberi kata kerja manusiawi, di mana subjek nyata tersedia (R-02, R-16)
- [ ] CTA spesifik untuk aksinya, bukan template generik (R-15)
- [ ] Tidak ada penanda ritme AI: tanpa aturan tiga yang dipaksa, tanpa paralelisme negatif, tanpa drama staccato, tanpa rumus aforisme, tanpa rentang palsu (R-36)
- [ ] Suara hadir: copy punya suara nyata (contoh pengguna atau nada yang dipilih dengan jelas), bukan default steril (R-37)
- [ ] Dibaca keras: copy terdengar seperti ditulis orang, bukan seperti model yang menggenjot