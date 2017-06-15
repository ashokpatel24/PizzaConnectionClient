import {Component, OnInit} from '@angular/core';
import {SelectItem, Message} from 'primeng/primeng';
import {AccountCreatorService} from '../services/account-creator.service';
import {Account} from '../../../login/ts/models/account.model';
import {AuthService} from '../../../login/ts/services/auth.service';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector:       'accountcreator',
    styleUrls:      ['app/css/styles.css'],
    templateUrl:    'app/account-creator/templates/account-creator.html'
})

export class AccountCreatorComponent implements OnInit {
    
    msgs: Message[] = [];
    _createNewAccount:boolean = false;
    salutations:SelectItem[];
    
    ngOnInit() {
        
        this.salutations = [];
        this.salutations.push({label: 'Bitte wählen', value: ''});
        this.salutations.push({label: 'Frau', value: 'Frau'});
        this.salutations.push({label: 'Herr', value: 'Herr'});
    }
    
    constructor(private _accountService:AccountCreatorService, private _authService:AuthService, private _router:Router,
                private _route:ActivatedRoute, private _account:Account) {
        if (this._route.snapshot.params['createNewAccount'] == 'true') {
            this._createNewAccount = true;
        }
    }
    
    createAccount() {
        if (!this._account.validate(this._createNewAccount)) {
            this.msgs.push({severity: 'error', summary: 'Fehler!', detail: 'Bitte überprüfen Sie Ihre Eingabe!'});
        } else {
            this._accountService.createAccount(this._account).subscribe(res => {
                if (res.statusCode == 'OK') {
                    this.msgs.push({severity: 'info', summary:'Aktion erfolgreich!', detail:'Das Benutzerkonto wurde erstellt.'});
                    this._authService.login(this._account.userName, this._account.password).subscribe(res => {
                        if (res.authToken.success == true) {
                            this._account.id = res.id;
                            this._router.navigate(['confirmation']);
                        } else {
                            this.msgs.push({severity: 'error', summary: 'Fehler!', detail: 'Sie konnten nicht angemeldet werden.'});
                        }
                    })
                } else {
                    this.msgs.push({severity: 'error', summary: 'Fehler', detail: res.statusMessage});
                }
            });
        }
    }
    
    orderDirect() {
        if (!this._account.validate(this._createNewAccount)) {
            this.msgs.push({severity: 'error', summary: 'Fehler!', detail: 'Bitte überprüfen Sie ihre Eingabe!'});
        } else {
            this._router.navigate(['confirmation']);
        }
    }
    
    get createNewAccount():boolean {
        return this._createNewAccount;
    }
    
    get account():Account {
        return this._account;
    }
    
    set account(value:Account) {
        this._account = value;
    }
}