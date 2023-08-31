function Student(name, age, grade) {
  this.name = name;
  this.age = age;
  this.grade = grade;
}
//  Tried to generate permanent objects by assigning the data entered a unique ID then using that ID to prompt for info, but could not figure out how to use a value of a variable as the name of a new variable.
// newStudent = (
//   name = prompt("Enter Name"),
//   age = prompt("Enter Age"),
//   grade = prompt("Enter Grade")
// ) => {
//   let idNumber = Date.now() + Math.random();

//   alert(idNumber);
// };

newStudent = (
  name = prompt("Enter Name"),
  age = prompt("Enter Age"),
  grade = prompt("Enter Grade")
) => {
  grade = grade + "th";
  const student = new Student(name, age, grade);
  alert(`${name} is ${age} and is in the ${grade} grade`);
};
