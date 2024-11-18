function process_argv() {
  const { argv } = process;
  const result = krsApplication(argv[2], argv[3], argv[4]);

  return result;
}

function krsApplication(name, programId, gpa) {
  const programs = {
    ACC: "Akuntansi",
    HIN: "Hubungan Internasional",
    IAB: "Ilmu Administrasi Bisnis",
    IAP: "Ilmu Administrasi Publik",
    MJN: "Manajemen",
    TKM: "Teknik Kimia",
  };

  const numericGpa = parseFloat(gpa);
  if (numericGpa < 0 || numericGpa > 4) {
    return "Invalid gpa number";
  }

  let sks = 0;
  let message = "";

  if (numericGpa >= 3) {
    sks = 24;
    message = `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu dapat mengambil SKS sebanyak ${sks} SKS untuk semester depan.`;
  } else if (numericGpa >= 2.5) {
    sks = 21;
    message = `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi ${programs[programId]} dan hanya dapat mengambil SKS sebanyak ${sks} SKS untuk semester depan.`;
  } else if (numericGpa >= 2) {
    sks = 18;
    message = `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi ${programs[programId]} dan hanya dapat mengambil SKS sebanyak ${sks} SKS untuk semester depan.`;
  } else if (numericGpa >= 1.5) {
    sks = 15;
    message = `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi ${programs[programId]} dan hanya dapat mengambil SKS sebanyak ${sks} SKS untuk semester depan.`;
  } else {
    sks = 12;
    message = `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi ${programs[programId]} dan hanya dapat mengambil SKS sebanyak ${sks} SKS untuk semester depan.`;
  }

  return message;
}

// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
  console.log(process_argv());
}

module.exports = krsApplication;
