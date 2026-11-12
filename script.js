const jadwal = {
  Senin: [
    ["UPC", "06.40 - 07.20", "Upacara", "UPACARA"],
    ["2", "07.20 - 08.00", "Sosiologi", "Syaiful Arif Hanafi"],
    ["3", "08.00 - 08.40", "Ekonomi", "Yovita Fillia Nanda"],
    ["4", "08.40 - 09.20", "Prakarya dan Kewirausahaan", "Nigi Prawitasari"],
    ["5", "09.20 - 10.00", "Prakarya dan Kewirausahaan", "Nigi Prawitasari"],
    ["IST", "10.00 - 10.20", "Istirahat", ""],
    ["6", "10.20 - 11.00", "Sosiologi", "Syaiful Arif Hanafi"],
    ["7", "11.00 - 11.40", "Sosiologi", "Syaiful Arif Hanafi"],
    ["8", "11.40 - 12.20", "Sosiologi", "Syaiful Arif Hanafi"],
    ["IST", "12.20 - 13.00", "Istirahat", ""],
    ["9", "13.00 - 13.40", "Seni dan Budaya", "Achmad Nur Fauzi"],
    ["10", "13.40 - 14.20", "Geografi", "Ibnu Hamdi"],
    ["11", "14.20 - 15.00", "Geografi", "Ibnu Hamdi"]
  ],

  Selasa: [
    ["1", "06.40 - 07.20", "Pendidikan Al Qur'an", "Guru Al-Qur'an XI"],
    ["2", "07.20 - 08.00", "Pendidikan Al Qur'an", "Guru Al-Qur'an XI"],
    ["3", "08.00 - 08.40", "Bahasa Inggris", "Yusakh Andriana Safi'i"],
    ["4", "08.40 - 09.20", "Bahasa Inggris", "Yusakh Andriana Safi'i"],
    ["5", "09.20 - 10.00", "Pendidikan Jasmani, Olahraga, dan Kesehatan", "Ulfan Fanani"],
    ["IST", "10.00 - 10.20", "Istirahat", ""],
    ["6", "10.20 - 11.00", "Pendidikan Jasmani, Olahraga, dan Kesehatan", "Ulfan Fanani"],
    ["7", "11.00 - 11.40", "Pendidikan Pancasila", "Darma Prasetya KW"],
    ["8", "11.40 - 12.20", "Pendidikan Pancasila", "Darma Prasetya KW"],
    ["IST", "12.20 - 13.00", "Istirahat", ""],
    ["9", "13.00 - 13.40", "Matematika", "Lailatul Chabibah"],
    ["10", "13.40 - 14.20", "Ekonomi", "Yovita Fillia Nanda"],
    ["11", "14.20 - 15.00", "Ekonomi", "Yovita Fillia Nanda"]
  ],

  Rabu: [
    ["1", "06.40 - 07.20", "Pendidikan Al Qur'an", "Guru Al-Qur'an XI"],
    ["2", "07.20 - 08.00", "Pendidikan Al Qur'an", "Guru Al-Qur'an XI"],
    ["3", "08.00 - 08.40", "Bahasa Jawa", "Ika Dewi Safitri"],
    ["4", "08.40 - 09.20", "Sejarah TL 2 (Moving)", "Nuzulul Fauziah"],
    ["5", "09.20 - 10.00", "Sejarah TL 2 (Moving)", "Nuzulul Fauziah"],
    ["IST", "10.00 - 10.20", "Istirahat", ""],
    ["6", "10.20 - 11.00", "Matematika", "Lailatul Chabibah"],
    ["7", "11.00 - 11.40", "Matematika", "Lailatul Chabibah"],
    ["8", "11.40 - 12.20", "Seni dan Budaya", "Achmad Nur Fauzi"],
    ["IST", "12.20 - 13.00", "Istirahat", ""],
    ["9", "13.00 - 13.40", "Bahasa Indonesia", "M. Mundir Hisyam"],
    ["10", "13.40 - 14.20", "Vokasi", "Puji Astuti"],
    ["11", "14.20 - 15.00", "Vokasi", "Puji Astuti"]
  ],

  Kamis: [
    ["1", "06.40 - 07.20", "Pendidikan Al Qur'an", "Guru Al-Qur'an XI"],
    ["2", "07.20 - 08.00", "Geografi", "Ibnu Hamdi"],
    ["3", "08.00 - 08.40", "Geografi", "Ibnu Hamdi"],
    ["4", "08.40 - 09.20", "Bahasa Indonesia", "M. Mundir Hisyam"],
    ["5", "09.20 - 10.00", "Bahasa Indonesia", "M. Mundir Hisyam"],
    ["IST", "10.00 - 10.20", "Istirahat", ""],
    ["6", "10.20 - 11.00", "Ekonomi", "Yovita Fillia Nanda"],
    ["7", "11.00 - 11.40", "Bahasa Inggris", "Yusakh Andriana Safi'i"],
    ["8", "11.40 - 12.20", "Sejarah", "Endah Sriwulan"],
    ["IST", "12.20 - 13.00", "Istirahat", ""],
    ["9", "13.00 - 13.40", "Sejarah", "Endah Sriwulan"],
    ["10", "13.40 - 14.20", "Vokasi", "Puji Astuti"],
    ["11", "14.20 - 15.00", "Vokasi", "Puji Astuti"]
  ],

  Jumat: [
    ["YSN", "06.45 - 07.00", "Yaasin", "Surat Yaasin"],
    ["2", "07.00 - 07.35", "Pendidikan Agama dan Budi Pekerti", "Moh. Fahmi H"],
    ["3", "07.35 - 08.10", "Pendidikan Agama dan Budi Pekerti", "Moh. Fahmi H"],
    ["4", "08.10 - 08.45", "Informatika", "Johan Andri Pratama"],
    ["5", "08.45 - 09.20", "Informatika", "Johan Andri Pratama"],
    ["IST", "09.20 - 09.35", "Istirahat", ""],
    ["6", "09.35 - 10.10", "Sejarah TL 2 (Moving)", "Nuzulul Fauziah"],
    ["7", "10.10 - 10.45", "Sejarah TL 2 (Moving)", "Nuzulul Fauziah"],
    ["8", "10.45 - 11.20", "Ahlussunnah Wal Jamaah", "M. Rif'an Muhajir"],
    ["JUM", "11.20 - 13.00", "Istirahat Jumat", ""],
    ["EKS", "13.00 - 15.00", "Ekstrakurikuler", "Pelatih Ekstrakurikuler"]
  ]
};

function tampilkanJadwal() {
  const hari = document.getElementById("hari").value;
  const daftar = document.getElementById("daftar");
  const judul = document.querySelector("#hasil h3");

  if (judul) {
    judul.textContent = "Jadwal Hari " + hari;
  }

  daftar.innerHTML = "";

  /** @type {string[][]} */
  const dataHari = jadwal[hari];

  dataHari.forEach((item) => {
    const kartu = document.createElement("div");
    kartu.className = "item-jadwal";

    kartu.innerHTML = `
      <strong>Jam ${item[0]}</strong>
      <p>Waktu: ${item[1]}</p>
      <p>Mata Pelajaran: ${item[2]}</p>
      ${item[3] ? `<p>Guru: ${item[3]}</p>` : ""}
    `;

    daftar.appendChild(kartu);
  });
}

document.getElementById("hari").addEventListener("change", tampilkanJadwal);

tampilkanJadwal();