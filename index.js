// student information and thei variable

let studentName = "Nenman";
let age = "20";
let isRegistered = true;
let department = "computer science";

let mathsScore = "85";
let physicsScore = "78";
let englishScore = 90;

let outstandingFees = 0;
let attendance = 85;

const schoolName = "ivory tower";

let phoneNumber = null;
let otherInformation;
let subjects = ["maths", "physics", "english"];


// data types investigation

console.log("15" + 5);
console.log("15" - 5);
console.log("15" * 2);
console.log("15" / 3);
console.log(10 + true);
console.log("10" == 10);
console.log("10" === 10);
console.log(typeof null);
console.log(typeof NaN);
console.log(Boolean("false") );
console.log(Boolean(""));


// variable data types

console.log("Student Name:", typeof studentName);
console.log("Age", typeof age);
console.log("Registration", typeof isRegistered);
console.log("maths Score:", typeof mathsScore);
console.log("Phone Number:", typeof phoneNumber);
console.log("Other Information:", typeof otherInformation);
console.log("Subjects:", typeof subjects);


//  VALIDATION AND TYPE COERCION

age = Number(age);
mathsScore = Number(mathsScore);
physicsScore = Number(physicsScore);
englishScore = Number(englishScore);

 console.log("age", typeof age)
 console.log("mathsScore", typeof mathsScore)
 console.log("physicsScore", typeof physicsScore)
 console.log("englishScore", typeof englishScore)


// Checking score

let scores = [mathsScore, physicsScore, englishScore];

let validScores = scores.every(function (score) {
    return Number.isFinite(score) && score >= 0 && score <= 100;
});

if (validScores) {
    console.log("All examination scores are valid.");
} else {
    console.log("Invalid examination score detected.");
}


// eligibility

if (
    age >= 18 &&
    isRegistered === true &&
    outstandingFees === 0 &&
    attendance >= 75
) {
    console.log(studentName + " is eligible for the examination.");
} else {
    console.log(studentName + " is not eligible for the examination.");

    if (age < 18) {
        console.log("Reason: Student is below 18.");
    }

    if (!isRegistered) {
        console.log("Reason: Student is not registered.");
    }

    if (outstandingFees > 0) {
        console.log("Reason: Outstanding fees have not been cleared.");
    }

    if (attendance < 75) {
        console.log("Reason: Attendance is below 75%.");
    }
}


//Score grading


if (validScores) {

    let totalScore = mathsScore + physicsScore + englishScore;

    let averageScore = totalScore / scores.length;

    let grade;

    if (averageScore >= 80) {
        grade = "A";
    } else if (averageScore >= 70) {
        grade = "B";
    } else if (averageScore >= 60) {
        grade = "C";
    } else if (averageScore >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    console.log("Total Score:", totalScore);
    console.log("Average Score:", averageScore);
    console.log("Grade:", grade);

} else {
    console.log("Scores cannot be calculated because some scores are invalid.");
}


//testing student records

let students = [
 
    {
        name: "John",
        age: 20,
        registered: true,
        fees: 0,
        attendance: 85,
        scores: [80, 75, 90]
    },

    {
        name: "Peter",
        age: 16,
        registered: true,
        fees: 0,
        attendance: 90,
        scores: [70, 80, 85]
    },

    {
        name: "Mary",
        age: 21,
        registered: false,
        fees: 0,
        attendance: 80,
        scores: [85, 90, 75]
    },

    {
        name: "David",
        age: 22,
        registered: true,
        fees: 5000,
        attendance: 90,
        scores: [80, 85, 90]
    },

    {
        name: "James",
        age: 20,
        registered: true,
        fees: 0,
        attendance: 85,
        scores: [80, "eighty", 90]
    }

];


students.forEach(function(student) {

    console.log("Student:", student.name);

    let studentScores = student.scores.every(Number);

    let scoresAreValid = student.scores.every(function(score) {
        return typeof score === "number" ||
            (typeof score === "string" && score.trim() !== "")
            ? Number.isFinite(Number(score)) &&
              Number(score) >= 0 &&
              Number(score) <= 100
            : false;
    });

    let eligible =
        student.age >= 18 &&
        student.registered === true &&
        student.fees === 0 &&
        student.attendance >= 75;

    console.log("Eligible:", eligible);
    console.log("Scores Valid:", scoresAreValid);

    if (scoresAreValid) {

        let total = student.scores.reduce(function(sum, score) {
            return sum + score;
        }, 0);

        let average = total / student.scores.length;

        console.log("Total:", total);
        console.log("Average:", average);

    } else {
        console.log("Invalid scores. Calculation rejected.");
    }

});