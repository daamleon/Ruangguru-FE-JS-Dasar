function studentStatus(name, studentId) {
  const facultyCodes = {
    FE: "Fakultas Ekonomi",
    FISIP: "Fakultas Ilmu Sosial dan Politik",
    FT: "Fakultas Teknik",
    FTIS: "Fakultas Teknologi Informasi dan Sains",
  };

  const programCodes = {
    21: "Ekonomi",
    22: "Manajemen",
    23: "Akuntansi",
    31: "Administrasi Publik",
    32: "Administrasi Bisnis",
    33: "Hubungan Internasional",
    41: "Teknik Sipil",
    42: "Arsitektur",
    51: "Matematika",
    52: "Fisika",
    53: "Informatika",
  };

  const facultyCode = studentId.match(/^[A-Z]+/)[0];
  const year = studentId.slice(facultyCode.length, facultyCode.length + 4);
  const programCode = studentId.slice(
    facultyCode.length + 4,
    facultyCode.length + 6
  );

  const faculty = facultyCodes[facultyCode];
  const program = programCodes[programCode];

  return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi ${program} pada ${faculty} sejak tahun ${year}.`;
}

module.exports = studentStatus;
