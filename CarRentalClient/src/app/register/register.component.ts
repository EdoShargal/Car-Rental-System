import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { UserService } from './user.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public userModel: User

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userModel = {
      firstName: "",
      lastName: "",
      userId: "",
      username: "",
      gender: null,
      email: "",
      password: "",
      confirmPassword: "",
      dayOfBirth: null,
      image: null,
      title: null,
    }
  }

  register(){
    console.log("from register componetn")
    console.log(this.userModel)

    this.userService.addUser(this.userModel)
  }

  reset(){
    this.userModel = {
      firstName: "",
      lastName: "",
      userId: "",
      username: "",
      gender: null,
      email: "",
      password: "",
      confirmPassword: "",
      dayOfBirth: null,
      image: null,
      title: null,
    }
  }

}
