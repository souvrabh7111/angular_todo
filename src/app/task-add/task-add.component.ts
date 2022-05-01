import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { TaskStorageService } from "../task-storage.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-task-add",
  templateUrl: "./task-add.component.html",
  styleUrls: ["./task-add.component.scss"],
})
export class TaskAddComponent {
  firstName = new FormControl("");
  lastName = new FormControl("");
  phone = new FormControl("");


  constructor(private storage: TaskStorageService, private router: Router) {}

  // Create a task a redirect to the todo list
  createTask() {
    this.storage.add(this.firstName.value, this.lastName.value, this.phone.value);
    this.router.navigate(["/tasks"]);
  }
}
