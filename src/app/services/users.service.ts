import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UserDTO } from "../models/userDTO.model";
import { environment } from "src/environments/environment";
import { Injectable, EventEmitter } from "@angular/core";
import { JwtHelperService } from '@auth0/angular-jwt';
import { elementStyleProp } from "@angular/core/src/render3";
import { Router } from "@angular/router";

@Injectable({providedIn: 'root'})
export class UsersService 
{
    helper = new JwtHelperService();
    userName = new EventEmitter<string>();

    constructor(private httpClient: HttpClient) {}

    CreateAccount(user: UserDTO)
    {
        return this.httpClient.post(`${environment.API_URL}users/add`, user); 
    }

    Authorize(username: string, password: string)
    {
        const user = `grant_type=password&username=${username}&password=${password}`;
        const header: HttpHeaders = new HttpHeaders( {'ContentType' : 'application/x-www-form-urlencoded'} );
        return this.httpClient.post(`${environment.API_URL}oauth2/token`, user, { headers: header } ); 
    }

    Login(token: string)
    {
        const decodedToken = this.helper.decodeToken(token);
        
        localStorage.setItem('token', token);
        localStorage.setItem('name', decodedToken.unique_name);
        localStorage.setItem('userId', decodedToken.nameid);
        
        this.userName.emit(localStorage.getItem('name'));
    }

    IsAuthorized(): boolean
    {
        const token: any = localStorage.getItem('token');
        if (token.length > 0)
        {
            const decodedToken = this.helper.decodeToken(token);
            
            if (decodedToken.exp > new Date().getDate())
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        return false;
    }
}