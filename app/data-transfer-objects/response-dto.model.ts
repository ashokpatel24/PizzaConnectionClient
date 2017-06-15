export class ResponseDto {
    
    private _statusCode:string;
    private _statusCodeValue:string;
    private _statusMessage:string;
    
    constructor(statusCode:string, statusCodeValue:string, statusMessage:string) {
        this._statusCode = statusCode;
        this._statusCodeValue = statusCodeValue;
        this._statusMessage = statusMessage;
    }
    
    set statusCode(value:string) {
        this._statusCode = value;
    }
    
    set statusCodeValue(value:string) {
        this._statusCodeValue = value;
    }
    
    get statusCode():string {
        return this._statusCode;
    }
    
    get statusCodeValue():string {
        return this._statusCodeValue;
    }
    
    get statusMessage():string {
        return this._statusMessage;
    }
    
    public static fromJson(data:any):ResponseDto {
        return new ResponseDto(data.statusCode, data.statusCodeValue, data.statusMessage);
    }
}