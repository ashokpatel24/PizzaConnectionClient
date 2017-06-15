export class UserAuthDto {
    
    constructor( private _userName:string, private _password:string) {}
    
    getuserName(): string { return this._userName; }
    get password(): string { return this._password; }
    set userName(value: string) { this._userName = value; }
    set password(value: string) { this._password = value; }
}