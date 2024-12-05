const studentsData = ["ali", "ali", "talha", "umair", "adil"];

function findStudents(allStudents, studentName) {
  for (let i = 0; i < studentsData.length; i++) {
    if (allStudents[i] === studentName) {
      console.log(`find student ${studentName}`);
    }
  }
}

findStudents(studentsData, "ali");

// 3
