var students = [
    {
        name: "Ali khan",
        grades: [50, 60, 70, 80, 90]
    },
    {
        name: 'talha khan',
        grades: [60, 70, 79, 80, 81]
    },
    {
        name: "haider ali",
        grades: [60, 70, 70, 80, 87]
    }
];
function calculateAverageGrade(grades) {
    var average = 0;
    for (var _i = 0, grades_1 = grades; _i < grades_1.length; _i++) {
        var grade = grades_1[_i];
        average += grade;
    }
    return average / grades.length;
}
for (var i = 0; i < students.length; i++) {
    var avg = calculateAverageGrade(students[i].grades);
    console.log("student names of ".concat(students[i].name, " student avg ").concat(avg));
}
