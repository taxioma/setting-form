import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';


import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
  MatFormFieldModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { FormAuditComponent } from './components/group-audit/form-audit/form-audit.component';
import { FormSettingsComponent } from './components/group-settings/form-settings/form-settings.component';
import { AppRoutingModule } from './app-routing.module';
import {LocalDataService} from './services/local-data.service';
import {AuditService} from './services/audit.service';
import {SettingsService} from './services/settings.service';
import { MessagesComponent } from './components/messages/messages.component';
import {MessageService} from './services/message.service';
import { DialogFormComponent } from './components/dialogs/dialog-form/dialog-form.component';
import { DialogMessageComponent } from './components/dialogs/dialog-message/dialog-message.component';
import {AuthModule} from './auth/auth.module';
import {AuthRoutingModule} from './auth/auth-routing.module';
import {MainModule} from './main/main.module';
import {MainRoutingModule} from './main/main-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    FormAuditComponent,
    FormSettingsComponent,
    MessagesComponent,
    DialogFormComponent,
    DialogMessageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    MatFormFieldModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule,
    HttpClientInMemoryWebApiModule.forRoot(
      LocalDataService, { dataEncapsulation: false }
    ),
    RouterModule,
    AppRoutingModule,
    AuthRoutingModule,
    AuthModule,
    MainRoutingModule,
    MainModule
  ],
  providers: [
    LocalDataService,
    AuditService,
    SettingsService,
    MessageService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogFormComponent,
    DialogMessageComponent,
    FormSettingsComponent
  ]
})
export class AppModule { }
