import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 

import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ServerService } from './server.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from 'ngx-bootstrap';
import { LoginComponent } from './login/login.component';
import { CaseComponent } from './case/case.component';
import { TreeModule } from 'angular-tree-component';
import { MaterializeModule } from 'ng2-materialize';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CasesComponent } from './cases/cases.component';
import { SettingsComponent } from './settings/settings.component';

import { AppRoutingModule }     from './app-routing.module';
import { AccountComponent } from './account/account.component';
import { DevicesComponent } from './devices/devices.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ImagesComponent } from './images/images.component';
import { DmComponent } from './dm/dm.component';
import { ImageComponent } from './image/image.component';
import { DeviceComponent } from './device/device.component';
import { FileComponent } from './file/file.component';
import { FilesComponent } from './files/files.component';
 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CaseComponent,
    DashboardComponent,
    CasesComponent,
    SettingsComponent,
    AccountComponent,
    DevicesComponent,
    ToolbarComponent,
    ImagesComponent,
    DmComponent,
    ImageComponent,
    DeviceComponent,
    FileComponent,
    FilesComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, BrowserAnimationsModule, TreeModule, MaterializeModule.forRoot(), AppRoutingModule, ReactiveFormsModule
    
  ],
  providers: [ServerService],
  bootstrap: [AppComponent],
  exports: [ ReactiveFormsModule ]
})
export class AppModule { }

