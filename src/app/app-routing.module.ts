import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormAuditComponent} from './components/group-audit/form-audit/form-audit.component';
import {FormSettingsComponent} from './components/group-settings/form-settings/form-settings.component';
import {AuthModule} from './auth/auth.module';
import {SignInComponent} from './auth/sign-in/sign-in.component';
import {HomepageComponent} from './main/homepage/homepage.component';

const routes: Routes = [
  {path: '', component: SignInComponent},
  {path: 'home', component: HomepageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
