import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';


const routes: Routes = [
  {path: '',component:LoginPageComponent },
  {path: '**', component:LoginPageComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule,ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
