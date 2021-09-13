import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { SetupComponent } from './setup/setup.component';
import { TicketFormEditorComponent } from './ticket-form-editor/ticket-form-editor.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: MainComponent},
  { path: "ticket-form/edit", component: TicketFormEditorComponent},
  { path: "setup", component: SetupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
