import { Component } from '@angular/core';
import { UserDataService } from './services/user-data.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routingDemo';
  appdata=[
    {name:'raju',email:'raju@gmail.com'},
    {name:'raju',email:'raju@gmail.com'}
  ]
  users:any='';
 constructor(private userdata:UserDataService)
 {
  userdata.getusers().subscribe((data)=>{
    console.warn("data",data)
    this.users=data})
   
 }  
}
