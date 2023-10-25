import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder,Validator, Validators  } from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  submitted=false
  hide=true

  constructor(private router:Router,private route:ActivatedRoute,private Fb:FormBuilder){}
  add(){
    this.router.navigate(['/product']);
  }


  LoginForm =this.Fb.group({
    email:['hy',[Validators.required,Validators.email]],
    password:['',[Validators.required]]

  })
  get AllControls(){
    return this.LoginForm.controls
  }
  OnSubmit(values:any){
    this.submitted=true
    console.log(values);
    
  }
}
