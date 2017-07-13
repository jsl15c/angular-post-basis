import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  theUser:any = {};
  emailMsg:string = "";
  passwordMsg:string = "";

  constructor() { }

  ngOnInit() {
  }

  handleSubmission() {
    this.emailMsg = "";
    this.passwordMsg = "";
    if (!this.theUser.email) {
      this.emailMsg = 'Please provide an email';
    }

    else if (this.theUser.email.includes('@') === false) {
      this.emailMsg = "Please provide a valid email (username@me.com)";
    }

    else {
      this.emailMsg = "";
    }

    if (!this.theUser.password) {
      this.passwordMsg = 'Please provide a password';
    }

    else if (this.theUser.password === 'swordfish') {
      this.passwordMsg = "swordfish is not allowed";
    }

    else if (this.theUser.password.length !== 3) {
      this.passwordMsg = 'Please provide a password';
    }
    else if (/[0-9]/.test(this.theUser.password)) {
      this.passwordMsg  = 'Numbers are not valid';
    }
    // same after toLowerCase?
    else if (this.theUser.password !== this.theUser.password.toLowerCase()) {
      this.passwordMsg = 'Capital letters are not allowed';
    }


    else if (!/[^0-9A-Za-z]/.test(this.theUser.password)) {
      this.passwordMsg = 'Password requires symbols';
    }

    else {
      this.passwordMsg = '';
    }
  }
}
