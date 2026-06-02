// Student Data
let students = [
    {
        name: "Navneetha",
        marks: [85, 90, 88]
    },
    {
        name: "Vijay",
        marks: [78, 82, 80]
    },
    {
        name: "Kiran",
        marks: [92, 95, 94]
    }
];

// Function to calculate average
function calculateAverage(marks) {
    let sum = 0;

    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }

    return sum / marks.length;
}

// Display student details
students.forEach(student => {
    let avg = calculateAverage(student.marks);

    console.log("Name:", student.name);
    console.log("Marks:", student.marks);
    console.log("Average:", avg.toFixed(2));
    console.log("----------------------");
});
function getGrade(avg) {
    if (avg >= 90) return "A";
    else if (avg >= 75) return "B";
    else if (avg >= 50) return "C";
    else return "Fail";
}

students.forEach(student => {
    let avg = calculateAverage(student.marks);
    let grade = getGrade(avg);

    console.log("Name:", student.name);
    console.log("Average:", avg.toFixed(2));
    console.log("Grade:", grade);
    console.log("----------------------");
});