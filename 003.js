/*
=================
Score data mining
=================

[INSTRUCTIONS]
Anda adalah seorang Data Scientist yang ditugaskan untuk mengolah data mentah
score ujian murid-murid ke dalam object informasi nilai yang mudah dibaca
berbentuk group-group yang berisi nilai 0-40, 41-80, 81-100, nilai rata-rata dan
murid dengan nilai tertinggi. buatlah <array of object> ke variable <scoreData>
dari table data berikut sebelum diolah.
┌────┬─────────────┬─────────────┬───────┬──────────┬─────┐
│ id │ first_name   │  last_name  │ score │  gender  │ age │
├────┼─────────────┼─────────────┼───────┼──────────┼─────┤
│ 1  │ 'Carrissa'  │  'Murley'   │  53   │ 'Female' │ 18  │
│ 2  │ 'Winifield'  │ 'Frisdick'  │  86   │  'Male'  │ 19  │
│ 3  │  'Romonda'  │  'Verling'  │  95   │ 'Female' │ 20  │
│ 4  │  'Yehudit'  │ 'Isakovic'  │  32   │  'Male'  │ 19  │
│ 5  │  'August'   │ "O' Mahony" │  73   │ 'Female' │ 21  │
│ 6  │   'Scott'   │   'Rubra'   │  51   │  'Male'  │ 18  │
└────┴─────────────┴─────────────┴───────┴──────────┴─────┘

[EXAMPLE]
Hasil yang diharapkan adalah object dengan format sebagai berikut:
{
  '0-40': [
       { id: 4, first_name: 'Yehudit', last_name: 'Isakovic', score: 32 },
       ...
  ],
  '41-80': [
      { ... },
      ...
  ],
  '81-100': [
       { ... },
       ...
  ],
  avg: 65,
  highestScore: {
      id: 3,
      first_name: 'Romonda',
      last_name: 'Verling',
      score: 95
  }
}
note: buang data murid yang tidak relevan di object hasil dari function,
contohnya: gender dan age.

[RULE]
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi string &
  array untuk pemecahan masalah.
- Dilarang hardcode, kecuali nama key.
- Dilarang menggunakan regex .match dan lainnya!
*/

function graduationDetail() {
  // code anda disini
  var result = {}
var member = 0
var total = 0
var high = scoreData[0].score
result = {
  avg : 0,
  highestScore: 0
}
for(i= 0; i<scoreData.length; i++){
  member++ 
  if(!result[scoreData[i].score]){
    result[scoreData[i].score] = []
  }
      var newObj = {
    id: 0,
    first_name : "",
    last_name : "",
    score : 0
  }
  if(high<scoreData[i].score){
    high = scoreData[i].score
  }
  newObj.id = scoreData[i].id
  newObj.first_name = scoreData[i].first_name
  newObj.last_name = scoreData[i].last_name
  newObj.score = scoreData[i].score
  result[scoreData[i].score].push(newObj)
  total = total + scoreData[i].score
  result.highestScore = high
  result.avg = Math.floor(total/member)
}

// if(result.totalMember === 0){
//   return "Invalid Data"
// }
return result

}

// silahkan isi data di sini
var scoreData = [
{ id: 1, first_name: 'Carrissa', last_name: 'Murley', score: 53 },
{ id: 2, first_name: 'Winifield', last_name: 'Frisdick', score: 86 },
{ id: 3, first_name: 'Romonda', last_name: 'Verling', score: 95 },
{ id: 4, first_name: 'Yehudit', last_name: 'Isakovic', score: 32 },
{ id: 5, first_name: 'August', last_name: "O' Mahony", score: 73 },
{ id: 6, first_name: 'Scott', last_name: 'Rubra', score: 51 },
]
console.log(graduationDetail(scoreData));

/*
{
'0-40': [
  { id: 4, first_name: 'Yehudit', last_name: 'Isakovic', score: 32 }
],
'41-80': [
  { id: 1, first_name: 'Carrissa', last_name: 'Murley', score: 53 },
  { id: 5, first_name: 'August', last_name: "O' Mahony", score: 73 },
  { id: 6, first_name: 'Scott', last_name: 'Rubra', score: 51 }
],
'81-100':[
  { id: 2, first_name: 'Winifield', last_name: 'Frisdick', score: 86 },
  { id: 3, first_name: 'Romonda', last_name: 'Verling', score: 95 }
],
avg: 65,
highestScore: { id: 3, first_name: 'Romonda', last_name: 'Verling', score: 95 }
}
*/