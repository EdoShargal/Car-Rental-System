import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    readonly URL: string = "http://localhost:57247/api/users"

    constructor(private http:  HttpClient) {}

    addUser(user: User){
        this.http.post(this.URL, user).subscribe(
            (user) => console.log(user),
            (err) => console.log(err)
        )
        console.log("SENT: " + user)
    }
    
}