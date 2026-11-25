import { Question } from '../types';

import upacaraBenderaImg from '../assets/images/upacara_bendera_bali_1795575537716.jpg';
import kawagedanSeniImg from '../assets/images/kawagedan_seni_bali_1795575537854.jpg';
import wirausahaUmkmImg from '../assets/images/wirausaha_umkm_bali_1795575538707.jpg';
import musyawarahBanjarImg from '../assets/images/musyawarah_bale_banjar_1795575539160.jpg';
import belajarAksaraImg from '../assets/images/belajar_aksara_bali_1795575540189.jpg';

/**
 * Bank Soal Tes Sumatif Bahasa Bali Kelas 6
 * Lingkup Materi:
 * 1. Bangga Dados Warga Indonesia
 * 2. Kasumbungang Sangkaning Kawagedan
 * 3. Wirausaha
 * 4. Kepemimpinan
 *
 * Komposisi:
 * - 30 Pilihan Ganda (PG, 4 opsi A–D), terdiri dari Aksara Latin lan Aksara Bali
 * - 5 Pilihan Ganda Kompleks (PGK, 3 opsi A–C, lebih dari 1 jawaban benar)
 */
export const INITIAL_QUESTIONS: Question[] = [
  // =========================================================================
  // PILIHAN GANDA (1 - 30) : AKSARA LATIN LAN AKSARA BALI
  // =========================================================================

  // --- LINGKUP 1: BANGGA DADOS WARGA INDONESIA (SOAL 1 - 8) ---
  {
    id: 1,
    type: 'pg',
    topic: 'Bangga Dados Warga Indonesia',
    elemen: 'Membaca dan Memirsa (Ngwacen)',
    difficulty: 'Mudah',
    imageUrl: upacaraBenderaImg,
    imageCaption: 'Alit-alit SD ring Bali nyarengin upacara bendera nyabran rahina Soma antuk tertib',
    text: 'Cingak gambar ring ajeng. Parilaksana alit-alit sane nyarengin upacara bendera antuk tertib tur khidmat nyabran rahina Soma nyihnayang rasa ....',
    options: [
      { id: 'A', text: 'Bangga tur tresna ring tanah air Indonesia' },
      { id: 'B', text: 'Ajrih ring guru lan kepala sekolah kemanten' },
      { id: 'C', text: 'Meled gelis budal saking sekolah' },
      { id: 'D', text: 'Nenten rungu ring peraturan sekolah' },
    ],
    correctAnswer: 'A',
    explanation:
      'Nyarengin upacara bendera antuk tertib, majajar rapi, lan hormat ring Sang Saka Merah Putih nyihnayang rasa bangga lan tresna ring tanah air Indonesia.',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Bangga Dados Warga Indonesia',
    elemen: 'Berbicara dan Mempresentasikan (Mabaos)',
    difficulty: 'Mudah',
    text: 'Semboyan negara Indonesia inggih punika "Bhinneka Tunggal Ika". Teges semboyan punika ring Basa Bali inggih punika ....',
    options: [
      { id: 'A', text: 'Matios-tiosan suku lan budaya, nanging tetep asiki dados bangsa Indonesia' },
      { id: 'B', text: 'Suku lan basa daerah patut kasamayang sami ring sejebag Indonesia' },
      { id: 'C', text: 'Warga negara wantah ngutamayang daerahne padidi kemanten' },
      { id: 'D', text: 'Nenten dados malajahin seni budaya saking provinsi tiosan' },
    ],
    correctAnswer: 'A',
    explanation:
      'Bhinneka Tunggal Ika mateges yadiastun matios-tiosan suku, agama, ras, lan basa daerah, nanging tetep manunggal dados asiki bangsa Indonesia.',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Bangga Dados Warga Indonesia',
    elemen: 'Menulis (Nyurat Aksara Bali & Latin)',
    difficulty: 'Sedang',
    text: 'Wacen lengkara Aksara Bali puniki antuk urati:\n\nᬢᬶᬢ᭄ᬬᬂ ᬩᬂᬕ ᬤᬤᭀᬲ᭄ ᬯᬃᬕ ᬦᭂᬕᬭ ᬇᬦ᭄ᬤᭀᬦᬾᬲᬶᬬ᭟\n\nWacenan Aksara Latin sane patut antuk lengkara Aksara Bali ring ajeng inggih punika ....',
    options: [
      { id: 'A', text: 'Tityang bangga dados warga negara Indonesia.' },
      { id: 'B', text: 'Tityang tresna ring basa daerah Bali.' },
      { id: 'C', text: 'Tityang malajah nyurat aksara Bali.' },
      { id: 'D', text: 'Tityang ngaturang bakti ring negara.' },
    ],
    correctAnswer: 'A',
    explanation:
      'Sasuratan Aksara Bali ᬢᬶᬢ᭄ᬬᬂ (Tityang) ᬩᬂᬕ (bangga) ᬤᬤᭀᬲ᭄ (dados) ᬯᬃᬕ (warga) ᬦᭂᬕᬭ (negara) ᬇᬦ᭄ᬤᭀᬦᬾᬲᬶᬬ (Indonesia).',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Bangga Dados Warga Indonesia',
    elemen: 'Menulis (Nyurat Aksara Bali & Latin)',
    difficulty: 'Sedang',
    text: 'Rikala tanggal ᭑᭗ Agustus warsa ᭑᭙᭔᭕ bangsa Indonesia ngamolihang kamerdekaan. Angka Bali ᭑᭗ lan ᭑᭙᭔᭕ yening kasurat ngangge angka Latin dadosnyane ....',
    options: [
      { id: 'A', text: '17 lan 1945' },
      { id: 'B', text: '16 lan 1945' },
      { id: 'C', text: '17 lan 1954' },
      { id: 'D', text: '27 lan 1945' },
    ],
    correctAnswer: 'A',
    explanation:
      'Ring Angka Bali: ᭑ = 1, ᭗ = 7, ᭙ = 9, ᭔ = 4, lan ᭕ = 5. Dadosnyane ᭑᭗ = 17 lan ᭑᭙᭔᭕ = 1945.',
  },
  {
    id: 5,
    type: 'pg',
    topic: 'Bangga Dados Warga Indonesia',
    elemen: 'Menyimak (Mirengang)',
    difficulty: 'Mudah',
    text: 'Ring Bali wenten paribasa "Sagilik-saguluk, salunglung sabayantaka". Paribasa puniki madue tetuek mangda warga Indonesia setata ....',
    options: [
      { id: 'A', text: 'Makarya sareng-sareng (gotong royong), adung, lan saiyu ngajegang persatuan' },
      { id: 'B', text: 'Matungkas sareng pisaga rikala wenten karya adat' },
      { id: 'C', text: 'Ngalih kaluihan antuk ngalahang timpal-timpalne' },
      { id: 'D', text: 'Nengil ring jero nenten kayun masawitra' },
    ],
    correctAnswer: 'A',
    explanation:
      'Paribasa "Sagilik-saguluk, salunglung sabayantaka" negesang indik kebersamaan, persatuan, lan rasa saling asah, asih, asuh ring suka duka.',
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Bangga Dados Warga Indonesia',
    elemen: 'Berbicara dan Mempresentasikan (Mabaos)',
    difficulty: 'Sedang',
    text: 'Lengkara Basa Bali Alus sane patut rikala ngaturang rasa suksma ring para pahlawan bangsa inggih punika ....',
    options: [
      { id: 'A', text: 'Ngiring sareng-sareng ngastitiang arwah para pahlawan antuk manah suci.' },
      { id: 'B', text: 'Mai ajak makejang ngelingang pahlawan ane suba mati.' },
      { id: 'C', text: 'Cang lakar ngaturang suksma teken pahlawan ibi sanja.' },
      { id: 'D', text: 'Ia suba makelo dadi pahlawan di gumi Baline.' },
    ],
    correctAnswer: 'A',
    explanation:
      'Lengkara "Ngiring sareng-sareng ngastitiang arwah para pahlawan antuk manah suci" nganggen Basa Bali Alus sane sopan lan hormat.',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Bangga Dados Warga Indonesia',
    elemen: 'Menulis (Nyurat Aksara Bali & Latin)',
    difficulty: 'Sukar',
    text: 'Pilihen sasuratan Aksara Bali sane pinih patut antuk kruna "Gotong royong"!',
    options: [
      { id: 'A', text: 'ᬕᭀᬢᭀᬂ ᬭᭀᬬᭀᬂ' },
      { id: 'B', text: 'ᬕᬢᬂ ᬭᬬᬂ' },
      { id: 'C', text: 'ᬕᭀᬢᭀᬗ ᬭᭀᬬᭀᬗ' },
      { id: 'D', text: 'ᬕᬸᬢᬸᬂ ᬭᬸᬬᬸᬂ' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kruna "Gotong royong" ngangge pengangge suara taling tedong (ᭀ = o) lan pengangge tengenan cecek (ᬂ = -ng), dadosnyane kasurat ᬕᭀᬢᭀᬂ ᬭᭀᬬᭀᬂ.',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Bangga Dados Warga Indonesia',
    elemen: 'Membaca dan Memirsa (Ngwacen)',
    difficulty: 'Sukar',
    text: 'Wacen teks cendet puniki:\n"I Made setata bangga nganggen produk buatan pengrajin lokal Indonesia, ngajegang Basa Bali rikala mabaos ring jero, miwah nenten naen ngandapang budaya daerah tiosan."\n\nSaking teks punika, parilaksana I Made nyihnayang sikap warga negara sane ....',
    options: [
      { id: 'A', text: 'Cinta tanah air, ngajegang warisan budaya, lan saling ngajiang kebhinekaan' },
      { id: 'B', text: 'Nenten kayun nampi kamajuan ilmu pengetahuan modern' },
      { id: 'C', text: 'Ngarasa budaya daerahne padidi sane pinih utama saking sane lianan' },
      { id: 'D', text: 'Wantah seneng matumbasan barang saking luar negeri' },
    ],
    correctAnswer: 'A',
    explanation:
      'Nganggen produk lokal, nglestariang basa daerah, lan saling ngajiang budaya tiosan wantah cihna warga negara Indonesia sane bangga lan toleran.',
  },

  // --- LINGKUP 2: KASUMBUNGANG SANGKANING KAWAGEDAN (SOAL 9 - 16) ---
  {
    id: 9,
    type: 'pg',
    topic: 'Kasumbungang Sangkaning Kawagedan',
    elemen: 'Membaca dan Memirsa (Ngwacen)',
    difficulty: 'Mudah',
    imageUrl: kawagedanSeniImg,
    imageCaption: 'Alit-alit Bali jemet malajah igel-igelan lan gambelan ring bale sekolah',
    text: 'Cingak gambar ring ajeng. Putu miwah timpal-timpalne kasumbungang ring sekolah santukan waged ngigel lan megambel. Teges kruna "kasumbungang" ring Basa Indonesia inggih punika ....',
    options: [
      { id: 'A', text: 'Dipuji, dibanggakan, atau terkenal karena prestasi' },
      { id: 'B', text: 'Dihukum karena melanggar aturan sekolah' },
      { id: 'C', text: 'Ditinggalkan oleh teman-temannya saat bermain' },
      { id: 'D', text: 'Dilarang mengikuti kegiatan ekstrakurikuler' },
    ],
    correctAnswer: 'A',
    explanation:
      'Ring Basa Bali, "kasumbungang" mateges kapuji utawi kasohor (terkenal/dibanggakan), dene "kawagedan" mateges kepandaian utawi keterampilan.',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Kasumbungang Sangkaning Kawagedan',
    elemen: 'Membaca dan Memirsa (Ngwacen)',
    difficulty: 'Mudah',
    imageUrl: belajarAksaraImg,
    imageCaption: 'Ibu Guru nuntun sisia kelas 6 malajah nyurat Aksara Bali ring don lontar',
    text: 'Cingak gambar ring ajeng. Ibu Guru sedek nuntun sisia nyurat Aksara Bali ring don lontar. Piranti tradisional sane kaanggen nyurat utawi ngukir Aksara Bali ring don lontar kawastanin ....',
    options: [
      { id: 'A', text: 'Pangrupak' },
      { id: 'B', text: 'Spidol' },
      { id: 'C', text: 'Kuas lukis' },
      { id: 'D', text: 'Penggaris kayu' },
    ],
    correctAnswer: 'A',
    explanation:
      'Piranti khusus marupa peso alit sane kaanggen nyurat utawi ngukir Aksara Bali ring don lontar kawastanin pangrupak (pengutik).',
  },
  {
    id: 11,
    type: 'pg',
    topic: 'Kasumbungang Sangkaning Kawagedan',
    elemen: 'Menulis (Nyurat Aksara Bali & Latin)',
    difficulty: 'Sedang',
    text: 'Wacen lengkara Aksara Bali puniki:\n\nᬫᬸᬭᬶᬤ᭄ ᬲᬦᬾ ᬭᬚᬶᬦ᭄ ᬫᬮᬚᬄ ᬧᬘᬂ ᬯᬕᭂᬤ᭄᭟\n\nTeges lengkara Aksara Bali ring ajeng inggih punika ....',
    options: [
      { id: 'A', text: 'Murid sane rajin malajah pacang waged.' },
      { id: 'B', text: 'Murid sane malas malajah pacang kasumbungang.' },
      { id: 'C', text: 'Guru sane rajin ngajahin pacang bagia.' },
      { id: 'D', text: 'Murid kelas enem sedek masangkep ring kelas.' },
    ],
    correctAnswer: 'A',
    explanation:
      'Wacenan lengkara punika: ᬫᬸᬭᬶᬤ᭄ (Murid) ᬲᬦᬾ (sane) ᬭᬚᬶᬦ᭄ (rajin) ᬫᬮᬚᬄ (malajah) ᬧᬘᬂ (pacang) ᬯᬕᭂᬤ᭄ (waged).',
  },
  {
    id: 12,
    type: 'pg',
    topic: 'Kasumbungang Sangkaning Kawagedan',
    elemen: 'Menyimak (Mirengang)',
    difficulty: 'Sedang',
    text: 'Pupuh Ginada ngajarin iraga: "Eda ngaden awak bisa, depang anake ngadanin". Tetuek piteket puniki mateges yening sampun madue kawagedan, iraga patut ....',
    options: [
      { id: 'A', text: 'Tetep andap asor (rendah hati), nenten sombong, lan terus malajah' },
      { id: 'B', text: 'Nyombongang kabisan ring ajeng timpal-timpalne' },
      { id: 'C', text: 'Suud malajah santukan sampun rumasa pinih ririh' },
      { id: 'D', text: 'Nenten kayun nulungin timpal sane durung ngerti' },
    ],
    correctAnswer: 'A',
    explanation:
      '"Eda ngaden awak bisa, depang anake ngadanin" ngajahin mangda iraga tetep andap asor (rendah hati) tur nenten nyombongang kawagedan.',
  },
  {
    id: 13,
    type: 'pg',
    topic: 'Kasumbungang Sangkaning Kawagedan',
    elemen: 'Menulis (Nyurat Aksara Bali & Latin)',
    difficulty: 'Sedang',
    text: 'Ring Aksara Bali, kruna ᬕᬫ᭄ᬩᭂᬮᬦ᭄ kawacen ....',
    options: [
      { id: 'A', text: 'Gambelan' },
      { id: 'B', text: 'Gamelan' },
      { id: 'C', text: 'Gembelan' },
      { id: 'D', text: 'Gambaran' },
    ],
    correctAnswer: 'A',
    explanation:
      'ᬕ (ga) + ᬫ᭄ (m + gantungan ba ᬩ) + pepet (ᭂ = e) + ᬮ (la) + ᬦ᭄ (n) kawacen "Gambelan".',
  },
  {
    id: 14,
    type: 'pg',
    topic: 'Kasumbungang Sangkaning Kawagedan',
    elemen: 'Membaca dan Memirsa (Ngwacen)',
    difficulty: 'Sedang',
    text: 'Kruna "kasumbungang" wantah kruna tiron (kata berimbuhan). Kruna lingga (kata dasar) saking kruna "kasumbungang" inggih punika ....',
    options: [
      { id: 'A', text: 'Sumbung' },
      { id: 'B', text: 'Kasum' },
      { id: 'C', text: 'Bungang' },
      { id: 'D', text: 'Sumbungang' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kruna "kasumbungang" kawangun antuk kruna lingga "sumbung" sane polih pangater (awalan) "ka-" lan pangiring (akhiran) "-ang".',
  },
  {
    id: 15,
    type: 'pg',
    topic: 'Kasumbungang Sangkaning Kawagedan',
    elemen: 'Menulis (Nyurat Aksara Bali & Latin)',
    difficulty: 'Sukar',
    text: 'Sasuratan Aksara Bali sane patut antuk kruna "Kawagedan" inggih punika ....',
    options: [
      { id: 'A', text: 'ᬓᬯᬕᭂᬤᬦ᭄' },
      { id: 'B', text: 'ᬓᬯᬕᬾᬤᬦ᭄' },
      { id: 'C', text: 'ᬓᬯᬕᬤᬦ' },
      { id: 'D', text: 'ᬓᬯᬖᭂᬤᬦ᭄' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kruna "Kawagedan" nganggen e pepet (ᭂ) ring aksara "ga" lan adeg-adeg (᭄) ring panguntat aksara "na", dadosnyane ᬓᬯᬕᭂᬤᬦ᭄.',
  },
  {
    id: 16,
    type: 'pg',
    topic: 'Kasumbungang Sangkaning Kawagedan',
    elemen: 'Membaca dan Memirsa (Ngwacen)',
    difficulty: 'Sukar',
    text: 'Wacen cerita puniki:\n"Ni Luh Sari jemet pisan malajah nyurat aksara Bali nyabran sore. Rikala lomba Bulan Bahasa Bali ring kabupaten, ipun ngamolihang juara kapertama. Reramannyane liang pisan."\n\nSapunapi cara sane patut katulad saking Ni Luh Sari mangda iraga taler waged?',
    options: [
      { id: 'A', text: 'Jemet malajah, disiplin latihan, lan nenten gelis nyerah' },
      { id: 'B', text: 'Malajah wantah duang rahina sadurung lomba kemanten' },
      { id: 'C', text: 'Ngandelang timpal mangda ngaryanin tugas sekolah' },
      { id: 'D', text: 'Nyimpen buku pelajaran ring tas nenten naen kawacen' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kawagedan utawi prestasi nenten teka nadak, nanging sangkaning jemet malajah, disiplin latihan, lan nenten gelis putus asa.',
  },

  // --- LINGKUP 3: WIRAUSAHA (SOAL 17 - 23) ---
  {
    id: 17,
    type: 'pg',
    topic: 'Wirausaha',
    elemen: 'Membaca dan Memirsa (Ngwacen)',
    difficulty: 'Mudah',
    imageUrl: wirausahaUmkmImg,
    imageCaption: 'Warung seni lan wirausaha warga Bali sane ngadol kerajinan anyaman, kain endek, lan jajan Bali',
    text: 'Cingak gambar warung seni lan kerajinan Bali ring ajeng. Kagiatan ngaryanin lan ngadol barang sekadi anyaman tiing, kain endek, miwah jajan Bali mangda ngamolihang pangupa jiwa kawastanin ....',
    options: [
      { id: 'A', text: 'Wirausaha' },
      { id: 'B', text: 'Upacara' },
      { id: 'C', text: 'Masangkep' },
      { id: 'D', text: 'Malancaran' },
    ],
    correctAnswer: 'A',
    explanation:
      'Wirausaha inggih punika kagiatan usaha mandiri sane kreatif ngaryanin utawi ngadol produk lan jasa antuk tanggung jawab mangda ngamolihang pikolih (keuntungan).',
  },
  {
    id: 18,
    type: 'pg',
    topic: 'Wirausaha',
    elemen: 'Menyimak (Mirengang)',
    difficulty: 'Mudah',
    text: 'Rikala madagang jajan Bali, Ni Wayan numbas bahan aji Rp50.000,00, raris sadaya jajan payu kaadol aji Rp75.000,00. Sisa jinah Rp25.000,00 punika ring Basa Bali kawastanin ....',
    options: [
      { id: 'A', text: 'Bati' },
      { id: 'B', text: 'Rugi' },
      { id: 'C', text: 'Utang' },
      { id: 'D', text: 'Modal' },
    ],
    correctAnswer: 'A',
    explanation:
      'Ring Basa Bali, "bati" mateges keuntungan utawi laba (selisih jinah pangadolan sane langkungan teken modal).',
  },
  {
    id: 19,
    type: 'pg',
    topic: 'Wirausaha',
    elemen: 'Menulis (Nyurat Aksara Bali & Latin)',
    difficulty: 'Sedang',
    text: 'Wacen lengkara Aksara Bali puniki:\n\nᬤᬕᬂ ᬚᬚᬦ᭄ ᬩᬮᬶ ᬭᬶᬂ ᬧᬲᬃ᭟\n\nWacenan Aksara Latin sane patut inggih punika ....',
    options: [
      { id: 'A', text: 'Dagang jajan Bali ring pasar.' },
      { id: 'B', text: 'Dagang banten Bali ring pura.' },
      { id: 'C', text: 'Ngaryanin jajan Bali ring paon.' },
      { id: 'D', text: 'Numas jajan Bali ring warung.' },
    ],
    correctAnswer: 'A',
    explanation:
      'ᬤᬕᬂ (Dagang) ᬚᬚᬦ᭄ (jajan) ᬩᬮᬶ (Bali) ᬭᬶᬂ (ring) ᬧᬲᬃ (pasar).',
  },
  {
    id: 20,
    type: 'pg',
    topic: 'Wirausaha',
    elemen: 'Berbicara dan Mempresentasikan (Mabaos)',
    difficulty: 'Sedang',
    text: 'Rikala wenten tamiu utawi pangnumbas rauh ka toko kerajinan, baos pangajap sane sopan nganggen Basa Bali Alus inggih punika ....',
    options: [
      { id: 'A', text: '"Swastyastu Bapak/Ibu, durusang cingak-cingak dumun kerajinan driki."' },
      { id: 'B', text: '"Mai engalin meli, lamun sing meli da mebalih dogen!"' },
      { id: 'C', text: '"Apa alih cai mai? Cang tusing ngelah barang murah."'},
      { id: 'D', text: '"Nah ditu suba piliin padidi, awak suba kenyel."'},
    ],
    correctAnswer: 'A',
    explanation:
      'Sang wirausahawan patut ramah, santun, lan nganggen Basa Bali Alus rikala nyapa pangnumbas mangda tamiu rumasa seneng lan nyaman.',
  },
  {
    id: 21,
    type: 'pg',
    topic: 'Wirausaha',
    elemen: 'Menulis (Nyurat Aksara Bali & Latin)',
    difficulty: 'Sedang',
    text: 'Kruna ᬓᭂᬭᬚᬶᬦᬦ᭄ yening kawacen ngangge Aksara Latin mateges ....',
    options: [
      { id: 'A', text: 'Kerajinan' },
      { id: 'B', text: 'Karajaan' },
      { id: 'C', text: 'Karanginan' },
      { id: 'D', text: 'Kerajaan' },
    ],
    correctAnswer: 'A',
    explanation:
      'ᬓᭂ (ke) + ᬭ (ra) + ᬚᬶ (ji) + ᬦ (na) + ᬦ᭄ (n) kawacen "Kerajinan".',
  },
  {
    id: 22,
    type: 'pg',
    topic: 'Wirausaha',
    elemen: 'Menyimak (Mirengang)',
    difficulty: 'Mudah',
    text: 'Napi mawinan sang wirausahawan patut nyaga kejujuran, umpami timbangan pas lan kualitas barang becik?',
    options: [
      { id: 'A', text: 'Mangda pangnumbas percaya tur setata mawali matumbasan' },
      { id: 'B', text: 'Mangda gelis ngamolihang bati sane gede antuk cara curang' },
      { id: 'C', text: 'Mangda barang sane lami lan rusak prasida kaadol sami' },
      { id: 'D', text: 'Mangda nenten wenten saingan saking toko tiosan' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kejujuran inggih punika modal utama ring wirausaha. Yening dagang jujur, pelanggan pacang percaya lan langgeng matumbasan.',
  },
  {
    id: 23,
    type: 'pg',
    topic: 'Wirausaha',
    elemen: 'Membaca dan Memirsa (Ngwacen)',
    difficulty: 'Sukar',
    text: 'Siswa kelas 6 ngaryanin gantungan kunci saking batok nyuh tur kaadol ring bazar sekolah. Sadurung ngadol, para siswa nyatet modal, ngaryanin kemasan sane rapi, lan ngitung harga jual.\n\nParilaksana siswa kelas 6 punika nyihnayang sikap wirausaha sane ....',
    options: [
      { id: 'A', text: 'Kreatif ngolah bahan alam, terencana, lan mandiri' },
      { id: 'B', text: 'Boros lan nenten rungu ring kebersihan lingkungan' },
      { id: 'C', text: 'Ngalih bati tanpa ngitung modal pangawit' },
      { id: 'D', text: 'Ngalarang timpalne ngaryanin karya sane pateh' },
    ],
    correctAnswer: 'A',
    explanation:
      'Ngolah limbah batok nyuh dados gantungan kunci sane maaji jual, ngaryanin kemasan, lan nyatet modal nyihnayang kreativitas, perencanaan, lan kemandirian.',
  },

  // --- LINGKUP 4: KEPEMIMPINAN (SOAL 24 - 30) ---
  {
    id: 24,
    type: 'pg',
    topic: 'Kepemimpinan',
    elemen: 'Membaca dan Memirsa (Ngwacen)',
    difficulty: 'Mudah',
    imageUrl: musyawarahBanjarImg,
    imageCaption: 'Klian Banjar mimpin paruman utawi sangkep sareng krama ring Bale Banjar antuk adung',
    text: 'Cingak gambar sangkep ring Bale Banjar ring ajeng. Rikala mimpin paruman, Bapak Klian Banjar mirengang usulan krama antuk sabar tur adil. Parilaksana punika nyihnayang pemimpin sane ....',
    options: [
      { id: 'A', text: 'Demokratis, wicaksana, lan ngutamayang musyawarah mufakat' },
      { id: 'B', text: 'Keras kepala lan wantah nganggen kaputusan padidi' },
      { id: 'C', text: 'Milih-milih krama sane sugih kemanten' },
      { id: 'D', text: 'Nenten kayun nampi pamineh saking para yowana' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pemimpin sane demokratis lan wicaksana setata mirengang pamineh (pendapat) krama mangda ngamolihang kaputusan sane adil antuk musyawarah.',
  },
  {
    id: 25,
    type: 'pg',
    topic: 'Kepemimpinan',
    elemen: 'Menyimak (Mirengang)',
    difficulty: 'Sedang',
    text: 'Ring sesolahan lan sastra Bali wenten sesanti kepemimpinan "Ing Ngarso Sung Tuladha". Ring Basa Bali puniki mateges dados pemimpin patut ....',
    options: [
      { id: 'A', text: 'Ngicen conto utawi sesuluh parilaksana sane becik ring arep' },
      { id: 'B', text: 'Malinggih kemanten sinambi mrentah anak lianan' },
      { id: 'C', text: 'Ngalih kauntungan padidi saking jabatan' },
      { id: 'D', text: 'Nenten perduli ring pikobet anggota' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pemimpin patut dados panutan (sesuluh/teladan) ring arep antuk parilaksana jujur, disiplin, lan tanggung jawab.',
  },
  {
    id: 26,
    type: 'pg',
    topic: 'Kepemimpinan',
    elemen: 'Menulis (Nyurat Aksara Bali & Latin)',
    difficulty: 'Sedang',
    text: 'Wacen lengkara Aksara Bali puniki:\n\nᬓ᭄ᬮᬶᬬᬦ᭄ ᬩᬜ᭄ᬚᬃ ᬫᬲᬂᬓᭂᬧ᭄ ᬲᬭᭂᬂ ᬓ᭄ᬭᬫ᭟\n\nWacenan Aksara Latin sane patut antuk lengkara punika inggih punika ....',
    options: [
      { id: 'A', text: 'Klian banjar masangkep sareng krama.' },
      { id: 'B', text: 'Klian banjar ngaryanin bale banjar.' },
      { id: 'C', text: 'Krama banjar makarya gotong royong.' },
      { id: 'D', text: 'Klian banjar matumbasan ring pasar.' },
    ],
    correctAnswer: 'A',
    explanation:
      'ᬓ᭄ᬮᬶᬬᬦ᭄ (Klian) ᬩᬜ᭄ᬚᬃ (banjar) ᬫᬲᬂᬓᭂᬧ᭄ (masangkep) ᬲᬭᭂᬂ (sareng) ᬓ᭄ᬭᬫ (krama).',
  },
  {
    id: 27,
    type: 'pg',
    topic: 'Kepemimpinan',
    elemen: 'Berbicara dan Mempresentasikan (Mabaos)',
    difficulty: 'Sedang',
    text: 'Made kapilih dados Ketua Kelas 6. Rikala ngawitin rapat kelas indik piket kebersihan, baos Basa Bali sane patut kaucapang olih Made inggih punika ....',
    options: [
      { id: 'A', text: '"Inggih timpal-timpal sareng sami, ngiring iraga mabaos sareng mangda jadwal piket puniki adil."' },
      { id: 'B', text: '"Jani makejang kudu nurut teken cang, sing dadi ada ane protes!"' },
      { id: 'C', text: '"Cang dadi ketua, dadi cang tusing perlu milu nyampat di kelas."' },
      { id: 'D', text: '"Yening sing nyak piket, mai langsung mulih dogen!"' },
    ],
    correctAnswer: 'A',
    explanation:
      'Ketua kelas sane becik mabaos antuk sopan, ngajak timpal-timpalne musyawarah, lan ngruruh kaputusan sane adil.',
  },
  {
    id: 28,
    type: 'pg',
    topic: 'Kepemimpinan',
    elemen: 'Menulis (Nyurat Aksara Bali & Latin)',
    difficulty: 'Sukar',
    text: 'Pilihen sasuratan Aksara Bali sane patut antuk lengkara "Pemimpin jujur lan adil"!',
    options: [
      { id: 'A', text: 'ᬧᭂᬫᬶᬫ᭄ᬧᬶᬦ᭄ ᬚᬸᬚᬸᬃ ᬮᬦ᭄ ᬅᬤᬶᬮ᭄' },
      { id: 'B', text: 'ᬧᬫᬶᬫᬧᬶᬦ ᬚᬸᬚᬸᬭ ᬮᬦ ᬅᬤᬶᬮ' },
      { id: 'C', text: 'ᬧᬾᬫᬶᬫ᭄ᬧᬶᬦ᭄ ᬚᬸᬚᬸᬃ ᬮᬦ᭄ ᬅᬤᬶᬮ᭄' },
      { id: 'D', text: 'ᬧᭂᬫᬶᬫ᭄ᬧᬶᬦ᭄ ᬚᬸᬚᬸᬃ ᬮᬂ ᬅᬤᬶᬮ᭄' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kruna "Pemimpin" nganggen pepet (ᬧᭂ), gantungan pa (ᬫ᭄ᬧᬶ), lan adeg-adeg; "jujur" nganggen suku lan surang (ᬚᬸᬚᬸᬃ); "lan adil" kasurat ᬮᬦ᭄ ᬅᬤᬶᬮ᭄.',
  },
  {
    id: 29,
    type: 'pg',
    topic: 'Kepemimpinan',
    elemen: 'Menyimak (Mirengang)',
    difficulty: 'Mudah',
    text: 'Pemimpin sane kasayangan olih krama utawi timpal-timpalne patut madue sifat "Satya Wacana". Teges "Satya Wacana" inggih punika ....',
    options: [
      { id: 'A', text: 'Jujur tur setata nepatin janji utawi baos sane sampun kaucapang' },
      { id: 'B', text: 'Seneng mabaos nanging nenten naen makarya' },
      { id: 'C', text: 'Gelis brangti rikala wenten anak mataken' },
      { id: 'D', text: 'Nenten kayun ngakuin kalepatan padidi' },
    ],
    correctAnswer: 'A',
    explanation:
      'Satya Wacana inggih punika jujur lan setia ring baos utawi janji sane sampun kaucapang (antara ucapan dan perbuatan selaras).',
  },
  {
    id: 30,
    type: 'pg',
    topic: 'Kepemimpinan',
    elemen: 'Berbicara dan Mempresentasikan (Mabaos)',
    difficulty: 'Sukar',
    text: 'Ring kelas 6 wenten timpal kalih diri sane matungkas (berselisih) sangkaning salah tampi rikala makarya tugas kelompok. Pinaka Ketua Kelas, langkah sane pinih patut kalaksanayang inggih punika ....',
    options: [
      { id: 'A', text: 'Nundun makakalih mangda mabaos alus, mirengang alesan ipun antuk adil, raris ngruruh jalan tengah mangda adung malih' },
      { id: 'B', text: 'Ngabéla timpal sane pinih raket kemanten yadiastun iwang' },
      { id: 'C', text: 'Ngenengiang kemanten mangda masalah punika sayan gede' },
      { id: 'D', text: 'Nyalahang silih tunggil tanpa mirengang penjelasan ipun' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pemimpin sane adil lan wicaksana nenten pilih kasih, setata mirengang saking kalih pihak, lan ngutamayang perdamaian.',
  },

  // =========================================================================
  // PILIHAN GANDA KOMPLEKS / PGK (31 - 35) : 3 OPSI, >1 JAWABAN BENAR
  // =========================================================================
  {
    id: 31,
    type: 'pgk',
    topic: 'Bangga Dados Warga Indonesia',
    elemen: 'Membaca dan Memirsa (Ngwacen)',
    difficulty: 'Sedang',
    imageUrl: upacaraBenderaImg,
    imageCaption: 'Sikap hormat lan persatuan alit-alit SD ring Bali rikala upacara bendera',
    text: 'Cingak gambar ring ajeng. Pilihen parilaksana sane nyihnayang rasa bangga dados warga negara Indonesia ring lingkungan sekolah! (Pilih langkungan saking asiki jawaban sane patut)',
    options: [
      { id: 'A', text: 'Nyarengin upacara bendera antuk tertib tur ngaturang hormat ring Merah Putih' },
      { id: 'B', text: 'Saling tulung lan masawitra antuk becik sareng timpal yadiastun matiosan suku utawi agama' },
      { id: 'C', text: 'Nenten kayun nganggen basa Indonesia utawi ngandapang budaya daerah lianan' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      'Opsi A lan B nyihnayang sikap bangga dados warga Indonesia (tertib upacara lan ngajiang kabhinekaan). Opsi C nenten patut santukan ngandapang budaya tiosan.',
  },
  {
    id: 32,
    type: 'pgk',
    topic: 'Kasumbungang Sangkaning Kawagedan',
    elemen: 'Menulis (Nyurat Aksara Bali & Latin)',
    difficulty: 'Sedang',
    imageUrl: belajarAksaraImg,
    imageCaption: 'Siswa kelas 6 malajah nyurat Aksara Bali ring lontar kasarengin Ibu Guru',
    text: 'Wacen lengkara Aksara Bali puniki:\n\nᬓᬯᬕᭂᬤᬦ᭄ ᬫᬮᬚᬄ ᬲᭂᬦᬶ ᬩᬮᬶ᭟\n\nPilihen pernyataan sane patut indik lengkara Aksara Bali miwah sikap anak sane waged! (Pilih langkungan saking asiki jawaban sane patut)',
    options: [
      { id: 'A', text: 'Lengkara Aksara Bali ring ajeng kawacen: "Kawagedan malajah seni Bali."' },
      { id: 'B', text: 'Siswa sane jemet latihan nyurat lontar utawi megambel patut tetep andap asor (rendah hati).' },
      { id: 'C', text: 'Yening sampun waged, siswa dados nyombongang kabisan ring arep timpal-timpalne.' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      'Opsi A patut wacenan Aksara Balinyane ("Kawagedan malajah seni Bali.") lan opsi B patut indik sikap rendah hati. Opsi C iwang santukan sombong nenten becik.',
  },
  {
    id: 33,
    type: 'pgk',
    topic: 'Wirausaha',
    elemen: 'Membaca dan Memirsa (Ngwacen)',
    difficulty: 'Sedang',
    imageUrl: wirausahaUmkmImg,
    imageCaption: 'Kagiatan wirausaha UMKM warga Bali ngadol kerajinan lan ajengan tradisional',
    text: 'Cingak gambar wirausaha kerajinan lan kuliner Bali ring ajeng. Pilihen sikap lan parilaksana sane patut kamargiang olih sang wirausahawan mangda usahanipun lancar tur kasenengin pembeli! (Pilih langkungan saking asiki jawaban sane patut)',
    options: [
      { id: 'A', text: 'Jujur ring takaran utawi timbangan, nenten nguluk-uluk pangnumbas' },
      { id: 'B', text: 'Kreatif ngaryanin produk lokal sane bersih, rapi, tur ramah nyapa pembeli' },
      { id: 'C', text: 'Ngadol barang sane sampun rusak utawi kadaluwarsa mangda gelis polih bati' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      'Sang wirausahawan patut jujur (Opsi A) lan kreatif saha ramah melayani pembeli (Opsi B). Ngadol barang rusak (Opsi C) ngilangang kepercayaan pelanggan.',
  },
  {
    id: 34,
    type: 'pgk',
    topic: 'Kepemimpinan',
    elemen: 'Berbicara dan Mempresentasikan (Mabaos)',
    difficulty: 'Sedang',
    imageUrl: musyawarahBanjarImg,
    imageCaption: 'Pemimpin mimpin musyawarah krama ring Bale Banjar antuk tertib',
    text: 'Cingak gambar musyawarah ring Bale Banjar ring ajeng. Pilihen ceciren pemimpin sane becik rikala mimpin paruman utawi kelompok belajar! (Pilih langkungan saking asiki jawaban sane patut)',
    options: [
      { id: 'A', text: 'Mirengang pamineh lan usulan anggotane antuk sabar saha ngutamayang musyawarah' },
      { id: 'B', text: 'Adil nenten pilih kasih tur tanggung jawab ring kaputusan sane sampun kacumpuin' },
      { id: 'C', text: 'Ngambil kaputusan padidi tanpa mataken ring anggota tiosan' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      'Pemimpin sane wicaksana setata mirengang usul anggota (A) lan adil saha tanggung jawab (B). Kaputusan padidi tanpa musyawarah (C) nenten becik.',
  },
  {
    id: 35,
    type: 'pgk',
    topic: 'Kepemimpinan',
    elemen: 'Menulis (Nyurat Aksara Bali & Latin)',
    difficulty: 'Sukar',
    text: 'Pilihen sasuratan Aksara Bali sane sasuratannyane PATUT manut pasang aksara Bali! (Pilih langkungan saking asiki jawaban sane patut)',
    options: [
      { id: 'A', text: 'ᬩᬲ ᬩᬮᬶ (Basa Bali)' },
      { id: 'B', text: 'ᬧᬲᬃ (Pasar)' },
      { id: 'C', text: 'ᬓᬲᬂᬓᬧ (Sangkep)' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      'Opsi A (ᬩᬲ ᬩᬮᬶ = Basa Bali) lan Opsi B (ᬧᬲᬃ = Pasar) sampun patut. Opsi C iwang santukan kruna "Sangkep" patut kasurat ᬲᬂᬓᭂᬧ᭄ (nganggen pepet ᭂ lan adeg-adeg ᭄).',
  },
];
