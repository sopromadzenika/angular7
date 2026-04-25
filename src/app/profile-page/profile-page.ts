import { Component } from '@angular/core';
import { ProfileCard } from '../profile-card/profile-card';

@Component({
  selector: 'app-profile-page',
  imports: [ProfileCard],
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.css',
})
export class ProfilePage {
  parent = {
    name: 'Nika',
    role: 'Student',
    isOnline: true,
  };

  onchange(){
    if(this.parent.name === 'Nika'){
      this.parent.name = 'გიორგი';
    }else{
      this.parent.name = 'Nika'
    }
     if(this.parent.isOnline === true){
      this.parent.isOnline = false;
    }else{
      this.parent.isOnline = true;
    }
    
  }
}
