import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators  } from '@angular/forms';
import { SignUpService } from '../../services/sign-up.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent implements OnInit {
  
  get f(){return this.signupForm.controls}


  submitForm(){
    this.su.register(this.signupForm.value)
    .subscribe(res=>{})
    this.signupForm.reset()
    this.isSent = true
  }
  navigate(prop:string) {
    this.router.navigate([`/${prop}`]);
}
  public signupForm !: FormGroup;
  public isSent = false;
  constructor(
    private fb: FormBuilder,
    private su: SignUpService,
    private router: Router
    ) {  }

    ngOnInit(): void {
      this.signupForm = this.fb.group({
        fullName: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
        address: new FormControl('', Validators.required),
        cellPhone: new FormControl('', Validators.required),
      })
      
    }
  }