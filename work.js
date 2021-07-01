const students = {
    1: {
      "name": "Kanika",
      "age": 23
    },
    2: {
      "name": "Lava",
      "age": 23
    },
    3: {
      "name": "Ash",
      "age": 24
    },
    4: {
      "name": "Vishwanath",
      "age": 21
    }
  }
  let rollno = 1

function getByRoll(roll_no){
  return JSON.stringify(students[roll_no])
}

function addMarks(marks){
  for(key in students){
    students[key].marks = 80;
  }
}
addMarks(80);
console.log(students);