export class Person {
  constructor(birthDate, email, firstName, lastName, phone) {
    this.birthDate = birthDate;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
  }

  displayInfo() {
    return `${this.firstName} ${this.lastName}`;
  }
}

export class Teacher extends Person {
  constructor(birthDate, email, firstName, lastName, phone, expertise) {
    super(birthDate, email, firstName, lastName, phone);
    this.expertise = expertise;
  }

  displayInfo() {
    return `${this.firstName} ${this.lastName} (${this.expertise})`;
  }
}
export class Student extends Person {
  constructor(birthDate, email, firstName, lastName, phone, studentId) {
    super(birthDate, email, firstName, lastName, phone);
    this.studentId = studentId;
  }
}
export class Employee extends Person {
  constructor(
    birthDate,
    email,
    firstName,
    lastName,
    phone,
    hireDate,
    employeeNumber
  ) {
    super(birthDate, email, firstName, lastName, phone);
    this.hireDate = hireDate;
    this.employeeNumber = employeeNumber;
  }
}
