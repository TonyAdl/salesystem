import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ItemManageComponent } from './item-manage/item-manage.component';
import { SellingComponent } from './selling/selling.component';
import { AddPointComponent } from './add-point/add-point.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemManageComponent,
    SellingComponent,
    AddPointComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
