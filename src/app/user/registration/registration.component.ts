import { Component, OnInit, Input } from '@angular/core';
import { UserDTO } from 'src/app/models/userDTO.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit 
{
    constructor(private usersService: UsersService) { }
    user: UserDTO = new UserDTO();
    
    ngOnInit() 
    { 
    }

    CreateNewAccount()
    {
        this.usersService.CreateAccount(this.user)
            .subscribe(
                (response) => {
                    console.log(response);
                },
                (error) => {
                    console.log(error.message)
                }
            );
    }
}
