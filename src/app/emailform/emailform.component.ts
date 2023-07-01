import { Component } from '@angular/core';

@Component({
  selector: 'app-emailform',
  templateUrl: './emailform.component.html',
  styleUrls: ['./emailform.component.css']
})
export class EmailformComponent {
  email: string = '';
  isSubmitted: boolean = false;
  submittedEmail: string = '';

  onSubmit() {
    this.isSubmitted = true;
    this.submittedEmail = this.email;
  }
}
