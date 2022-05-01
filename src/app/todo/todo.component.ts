import { Component, OnInit } from "@angular/core";
import { TaskStorageService } from "../task-storage.service";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.scss"],
})
export class TodoComponent implements OnInit {
  tasks;
  displayedColumns: string[] = [
    "id",
    "firstName",
    "lastName",
    "phone",
    "actions",
  ];

  constructor(private storage: TaskStorageService) {
    this.storage.init();
  }

  ngOnInit(): void {
    this.tasks = this.storage.getTasks();
  }

  // Remove the contact from the list
  delete(id): void {
    this.storage.delete(id);
    this.tasks = this.storage.getTasks();
  }
}
