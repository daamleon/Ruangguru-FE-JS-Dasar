function studyRecommendation(mathScore, physicsScore, englishScore) {
  if (mathScore < 80 && physicsScore < 75 && englishScore < 70) {
    return "Maaf, tidak ada rekomendasi yang dapat kami berikan.";
  }

  let recommendation = "Rekomendasi jurusan yang bisa dipilih: ";

  if (mathScore >= 85 && physicsScore >= 85 && englishScore >= 85) {
    recommendation += "Teknik Informatika;";
  }

  if (mathScore >= 80 && physicsScore >= 75) {
    recommendation += "Teknik;";
  }

  if (mathScore >= 80 && englishScore >= 70) {
    recommendation += "Ekonomi;";
  }

  if (englishScore >= 70) {
    recommendation += "Sastra Inggris;";
  }

  if (mathScore >= 80) {
    recommendation += "Matematika;";
  }

  if (physicsScore >= 75) {
    recommendation += "Fisika;";
  }

  return recommendation;
}
// console.log(studyRecommendation(0, 0, 0));
// console.log(studyRecommendation(80, 75, 70));
// console.log(studyRecommendation(85, 85, 85));
// console.log(studyRecommendation(80, 75, 85));
// console.log(studyRecommendation(80, 85, 70));
// console.log(studyRecommendation(85, 75, 70));
// console.log(studyRecommendation(85, 85, 70));
// console.log(studyRecommendation(80, 80, 85));
// console.log(studyRecommendation(85, 75, 85));
// console.log(studyRecommendation(85, 85, 85));

module.exports = studyRecommendation;
