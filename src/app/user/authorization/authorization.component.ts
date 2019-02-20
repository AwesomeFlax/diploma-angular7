import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
    selector: 'app-authorization',
    templateUrl: './authorization.component.html',
    styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

    token: string;
    @ViewChild('login') login: ElementRef;
    @ViewChild('pass') pass: ElementRef;

    constructor(private usersService: UsersService) { }
    ngOnInit() { }

    Authorize()
    {
        const login = this.login.nativeElement.value;
        const password = this.pass.nativeElement.value;

        console.log(login);
        console.log(password);

        this.usersService.Authorize(login, password)
            .subscribe(
                (response: any) => {
                    this.token = response.access_token;
                    this.usersService.Login(this.token);
                },
                (error) => {
                    console.log(error.message)
                }
            )
    }
}
