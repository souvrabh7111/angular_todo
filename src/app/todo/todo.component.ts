import { Component, OnInit } from "@angular/core";
import { TaskStorageService } from "../task-storage.service";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.scss"],
})
export class TodoComponent implements OnInit {
  tasks;
  displayedColumns: string[] = ["id", "title", "note", "actions"];

  constructor(private storage: TaskStorageService) {}

  ngOnInit(): void {
    this.storage.init();
    this.tasks = this.storage.getTasks();
  }

  // Remove the tasks from the list
  delete(id): void {
    this.storage.delete(id);
    this.tasks = this.storage.getTasks();
  }
}
