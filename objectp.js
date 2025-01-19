const student = {
    name: "Alice",
    grades: [85, 90, 78],
    addGrade(grade) {
      // Add grade to grades array
    },
    calculateAverage() {
      // Calculate and return average grade
    },
  };
  
  // Example Usage
  student.addGrade(92);
  console.log(student.grades); // Output: [85, 90, 78, 92]
  console.log(student.calculateAverage()); // Output: 86.25
  