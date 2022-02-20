import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GoogleChartsModule } from 'angular-google-charts'; 
import { RequestInterceptor } from './shared/request-interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/account/signin/signin.component';
import { SignoutComponent } from './components/account/signout/signout.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/account/profile/profile.component';
import { ManagerComponent } from './components/account/manager/manager.component';
import { PasswordComponent } from './components/account/password/password.component';
import { MessageComponent } from './components/message/message.component';
import { MyListComponent as AssetMyListComponent } from './components/asset/my-list/my-list.component';
import { AllListComponent as AssetAllListComponent } from './components/asset/all-list/all-list.component';
import { PendingListComponent as AssetPendingListComponent } from './components/asset/pending-list/pending-list.component';
import { CreateComponent as AssetCreateComponent } from './components/asset/create/create.component';
import { EditComponent as AssetEditComponent } from './components/asset/edit/edit.component';
import { ListComponent } from './components/inventory/list/list.component';
import { CreateComponent as InventoryCreateComponent } from './components/inventory/create/create.component';
import { EditComponent as InventoryEditComponent } from './components/inventory/edit/edit.component';
import { CreateComponent } from './components/requisition/create/create.component';
import { HistoryComponent } from './components/requisition/history/history.component';
import { MyListComponent as RequisitionMyListComponent } from './components/requisition/my-list/my-list.component';
import { PendingListComponent as RequisitionPendingListComponent } from './components/requisition/pending-list/pending-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignoutComponent,
    HomeComponent,
    ProfileComponent,
    ManagerComponent,
    PasswordComponent,
    MessageComponent,
    AssetMyListComponent,
    AssetAllListComponent,
    AssetPendingListComponent,
    AssetCreateComponent,
    AssetEditComponent,
    ListComponent,
    InventoryCreateComponent,
    InventoryEditComponent,
    CreateComponent,
    HistoryComponent,
    RequisitionMyListComponent,
    RequisitionPendingListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    GoogleChartsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
