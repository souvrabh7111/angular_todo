export class Task {
  id: number;
  firstName: string;
  lastName: string;
  phone: number;

  constructor(firstName: string = "", lastName: string = "", phone:number = null, id: number = null) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.id = id;
  }
}
