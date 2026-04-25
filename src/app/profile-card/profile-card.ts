import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-profile-card',
  imports: [MatCardModule],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.css',
})
export class ProfileCard {
  @Input() child!:{
    name: string;
    role: string;
    isOnline: boolean;
  }

  @Output() change = new EventEmitter();

  change1(){
    this.change.emit();
  }
}
