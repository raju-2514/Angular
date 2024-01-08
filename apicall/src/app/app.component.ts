import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api_call';

  constructor(private user:UserService){
    this.user.getData().subscribe(data=>{
      console.warn(data);
    })
  }
}
