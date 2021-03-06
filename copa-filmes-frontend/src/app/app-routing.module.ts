import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelecaoFilmesComponent } from './components/selecao-filmes/selecao-filmes.component';
import { ResultadoFinalComponent } from './components/resultado-final/resultado-final.component';

const routes: Routes = [
  { path: '', component: SelecaoFilmesComponent },
  { path: 'selecao-filmes', component: SelecaoFilmesComponent },
  { path: 'resultado-final', component: ResultadoFinalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
