import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormGroup} from '@angular/forms';
@Component({
  selector: 'app-signin-signup',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './signin-signup.component.html',
  styleUrl: './signin-signup.component.css'
})
export class SigninSignupComponent {
  regForm:boolean= false;
  signUpfrom!:FormGroup;
  signInfrom!:FormGroup;
}
