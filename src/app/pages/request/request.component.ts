import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators  } from '@angular/forms';
import { SignUpService } from 'src/app/services/sign-up.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.sass']
})
export class RequestComponent implements OnInit {
  get f(){return this.requestForm.controls}
  title = 'client';
  opened = true
  toggleSidebar() { this.opened = !this.opened;  }
  submitForm(){
    let clientId:number = JSON.parse(localStorage.getItem("token") || '{}')
    let currentClient = {
      mark: this.requestForm.value.mark,
      model: this.requestForm.value.model,
      failure: this.requestForm.value.failure,
      clientId: clientId,
    }
    console.log(currentClient)
    this.sr.request(currentClient).subscribe(resp => {
      this.requestForm.reset()
    }
    )
  }
  
  
  public requestForm !: FormGroup;
  constructor( private router: Router, private fb: FormBuilder, private sr: SignUpService) {

  }
  ngOnInit(): void {
    this.requestForm = this.fb.group({
      mark: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      failure: new FormControl('', Validators.required)
    })
  }

}

