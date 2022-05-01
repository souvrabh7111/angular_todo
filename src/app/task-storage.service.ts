import { Injectable } from "@angular/core";
import { initialTasks } from "../assets/todo-list.json";
import { Task } from "../app/shared/models/task.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class TaskStorageService {
  tasks: Task[] = [];
  initialized: boolean = false;

  constructor(private http: HttpClient) {}

  getTasks(): Task[] {
    this.init();
    return this.tasks;
  }

  getContactsFromAPI() {
    this.http
      .get(
        "https://my-json-server.typicode.com/voramahavir/contacts-mock-response/contacts"
      )
      .subscribe((data: Task[]) => {
        data.forEach((x) => {
          this.tasks.push(x);
        });
      });
  }

  // Remove the contact from the list
  delete(id) {
    let remaining_tasks: Task[] = [];
    for (let i = 0; i < this.tasks.length; i++) {
      var current_task = this.tasks[i];
      // task to remove, do not include it in new array
      if (id == current_task.id) {
        console.log(
          "Skipping contact[" +
            current_task.firstName +
            current_task.firstName +
            "]"
        );
        continue;
      }
      remaining_tasks.push(this.tasks[i]);
    }
    this.tasks = remaining_tasks;
    return true;
  }

  // Return the contact based in the given id
  get(id): Task {
    this.init();
    for (let i = 0; i < this.tasks.length; i++) {
      let task = this.tasks[i];
      // skip returning is id dosnt matches
      if (task.id != id) {
        continue;
      }
      return task;
    }
    return null;
  }

  // Create a new contact based on the given data (+ generate a new id)
  add(firstName, lastName, phone) {
    let task = new Task(firstName, lastName, phone, this.getHighestId() + 1);
    this.tasks.push(task);
  }

  // Update the contact and return it
  update(id, firstName: string, lastName: string, phone: number): Task {
    let task = this.get(id);
    task.firstName = firstName;
    task.lastName = lastName;
    task.phone = phone;
    return task;
  }

  // Load contacts from json file
  init(useAPIData = true) {
    if (this.initialized) {
      console.log("Already initialized");
      return;
    }
    if (useAPIData) {
      this.getContactsFromAPI();
    } else {
      for (let i = 0; i < initialTasks.length; i++) {
        this.tasks.push(
          new Task(
            initialTasks[i]["firstName"],
            initialTasks[i]["lastName"],
            initialTasks[i]["phone"],
            initialTasks[i]["id"]
          )
        );
      }
    }

    this.initialized = true;
  }

  // Returns highest contact id from list.
  getHighestId(): number {
    let highest: number = 0;
    this.init();
    this.tasks.forEach(function (current_task: Task) {
      if (current_task.id < highest) {
        return;
      }
      highest = current_task.id;
    });
    return highest;
  }
}
