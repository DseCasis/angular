import {Component, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsuariosComponent} from "./pages/usuarios/usuarios.component";
import {LoginComponent} from "./pages/login/login.component";
import {VigilanteGuard} from "./guards/vigilante.guard";


const routes: Routes = [
  { path: 'user/login', component: LoginComponent},
  { path: '', component: LoginComponent },
  { path: 'lista', component: UsuariosComponent, canActivate: [VigilanteGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
