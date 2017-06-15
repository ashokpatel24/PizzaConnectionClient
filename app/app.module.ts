import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {InputTextModule, ButtonModule, MenubarModule, DataGridModule, PanelModule, 
        DataListModule, GrowlModule, DataTableModule, DropdownModule} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {routing} from './app.routes';
import {PizzaListComponent} from './pizza/ts/components/pizzalist.component'
import {HttpModule, JsonpModule} from '@angular/http';
import {PizzaListService} from './pizza/ts/services/pizzalist.service';
import {PizzaDetailService} from './pizza/ts/services/pizzadetail.service';
import {PizzaDetailComponent} from './pizza/ts/components/pizzadetail.component';
import {CartComponent} from './cart/ts/components/cart.component';
import {CheckoutComponent} from './checkout/ts/components/checkout.component';
import {Cart} from './cart/ts/models/cart.model';
import {CheckoutService} from './checkout/ts/services/checkout.service';
import {OrderOptionComponent} from './order-option/ts/components/order-option.component';
import {LoginComponent} from './login/ts/components/login.component';
import {AuthService} from './login/ts/services/auth.service';
import {Account} from './login/ts/models/account.model';
import {ConfirmationComponent} from './confirmation/ts/components/confirmation.component'
import {AccountCreatorComponent} from './account-creator/ts/components/account-creator.component';
import {AccountCreatorService} from './account-creator/ts/services/account-creator.service';

@NgModule({
    imports:        [BrowserModule,
                     InputTextModule,
                     ButtonModule,
                     FormsModule,
                     BrowserAnimationsModule, 
                     routing,
                     MenubarModule, 
                     HttpModule,
                     JsonpModule,
                     DataGridModule,
                     PanelModule,
                     DataListModule,
                     GrowlModule,
                     DataTableModule,
                     DropdownModule],
    declarations:   [AppComponent,
                     PizzaListComponent,
                     PizzaDetailComponent,
                     CartComponent,
                     CheckoutComponent,
                     OrderOptionComponent,
                     LoginComponent,
                     ConfirmationComponent,
                     AccountCreatorComponent],
    bootstrap:      [AppComponent],
    providers:      [PizzaListService,
                     PizzaDetailService,
                     Cart,
                     CheckoutService,
                     AuthService,
                     Account,
                     AccountCreatorService]
})

export class AppModule {}