var persons = [{
  id: 1,
  "first name": "Andy",
  last_name: "Klouz",
  email: "andy0@gmail.com",
  gender: "Male",
  age: 33,
  score: 80
}, {
  id: 2,
  "first name": "Refi",
  last_name: "Castagne",
  email: "refi@gmail.com",
  gender: "Male",
  age: 22,
  score: 75
}, {
  id: 3,
  "first name": "Irvy",
  last_name: "Florence",
  email: "irvy@gmail.com",
  gender: "Male",
  age: 24,
  score: 78
}, {
  id: 4,
  "first name": "Karin",
  last_name: "Petkens",
  email: "karin@gmail.com",
  gender: "Female",
  age: 25,
  score: 98
}, {
  id: 5,
  "first name": "Shadow",
  last_name: "Manuely",
  email: "shadow@gmail.com",
  gender: "Male",
  age: 21,
  score: 76
},
{
  id: 5,
  "first name": "Anita",
  last_name: "Manuely",
  email: "anita@gmail.com",
  gender: "MaleFemale",
  age: 21,
  score: 76
},
]


var object = {};
for(var i = 0; i<persons.length; i++){
if(object[persons[i].gender]=== undefined){

  object[persons[i].gender] ={
    persons: [],
    topScore: 0,
    topScorer: 0,
    avg: 0,
    };
}
  var newObj = {}
  for(x in persons[i]){
    if(x !=="gender"){
    newObj[x] = persons[i][x] 
    }
  }
  object[persons[i].gender].persons.push(newObj)
}
for(gender in object){
  // console.log(object[gender].persons.length)
  var topScore = 0;
  var topScorer ="";
  var sum = 0;
  for( var i = 0; i<object[gender].persons.length; i++){
    sum += object[gender].persons[i].score
    if(topScore < object[gender].persons[i].score){
    topScore = object[gender].persons[i].score
    topScorer = object[gender].persons[i]["first name"]
    }
    object[gender].topScore = topScore
    object[gender].topScorer = topScorer
    object[gender].avg = sum/object[gender].persons.length
  }
}
console.log(JSON.stringify(object, "", "\t"));