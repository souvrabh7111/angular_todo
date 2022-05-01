import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Task } from "../shared/models/task.model";
import { TaskStorageService } from "../task-storage.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-task-edit",
  templateUrl: "./task-edit.component.html",
  styleUrls: ["./task-edit.component.scss"],
})
export class TaskEditComponent implements OnInit {
  task: Task;
  id;
  firstName = new FormControl("");
  lastName = new FormControl("");
  phone = new FormControl("");

  constructor(
    private storage: TaskStorageService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  // Load tasks on init
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.task = this.storage.get(params.get("id"));
      this.id = this.task.id;
      this.firstName.setValue(this.task.firstName);
      this.lastName.setValue(this.task.lastName);
      this.phone.setValue(this.task.phone);
    });
  }

  // Update the task and return to the list
  updateTask() {
    this.task = this.storage.update(this.id, this.firstName.value, this.lastName.value, this.phone.value);
    this.router.navigate(["/tasks"]);
  }
}
