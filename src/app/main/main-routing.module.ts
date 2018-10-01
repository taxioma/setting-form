import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {FormAuditComponent} from '../components/group-audit/form-audit/form-audit.component';
import {FormSettingsComponent} from '../components/group-settings/form-settings/form-settings.component';

const routes: Routes = [
  {path: 'home', component: HomepageComponent, children: [
      {path: 'settings', component: FormSettingsComponent},
      {path: 'audit', component: FormAuditComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
