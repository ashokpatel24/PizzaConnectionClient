export class AuthToken {
    
    constructor(private _success:boolean, private _token:string) {}
    
    get success():boolean {
        return this._success;
    }
    
    get token():string {
        return this._token;
    }
    
    public static fromJson(data:any):AuthToken {
        return new AuthToken (data.success, data.token);
    }
}