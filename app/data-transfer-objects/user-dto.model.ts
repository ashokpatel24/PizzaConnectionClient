import {AuthToken} from '../login/ts/models/auth-token.model';

export class UserDto {
    
    _authToken:AuthToken;
    
    constructor(private _id:number, private _salutation:string, private _firstName:string, private _lastName:string, 
                private _streetName:string, private _zipCode:string, private _cityName:string, private _userName:string, 
                private _password:string, success:boolean, token:string) {
        this._authToken = new AuthToken(success, token);
    }
     
    get id():number {
        return this._id;
    }
    
    get salutation():string {
        return this._salutation;
    }
    
    get firstName():string {
        return this._firstName;
    }
    
    get lastName():string {
        return this._lastName;
    }
    
    get streetName():string {
        return this._streetName;
    }
    
    get zipCode():string {
        return this._zipCode;
    }
    
    get cityName():string {
        return this._cityName;
    }
    
    get userName():string {
        return this._userName;
    }
    
    get password():string {
        return this._password;
    }
    
    set id(value:number) {
        this._id = value;
    }
    
    set salutation(value:string){
        this._salutation = value;
    }
    
    set firstName(value:string) {
        this._firstName = value;
    }
    
    set lastName(value:string) {
        this._lastName = value;
    }
    
    set streetName(value:string) {
        this._streetName = value;
    }
    
    set zipCode(value:string) {
        this._zipCode = value;
    }
    
    set cityName(value:string) {
        this._cityName = value;
    }
    
    set userName(value:string) {
        this._userName = value;
    }
    
    set password(value:string) {
        this._password = value;
    }
    
    get authToken():AuthToken {
        return this._authToken;
    }
    
    set authToken(value:AuthToken) {
        this._authToken = value;
    }
    
    public static fromJson(data:any):UserDto {
        return new UserDto(data._id, data._salutation, data._firstName, data._lastName, data._streetName, data._zipCode, data._cityName, data._userName, data._password, data.authToken.success, data.authToken.token);
    }
}