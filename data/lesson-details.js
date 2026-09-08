const flow=(title,items)=>({type:"flow",title,items});
const compare=(title,items)=>({type:"compare",title,items});
const map=(title,items)=>({type:"map",title,items});
const lesson=(objective,mechanism,visual,pitfalls,examNote,question,options,answer,explanation,recap)=>({objective,mechanism,visual,pitfalls,examNote,quiz:{question,options,answer,explanation},recap});

export const lessonDetails={
  "1.1":lesson(
    "Menjelaskan perjalanan data melalui Input, Processing, Output, dan Storage serta membedakan fungsi setiap tahap.",
    ["Sistem menerima data mentah melalui input. CPU dan software lalu memprosesnya memakai instruksi serta data kerja di memory. Hasilnya disampaikan sebagai output dan dapat disimpan agar tersedia setelah perangkat dimatikan.","Keempat tahap tidak selalu berjalan sekali. Aplikasi sering membentuk loop: output dari satu proses disimpan, diambil kembali sebagai input, lalu diproses ulang."],
    flow("Alur IPOS",[["Input","Barcode dibaca scanner"],["Processing","Aplikasi mencari harga"],["Output","Harga tampil di layar"],["Storage","Transaksi disimpan"]]),
    ["Menganggap RAM sebagai long-term storage; RAM adalah ruang kerja sementara.","Menganggap output selalu visual; audio, sinyal network, dan file juga dapat menjadi output."],
    "Soal ujian sering berupa skenario. Tentukan fungsi perangkat dalam konteks alur, bukan hanya berdasarkan nama perangkat.",
    "Scanner membaca barcode, lalu monitor menampilkan harga. Peran scanner dan monitor secara berurutan adalah…",["Storage dan Processing","Input dan Output","Processing dan Input","Output dan Storage"],1,"Scanner memasukkan data barcode; monitor menyampaikan hasil pemrosesan kepada pengguna.",["Input memasukkan data; Processing mengubahnya.","Output menyampaikan hasil; Storage mempertahankan data.","Satu perangkat dapat memiliki peran berbeda sesuai konteks."]
  ),
  "1.2":lesson(
    "Mengonversi nilai sederhana dan memilih sistem bilangan yang sesuai untuk representasi data komputer.",
    ["Setiap sistem bilangan memakai basis. Nilai digit ditentukan oleh digit tersebut dikalikan pangkat basis sesuai posisinya. Binary berbasis 2, Octal 8, Decimal 10, dan Hexadecimal 16.","Hexadecimal memadatkan Binary: satu digit hexadecimal mewakili empat bit. Karena itu warna, memory address, dan network value sering ditulis dalam hexadecimal."],
    compare("Perbandingan sistem bilangan",[["Binary (base 2)","0–1 · logika digital"],["Octal (base 8)","0–7 · ringkasan 3 bit"],["Decimal (base 10)","0–9 · penggunaan manusia"],["Hexadecimal (base 16)","0–9, A–F · ringkasan 4 bit"]]),
    ["Membaca 10 binary sebagai decimal sepuluh; nilainya adalah decimal dua.","Lupa bahwa A–F pada hexadecimal mewakili decimal 10–15."],
    "Latih konversi kecil tanpa kalkulator dan kenali prefix seperti 0x untuk hexadecimal.",
    "Berapakah representasi hexadecimal dari decimal 15?",["E","F","10","1111"],1,"Digit hexadecimal F bernilai decimal 15; 10 hexadecimal baru bernilai decimal 16.",["Basis menentukan digit dan nilai posisi.","Empat bit setara dengan satu digit hexadecimal.","Selalu perhatikan basis sebelum membaca angka."]
  ),
  "1.3":lesson(
    "Membedakan satuan kapasitas, transfer rate, dan processing speed serta melakukan estimasi sederhana.",
    ["Bit adalah unit informasi terkecil, sedangkan byte umumnya terdiri dari delapan bit. Kapasitas storage lazim dinyatakan dalam byte; kecepatan network sering dinyatakan dalam bit per second.","Processing speed, transfer rate, dan kapasitas mengukur hal berbeda. Angka yang lebih besar tidak otomatis berarti seluruh sistem lebih cepat karena latency, media, dan bottleneck tetap berpengaruh."],
    compare("Satuan dan konteks",[["b · bit","Umum pada Mbps/Gbps"],["B · byte","Umum pada MB/GB/TB"],["Hz","Siklus per detik"],["bps","Data per detik"]]),
    ["Menyamakan Mbps dengan MB/s tanpa membagi delapan.","Menilai performa CPU hanya dari clock speed tanpa melihat core, arsitektur, dan workload."],
    "Perhatikan huruf besar-kecil: b dan B mewakili unit berbeda.",
    "Secara teoritis, koneksi 80 Mbps setara dengan kira-kira…",["8 MB/s","10 MB/s","80 MB/s","640 MB/s"],1,"Delapan bit membentuk satu byte, sehingga 80 Mbps ÷ 8 ≈ 10 MB/s sebelum overhead.",["Kapasitas, throughput, dan frequency tidak dapat dipertukarkan.","8 bit = 1 byte.","Kecepatan nyata biasanya lebih rendah dari nilai teoritis."]
  ),
  "1.4":lesson(
    "Menerapkan troubleshooting secara sistematis, aman, terdokumentasi, dan dapat diverifikasi.",
    ["Troubleshooting dimulai dengan mengumpulkan gejala dan perubahan terakhir, bukan langsung mengganti komponen. Setelah membuat theory of probable cause, uji satu dugaan dengan perubahan sekecil mungkin.","Sesudah solusi diterapkan, verifikasi fungsi penuh dan tindakan pencegahan. Dokumentasi membuat solusi dapat diulang dan membantu menemukan pola insiden."],
    flow("Metode troubleshooting",[["Identify","Kumpulkan gejala"],["Theory","Urutkan dugaan"],["Test","Uji satu variabel"],["Resolve","Terapkan solusi"],["Verify","Uji dan catat"]]),
    ["Mengubah beberapa hal sekaligus sehingga penyebab tidak dapat diketahui.","Melewatkan backup, izin, atau safety procedure sebelum melakukan perubahan."],
    "Jawaban terbaik biasanya mengikuti urutan metode dan memilih tindakan paling aman dengan dampak paling kecil.",
    "Setelah memastikan kabel longgar adalah penyebab gangguan monitor, langkah berikutnya adalah…",["Mengganti motherboard","Menerapkan solusi lalu menguji fungsi penuh","Menghapus driver display","Menutup tiket tanpa pengujian"],1,"Setelah penyebab dikonfirmasi, terapkan perbaikan, verifikasi fungsi, lalu dokumentasikan hasilnya.",["Mulai dari bukti, bukan tebakan.","Uji satu perubahan pada satu waktu.","Verifikasi dan dokumentasi adalah bagian dari solusi."]
  ),

  "2.1":lesson(
    "Memilih kategori perangkat berdasarkan workload, mobilitas, jumlah pengguna, dan kebutuhan pengelolaan.",
    ["Pemilihan perangkat dimulai dari pekerjaan yang harus dilakukan. Laptop mengutamakan mobilitas, workstation mengutamakan performa khusus, server menyediakan layanan bersama, sedangkan IoT menjalankan fungsi sempit dengan sumber daya terbatas.","Form factor tidak selalu menentukan kemampuan. Bandingkan CPU, RAM, storage, port, reliability, dan manageability terhadap kebutuhan nyata."],
    compare("Perangkat dan penggunaan utama",[["Mobile device","Mobilitas dan battery life"],["Desktop/workstation","Performa lokal dan ekspansi"],["Server","Layanan bagi banyak client"],["IoT/embedded","Tugas khusus dan otomatisasi"]]),
    ["Membeli spesifikasi tertinggi tanpa mengaitkannya dengan workload.","Mengabaikan port, upgrade path, battery life, dan dukungan pengelolaan."],
    "Pada soal skenario, cari kebutuhan pembeda: mobile, shared service, specialized workload, atau embedded control.",
    "Perangkat yang paling sesuai untuk menyediakan file bersama bagi banyak pengguna adalah…",["Tablet","Server","Smartwatch","Thin client tanpa layanan pusat"],1,"Server dirancang menyediakan resource dan service secara terpusat kepada banyak client.",["Kebutuhan menentukan kategori perangkat.","Server melayani banyak client; workstation menangani workload lokal berat.","Nilai perangkat sebagai satu sistem, bukan hanya dari CPU."]
  ),
  "2.2":lesson(
    "Menjelaskan interaksi motherboard, CPU, RAM, storage, power, dan cooling saat komputer bekerja.",
    ["Saat startup, power supply memberi daya dan firmware menginisialisasi hardware. Sistem operasi dibaca dari storage ke RAM, lalu CPU mengeksekusi instruksi dan bertukar data melalui motherboard.","Cooling menjaga komponen dalam rentang suhu aman. Jika satu komponen menjadi bottleneck—misalnya RAM tidak cukup—seluruh pengalaman dapat melambat walaupun CPU cepat."],
    map("Hubungan komponen",[["Power + cooling","Menjaga sistem menyala dan stabil"],["Motherboard","Jalur komunikasi dan koneksi"],["CPU + RAM","Eksekusi dan ruang kerja aktif"],["Storage + I/O","Persistensi dan komunikasi eksternal"]]),
    ["Menganggap storage penuh sama dengan RAM penuh.","Memasang komponen tanpa memeriksa compatibility, power requirement, atau thermal limit."],
    "Hubungkan gejala dengan fungsi komponen: no power, no boot, overheating, slow multitasking, atau data unavailable.",
    "Aplikasi melambat saat banyak tab dibuka dan storage terus aktif untuk paging. Upgrade paling langsung adalah…",["RAM","Monitor","Keyboard","Speaker"],0,"RAM tambahan mengurangi kebutuhan memindahkan data kerja ke storage yang jauh lebih lambat.",["CPU mengeksekusi; RAM menampung data kerja.","Storage mempertahankan data setelah power off.","Power, cooling, dan compatibility menentukan stabilitas."]
  ),
  "2.3":lesson(
    "Membedakan memory dan storage berdasarkan volatility, lokasi, media, performa, dan pola akses.",
    ["Volatile memory kehilangan isi ketika daya hilang; non-volatile storage mempertahankannya. Local storage terpasang atau langsung terhubung, network storage diakses melalui LAN, dan cloud storage melalui layanan remote.","Pilihan storage adalah tradeoff antara speed, capacity, portability, availability, security, dan cost. Tidak ada satu opsi terbaik untuk semua data."],
    compare("Pilihan penyimpanan",[["RAM","Volatile · sangat cepat · ruang kerja"],["SSD/HDD","Non-volatile · local · data utama"],["NAS","Shared storage melalui network"],["Cloud storage","Remote · sinkronisasi dan akses luas"]]),
    ["Menyebut semua penyimpanan sebagai memory tanpa menjelaskan volatility.","Menganggap cloud sync otomatis setara dengan backup yang versioned dan teruji."],
    "Bedakan media, interface, dan protocol: NVMe adalah protocol; M.2 adalah form factor; SSD adalah jenis perangkat.",
    "Pernyataan yang tepat tentang NVMe adalah…",["Jenis connector display","Protocol storage berperforma tinggi","Format file backup","Layanan cloud"],1,"NVMe adalah protocol yang memungkinkan solid-state storage berkomunikasi secara efisien, biasanya melalui PCIe.",["Memory dan storage memiliki fungsi berbeda.","Local, network, dan cloud menjelaskan lokasi/akses.","Nilai storage dari beberapa tradeoff, bukan kapasitas saja."]
  ),
  "2.4":lesson(
    "Memasang peripheral dengan urutan aman dan memverifikasi hardware, driver, configuration, serta fungsi.",
    ["Pemasangan dimulai dengan memeriksa compatibility dan instruksi vendor. Setelah koneksi fisik dan power benar, operating system mendeteksi perangkat, memuat driver, lalu pengguna mengatur preference atau network setting.","Pengujian harus membuktikan fungsi yang dibutuhkan, bukan sekadar status connected. Untuk network printer, misalnya, uji IP reachability, queue, driver, dan test page."],
    flow("Alur instalasi peripheral",[["Check","Compatibility dan safety"],["Connect","Port, cable, power"],["Install","Driver atau software"],["Configure","Setting dan permission"],["Test","Fungsi nyata"]]),
    ["Mengunduh driver dari sumber tidak tepercaya.","Mengabaikan default device, permission, atau network address setelah hardware terdeteksi."],
    "Pilih langkah yang memisahkan masalah physical connection, driver, configuration, dan application.",
    "Printer network terdeteksi tetapi menghasilkan karakter acak. Penyebab paling mungkin adalah…",["Driver tidak sesuai","Monitor rusak","DNS selalu gagal","Baterai mouse lemah"],0,"Driver menerjemahkan perintah software ke bahasa perangkat; driver yang salah dapat menghasilkan output tidak benar.",["Periksa compatibility sebelum memasang.","Connected belum berarti configured.","Uji fungsi akhir dan dokumentasikan setting."]
  ),
  "2.5":lesson(
    "Membedakan connector, interface standard, dan protocol agar dapat memilih kabel atau adapter yang tepat.",
    ["Bentuk connector hanya menjelaskan sambungan fisik. Standard menentukan capability seperti data rate, power, audio, atau video; protocol mengatur cara data dipertukarkan.","Connector yang sama dapat membawa kemampuan berbeda. USB-C, misalnya, tidak otomatis mendukung kecepatan, charging, atau display mode yang sama pada semua perangkat."],
    compare("Tiga lapis konektivitas",[["Connector","Bentuk fisik: USB-C, RJ-45, HDMI"],["Standard/interface","Kemampuan: USB, Ethernet, DisplayPort"],["Protocol","Aturan komunikasi"],["Adapter","Mengubah koneksi; tidak selalu menambah capability"]]),
    ["Menganggap semua port dengan bentuk yang sama memiliki fitur identik.","Memilih kabel berdasarkan bentuk saja tanpa memeriksa version, bandwidth, dan direction."],
    "Baca kebutuhan output dan capability kedua ujung koneksi sebelum memilih kabel atau adapter.",
    "Laptop memiliki USB-C, tetapi monitor tidak menerima video melalui kabel tersebut. Pemeriksaan pertama adalah…",["Apakah port mendukung video alternate mode","Mengganti wallpaper","Menghapus semua file","Menambah RAM monitor"],0,"Bentuk USB-C tidak menjamin dukungan video; capability port dan kabel harus diverifikasi.",["Connector adalah bentuk; standard dan protocol menentukan fungsi.","Capability harus didukung kedua perangkat dan kabel.","Adapter tidak dapat menciptakan fitur yang tidak tersedia."]
  ),
  "2.6":lesson(
    "Menjelaskan virtualization dan membedakan IaaS, PaaS, SaaS serta public, private, hybrid, dan community cloud.",
    ["Hypervisor membagi resource physical host menjadi beberapa virtual machine yang terisolasi. Setiap VM memiliki virtual hardware dan operating system sendiri.","Pada cloud, service model menentukan siapa yang mengelola tiap lapisan. IaaS memberi kontrol lebih besar; PaaS mengelola platform; SaaS menyajikan aplikasi jadi. Deployment model menjelaskan kepemilikan dan lokasi lingkungan."],
    map("Pembagian tanggung jawab",[["IaaS","Provider: hardware · User: OS dan app"],["PaaS","Provider: hardware, OS, runtime · User: app/data"],["SaaS","Provider: hampir seluruh stack"],["On-premises","Organisasi mengelola seluruh stack"]]),
    ["Menyamakan virtualization dengan cloud; cloud dapat memakai virtualization, tetapi konsepnya tidak identik.","Memilih service model tanpa mempertimbangkan control, compliance, skill, dan cost."],
    "Soal sering menguji responsibility boundary dan perbedaan service model versus deployment model.",
    "Layanan email berbasis web yang langsung digunakan tanpa mengelola server termasuk…",["IaaS","PaaS","SaaS","Private cloud selalu"],2,"Pengguna SaaS memakai aplikasi jadi; provider mengelola infrastructure dan application stack.",["Hypervisor mengisolasi VM pada physical host.","IaaS, PaaS, SaaS membagi tanggung jawab berbeda.","Public/private/hybrid/community menjelaskan deployment."]
  ),
  "2.7":lesson(
    "Membandingkan layanan internet melalui bandwidth, latency, reliability, coverage, dan cost.",
    ["Bandwidth adalah kapasitas pemindahan data, sedangkan latency adalah waktu tempuh. Jitter adalah variasi latency dan packet loss adalah data yang tidak sampai. Video call dapat terganggu walaupun bandwidth tinggi jika latency atau jitter buruk.","Media akses memengaruhi karakter layanan: fiber biasanya berkapasitas tinggi, cable berbagi segmen, DSL memakai jalur telepon, cellular bergantung coverage, dan satellite memiliki jarak tempuh panjang."],
    compare("Karakter umum layanan",[["Fiber","Bandwidth tinggi · latency rendah"],["Cable/DSL","Memakai infrastruktur kabel lokal"],["Cellular/fixed wireless","Cepat dipasang · dipengaruhi signal"],["Satellite","Coverage luas · latency cenderung tinggi"]]),
    ["Menyamakan bandwidth dengan responsiveness.","Mengabaikan data cap, contention, coverage, weather, dan upload speed."],
    "Cocokkan layanan dengan lokasi dan workload; real-time traffic lebih sensitif terhadap latency dan jitter.",
    "Koneksi satellite berbandwidth cukup tetapi video call terasa terlambat. Faktor utama adalah…",["Capacity storage","Latency","Ukuran monitor","File system"],1,"Jarak perjalanan signal satellite menambah latency sehingga percakapan real-time terasa tertunda.",["Bandwidth dan latency mengukur hal berbeda.","Jitter penting untuk suara/video real-time.","Pilih layanan berdasarkan kebutuhan dan kondisi lokasi."]
  ),
  "2.8":lesson(
    "Menelusuri perjalanan traffic melalui identifier, port/service, switch, router, DNS, dan addressing.",
    ["Dalam LAN, switch meneruskan frame antarperangkat. Router menghubungkan network berbeda dan menjadi default gateway. DNS menerjemahkan hostname menjadi IP address, sedangkan port membantu operating system mengarahkan traffic ke service yang benar.","Model client-server menjelaskan requester dan penyedia service; peer-to-peer memungkinkan perangkat berbagi langsung tanpa server khusus."],
    flow("Membuka layanan web",[["Client","Meminta nama situs"],["DNS","Mengembalikan IP"],["Router","Meneruskan ke network lain"],["Server","Menjawab pada service/port"]]),
    ["Menganggap DNS mengirim seluruh traffic; DNS terutama melakukan name resolution.","Menyamakan switch dan router tanpa melihat apakah traffic tetap dalam network atau berpindah network."],
    "Kenali fungsi perangkat dan urutan request. Identifier fisik, logical address, dan service port memiliki peran berbeda.",
    "Perangkat yang meneruskan traffic dari LAN menuju network lain adalah…",["Switch saja","Router","Keyboard","Access point tanpa routing"],1,"Router menghubungkan network yang berbeda dan memilih jalur bagi packet.",["DNS memetakan nama ke IP.","Switch bekerja terutama di LAN; router menghubungkan network.","Port mengidentifikasi service pada host."]
  ),
  "2.9":lesson(
    "Memilih band dan standard Wi-Fi serta mengidentifikasi interference, attenuation, dan masalah coverage.",
    ["Access point menghubungkan wireless client ke network. Frequency band memengaruhi jangkauan, penetrasi, kapasitas, dan interference. Channel yang tumpang tindih dapat menurunkan kualitas koneksi.","Attenuation terjadi saat signal melemah karena jarak dan penghalang. Interference berasal dari perangkat lain atau network berdekatan; solusinya dapat berupa repositioning, channel planning, atau band yang lebih sesuai."],
    compare("Karakter band Wi-Fi",[["2.4 GHz","Jangkauan lebih luas · lebih padat"],["5 GHz","Kapasitas lebih tinggi · jangkauan lebih pendek"],["6 GHz","Channel luas · perlu perangkat kompatibel"],["Channel","Ruang frekuensi yang perlu direncanakan"]]),
    ["Menyembunyikan SSID dianggap sebagai pengamanan utama.","Menambah transmit power tanpa mempertimbangkan interference dan kemampuan client."],
    "Bedakan masalah authentication, interference, weak signal, dan Internet uplink berdasarkan gejalanya.",
    "Band yang umumnya lebih mampu menembus dinding dan menjangkau lebih jauh adalah…",["2.4 GHz","5 GHz","6 GHz","Infrared"],0,"Frekuensi 2.4 GHz umumnya memiliki jangkauan dan penetrasi penghalang lebih baik, walau lebih rentan padat/interference.",["Band adalah tradeoff jangkauan dan kapasitas.","Channel planning mengurangi interference.","Signal kuat belum menjamin Internet atau authentication berhasil."]
  ),

  "3.1":lesson(
    "Menjelaskan bagaimana user interface, application, process, service, driver, filesystem, dan hardware saling berhubungan.",
    ["Application berjalan sebagai satu atau beberapa process. Operating system menjadwalkan process, memberi akses memory dan file, serta memakai driver untuk berkomunikasi dengan hardware.","Service dapat berjalan di background tanpa jendela aktif. Filesystem mengatur nama, lokasi, metadata, dan permission data pada storage."],
    map("Lapisan interaksi",[["User interface","Menerima tindakan pengguna"],["Application/process","Menjalankan fungsi"],["OS service + driver","Mengelola resource dan hardware"],["Filesystem + hardware","Menyimpan serta melakukan I/O"]]),
    ["Menghentikan service penting tanpa memahami dependency.","Mengira application, process, dan file executable adalah hal yang sama."],
    "Gunakan gejala untuk memilih lapisan: file path, process hang, service stopped, atau driver error.",
    "Komponen OS yang menerjemahkan permintaan sistem agar perangkat hardware dapat bekerja adalah…",["Driver","Folder","Wallpaper","Clipboard"],0,"Driver menyediakan interface antara operating system dan hardware tertentu.",["Process adalah instance program yang berjalan.","Service bekerja di background.","Driver menghubungkan OS dan hardware; filesystem mengatur data."]
  ),
  "3.2":lesson(
    "Menjelaskan fungsi operating system dalam mengelola resource, file, security, device, user, dan application.",
    ["Operating system menjadi perantara antara application dan hardware. Kernel mengelola CPU time, memory, device access, serta system call; komponen lain menyediakan interface dan layanan pengguna.","Account, permission, update, logging, dan networking memberi lingkungan yang konsisten sekaligus terkontrol. Tanpa OS, setiap application harus mengelola hardware sendiri."],
    compare("Fungsi utama OS",[["Resource management","CPU, RAM, storage, device"],["Security","Account, authentication, permission"],["Platform","API dan runtime bagi application"],["Interface","GUI atau command line"]]),
    ["Memberi semua user administrative privilege demi kemudahan.","Menunda update tanpa penilaian risiko atau rencana maintenance."],
    "Kenali fungsi OS dari hasil yang diberikan, bukan hanya nama menu atau platform tertentu.",
    "Membagi CPU time agar beberapa application dapat berjalan merupakan fungsi…",["Resource management oleh OS","Monitor","Cloud storage","Markup language"],0,"Scheduler pada operating system membagi waktu pemrosesan antartugas.",["OS mengabstraksi hardware.","OS mengelola resource dan security.","Application menggunakan service dan API yang disediakan OS."]
  ),
  "3.3":lesson(
    "Memilih jenis software berdasarkan tujuan, model penggunaan, compatibility, licensing, dan security.",
    ["Productivity software membuat dokumen, spreadsheet, atau presentasi. Collaboration software mendukung komunikasi dan kerja bersama; remote support memberi akses atau kendali jarak jauh.","Pemilihan software harus menilai kebutuhan data, jumlah pengguna, integration, platform support, licensing, update, dan sensitivity informasi."],
    compare("Software menurut tugas",[["Productivity","Membuat dan mengolah konten"],["Collaboration","Berkomunikasi dan bekerja bersama"],["Browser","Mengakses web application"],["Remote support","Melihat atau mengendalikan perangkat jauh"]]),
    ["Menggunakan spreadsheet sebagai database multi-user tanpa kontrol concurrency.","Memasang software bajakan atau extension tanpa menilai sumber dan permission."],
    "Soal skenario biasanya meminta kategori paling sesuai, bukan merek produk.",
    "Untuk menyimpan relasi pelanggan dan transaksi dengan query multi-user, pilihan terbaik adalah…",["Text editor","Database system","Image editor","Media player"],1,"Database system dirancang untuk data terstruktur, relation, query, dan akses terkontrol banyak pengguna.",["Pilih software berdasarkan pekerjaan dan data.","Pertimbangkan compatibility, licensing, dan security.","Kategori software dapat tumpang tindih, tetapi fungsi utama tetap pembeda."]
  ),
  "3.4":lesson(
    "Mengonfigurasi browser dengan memahami cache, cookie, privacy, password, extension, permission, dan accessibility.",
    ["Browser menerjemahkan web content dan menyimpan sebagian resource di cache agar pemuatan berikutnya lebih cepat. Cookie menyimpan state seperti session atau preference; keduanya berbeda fungsi.","Extension dan site permission memperluas kemampuan sekaligus menambah risiko. Private browsing mengurangi jejak lokal tertentu, tetapi tidak membuat aktivitas anonim bagi network atau website."],
    flow("Siklus request browser",[["Request","Browser meminta resource"],["Response","Server mengirim content"],["Render","Browser menampilkan halaman"],["State","Cache/cookie menyimpan data tertentu"]]),
    ["Menghapus password tersimpan saat hanya cache yang bermasalah.","Menganggap private mode menyembunyikan aktivitas dari ISP atau administrator network."],
    "Pahami dampak setiap reset: cache, cookie, history, password, permission, dan extension tidak identik.",
    "Situs menampilkan data session lama setelah aplikasi diperbarui. Tindakan awal yang paling relevan adalah…",["Membersihkan cache/cookie situs terkait","Mengganti monitor","Menambah CPU core","Memformat semua storage"],0,"Cache atau cookie lama dapat mempertahankan resource dan state yang tidak lagi sesuai; bersihkan secara terarah.",["Cache mempercepat resource; cookie menyimpan state.","Extension dan permission perlu prinsip least privilege.","Private browsing tidak sama dengan anonymity."]
  ),
  "3.5":lesson(
    "Menggunakan AI secara bertanggung jawab dengan memahami input, model, output, verification, privacy, dan bias.",
    ["AI model menghasilkan output berdasarkan pola pada data dan instruksi, bukan pemahaman manusia yang sempurna. Generative AI membuat content baru; prediction memperkirakan hasil; suggestion memberi rekomendasi.","Output perlu diverifikasi terhadap sumber tepercaya, terutama untuk keputusan penting. Jangan memasukkan data rahasia tanpa mengetahui policy, retention, dan tujuan pemrosesan layanan."],
    flow("Penggunaan AI yang aman",[["Define","Tetapkan tujuan"],["Prompt","Berikan konteks seperlunya"],["Review","Periksa fakta dan bias"],["Decide","Manusia bertanggung jawab"]]),
    ["Menganggap output yang terdengar yakin pasti benar.","Memasukkan credential, personal data, atau confidential document tanpa izin."],
    "Kenali hallucination, bias, privacy risk, dan kebutuhan human oversight dalam skenario.",
    "AI memberikan konfigurasi network yang tampak meyakinkan. Langkah terbaik sebelum menerapkannya adalah…",["Langsung menjalankan sebagai administrator","Memverifikasi dengan dokumentasi dan menguji aman","Membagikan credential agar jawabannya lengkap","Mengabaikan seluruh security policy"],1,"Output AI dapat salah; verifikasi dan controlled testing tetap diperlukan.",["AI output bersifat probabilistic dan dapat salah.","Lindungi data sensitif.","Human verification dan accountability tidak boleh dilepas."]
  ),

  "4.1":lesson(
    "Membedakan compiled, interpreted, markup, query, dan assembly language berdasarkan tujuan dan cara eksekusi.",
    ["Compiled code diterjemahkan menjadi executable sebelum dijalankan, sedangkan interpreted code dieksekusi melalui interpreter/runtime. Implementasi modern dapat menggabungkan keduanya.","Markup language mendeskripsikan struktur content, query language meminta atau memanipulasi data, dan assembly merepresentasikan instruksi tingkat rendah."],
    compare("Kategori bahasa",[["Compiled","Diterjemahkan sebelum execution"],["Interpreted","Dijalankan melalui interpreter/runtime"],["Markup","Mendeskripsikan struktur"],["Query","Berinteraksi dengan data"],["Assembly","Instruksi dekat machine code"]]),
    ["Menganggap HTML sebagai programming language umum.","Menganggap compiled selalu cepat dan interpreted selalu lambat tanpa mempertimbangkan runtime."],
    "Pilih kategori berdasarkan fungsi potongan kode: control logic, structure, data query, atau low-level instruction.",
    "HTML terutama termasuk kategori…",["Markup language","Assembly language","Database engine","Operating system"],0,"HTML menandai struktur dan makna content; ia bukan bahasa pemrograman general-purpose.",["Compilation dan interpretation menjelaskan cara menjalankan kode.","Markup mendeskripsikan struktur; query berinteraksi dengan data.","Kategori dapat memiliki implementasi hybrid."]
  ),
  "4.2":lesson(
    "Memilih data type yang tepat dan menjelaskan dampaknya pada validasi, operasi, memory, serta hasil program.",
    ["Data type menentukan nilai yang dapat disimpan dan operasi yang masuk akal. Integer cocok untuk bilangan bulat, float untuk nilai pecahan, boolean untuk kondisi, char untuk satu karakter, dan string untuk rangkaian karakter.","Nilai yang terlihat numerik belum tentu harus menjadi angka. Nomor telepon atau postal code lebih aman sebagai string karena tidak dihitung dan dapat memiliki leading zero."],
    compare("Data type dan contoh",[["Integer","Jumlah item: 12"],["Float","Suhu: 36.5"],["Boolean","isActive: true"],["Char/String","'A' / '00123'"]]),
    ["Menyimpan uang sebagai float tanpa memahami rounding.","Menyimpan identifier numerik sebagai integer lalu kehilangan leading zero."],
    "Perhatikan operasi yang dibutuhkan, bukan hanya bentuk nilai yang terlihat.",
    "Data type paling tepat untuk nomor telepon '08123456789' adalah…",["Boolean","String","Float","Char tunggal"],1,"Nomor telepon adalah identifier, tidak dijumlahkan, dan dapat diawali nol sehingga tepat disimpan sebagai string.",["Type membatasi nilai dan operasi.","Identifier sering lebih tepat sebagai string.","Conversion dan validation mencegah error."]
  ),
  "4.3":lesson(
    "Menjelaskan hubungan identifier, variable, constant, array, function, dan object dalam program sederhana.",
    ["Identifier adalah nama bagi elemen program. Variable menyimpan nilai yang dapat berubah; constant mempertahankan nilai; array mengelompokkan banyak nilai berurutan.","Function membungkus perilaku yang dapat digunakan ulang. Object menggabungkan state berupa property dan behavior berupa method untuk memodelkan entitas."],
    map("Bangunan program",[["Identifier","Nama yang dapat dirujuk"],["Variable/constant","Menyimpan state"],["Array","Koleksi nilai"],["Function/object","Perilaku dan model"]]),
    ["Memakai nama ambigu seperti x untuk semua konteks.","Mengubah global variable dari banyak tempat sehingga alur sulit diprediksi."],
    "Baca pseudocode dengan melacak nilai variable, urutan function call, dan perubahan state.",
    "Dalam object `Printer`, function `printPage()` yang dimiliki object disebut…",["Method","Array","Constant","Comment"],0,"Function yang menjadi perilaku suatu object lazim disebut method.",["Identifier memberi nama; variable menyimpan nilai.","Array menyimpan koleksi.","Object menyatukan property dan method."]
  ),
  "4.4":lesson(
    "Menyusun logic dengan sequence, branching, looping, pseudocode, flowchart, documentation, dan testing.",
    ["Algorithm memecah masalah menjadi langkah terurut. Branch memilih jalur berdasarkan kondisi; loop mengulang langkah sampai kondisi berubah atau koleksi selesai.","Pseudocode dan flowchart membantu memeriksa logic sebelum terikat syntax. Test case perlu mencakup jalur normal, boundary, input tidak valid, dan kondisi gagal."],
    flow("Dari masalah ke program",[["Requirement","Tentukan input/output"],["Design","Pseudocode/flowchart"],["Build","Branch dan loop"],["Test","Normal, edge, error"],["Document","Catat keputusan"]]),
    ["Membuat loop tanpa kondisi berhenti.","Hanya menguji happy path dan mengabaikan boundary atau invalid input."],
    "Trace nilai langkah demi langkah; soal sering meminta output atau menemukan logic error.",
    "Loop terus berjalan karena kondisi berhenti tidak pernah berubah. Ini disebut…",["Infinite loop","Compilation success","Data normalization","Encryption"],0,"Infinite loop terjadi ketika exit condition tidak pernah terpenuhi atau tidak pernah diperbarui.",["Sequence, branch, dan loop adalah pola logic inti.","Pseudocode menjelaskan logic tanpa syntax khusus.","Testing harus mencakup edge dan error case."]
  ),

  "5.1":lesson(
    "Menjelaskan siklus data dari pengumpulan hingga keputusan serta menilai quality, privacy, dan nilai bisnisnya.",
    ["Data mentah baru berguna setelah divalidasi, diberi konteks, dianalisis, dan dikomunikasikan. Accuracy, completeness, consistency, timeliness, dan relevance menentukan kualitas hasil.","Menggabungkan sumber dapat menghasilkan insight, tetapi juga meningkatkan privacy dan security risk. Governance menentukan ownership, access, retention, dan penggunaan yang diizinkan."],
    flow("Data menjadi keputusan",[["Collect","Ambil data relevan"],["Validate","Periksa kualitas"],["Analyze","Cari pola dan hubungan"],["Report","Sampaikan konteks"],["Decide","Ambil tindakan"]]),
    ["Mengambil keputusan dari data yang lengkap secara jumlah tetapi tidak akurat.","Mengumpulkan data sebanyak mungkin tanpa tujuan, consent, atau retention rule."],
    "Bedakan data, information, insight, dan decision; kualitas input membatasi kualitas output.",
    "Laporan penjualan menggunakan data ganda sehingga total terlalu tinggi. Dimensi kualitas yang terutama gagal adalah…",["Uniqueness/consistency","Encryption","Bandwidth","Compilation"],0,"Record duplikat merusak konsistensi dan keunikan sehingga analisis menghasilkan total keliru.",["Data membutuhkan konteks agar menjadi information.","Quality menentukan keandalan keputusan.","Governance mengatur penggunaan dan perlindungan data."]
  ),
  "5.2":lesson(
    "Menjelaskan bagaimana database membuat, menyimpan, mengubah, mencari, dan melaporkan data secara persisten.",
    ["Application mengirim query ke database management system (DBMS). DBMS memeriksa syntax dan permission, menentukan cara akses data, melakukan operasi, lalu mengembalikan result.","Database mendukung validation, concurrency, security, backup, dan persistence yang sulit dijaga pada kumpulan file biasa ketika skala dan jumlah pengguna meningkat."],
    flow("Alur query",[["Application","Mengirim query"],["DBMS","Validasi dan rencanakan"],["Storage","Baca/ubah data"],["Result","Kembalikan hasil"]]),
    ["Memberi application account permission lebih luas dari yang diperlukan.","Menganggap database otomatis benar walau input dan constraint buruk."],
    "Kenali operasi Create, Read, Update, Delete (CRUD) dan tujuan query/report.",
    "Keunggulan database dibanding flat file untuk banyak pengguna adalah…",["Tidak membutuhkan security","Concurrency dan query terkelola","Selalu lebih kecil","Tidak perlu backup"],1,"DBMS menyediakan kontrol akses, concurrency, struktur, dan query yang lebih terkelola.",["DBMS menjadi perantara application dan data.","CRUD mewakili operasi dasar.","Persistence tidak menghapus kebutuhan backup dan validation."]
  ),
  "5.3":lesson(
    "Membedakan relational, key/value, document, dan struktur data lain berdasarkan relation dan access pattern.",
    ["Relational database menyimpan data dalam table dengan row dan column. Primary key mengidentifikasi row secara unik; foreign key menghubungkan row ke table lain.","Key/value store mengoptimalkan akses melalui key, sedangkan document database menyimpan record fleksibel seperti JSON. Pilihan model mengikuti bentuk data, query, consistency, dan scale."],
    compare("Model database",[["Relational","Table, schema, relation, SQL"],["Key/value","Key unik menuju value"],["Document","Dokumen fleksibel dan nested"],["Flat file","Sederhana; kontrol terbatas"]]),
    ["Membuat table tanpa primary key yang stabil.","Menduplikasi data relasional di banyak tempat hingga update tidak konsisten."],
    "Kenali fungsi key dan hubungan one-to-one, one-to-many, serta many-to-many secara konseptual.",
    "Column pada table Orders yang menunjuk CustomerID di table Customers adalah…",["Foreign key","Boolean","Compiler","Backup set"],0,"Foreign key mereferensikan key pada table lain untuk membentuk relation.",["Primary key mengidentifikasi row.","Foreign key membentuk relation.","Model dipilih berdasarkan struktur dan pola akses."]
  ),
  "5.4":lesson(
    "Merancang backup berdasarkan data, frekuensi perubahan, lokasi, recovery objective, dan pengujian restore.",
    ["Backup adalah salinan yang dapat dipulihkan, bukan sekadar memindahkan file. Full backup menyalin seluruh pilihan data; incremental menyalin perubahan sejak backup terakhir; differential sejak full backup terakhir.","Aturan 3-2-1 menyarankan tiga salinan, dua jenis media, dan satu salinan offsite. Nilai backup dibuktikan melalui restore test serta kecocokan dengan RPO dan RTO."],
    flow("Siklus backup yang dapat dipercaya",[["Select","Tentukan data/sistem"],["Copy","Gunakan jadwal dan version"],["Separate","Simpan offsite/offline"],["Verify","Cek integritas"],["Restore","Uji pemulihan"]]),
    ["Menganggap cloud sync sebagai satu-satunya backup.","Tidak pernah menguji restore sehingga kerusakan baru diketahui saat insiden."],
    "Bedakan backup type, backup location, RPO (toleransi kehilangan data), dan RTO (waktu pemulihan).",
    "Praktik 3-2-1 berarti…",["3 password, 2 user, 1 server","3 salinan, 2 media, 1 offsite","3 full backup setiap jam","3 cloud provider wajib"],1,"Aturan 3-2-1 mengurangi risiko satu kegagalan menghancurkan seluruh salinan.",["Backup harus dapat direstore.","Pisahkan salinan dari sumber utama.","RPO dan RTO menghubungkan backup dengan kebutuhan bisnis."]
  ),

  "6.1":lesson(
    "Menghubungkan Confidentiality, Integrity, Availability, privacy, AAA, dan non-repudiation pada kontrol keamanan.",
    ["CIA triad menjelaskan tujuan perlindungan informasi: akses hanya bagi pihak berwenang, data tetap benar, dan service tersedia saat diperlukan.","AAA memetakan proses akses: authentication membuktikan identitas, authorization menentukan izin, dan accounting mencatat aktivitas. Non-repudiation memberi bukti kuat bahwa tindakan tidak mudah disangkal."],
    map("Tujuan dan kontrol",[["Confidentiality","Encryption dan access control"],["Integrity","Hash, signature, validation"],["Availability","Redundancy dan recovery"],["AAA","Identity, permission, audit trail"]]),
    ["Menyamakan authentication dengan authorization.","Mengoptimalkan satu sisi CIA sambil merusak availability atau usability tanpa penilaian risiko."],
    "Pada skenario, tentukan objective yang terdampak lalu kontrol yang paling relevan.",
    "Pengguna berhasil login tetapi tidak boleh membuka folder payroll. Kontrol yang menentukan izin tersebut adalah…",["Authentication","Authorization","Availability","Compression"],1,"Authentication memastikan siapa pengguna; authorization menentukan resource dan tindakan yang diizinkan.",["CIA adalah tujuan keamanan inti.","AAA mengelola akses dan audit.","Privacy berfokus pada pemrosesan personal data yang tepat."]
  ),
  "6.2":lesson(
    "Menggabungkan awareness, anti-malware, firewall, patching, safe browsing, dan least privilege sebagai defense in depth.",
    ["Tidak ada satu kontrol yang menghentikan semua ancaman. Patching mengurangi vulnerability, firewall menyaring traffic, anti-malware mendeteksi perilaku atau file berbahaya, dan awareness membantu pengguna mengenali social engineering.","Kontrol preventive mengurangi peluang insiden, detective menemukan kejadian, dan corrective/recovery memulihkan operasi. Layering mencegah satu kegagalan menjadi compromise penuh."],
    map("Defense in depth",[["Prevent","Patch, least privilege, filtering"],["Detect","Alert, scan, log"],["Respond","Isolate, remove, reset"],["Recover","Restore dan lessons learned"]]),
    ["Menonaktifkan update atau anti-malware karena satu false positive tanpa mitigasi.","Mengandalkan awareness saja terhadap ancaman teknis."],
    "Pilih kombinasi kontrol dan tindakan pertama yang membatasi dampak, misalnya isolate perangkat terinfeksi.",
    "Pengguna menerima attachment mendesak dari pengirim tidak dikenal. Tindakan paling aman adalah…",["Membuka untuk mengecek","Memverifikasi pengirim melalui kanal lain dan melaporkan","Meneruskan ke semua rekan","Menonaktifkan anti-malware"],1,"Verifikasi out-of-band dan pelaporan mengurangi risiko phishing tanpa mengeksekusi attachment.",["Gunakan beberapa lapis kontrol.","Patch dan least privilege mengurangi attack surface.","Awareness melengkapi, bukan menggantikan, kontrol teknis."]
  ),
  "6.3":lesson(
    "Menerapkan password yang panjang, unik, dikelola aman, serta mengganti default credential dan memulihkan akses secara benar.",
    ["Password panjang dan unik mengurangi keberhasilan guessing serta credential stuffing. Password manager membantu menghasilkan dan menyimpan credential berbeda untuk setiap service.","Multi-factor authentication menambah faktor selain sesuatu yang diketahui. Recovery process harus memverifikasi identitas tanpa melemahkan security melalui pertanyaan mudah ditebak."],
    flow("Siklus credential",[["Create","Passphrase panjang dan unik"],["Store","Password manager"],["Use","MFA dan kanal tepercaya"],["Recover","Verifikasi identitas"],["Rotate","Saat compromise/policy perlu"]]),
    ["Menggunakan variasi kecil password yang sama di banyak layanan.","Membiarkan default admin password pada router atau IoT device."],
    "Panjang dan uniqueness umumnya lebih bernilai daripada perubahan rutin tanpa indikasi compromise.",
    "Kontrol terbaik untuk mengurangi dampak satu situs membocorkan password adalah…",["Menggunakan password unik pada setiap situs","Menggunakan satu password sangat pendek","Menulis password di halaman login","Menonaktifkan MFA"],0,"Password unik mencegah credential yang bocor digunakan langsung pada layanan lain.",["Gunakan passphrase panjang dan unik.","Password manager mendukung praktik tersebut.","Ganti default credential dan aktifkan MFA bila tersedia."]
  ),
  "6.4":lesson(
    "Menjelaskan perubahan plaintext menjadi ciphertext serta membedakan perlindungan data at rest dan in transit.",
    ["Encryption memakai algorithm dan key untuk mengubah plaintext menjadi ciphertext. Decryption dengan key yang sesuai mengembalikan data agar dapat digunakan.","Data at rest berada pada storage dan dapat dilindungi full-disk atau file encryption. Data in transit bergerak melalui network dan lazim dilindungi secure protocol seperti TLS. Key management menentukan siapa yang benar-benar dapat membuka data."],
    flow("Proses encryption",[["Plaintext","Data dapat dibaca"],["Algorithm + key","Transformasi terkontrol"],["Ciphertext","Data tidak bermakna tanpa key"],["Decryption","Pulihkan dengan key sah"]]),
    ["Menganggap encryption menghapus kebutuhan access control dan backup.","Menyimpan encryption key bersama data tanpa perlindungan memadai."],
    "Bedakan encryption, hashing, dan encoding: tujuannya tidak sama.",
    "HTTPS terutama melindungi data dalam kondisi…",["At rest","In transit","Sudah dihapus","Dicetak"],1,"TLS pada HTTPS mengenkripsi komunikasi saat data bergerak antara client dan server.",["Encryption membutuhkan algorithm dan key.","At rest dan in transit memerlukan kontrol berbeda.","Key management adalah bagian kritis dari encryption."]
  ),
  "6.5":lesson(
    "Mengamankan Wi-Fi dengan WPA2/WPA3, credential unik, firmware update, network segmentation, dan konfigurasi router yang tepat.",
    ["Router atau access point mengiklankan SSID dan mengautentikasi client. WPA2 atau WPA3 mengenkripsi wireless traffic dengan key yang diturunkan dari credential atau identity system.","Security tidak berhenti pada Wi-Fi passphrase. Admin credential, firmware, remote management, guest network, dan perangkat IoT menentukan risiko seluruh LAN."],
    map("Lapisan keamanan Wi-Fi",[["Internet edge","Router/firewall dan update"],["Wireless access","WPA2/WPA3 dan passphrase"],["Administration","Admin password unik; remote access dibatasi"],["Client network","Guest/IoT segmentation dan device hygiene"]]),
    ["Mengira hidden SSID menggantikan encryption.","Memakai Wi-Fi passphrase yang sama dengan router admin password."],
    "Pilih WPA3 jika seluruh perangkat mendukung; gunakan WPA2 yang aman untuk compatibility, dan hindari protocol lama.",
    "Setelah memasang router baru, tindakan keamanan paling awal adalah…",["Mengganti admin credential default dan memperbarui firmware","Menyembunyikan SSID saja","Menonaktifkan encryption","Membagikan PSK secara publik"],0,"Default credential mudah diketahui dan firmware lama dapat memiliki vulnerability; keduanya perlu ditangani lebih dulu.",["Gunakan WPA2/WPA3 dan passphrase kuat.","Admin credential berbeda dari Wi-Fi credential.","Segmentation membatasi dampak perangkat guest atau IoT."]
  )
};
