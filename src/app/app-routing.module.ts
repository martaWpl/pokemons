import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PokemonSearchComponent} from "./components/pokemon-search/pokemon-search.component";
import {PokemonDetailsComponent} from "./components/pokemon-details/pokemon-details.component";

const routes: Routes = [
  { path: 'pokemons', component: PokemonSearchComponent},
  { path: 'pokemons/:id', component: PokemonDetailsComponent},
  { path: '', redirectTo: 'pokemons', pathMatch: 'full'}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})]
})


export class AppRoutingModule {}
