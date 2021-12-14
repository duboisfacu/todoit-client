import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators  } from '@angular/forms';
import { SignUpService } from '../../services/sign-up.service';
import { User } from 'src/app/components/model/user';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent implements OnInit {
  
  get f(){return this.signupForm.controls}


  submitForm(){
    this.su.register(this.signupForm.value)
    .subscribe(res =>{
      console.log(res.id)
      let obje = {
        id: res.id,
        email: this.signupForm.value.email,
        fullName: this.signupForm.value.fullName ,
        address: this.signupForm.value.address,
        cellPhone: this.signupForm.value.cellPhone,
        password: this.signupForm.value.password ,
        isAccepted: true,
        isDeleted: false,
        rol: {
          id:3
        }
      }      
      this.su.Altaregister(obje).subscribe(res2 =>{
        console.log(res2)})
    })
    // this.signupForm.reset()
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