import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './components/auth/auth.component';
import { SingInComponent } from './components/sing-in/sing-in.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ThankYouPopupComponent } from './components/thank-you-popup/thank-you-popup.component';


@NgModule({
  declarations: [
    AuthComponent,
    SingInComponent,
    SingUpComponent,
    TabsComponent,
    ThankYouPopupComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
