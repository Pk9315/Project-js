let name = "Pritam";
let age = 21;
let marks = 78;
let attendance = 82;
let grade;
if(age >= 18){
    console.log("Age Eligible")
}else {
    console.log("Age Not Eligible")
}
if(marks >= 90 && marks <= 100){
    grade = "A+"
}else if(marks >=80 && marks <= 89){
    grade = "A"

}else if(marks >= 70 && marks<= 79){
    grade = "B"
}else if(marks >= 60 && marks <= 69){
    grade =" C"
}else if(marks >= 50 && marks <= 59){
    grade = "D"
}else{
    grade = "Fail"
}
if(attendance >= 75){
    console.log("Attendance Eligible")
}else{
    console.log("Attendance shortage")
}
if(age >= 18 && marks >= 50 && attendance >=75){
    console.log("Student Passed")
}else{
    console.log("Student Failed")
}

if(marks >= 85 && attendance >= 90){
    console.log("Eligible for Scholarship")
}else{
    console.log("Not Eligible for scholarship")
}