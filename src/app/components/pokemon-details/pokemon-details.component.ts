import { Component, OnInit } from '@angular/core';
import {PokemonService} from "../../services/pokemon.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {IPokemon} from "../../interfaces/pokemon";

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {
  private pokemonId: Params;
  pokemon: IPokemon;
  loading: boolean;
  private error: boolean;

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute, private router: Router) {
    this.error = false;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.route.params.subscribe(pokemon => {
      if(pokemon.id) {
        this.pokemonId= pokemon.id;
        console.log(pokemon);
      } else {
        console.log('Nie ma takiego pokemona!');}
    });
    this.loading = true;
  }

  ngOnInit() {
    this.pokemonService.getPokemon(this.pokemonId).subscribe(
      (pokemon) => {
        console.log(pokemon);
        this.pokemon = pokemon;
        this.loading = false;
      }, (error2 => {
        console.log(error2);
        this.error = true;
      }))
  }

  changeCard(id: number) {
    console.log(id);
    if(id) {
      this.router.navigate([`/pokemons/${id}`]);
      this.ngOnInit();
    } else {
      console.log('Nie działa!');
    }
  }
}
