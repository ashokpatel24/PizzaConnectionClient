export class AccountDto {
    
    _salutation:string;
    _firstName:string;
    _lastName:string;
    _streetName:string;
    _zipCode:string;
    _cityName:string;
    _userName:string;
    _password:string;
    
    constructor() {}
        
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
}