import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { UserService } from './user.service'
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public userModel: User
  public users: User[]

  constructor(private userService: UserService,private http:  HttpClient) {}

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

  getAll(){
    this.http.get("http://localhost:57247/api/users").subscribe(
      (result) => console.log(result),
      (err) => console.log(err)
    )
  }

}
