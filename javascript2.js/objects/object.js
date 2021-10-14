let classObj = {
  name: "class A",
  teacherName: "Mary",
  students: [
    {
      name: "Ravi",
      id: "101",
      marks: [
        { subject: "English", mark: 25 },
        { subject: "Maths", mark: 48 },
        { subject: "Physics", mark: 40 },
        { subject: "Chemistry", mark: 30 },
        { subject: "Computer", mark: 20 },
      ],
    },
    {
      name: "Aju",
      id: "102",
      marks: [
        { subject: "English", mark: 35 },
        { subject: "Maths", mark: 38 },
        { subject: "Physics", mark: 33 },
        { subject: "Chemistry", mark: 34 },
        { subject: "Computer", mark: 30 },
      ],
    },
    {
      name: "Mini SS",
      id: "103",
      marks: [
        { subject: "English", mark: 12 },
        { subject: "Maths", mark: 49 },
        { subject: "Physics", mark: 18 },
        { subject: "Chemistry", mark: 30 },
        { subject: "Computer", mark: 40 },
      ],
    },
    {
      name: "Binu",
      id: "104",
      marks: [
        { subject: "English", mark: 49 },
        { subject: "Maths", mark: 49 },
        { subject: "Physics", mark: 47 },
        { subject: "Chemistry", mark: 46 },
        { subject: "Computer", mark: 50 },
      ],
    },
  ],
};

// Add student , and It should accept name,id
//     const student1 = {
//         name : "Akhil",
//         id : "100"
//     }

//     const student2= {
//         name : "Arun",
//         id : "1003",
//         marks : [
//             {subject: "English", mark: 09},
//             {subject: "biology", mark: 88},
//             {subject: "philosophy", mark: 234}

//         ]
//     }


// Enter mark for a student
// const addStudent=(student)=>{
//     classObj.students.push(student);
// }

// addStudent(student2);
// addStudent(student1);


// console.log(classObj);


// console.log(classObj.students[0].marks[1].mark);





// Enter mark for a subject for multiple students
// let speMarks = classObj.students;

// function fountMark() {

// for (let i=0;i<=speMarks.length-1;i++) {

// console.log(speMarks[i].marks[0].mark);
// }


// }

// fountMark()




//  Edit mark for a particular subject of a student
// let newmark = classObj.students[0].marks[3].mark = 16.8;

// console.log(classObj.students[0]);


// Change the class teacher of a class
// let teacher = classObj.teacherName = "Jahnvi";
// console.log(classObj);


// remove a student from a class
// delete classObj.students[1];

// console.log(classObj);


// Delete a subject entry from every students
// function deleteSubject() {
//     let delSub = classObj.students

//     for(let i=0;i<delSub.length;i++) {
//         delete delSub[i].marks[0]
//     }
//     return delSub;
// }
// deleteSubject();

console.log(classObj);
