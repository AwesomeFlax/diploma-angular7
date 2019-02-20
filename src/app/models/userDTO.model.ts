export class UserDTO
{
    email: string;
    firstName: string;
    lastName: string;
    nickName: string;
    gender: string;
    roleName: string;
    userPhotoUrl: string;
    birthDate: Date;
    password: string;
    confirmPassword: string;

    constructor()
    {
        this.email = "";
        this.firstName = "";
        this.lastName = "";
        this.nickName = "";
        this.gender = "";
        this.roleName = "";
        this.userPhotoUrl = "";
        this.birthDate = null;
        this.password = "";
        this.confirmPassword = "";
    }
}