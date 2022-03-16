import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TodoComponent } from "./todo/todo.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TaskEditComponent } from "./task-edit/task-edit.component";
import { TaskViewComponent } from "./task-view/task-view.component";
import { TaskAddComponent } from "./task-add/task-add.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatTableModule,
  MatToolbarModule,
} from "@angular/material";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TaskEditComponent,
    TaskViewComponent,
    TaskAddComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
