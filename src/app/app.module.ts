import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { Routes, RouterModule } from '@angular/router';
import { MateriasComponent } from './materias/materias.component';
import { MateriaComponent } from './materia/materia.component';
import { MateriasService } from './services/materias.service';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';

const ROUTES: Routes = [
  {
    path: 'home',
    component: BodyComponent,
  },
  {
    path: 'directivas',
    component: DirectivasComponent,
  },
  {
    path: 'materias',
    component: MateriasComponent,
  },
  {
    ///redirecciona a home si se accede a una ruta que no existe o a la raiz
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    DirectivasComponent,
    MateriasComponent,
    MateriaComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(ROUTES), FormsModule],
  exports: [RouterModule],
  providers: [MateriasService],
  bootstrap: [AppComponent],
})
export class AppModule {}
