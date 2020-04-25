import { Component } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators, FormControl, ControlContainer } from '@angular/forms';

function userNameValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^a/)) {
    return { invalidUser: true }
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) export class AppComponent {
  // 对应我们登录的表单 
  myForm: FormGroup;
  // 输入用户名的输入控件 
  userName: AbstractControl;
  // 输入密码的输入控件 
  password: AbstractControl;
  constructor(private fb: FormBuilder) {
    // 创建表单  
    this.myForm = this.fb.group(
      {
        'userName': ['aaa', Validators.compose([Validators.required, userNameValidator])],
        'password': ['', Validators.compose([Validators.required, Validators.minLength(5)])]
      });
    this.userName = this.myForm.controls['userName'];
    this.password = this.myForm.controls['password'];
  }
  onSubmit(value: any) {
    console.log(value);
  }
}
