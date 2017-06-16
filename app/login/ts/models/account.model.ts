import { Injectable } from '@angular/core';

@Injectable()
export class Account {
    _id:number;
    _salutation:string;
    _firstName:string;
    _lastName :string;
    _streetName:string;
    _zipCode:string;
    _cityName:string;
    _userName:string;
    _password:string;
    
    constructor() {}
    
    validate(createNewAccount:boolean):boolean {
        let val:boolean = true;
        
        if ((this._salutation != 'Frau' && this._salutation != 'Herr') || (this.isEmpty(this._firstName)) || 
            (this.isEmpty(this._lastName)) || (this.isEmpty(this._streetName)) || (this.isEmpty(this._zipCode)) ||
            (this.isEmpty(this._cityName))) {
                val = false;
        }
        
        if (createNewAccount) {
            if ((this.isEmpty(this._userName)) || (this.isEmpty(this._password))) {
                val = false;
            }
        }
        return val;
    }
    
    isEmpty(value:string) {
        return (!value || value.trim().length == 0);
    }
    
    flush() {
        this._id = -1;
        this._salutation = "";
        this._firstName = "";
        this._lastName = "";
        this._streetName = "";
        this._zipCode = "";
        this._cityName = "";
        this._userName = "";
        this._password = "";
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
}
