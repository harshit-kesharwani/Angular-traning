import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { Userinfo } from '../userinfo';

@Component({
  selector: 'app-userinfoform',
  templateUrl: './userinfoform.component.html',
  styleUrls: ['./userinfoform.component.css']
})
export class UserinfoformComponent {


  model = new Userinfo("HarshitKesharwani","harshit","harshitkesharwani18@gmail.com","9696750061","Kesharwani");

  submitted = false;

  onSubmit() { this.submitted = true; }}
