import { Question, QuestionBlueprint, CognitiveLevel, Difficulty } from '../types';

/**
 * Data Acuan Matriks Kisi-Kisi Penulisan Soal Tes Sumatif
 * Kurikulum Merdeka - Fase C (Kelas 6) Mata Pelajaran Bahasa Bali
 * Lingkup Materi:
 * 1. Bangga Dados Warga Indonesia
 * 2. Kasumbungang Sangkaning Kawagedan
 * 3. Wirausaha
 * 4. Kepemimpinan
 */

export interface BlueprintDefinition {
  elemen: string;
  tujuanPembelajaran: string;
  indikatorSoal: string;
  levelKognitif: CognitiveLevel;
  bobotSkor: number;
}

// Peta acuan default 35 butir soal Bahasa Bali (30 PG, 5 PGK)
export const DEFAULT_BLUEPRINT_MAP: Record<number, BlueprintDefinition> = {
  1: {
    elemen: 'Membaca dan Memirsa (Ngwacen)',
    tujuanPembelajaran:
      'Peserta didik memahami sikap bangga dan cinta tanah air sebagai warga negara Indonesia melalui teks dan gambar berbahasa Bali.',
    indikatorSoal:
      'Disajikan gambar siswa mengikuti upacara bendera di Bali, peserta didik dapat menentukan makna sikap tertib dan khidmat sebagai wujud rasa bangga menjadi warga Indonesia.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  2: {
    elemen: 'Berbicara dan Mempresentasikan (Mabaos)',
    tujuanPembelajaran:
      'Peserta didik menjelaskan makna semboyan persatuan Indonesia dalam Bahasa Bali.',
    indikatorSoal:
      'Peserta didik dapat menentukan arti semboyan Bhinneka Tunggal Ika dalam Bahasa Bali secara tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  3: {
    elemen: 'Menulis (Nyurat Aksara Bali & Latin)',
    tujuanPembelajaran:
      'Peserta didik membaca dan mengalihaksarakan kalimat sederhana beraksara Bali ke Aksara Latin.',
    indikatorSoal:
      'Disajikan kalimat Aksara Bali tentang kebanggaan menjadi warga negara Indonesia, peserta didik dapat menentukan alih aksara Latin yang tepat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  4: {
    elemen: 'Menulis (Nyurat Aksara Bali & Latin)',
    tujuanPembelajaran:
      'Peserta didik membaca dan memahami penggunaan Angka Bali dalam konteks sejarah kemerdekaan Indonesia.',
    indikatorSoal:
      'Disajikan kalimat berisi Angka Bali tanggal kemerdekaan RI, peserta didik dapat mengonversinya menjadi angka Latin (17 dan 1945).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  5: {
    elemen: 'Menyimak (Mirengang)',
    tujuanPembelajaran:
      'Peserta didik memahami makna paribasa Bali yang berkaitan dengan persatuan dan gotong royong.',
    indikatorSoal:
      'Peserta didik dapat menentukan amanat paribasa "Sagilik-saguluk, salunglung sabayantaka" sebagai sikap hidup rukun dan bergotong royong.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  6: {
    elemen: 'Berbicara dan Mempresentasikan (Mabaos)',
    tujuanPembelajaran:
      'Peserta didik menerapkan sor-singgih Basa Bali Alus saat menghormati jasa pahlawan.',
    indikatorSoal:
      'Peserta didik dapat memilih kalimat berbahasa Bali Alus yang tepat dan sopan untuk mengenang jasa pahlawan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  7: {
    elemen: 'Menulis (Nyurat Aksara Bali & Latin)',
    tujuanPembelajaran:
      'Peserta didik menulis kruna berbahasa Bali dengan Aksara Bali menggunakan pengangge suara dan tengenan yang tepat.',
    indikatorSoal:
      'Peserta didik dapat memilih penulisan Aksara Bali yang benar untuk kata "Gotong royong" menggunakan taling tedong dan cecek (HOTS).',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  8: {
    elemen: 'Membaca dan Memirsa (Ngwacen)',
    tujuanPembelajaran:
      'Peserta didik menganalisis sikap warga negara yang bangga terhadap produk lokal dan budaya Indonesia.',
    indikatorSoal:
      'Disajikan wacana pendek tentang kebiasaan menggunakan produk lokal dan berbahasa daerah, peserta didik dapat menyimpulkan karakter warga negara yang cinta tanah air (HOTS).',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  9: {
    elemen: 'Membaca dan Memirsa (Ngwacen)',
    tujuanPembelajaran:
      'Peserta didik memahami kosakata Bahasa Bali pada topik Kasumbungang Sangkaning Kawagedan.',
    indikatorSoal:
      'Disajikan gambar siswa menari dan bermain gamelan Bali, peserta didik dapat menentukan arti kata "kasumbungang".',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  10: {
    elemen: 'Membaca dan Memirsa (Ngwacen)',
    tujuanPembelajaran:
      'Peserta didik mengenal piranti tradisional menulis Aksara Bali di atas daun lontar.',
    indikatorSoal:
      'Disajikan gambar guru membimbing siswa menulis di atas daun lontar, peserta didik dapat menyebutkan nama alat tulis pangrupak.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  11: {
    elemen: 'Menulis (Nyurat Aksara Bali & Latin)',
    tujuanPembelajaran:
      'Peserta didik membaca kalimat Aksara Bali bertema ketekunan belajar.',
    indikatorSoal:
      'Disajikan kalimat Aksara Bali tentang murid yang rajin belajar agar cakap (waged), peserta didik dapat menentukan bacaan Latinnya.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  12: {
    elemen: 'Menyimak (Mirengang)',
    tujuanPembelajaran:
      'Peserta didik menafsirkan nilai budi pekerti dalam pupuh Bali tentang kecakapan dan kerendahan hati.',
    indikatorSoal:
      'Disajikan kutipan Pupuh Ginada "Eda ngaden awak bisa, depang anake ngadanin", peserta didik dapat menentukan pesan moral untuk tetap rendah hati.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  13: {
    elemen: 'Menulis (Nyurat Aksara Bali & Latin)',
    tujuanPembelajaran:
      'Peserta didik membaca kata beraksara Bali yang menggunakan gantungan dan pepet.',
    indikatorSoal:
      'Disajikan kata beraksara Bali dengan gantungan ba dan pepet, peserta didik dapat membacanya menjadi "Gambelan".',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  14: {
    elemen: 'Membaca dan Memirsa (Ngwacen)',
    tujuanPembelajaran:
      'Peserta didik mengidentifikasi kruna lingga (kata dasar) dari kruna tiron dalam Bahasa Bali.',
    indikatorSoal:
      'Peserta didik dapat menentukan kata dasar (kruna lingga) dari kata "kasumbungang" yaitu "sumbung".',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  15: {
    elemen: 'Menulis (Nyurat Aksara Bali & Latin)',
    tujuanPembelajaran:
      'Peserta didik menentukan penulisan Aksara Bali yang benar dengan pepet dan adeg-adeg.',
    indikatorSoal:
      'Peserta didik dapat memilih sasuratan Aksara Bali yang tepat untuk kata "Kawagedan" (HOTS).',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  16: {
    elemen: 'Membaca dan Memirsa (Ngwacen)',
    tujuanPembelajaran:
      'Peserta didik menyimpulkan keteladanan tokoh yang berprestasi karena ketekunan berlatih.',
    indikatorSoal:
      'Disajikan cerita singkat siswa berprestasi pada lomba Bulan Bahasa Bali, peserta didik dapat menyimpulkan kunci keberhasilan meraih kecakapan (HOTS).',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  17: {
    elemen: 'Membaca dan Memirsa (Ngwacen)',
    tujuanPembelajaran:
      'Peserta didik mengenal konsep kegiatan wirausaha dalam konteks budaya dan ekonomi masyarakat Bali.',
    indikatorSoal:
      'Disajikan gambar warung seni dan UMKM lokal Bali, peserta didik dapat menentukan istilah kegiatan usaha mandiri tersebut sebagai wirausaha.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  18: {
    elemen: 'Menyimak (Mirengang)',
    tujuanPembelajaran:
      'Peserta didik memahami istilah ekonomi sederhana dalam Bahasa Bali (modal, bati, rugi).',
    indikatorSoal:
      'Disajikan ilustrasi jual beli jajan Bali, peserta didik dapat menentukan istilah "bati" untuk selisih keuntungan penjualan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  19: {
    elemen: 'Menulis (Nyurat Aksara Bali & Latin)',
    tujuanPembelajaran:
      'Peserta didik membaca kalimat Aksara Bali bertema kegiatan perdagangan tradisional di pasar.',
    indikatorSoal:
      'Disajikan kalimat Aksara Bali "Dagang jajan Bali ring pasar", peserta didik dapat menentukan bacaan Latinnya secara tepat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  20: {
    elemen: 'Berbicara dan Mempresentasikan (Mabaos)',
    tujuanPembelajaran:
      'Peserta didik menggunakan Basa Bali Alus yang santun saat berinteraksi dengan pembeli.',
    indikatorSoal:
      'Peserta didik dapat memilih ungkapan sapaan ramah berbahasa Bali Alus yang tepat bagi seorang wirausahawan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  21: {
    elemen: 'Menulis (Nyurat Aksara Bali & Latin)',
    tujuanPembelajaran:
      'Peserta didik membaca kruna beraksara Bali yang memuat pengangge suara pepet, ulu, dan adeg-adeg.',
    indikatorSoal:
      'Disajikan kata beraksara Bali, peserta didik dapat membacanya menjadi kata "Kerajinan".',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  22: {
    elemen: 'Menyimak (Mirengang)',
    tujuanPembelajaran:
      'Peserta didik memahami pentingnya nilai kejujuran dalam berwirausaha.',
    indikatorSoal:
      'Peserta didik dapat menentukan alasan pentingnya bersikap jujur dalam menimbang dan menjaga kualitas barang dagangan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  23: {
    elemen: 'Membaca dan Memirsa (Ngwacen)',
    tujuanPembelajaran:
      'Peserta didik menganalisis praktik wirausaha kreatif siswa sekolah dasar.',
    indikatorSoal:
      'Disajikan studi kasus siswa mengolah batok kelapa menjadi suvenir untuk bazar sekolah, peserta didik dapat menyimpulkan karakter wirausaha kreatif dan terencana (HOTS).',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  24: {
    elemen: 'Membaca dan Memirsa (Ngwacen)',
    tujuanPembelajaran:
      'Peserta didik memahami sikap pemimpin yang demokratis dan bijaksana dalam musyawarah banjar.',
    indikatorSoal:
      'Disajikan gambar musyawarah (sangkep) di Bale Banjar, peserta didik dapat menentukan karakter kepemimpinan yang demokratis dan bijaksana.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  25: {
    elemen: 'Menyimak (Mirengang)',
    tujuanPembelajaran:
      'Peserta didik memahami makna falsafah kepemimpinan keteladanan dalam Bahasa Bali.',
    indikatorSoal:
      'Peserta didik dapat menentukan makna sesanti "Ing Ngarso Sung Tuladha" dalam peran seorang pemimpin.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  26: {
    elemen: 'Menulis (Nyurat Aksara Bali & Latin)',
    tujuanPembelajaran:
      'Peserta didik membaca kalimat Aksara Bali tentang musyawarah pemimpin banjar dan warga.',
    indikatorSoal:
      'Disajikan kalimat Aksara Bali "Klian banjar masangkep sareng krama", peserta didik dapat menentukan bacaan Latinnya.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  27: {
    elemen: 'Berbicara dan Mempresentasikan (Mabaos)',
    tujuanPembelajaran:
      'Peserta didik mempraktikkan kalimat berbahasa Bali yang santun dan demokratis saat memimpin rapat kelas.',
    indikatorSoal:
      'Peserta didik dapat memilih kalimat pembuka musyawarah yang adil dan sopan bagi seorang ketua kelas.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  28: {
    elemen: 'Menulis (Nyurat Aksara Bali & Latin)',
    tujuanPembelajaran:
      'Peserta didik menulis dan mengidentifikasi sasuratan Aksara Bali bertema kepemimpinan yang jujur dan adil.',
    indikatorSoal:
      'Peserta didik dapat memilih penulisan Aksara Bali yang benar untuk frasa "Pemimpin jujur lan adil" dengan pasangan aksara dan tengenan yang tepat (HOTS).',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  29: {
    elemen: 'Menyimak (Mirengang)',
    tujuanPembelajaran:
      'Peserta didik memahami makna karakter pemimpin Satya Wacana.',
    indikatorSoal:
      'Peserta didik dapat menentukan arti istilah "Satya Wacana" sebagai sikap jujur dan menepati janji.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  30: {
    elemen: 'Berbicara dan Mempresentasikan (Mabaos)',
    tujuanPembelajaran:
      'Peserta didik memecahkan masalah perselisihan antarteman dengan sikap kepemimpinan yang adil.',
    indikatorSoal:
      'Disajikan studi kasus perselisihan siswa dalam kelompok belajar, peserta didik dapat menentukan tindakan mediasi ketua kelas yang adil dan bijaksana (HOTS).',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  31: {
    elemen: 'Membaca dan Memirsa (Ngwacen)',
    tujuanPembelajaran:
      'Peserta didik mengidentifikasi berbagai wujud sikap bangga menjadi warga negara Indonesia di sekolah.',
    indikatorSoal:
      'Disajikan gambar upacara bendera dan 3 pilihan perilaku, peserta didik dapat memilih seluruh perilaku yang mencerminkan rasa bangga menjadi warga Indonesia.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  32: {
    elemen: 'Menulis (Nyurat Aksara Bali & Latin)',
    tujuanPembelajaran:
      'Peserta didik membaca Aksara Bali dan mengevaluasi sikap siswa yang memiliki kecakapan (kawagedan).',
    indikatorSoal:
      'Disajikan gambar belajar lontar, kalimat Aksara Bali, dan 3 pilihan pernyataan, peserta didik dapat memilih seluruh pernyataan yang benar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  33: {
    elemen: 'Membaca dan Memirsa (Ngwacen)',
    tujuanPembelajaran:
      'Peserta didik menentukan prinsip jujur dan kreatif dalam berwirausaha.',
    indikatorSoal:
      'Disajikan gambar UMKM kerajinan Bali dan 3 pilihan sikap wirausaha, peserta didik dapat memilih seluruh perilaku wirausahawan yang baik.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  34: {
    elemen: 'Berbicara dan Mempresentasikan (Mabaos)',
    tujuanPembelajaran:
      'Peserta didik mengidentifikasi ciri-ciri pemimpin yang demokratis, adil, dan bertanggung jawab.',
    indikatorSoal:
      'Disajikan gambar sangkep di Bale Banjar dan 3 pilihan ciri kepemimpinan, peserta didik dapat memilih seluruh sikap pemimpin yang bijaksana.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  35: {
    elemen: 'Menulis (Nyurat Aksara Bali & Latin)',
    tujuanPembelajaran:
      'Peserta didik mengevaluasi ketepatan ejaan Pasang Aksara Bali pada beberapa kata baku.',
    indikatorSoal:
      'Disajikan 3 pilihan kata berbahasa Bali beserta Aksara Balinya, peserta didik dapat memilih seluruh penulisan Aksara Bali yang benar sesuai aturan pasang aksara (HOTS).',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
};

/**
 * Format label bentuk soal
 */
export function getBentukSoalLabel(type: string): string {
  switch (type) {
    case 'pg':
      return 'Pilihan Ganda (PG)';
    case 'pgk':
      return 'Pilihan Ganda Kompleks (PGK)';
    case 'pgk_kategori':
      return 'Benar / Salah (PGK Kategori)';
    default:
      return 'Pilihan Ganda';
  }
}

/**
 * Format label level kognitif
 */
export function getCognitiveLevelLabel(level: CognitiveLevel): string {
  switch (level) {
    case 'L1':
      return 'L1 (Pemahaman / Mengingat)';
    case 'L2':
      return 'L2 (Aplikasi / Penerapan)';
    case 'L3':
      return 'L3 (Penalaran / Analisis HOTS)';
    default:
      return 'L2 (Aplikasi)';
  }
}

/**
 * Mendapatkan format string ringkas kunci jawaban
 */
export function formatCorrectAnswer(q: Question): string {
  if (q.type === 'pg') {
    return typeof q.correctAnswer === 'string' ? q.correctAnswer : 'A';
  }
  if (q.type === 'pgk') {
    if (Array.isArray(q.correctAnswer)) {
      return q.correctAnswer.join(', ');
    }
    return String(q.correctAnswer || 'A');
  }
  if (q.type === 'pgk_kategori') {
    if (q.statements && q.statements.length > 0) {
      return q.statements
        .map((st, i) => `${i + 1}:${st.correctAnswer ? 'B' : 'S'}`)
        .join(', ');
    }
    return 'B/S';
  }
  return '-';
}

/**
 * Menghasilkan metadata blueprint lengkap untuk butir soal tertentu
 */
export function getQuestionBlueprint(q: Question, index: number): QuestionBlueprint {
  const def = DEFAULT_BLUEPRINT_MAP[q.id];

  const elemen =
    q.elemen ||
    (def ? def.elemen : inferElemenFromTopic(q.topic));

  const levelKognitif: CognitiveLevel =
    q.levelKognitif ||
    (def ? def.levelKognitif : inferLevelFromDifficulty(q.difficulty));

  const tujuanPembelajaran =
    q.tujuanPembelajaran ||
    (def
      ? def.tujuanPembelajaran
      : `Peserta didik mampu memahami dan menerapkan keterampilan berbahasa Bali pada topik ${q.topic}.`);

  const indikatorSoal =
    q.indikatorSoal ||
    (def
      ? def.indikatorSoal
      : `Disajikan stimulus tentang ${q.topic}, peserta didik dapat menentukan jawaban yang tepat.`);

  const bobotSkor = q.bobot || (def ? def.bobotSkor : 1);

  return {
    questionId: q.id,
    noSoal: index + 1,
    elemen,
    tujuanPembelajaran,
    materiPokok: q.topic,
    indikatorSoal,
    levelKognitif,
    levelKognitifLabel: getCognitiveLevelLabel(levelKognitif),
    bentukSoal: getBentukSoalLabel(q.type),
    kunciJawaban: formatCorrectAnswer(q),
    bobotSkor,
    difficulty: q.difficulty,
  };
}

function inferElemenFromTopic(topic: string): string {
  const t = topic.toLowerCase();
  if (t.includes('aksara') || t.includes('nyurat')) {
    return 'Menulis (Nyurat Aksara Bali & Latin)';
  }
  if (t.includes('mabaos') || t.includes('kepemimpinan')) {
    return 'Berbicara dan Mempresentasikan (Mabaos)';
  }
  if (t.includes('paribasa') || t.includes('mirengang')) {
    return 'Menyimak (Mirengang)';
  }
  return 'Membaca dan Memirsa (Ngwacen)';
}

function inferLevelFromDifficulty(diff: Difficulty): CognitiveLevel {
  if (diff === 'Mudah') return 'L1';
  if (diff === 'Sukar') return 'L3';
  return 'L2';
}

/**
 * Menghitung rekapitulasi distribusi kisi-kisi soal
 */
export function getBlueprintStatistics(questions: Question[]) {
  const total = questions.length;
  const blueprints = questions.map((q, idx) => getQuestionBlueprint(q, idx));

  const elemenCountMap: Record<string, number> = {};
  const levelCountMap: Record<CognitiveLevel, number> = { L1: 0, L2: 0, L3: 0 };
  const diffCountMap: Record<Difficulty, number> = { Mudah: 0, Sedang: 0, Sukar: 0 };
  const typeCountMap: Record<string, number> = { pg: 0, pgk: 0, pgk_kategori: 0 };

  blueprints.forEach((bp, idx) => {
    elemenCountMap[bp.elemen] = (elemenCountMap[bp.elemen] || 0) + 1;
    levelCountMap[bp.levelKognitif] = (levelCountMap[bp.levelKognitif] || 0) + 1;
    const q = questions[idx];
    if (q) {
      diffCountMap[q.difficulty] = (diffCountMap[q.difficulty] || 0) + 1;
      typeCountMap[q.type] = (typeCountMap[q.type] || 0) + 1;
    }
  });

  const elemenDistribution = Object.entries(elemenCountMap).map(([elemen, count]) => ({
    elemen,
    count,
    percentage: total > 0 ? Math.round((count / total) * 100) : 0,
  }));

  const levelDistribution = [
    {
      level: 'L1' as const,
      label: 'L1 (Pemahaman / C1-C2)',
      desc: 'Mengingat & Memahami konsep dasar',
      count: levelCountMap.L1,
      percentage: total > 0 ? Math.round((levelCountMap.L1 / total) * 100) : 0,
      color: 'blue',
    },
    {
      level: 'L2' as const,
      label: 'L2 (Aplikasi / C3)',
      desc: 'Menerapkan konsep pada konteks nyata',
      count: levelCountMap.L2,
      percentage: total > 0 ? Math.round((levelCountMap.L2 / total) * 100) : 0,
      color: 'emerald',
    },
    {
      level: 'L3' as const,
      label: 'L3 (Penalaran / C4-C6 HOTS)',
      desc: 'Menganalisis & memecahkan masalah kompleks',
      count: levelCountMap.L3,
      percentage: total > 0 ? Math.round((levelCountMap.L3 / total) * 100) : 0,
      color: 'amber',
    },
  ];

  const difficultyDistribution = [
    {
      difficulty: 'Mudah' as const,
      count: diffCountMap.Mudah,
      percentage: total > 0 ? Math.round((diffCountMap.Mudah / total) * 100) : 0,
      color: 'emerald',
    },
    {
      difficulty: 'Sedang' as const,
      count: diffCountMap.Sedang,
      percentage: total > 0 ? Math.round((diffCountMap.Sedang / total) * 100) : 0,
      color: 'blue',
    },
    {
      difficulty: 'Sukar' as const,
      count: diffCountMap.Sukar,
      percentage: total > 0 ? Math.round((diffCountMap.Sukar / total) * 100) : 0,
      color: 'rose',
    },
  ];

  const typeDistribution = [
    {
      type: 'pg',
      label: 'Pilihan Ganda (PG)',
      count: typeCountMap.pg,
      percentage: total > 0 ? Math.round((typeCountMap.pg / total) * 100) : 0,
    },
    {
      type: 'pgk',
      label: 'Pilihan Ganda Kompleks (PGK)',
      count: typeCountMap.pgk,
      percentage: total > 0 ? Math.round((typeCountMap.pgk / total) * 100) : 0,
    },
    ...(typeCountMap.pgk_kategori > 0
      ? [
          {
            type: 'pgk_kategori',
            label: 'Benar / Salah (PGK Kategori)',
            count: typeCountMap.pgk_kategori,
            percentage: total > 0 ? Math.round((typeCountMap.pgk_kategori / total) * 100) : 0,
          },
        ]
      : []),
  ];

  return {
    total,
    blueprints,
    elemenDistribution,
    levelDistribution,
    difficultyDistribution,
    typeDistribution,
  };
}
