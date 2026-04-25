import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfilePage } from './profile-page/profile-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfilePage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ang7');
}
