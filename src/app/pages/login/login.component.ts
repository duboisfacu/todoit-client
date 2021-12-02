import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpService } from 'src/app/services/sign-up.service';
import { FormBuilder, FormControl, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  get f(){return this.loginForm.controls}

  submitForm(){
    this.li.login(this.loginForm.value.email,this.loginForm.value.password)
    .subscribe(resp => {
      localStorage.setItem("token", JSON.stringify(resp.id));
      localStorage.setItem("name", JSON.stringify(resp.fullName));
      this.navigate('panel')
    }, error => {
      this.exist = true
      this.loginForm.controls['email'].setErrors({'incorrect': true});
      this.loginForm.controls['password'].setErrors({'incorrect': true});
    }
    )
  }

  public loginForm !: FormGroup;
  public exist = false;
  constructor(private router: Router, private fb: FormBuilder, private li: SignUpService) {  }
  navigate(prop:string) {
    this.router.navigate([`/${prop}`]);
}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

}