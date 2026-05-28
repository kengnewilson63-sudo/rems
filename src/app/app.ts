import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from "./list.component/list.component";
import { FormComponent } from "./form.component/form.component";

@Component({
  selector: 'app-root',
  imports: [ ListComponent, FormComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  protected readonly title = signal('staff-app');
}
